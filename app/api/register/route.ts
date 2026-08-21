import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, capitalSelected, clientCategory, attribution } = body;

    function sanitizeAttrField(val: unknown, maxLen = 255): string | undefined {
      if (typeof val !== "string") return undefined;
      const trimmed = val.trim().slice(0, maxLen);
      return trimmed.length > 0 ? trimmed : undefined;
    }

    const safeAttribution = {
      utm_source: sanitizeAttrField(attribution?.utm_source),
      utm_medium: sanitizeAttrField(attribution?.utm_medium),
      utm_campaign: sanitizeAttrField(attribution?.utm_campaign),
      utm_content: sanitizeAttrField(attribution?.utm_content),
      utm_term: sanitizeAttrField(attribution?.utm_term),
      fbclid: sanitizeAttrField(attribution?.fbclid, 512),
    };

    const wjParams = new URLSearchParams({
      api_key: process.env.WEBINARJAM_API_KEY!,
      webinar_id: process.env.WEBINARJAM_WEBINAR_ID!,
      schedule: process.env.WEBINARJAM_SCHEDULE_ID!,
      first_name: firstName,
      last_name: lastName ?? "",
      email: email,
      phone_country_code: "+48",
      phone: phone ?? "",
    });

    const wjResponse = await fetch("https://api.webinarjam.com/webinarjam/register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: wjParams.toString(),
    });

    const wjData = await wjResponse.json();

    if (wjData.status !== "success" || !wjData.user?.live_room_url) {
      console.error("WebinarJam registration failed:", wjData);
      throw new Error("WebinarJam registration failed.");
    }

    const uniqueJoinLink = wjData.user.live_room_url;

    // ============================================================================
    // 2. FAN OUT: Send data to GoHighLevel, MailerLite, and SMSAPI concurrently
    // ============================================================================
    const results = await Promise.allSettled([
      // --- A. GOHIGHLEVEL ---
      upsertGhlContact({
        firstName,
        lastName,
        email,
        phone,
        joinLink: uniqueJoinLink,
        capitalSelected,
        clientCategory,
        attribution: safeAttribution,
      }),

      // --- B. MAILERLITE ---
      fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email,
          fields: { name: firstName, last_name: lastName, phone, webinar_link: uniqueJoinLink },
          groups: [process.env.MAILERLITE_GROUP_ID],
        }),
      }),

      // --- C. SMSAPI ---
      sendSmsApiNotification(phone, firstName),
    ]);

    // Log any silent failures from the fan-out instead of swallowing them
    results.forEach((r, i) => {
      if (r.status === "rejected") console.error(`Fan-out call ${i} failed:`, r.reason);
    });

    // ============================================================================
    // 3. RESPOND TO CLIENT
    // ============================================================================
    return NextResponse.json({ success: true, joinLink: uniqueJoinLink });

  } catch (error) {
    console.error("Orchestrator Error:", error);
    return NextResponse.json(
      { success: false, message: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

async function upsertGhlContact({
  firstName,
  lastName,
  email,
  phone,
  joinLink,
  capitalSelected,
  clientCategory,
  attribution,
}: {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  joinLink: string;
  capitalSelected?: string;
  clientCategory?: string;
  attribution: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    fbclid?: string;
  };
}) {
  const headers = {
    "Authorization": `Bearer ${process.env.GHL_API_KEY}`,
    "Version": "2021-07-28",
    "Content-Type": "application/json",
  };

  // Upsert REPLACES tags rather than merging them, so look the contact
  // up first and preserve whatever tags they already have.
  let existingTags: string[] = [];
  const searchRes = await fetch(
    `https://services.leadconnectorhq.com/contacts/search?locationId=${process.env.GHL_LOCATION_ID}&query=${encodeURIComponent(email)}`,
    { headers }
  );
  
  const searchData = await searchRes.json();
  const existing = searchData?.contacts?.find(
    (c: any) => c.email?.toLowerCase() === email.toLowerCase()
  );
  
  if (existing) existingTags = existing.tags ?? [];

  // ============================================================================
  // OBLICZANIE CZASU I PRZYPISANIE TAGU ROUTE
  // ============================================================================
  const WORKSHOP_START = "2026-08-24T20:00:00+02:00";
  const targetDateMs = new Date(WORKSHOP_START).getTime();
  const currentMs = Date.now();
  
  // Oblicz różnicę w godzinach
  const hoursToStart = (targetDateMs - currentMs) / (1000 * 60 * 60);

  let routeTag = "";
  if (hoursToStart > 36) {
    routeTag = "A";
  } else if (hoursToStart >= 12 && hoursToStart <= 36) {
    routeTag = "B";
  } else if (hoursToStart >= 4 && hoursToStart < 12) {
    routeTag = "C";
  } else {
    // Wszystko poniżej 4 godzin (oraz po starcie webinaru)
    routeTag = "D";
  }

  // Budowa tablicy tagów z uwzględnieniem routera
  const tags = Array.from(new Set([...existingTags, "webinar-24sie", clientCategory, routeTag].filter(Boolean)));

  const customFields = [
    { id: process.env.GHL_CAPITAL_FIELD_ID, field_value: capitalSelected },
    { id: process.env.GHL_WJ_LINK_FIELD_ID, field_value: joinLink },
    { id: process.env.GHL_UTM_SOURCE_FIELD_ID, field_value: attribution.utm_source },
    { id: process.env.GHL_UTM_MEDIUM_FIELD_ID, field_value: attribution.utm_medium },
    { id: process.env.GHL_UTM_CAMPAIGN_FIELD_ID, field_value: attribution.utm_campaign },
    { id: process.env.GHL_UTM_CONTENT_FIELD_ID, field_value: attribution.utm_content },
    { id: process.env.GHL_UTM_TERM_FIELD_ID, field_value: attribution.utm_term },
    { id: process.env.GHL_FBCLID_FIELD_ID, field_value: attribution.fbclid },
  ].filter((f) => f.id && f.field_value);

  const upsertRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers,
    body: JSON.stringify({
      locationId: process.env.GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      tags,
      customFields,
    }),
  });

  const upsertData = await upsertRes.json();
  if (!upsertRes.ok) {
    console.error("GHL upsert failed:", upsertData);
    throw new Error("GHL contact upsert failed.");
  }
  
  return upsertData.contact;
}

async function sendSmsApiNotification(phone: string | undefined, firstName: string) {
  if (!phone) return;

  // Clean the phone number to ensure compatibility
  const cleanPhone = phone.replace(/\D/g, "");
  const message = `Cześć ${firstName}! Tu Bartek. Łap swój bilet. Zapisz: 24 Sierpnia, Poniedziałek 20:00. Pokażę Ci, jak zejść z sali i zbudować studio, które zarabia bez Ciebie. Do zobaczenia`;

  const params = new URLSearchParams({
    to: cleanPhone,
    message: message,
    format: "json",
    encoding: "utf-8",
  });

  const res = await fetch("https://api.smsapi.pl/sms.do", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SMSAPI_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`SMSAPI failed: ${errorData}`);
  }
  
  return res.json();
}
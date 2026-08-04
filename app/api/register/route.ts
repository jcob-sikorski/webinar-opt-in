import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, capitalSelected, clientCategory } = body;

    // ============================================================================
    // 1. WEBINARJAM: Register user and get the unique join link
    //    NOTE: this API is form-encoded, not JSON — and requires `schedule`.
    // ============================================================================
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
    // 2. FAN OUT: Send data to GoHighLevel and MailerLite concurrently
    // ============================================================================
    const results = await Promise.allSettled([
      // --- A. GOHIGHLEVEL ---
      fetch("https://services.leadconnectorhq.com/contacts/upsert", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GHL_API_KEY}`,
          "Version": "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationId: process.env.GHL_LOCATION_ID,
          firstName,
          lastName,
          email,
          phone,
          tags: ["webinar-14sie", clientCategory],
          customFields: [
            { id: process.env.GHL_CAPITAL_FIELD_ID, key: "capital_available", field_value: capitalSelected },
            { id: process.env.GHL_WJ_LINK_FIELD_ID, key: "webinar_join_link", field_value: uniqueJoinLink },
          ],
        }),
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
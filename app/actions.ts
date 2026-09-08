"use server";

import crypto from "crypto";
import { headers, cookies } from "next/headers";
import { buildFbcFromClickId } from "@/lib/attribution";

const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN!;
const PIXEL_ID = "965293539900334";

function hashData(data: string) {
  if (!data) return "";
  return crypto.createHash("sha256").update(data.toLowerCase().trim()).digest("hex");
}

export async function sendToMetaCAPI(formData: {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  clientCategory: string;
  sourceUrl: string;
  eventId: string;
  eventName?: string;
  attribution?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    fbclid?: string;
    captured_at?: string;
  };
}) {
  const headersList = headers();
  const cookieStore = cookies();

  // Oczyszczenie adresu IP - bierzemy wyłącznie pierwszy IP przed przecinkiem
  const rawIp = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "";
  const clientIp = rawIp.split(",")[0].trim();
  const clientUserAgent = headersList.get("user-agent") || "";

  // Pobranie ciasteczka _fbp dla maksymalnego Event Quality Score
  const fbp = cookieStore.get("_fbp")?.value;

  const attr = formData.attribution || {};
  const fbc = attr.fbclid
    ? buildFbcFromClickId(attr.fbclid, attr.captured_at)
    : cookieStore.get("_fbc")?.value;

  // Upewniamy się, że numer ma kod kraju 48
  let cleanPhone = formData.phone.replace(/\D/g, "");
  if (cleanPhone.length === 9) {
    cleanPhone = `48${cleanPhone}`;
  }

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: formData.eventName || "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: formData.sourceUrl,
        event_id: formData.eventId,
        user_data: {
          em: [hashData(formData.email)],
          ph: [hashData(cleanPhone)],
          fn: [hashData(formData.firstName)],
          ln: [hashData(formData.lastName)],
          country: [hashData("pl")],
          external_id: [hashData(formData.email)],
          client_ip_address: clientIp,
          client_user_agent: clientUserAgent,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
        },
        custom_data: {
          content_name: "Warsztat: Zloty Model Biznesowy",
          content_category: formData.clientCategory,
          ...(attr.utm_source ? { utm_source: attr.utm_source } : {}),
          ...(attr.utm_medium ? { utm_medium: attr.utm_medium } : {}),
          ...(attr.utm_campaign ? { utm_campaign: attr.utm_campaign } : {}),
          ...(attr.utm_content ? { utm_content: attr.utm_content } : {}),
          ...(attr.utm_term ? { utm_term: attr.utm_term } : {}),
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("CAPI Error:", error);
    return { success: false, error };
  }
}
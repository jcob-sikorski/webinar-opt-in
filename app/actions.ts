"use server";

import crypto from "crypto";
import { headers } from "next/headers";
import { buildFbcFromClickId } from "@/lib/attribution";

const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN!;
const PIXEL_ID = "965293539900334";
const TEST_CODE = process.env.META_CAPI_TEST_EVENT_CODE;

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
  eventName?: string; // <-- Add this
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
  const clientIp = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "";
  const clientUserAgent = headersList.get("user-agent") || "";

  const attr = formData.attribution || {};

  // Construct Meta's fbc parameter mathematically if fbclid exists
  const fbc = attr.fbclid ? buildFbcFromClickId(attr.fbclid, attr.captured_at) : undefined;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: formData.eventName || "Lead", // <-- Fallback to Lead
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: formData.sourceUrl,
        event_id: formData.eventId,
        user_data: {
          em: [hashData(formData.email)],
          ph: [hashData(formData.phone.replace(/\D/g, ""))],
          fn: [hashData(formData.firstName)],
          ln: [hashData(formData.lastName)],
          country: [hashData("pl")],
          external_id: [hashData(formData.email)],
          client_ip_address: clientIp,
          client_user_agent: clientUserAgent,
          // Inject the constructed click ID directly
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

  if (TEST_CODE) payload.test_event_code = TEST_CODE;

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
    console.log("CAPI Response:", data);
    return { success: true, data };
  } catch (error) {
    console.error("CAPI Error:", error);
    return { success: false, error };
  }
}
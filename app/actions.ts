"use server";

import crypto from "crypto";
import { headers } from "next/headers";

const ACCESS_TOKEN = "EAAGRCzL2wVMBSJcUQUUzyAx5qVizebZCaMoK8a94D373AYZBBqsYkmtaMLomcZA1Bqf1A2POx34HsqLZBQbyc7ZAUOMplR8upbqjZBBw53m4RlZCesFNxjidlMdJjQCA5ZBba2bnGXPx1D7jfyXdKJMUkZB5OoByDyJfE17JIa3gfPu8nXEXoRYwC7nRjit6zn3KtZCgZDZD";
const PIXEL_ID = "965293539900334";
const TEST_CODE = "TEST18447";

function hashData(data: string) {
  if (!data) return "";
  return crypto
    .createHash("sha256")
    .update(data.toLowerCase().trim())
    .digest("hex");
}

export async function sendToMetaCAPI(formData: {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  clientCategory: string;
  sourceUrl: string;
  eventId: string; // <-- ADD THIS
}) {
  const headersList = headers();
  const clientIp = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "";
  const clientUserAgent = headersList.get("user-agent") || "";

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: formData.sourceUrl,
        event_id: formData.eventId, // <-- ADD THIS FOR DEDUPLICATION
        user_data: {
          em: [hashData(formData.email)],
          ph: [hashData(formData.phone.replace(/\D/g, ""))],
          fn: [hashData(formData.firstName)],
          ln: [hashData(formData.lastName)],
          country: [hashData("pl")],
          external_id: [hashData(formData.email)],
          client_ip_address: clientIp,
          client_user_agent: clientUserAgent,
        },
        custom_data: {
          content_name: "Warsztat: Zloty Model Biznesowy",
          content_category: formData.clientCategory,
        },
      },
    ],
    test_event_code: TEST_CODE, 
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
    console.log("CAPI Response:", data); // Check your VS Code terminal for this!
    return { success: true, data };
  } catch (error) {
    console.error("CAPI Error:", error);
    return { success: false, error };
  }
}
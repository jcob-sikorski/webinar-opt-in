"use client";

import { useEffect, useRef } from "react";
import { sendToMetaCAPI } from "@/app/actions";
import { resolveAttribution } from "@/lib/attribution";

export function ApplicationSubmitPixel() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    const eventId = `evt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const attribution = resolveAttribution();

    // 1. Fire Client-Side Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "SubmitApplication", {}, { eventID: eventId });
    }

    // 2. Fire Server-Side CAPI
    // We send empty strings for contact info since we don't have it in the URL,
    // but Meta will still match using the IP Address, User Agent, and fbc (click ID)
    // which are handled automatically inside sendToMetaCAPI.
    sendToMetaCAPI({
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      clientCategory: "Aplikacja",
      sourceUrl: window.location.href,
      eventId,
      eventName: "SubmitApplication",
      attribution,
    });
  }, []);

  return null;
}
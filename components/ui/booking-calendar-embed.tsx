"use client";

import { useEffect } from "react";

/**
 * GoHighLevel booking widget.
 *
 * The GHL embed script (form_embed.js) finds the iframe by its `id` and
 * posts height updates to it, so the id must match the one GHL generated.
 * We load the script once on mount rather than with next/script so the
 * widget also re-initialises correctly on client-side navigation.
 */
const CALENDAR_ID = "zD1dHf8S7ZFYiY0HzIqY";
const IFRAME_ID = `${CALENDAR_ID}_1785782142189`;
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function BookingCalendarEmbed() {
  useEffect(() => {
    // Don't inject a second copy if the user navigates back to this page.
    if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-background">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
        allow="payment"
        scrolling="no"
        id={IFRAME_ID}
        title="Kalendarz rezerwacji rozmowy"
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        className="min-h-[700px] w-full"
      />
    </div>
  );
}
"use client";

import { useEffect } from "react";

const BOOKING_ID = "zD1dHf8S7ZFYiY0HzIqY_1788522650977";
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function BookingWidgetEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/booking/zD1dHf8S7ZFYiY0HzIqY"
      allow="payment"
      scrolling="no"
      id={BOOKING_ID}
      title="Booking Widget"
      style={{ width: "100%", border: "none", overflow: "hidden" }}
      className="w-full"
    />
  );
}
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const BOOKING_ID = "zD1dHf8S7ZFYiY0HzIqY_1788522650977";
const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/zD1dHf8S7ZFYiY0HzIqY";
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function BookingWidgetEmbed() {
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const timeout = window.setTimeout(() => {
      setShowFallback(true);
    }, 10_000);

    return () => window.clearTimeout(timeout);
  }, [isLoading, iframeKey]);

  const retry = () => {
    setIsLoading(true);
    setShowFallback(false);
    setIframeKey((key) => key + 1);
  };

  return (
    <div className="w-full">
      <Script
        id="leadconnector-booking-embed"
        src={EMBED_SCRIPT_SRC}
        strategy="afterInteractive"
        onError={() => setShowFallback(true)}
      />

      <div className="relative min-h-[760px] w-full">
        {isLoading && (
          <div className="absolute inset-x-0 top-8 text-center text-sm text-gray-500">
            Ładowanie kalendarza…
          </div>
        )}

        <iframe
          key={iframeKey}
          src={BOOKING_URL}
          id={BOOKING_ID}
          title="Kalendarz rezerwacji konsultacji"
          loading="eager"
          scrolling="yes"
          allow="payment *"
          onLoad={() => {
            setIsLoading(false);
            setShowFallback(false);
          }}
          onError={() => {
            setIsLoading(false);
            setShowFallback(true);
          }}
          className="relative w-full"
          style={{
            width: "100%",
            minHeight: "760px",
            border: "none",
            overflow: "auto",
          }}
        />
      </div>

      {showFallback && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
          <p className="text-sm text-amber-900">
            Kalendarz nie załadował się poprawnie.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={retry}
              className="rounded-lg bg-[#ef6b4a] px-4 py-2 text-sm font-semibold text-white"
            >
              Spróbuj ponownie
            </button>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900"
            >
              Otwórz kalendarz w nowej karcie
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
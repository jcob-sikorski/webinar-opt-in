import React from "react";
import Script from "next/script";

// NOTE: this uses next/script, which loads the GHL embed script once and
// safely across client-side navigations. If this project is NOT Next.js,
// replace the <Script .../> below with a plain
// <script src="https://link.msgsndr.com/js/form_embed.js" /> tag instead.

export function SpecialOfferForm() {
  return (
    <section
      id="aplikacja"
      className="relative w-full bg-white py-12 px-4 sm:px-6 selection:bg-orange-200 scroll-mt-6"
    >
      <div className="mx-auto flex w-full max-w-[23rem] sm:max-w-[27rem] flex-col items-center">
        {/* Section Pill */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
            OSTATNI KROK
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-[1.4rem] min-[390px]:text-[1.6rem] sm:text-[1.85rem] font-black leading-tight tracking-tight text-neutral-900">
          Wypełnij aplikację <br />
          <span className="text-[#ea580c]">poniżej</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.88rem] text-neutral-600 leading-[1.4]">
          Zajmie to mniej niż 2 minuty. Odezwiemy się do Ciebie tak szybko, jak to możliwe.
        </p>

        {/* GHL Form Embed */}
        <div className="mt-6 w-full min-h-[420px] overflow-hidden rounded-[1.5rem] border border-neutral-200/90 bg-white shadow-xs">
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/QF9ob7LMxJtTlCf8MKKd"
            style={{ border: "none", width: "100%" }}
            scrolling="no"
            id="QF9ob7LMxJtTlCf8MKKd"
            title="survey"
            data-cookie-consent="false"
          />
        </div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
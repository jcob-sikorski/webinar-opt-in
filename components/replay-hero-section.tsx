"use client";

import { ArrowRight, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";

export function ReplayHeroSection() {
  // Odliczanie do wygaśnięcia - 2 dni od teraz
  const EXPIRATION_DATE = "2026-08-24T23:59:59+02:00"; 

  return (
    <section className="relative bg-[#fcfbf9] px-5 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        
        {/* 1. Obietnica bez ściany tekstu */}
        <h1 className="mx-auto mb-6 max-w-[30ch] font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold italic leading-[1.1] tracking-[-0.02em] text-ink text-balance">
          Otwórz Kameralne Studio Treningu: <span className="text-[#ef6b4a]">200-600 Tys. Zł Zysku Właścicielskiego</span>
        </h1>

        {/* 2. Wideo na samej górze */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl ring-4 ring-white">
          {/* Tu podmień atrybut src na rzeczywisty link powtórki z WebinarJam */}
          <iframe
            src="https://event.webinarjam.com/replay/TWÓJ_LINK_DO_POWTORKI"
            className="h-full w-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* 3. Widoczne CTA pod wideo bez scrollowania */}
        <div className="mt-8 flex w-full flex-col items-center">
          <a
            href="#aplikacja"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            Zarezerwuj Rozmowę Strategiczną
            <ArrowRight className="h-6 w-6 shrink-0" />
          </a>
        </div>

        {/* 5. Licznik odliczający do wygaśnięcia */}
        <div className="mt-8 flex w-full max-w-lg flex-col items-center rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-red-600">
            <Clock className="h-5 w-5" />
            <p className="text-sm font-bold uppercase tracking-widest">
              Nagranie wygasa za:
            </p>
          </div>
          <CountdownTimer target={EXPIRATION_DATE} variant="boxes" />
        </div>

      </div>
    </section>
  );
}
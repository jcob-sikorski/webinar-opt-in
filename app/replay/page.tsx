"use client";

import React from "react";
import Image from "next/image";
import { CountdownTimer } from "@/components/countdown-timer";
import { LegalFooter } from "@/components/legal-footer";

export default function ReplayPage() {
  // Configuration variables
  const webinarReplayUrl =
    "https://event.webinarjam.com/5n8o79/go/replay/5n8o79a33ayyaqhv";
  const expirationDate = "2026-09-20T23:59:59+02:00";
  const expirationLabel = "Ograniczony czas transmisji";
  const ctaHref = "/aplikuj";
  const ctaText = "Odbierz ofertę specjalną";

  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-white font-sans selection:bg-orange-200">
      <main className="relative flex w-full flex-1 flex-col items-center overflow-x-hidden px-4 pt-5 pb-16 sm:px-6 sm:pt-8 sm:pb-20">
        <div className="mx-auto flex w-full max-w-[24rem] sm:max-w-[34rem] md:max-w-[44rem] lg:max-w-[48rem] flex-col items-center">

          {/* Expiration Scarcity Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-1.5 shadow-xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
            </span>
            <span className="text-[0.74rem] sm:text-[0.8rem] font-black uppercase tracking-[0.14em] text-[#7c2d12]">
              {expirationLabel}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-center text-[1.45rem] min-[390px]:text-[1.7rem] sm:text-[2.25rem] font-black leading-[1.18] tracking-tight text-neutral-900">
            Obejrzyj pełne nagranie <span className="text-[#ea580c]">szkolenia</span>
          </h1>

          <p className="mt-2 text-center text-[0.8rem] min-[390px]:text-[0.85rem] sm:text-[0.92rem] font-normal leading-[1.4] text-neutral-600">
            Przygotuj notatki i obejrzyj nagranie, zanim licznik dobiegnie końca, a dostęp zostanie zablokowany.
          </p>

          {/* Video Replay Card -> redirects to the WebinarJam replay in a new tab */}
          <div className="mt-5 w-full">
            <a
              href={webinarReplayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz nagranie szkolenia w nowej karcie"
              className="group relative flex aspect-[16/9] w-full overflow-hidden rounded-[16px] sm:rounded-[22px] border-[3.5px] sm:border-[4.5px] border-[#ea580c] bg-black shadow-[0_8px_32px_rgba(234,88,12,0.16)] transition-transform active:scale-[0.99]"
            >
              {/* Thumbnail image (add assets.cdn.filesafe.space to next.config.js images.remotePatterns) */}
              <Image
                src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6aad22e74091fa65e65ceeaa.png"
                alt="Miniatura nagrania szkolenia"
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover"
                priority
              />

              {/* Scarcity badge over the thumbnail */}
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[0.58rem] sm:text-[0.65rem] font-extrabold uppercase tracking-wider text-emerald-400 backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                POWTÓRKA TRANSMISJI
              </span>

              {/* Redirect / play button overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-7 w-7 sm:h-9 sm:w-9 text-[#ea580c]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[0.65rem] sm:text-[0.72rem] font-bold uppercase tracking-wide text-white backdrop-blur-xs">
                    Kliknij, aby obejrzeć nagranie
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Countdown Block */}
          <div className="mt-7 flex w-full flex-col items-center">
            <span className="text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.14em] text-[#ea580c]">
              DOSTĘP WYGASA ZA
            </span>
            <div className="mt-2.5 w-full max-w-[21.5rem] sm:max-w-[23.5rem]">
              <CountdownTimer target={expirationDate} />
            </div>
          </div>

          {/* Primary Action CTA */}
          {ctaHref && (
            <div className="mt-6 flex w-full flex-col items-center">
              <a
                href={ctaHref}
                className="group relative flex w-full max-w-[20rem] min-[390px]:max-w-[22.5rem] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#ea580c] to-[#c2410c] px-4 py-3 text-center shadow-md shadow-orange-500/20 transition-all hover:brightness-105 active:scale-[0.98]"
              >
                {/* Subtle top reflection gloss highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/20 to-transparent" />

                <span className="relative inline-flex items-center justify-center gap-1.5 text-[0.92rem] min-[390px]:text-[1rem] sm:text-[1.05rem] font-black uppercase tracking-tight text-white whitespace-nowrap">
                  <span>&raquo;</span>
                  <span>{ctaText}</span>
                  <span>&laquo;</span>
                </span>

                <span className="relative mt-0.5 text-[0.66rem] sm:text-[0.7rem] font-semibold text-orange-100/90 leading-tight">
                  Natychmiastowy dostęp &bull; 100% gwarancja satysfakcji
                </span>
              </a>

              <p className="mt-2 text-center text-[0.72rem] font-medium text-neutral-500">
                Specjalne bonusy do powtórki oraz promocyjna oferta są dostępne wyłącznie przez ograniczony czas.
              </p>
            </div>
          )}

        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
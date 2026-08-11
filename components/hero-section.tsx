"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import { useRegisterModal } from "@/components/register-modal-provider";

// 1. Updated the target time to August 24, 20:00 CEST (+02:00 timezone)
const WORKSHOP_START = "2026-08-24T20:00:00+02:00";

const BACKGROUND_IMAGES = [
  "https://ucarecdn.com/2fb844e9-c929-46c4-853d-057ef2ecad41/unnamed1.webp",
  "https://ucarecdn.com/809a2b47-1cc5-4904-98da-3be762c84c3d/unnamed4.webp",
  "https://ucarecdn.com/83b0cced-5d3d-49b3-a72f-8e3b84dd238d/hero3B0SDYn41.png",
  "https://ucarecdn.com/d0fdea78-79d5-4473-9904-135f9a631a28/unnamed5.webp",
  "https://ucarecdn.com/0bdbaba7-4a0b-4307-806e-c0798ed138d2/unnamed6.webp",
  "https://ucarecdn.com/3cb95e08-818a-470b-b52a-a9e5d9d37d8d/unnamed9.webp",
  "https://ucarecdn.com/66e40260-afc8-4537-af34-23fd5b7b061a/unnamed7.webp",
  "https://ucarecdn.com/fc087534-cf30-4219-b5db-fb96eaeb1758/unnamed6.webp",
  "https://ucarecdn.com/0d98b478-6d75-402d-bf66-65978394d26c/unnamed8.webp",
];

function BackgroundCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {BACKGROUND_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === activeIndex ? 1 : 0,
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const { openRegister } = useRegisterModal();

  return (
    <div className="relative bg-[#fcfbf9]">
      <BackgroundCarousel />
      <div className="absolute inset-0 bg-[#fcfbf9]/85" aria-hidden />

      <div className="relative border-b-2 border-[#ef6b4a] bg-black">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-5 py-3 text-center text-xs sm:flex-row sm:gap-3 sm:text-sm">
          <span className="flex items-center gap-2 text-white/90">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef6b4a]"
            />
            <span>
              <span className="font-semibold uppercase tracking-[0.06em] text-coral-bright">
                Data warsztatu:
              </span>{" "}
              {/* 2. Updated the display text to match the new date */}
              Poniedziałek, 24 Sierpnia @ 20:00
            </span>
          </span>
          <span aria-hidden className="hidden text-white/25 sm:inline">
            |
          </span>
          <span className="text-white/90">
            <span className="font-semibold uppercase tracking-[0.06em] text-white">
              Zaczyna się za:
            </span>{" "}
            <CountdownTimer target={WORKSHOP_START} variant="topbar" />
          </span>
        </div>
      </div>

      <section className="relative px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

          <p className="mx-auto max-w-[46rem] text-[0.7rem] font-bold uppercase leading-[1.7] tracking-[0.14em] text-coral text-balance sm:text-xs">
            Dla trenerów, którzy mają dość pracy od świtu do nocy, oraz właścicieli, dla których własne studio jest chaosem.
          </p>

          <h1 className="mx-auto mt-7 max-w-[30ch] font-display text-[clamp(2.1rem,5.6vw,4.25rem)] font-bold italic leading-[1.04] tracking-[-0.02em] text-ink text-balance [text-wrap:balance] sm:max-w-[28ch]">
            <span className="text-coral">Naucz Się Budować Studia</span>, Zarabiające{" "}
            <span className="whitespace-nowrap">Do 600&nbsp;tys. zł</span> Rocznie{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Bez Ciebie na Sali</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 z-0 h-[0.16em] translate-y-full bg-orange-500"
              />
            </span>
          </h1>

<div className="mx-auto mt-7 max-w-[38rem] text-pretty font-display text-[1.0625rem] italic leading-[1.65] text-gray-700 sm:text-lg">
<p>
    2-godzinny warsztat od praktyka, który:
    <span className="mt-2 block">
      <strong className="font-semibold text-gray-900">
        wygenerował 38M zł+
      </strong>{' '}
      sprzedając treningi personalne
    </span>
    <span className="mt-1 block">
      i otworzył{' '}
      <strong className="font-semibold text-gray-900">
        4 placówki Sportowe Przedmieście
      </strong>.
    </span>
  </p>
  
  <p className="mt-3">
    Pomógł otworzyć <strong className="font-semibold text-gray-900">ponad 40 placówek</strong> z:
  </p>
  
  <ul className="mt-2 flex flex-col gap-2 not-italic text-gray-900 sm:flex-row sm:gap-4">
    <li className="flex items-center gap-1.5">
      <span className="text-blue-600">✓</span>
      <strong className="font-semibold">40 tys. zł wkładu</strong>
    </li>
    <li className="flex items-center gap-1.5">
      <span className="text-blue-600">✓</span>
      <strong className="font-semibold">3 miesiącami spłaty</strong>
    </li>
    <li className="flex items-center gap-1.5">
      <span className="text-blue-600">✓</span>
      <strong className="font-semibold">2-3 trenerami</strong>
    </li>
  </ul>
</div>

          <div className="mx-auto mt-12 flex w-full max-w-2xl flex-col items-center rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-10">
            <p className="mb-6 text-center text-xl font-bold uppercase tracking-widest text-coral sm:text-2xl md:text-3xl">
              Warsztat zaczyna się za
            </p>
            <CountdownTimer target={WORKSHOP_START} variant="boxes" />
          </div>

          <div className="mt-12 flex w-full flex-col items-center">
            <Button
              size="lg"
              onClick={openRegister}
              className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-coral bg-coral-bright px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-coral-dark hover:bg-coral-dark active:border-coral-dark active:bg-coral-dark sm:text-2xl"
            >
              ZAREZERWUJ MIEJSCE — 0 zł
            </Button>

            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gray-500">
              <span>Model prowadzenia studio A—Z</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
              <span>Zbuduj biznes, który pracuje za Ciebie</span>
            </p>

            <div className="mt-14 w-full max-w-xl">
              <div className="flex items-center gap-5" aria-hidden>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gray-400">
                  Cel warsztatu
                </span>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
              </div>

              <div className="mt-6 text-pretty font-display text-lg italic leading-[1.6] text-gray-700 sm:text-xl">
                <p>
                  Na warsztacie dowiesz się, jak zarabiać do 600 tys. zł rocznie z{' '}
                  <span className="font-sans text-[0.95em] font-bold uppercase not-italic tracking-[0.06em] text-[#0a101d]">
                    modelem
                  </span>
                  , dzięki któremu:
                </p>
                
                <ul className="mt-4 flex flex-col gap-2.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a101d] font-bold">—</span>
                    <span>
                      Twoje studio jest poukładane i działa jak maszyna,
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a101d] font-bold">—</span>
                    <span>
                      Twój zespół dokładnie wie, co ma robić,
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a101d] font-bold">—</span>
                    <span>
                      a Twoim jedynym zadaniem jest wypełnianie raportów w weekend.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
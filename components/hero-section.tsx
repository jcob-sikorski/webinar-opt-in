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

const TESTIMONIAL = {
  name: "Ela Ziółkowska",
  figure: "47 000 zł / msc.",
  photo: (
    <img
      src="https://ucarecdn.com/5e1654aa-f4af-4f92-9816-565479e06d64/Screenshot20260803at10920AM.png"
      alt="Ela Ziółkowska"
      className="aspect-[3/4] w-full rounded-md object-cover shadow-sm"
    />
  ),
  description:
    "„To jest fajne, nie zostajemy sami przez to pół roku mentoringu. Cały czas jesteśmy zaopiekowani. Gdzieś tam właśnie Bartek i jego zespół, nie mam słów, żeby po prostu to opisać. To są ludzie z prawdziwego zdarzenia i którzy, chcesz czy nie chcesz, oni ci po prostu pomogą. Czy masz te wątpliwości, czy nie masz, prędzej czy później osiągniesz sukces.”",
};

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

      <div className="relative border-b-2 border-orange-500 bg-black">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-5 py-3 text-center text-xs sm:flex-row sm:gap-3 sm:text-sm">
          <span className="flex items-center gap-2 text-white/90">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
            />
            <span>
              <span className="font-semibold uppercase tracking-[0.06em] text-orange-400">
                Data warsztatu:
              </span>{" "}
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

      <section className="relative px-5 pt-4 pb-14 sm:px-6 sm:pt-6 sm:pb-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

          <img 
            src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/09cd3493-7d85-4c2a-8855-e34c95663611.png" 
            alt="Logo Dochodowe Studio" 
            className="mx-auto w-full max-w-[14rem] object-contain" 
          />

          <div className="mx-auto flex flex-col items-center space-y-4 text-center md:space-y-6">
            {/* Kicker / Wprowadzenie do problemu */}
            <span className="max-w-[55ch] text-balance text-sm font-bold uppercase tracking-widest text-gray-500 md:text-base">
              Masz Pełny Grafik, Ale Nie Możesz Przebić Kolejnego Progu Finansowego?
            </span>

            {/* Główny nagłówek z obietnicą */}
            <h1 className="mx-auto mt-2 max-w-[35ch] text-balance font-display text-[clamp(1.68rem,4vw,3.4rem)] font-bold italic leading-[1.15] tracking-[-0.02em] text-ink sm:max-w-[40ch]">
              <span className="text-green-600">Odkryj Model Butikowego Studia</span>, Dzięki Któremu Trenerzy Personalni Budują Biznes{" "}
              <span className="underline decoration-orange-500 decoration-[0.12em] underline-offset-[0.15em]">
                Zarabiający Wtedy Gdy Ich Nie Ma Na Sali
              </span>
            </h1>
          </div>

          {/* PODTYTUŁ (Subtitle) */}
          <div className="mx-auto mt-7 max-w-[38rem] text-pretty font-display text-[1.0625rem] italic leading-[1.65] text-gray-700 sm:text-lg">
            <p>
              Bezpłatny warsztat online od praktyka, który:
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

            <p className="mt-4 text-center">
              Nieważne, czy prowadzisz już studio, otwierasz za 3 miesiące, czy jeszcze nie wiesz kiedy —
              <strong className="font-semibold text-gray-900"> wychodzisz z gotowym modelem A-Z</strong>, do wdrożenia kiedy Ty zdecydujesz.
            </p>
          </div>

          {/* PRZYCISK ZAPISU */}
          <div className="mt-10 flex w-full flex-col items-center">
            <Button
              size="lg"
              onClick={openRegister}
              className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
            >
              Tak, chcę się zapisać
            </Button>

            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gray-500">
              <span>Model prowadzenia studio A—Z</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-orange-500" />
              <span>Zbuduj biznes, który pracuje za Ciebie</span>
            </p>
          </div>

          {/* ODLICZANIE */}
          <div className="mx-auto mt-14 flex w-full max-w-2xl flex-col items-center rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-10">
            <p className="mb-6 text-center text-xl font-bold uppercase tracking-widest text-green-600 sm:text-2xl md:text-3xl">
              Warsztat zaczyna się za
            </p>
            
            <CountdownTimer target={WORKSHOP_START} variant="boxes" />
            
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-orange-600 sm:text-base">
              🔥 Tylko 500 miejsc!
            </p>
          </div>

          {/* CEL WARSZTATU */}
          <div className="mt-14 flex w-full flex-col items-center">
            <div className="w-full max-w-xl">
              <div className="flex items-center gap-5" aria-hidden>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gray-400">
                  Cel warsztatu
                </span>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
              </div>

              <div className="mt-6 text-pretty font-display text-lg italic leading-[1.6] text-gray-700 sm:text-xl">
                <p className="mt-3 text-center">
                  Model, dzięki któremu studio jest poukładane i działa jak maszyna:
                </p>

                <ul className="mt-2 flex flex-col items-center justify-center gap-2 text-center not-italic text-gray-900 sm:flex-row sm:gap-4">
                  <li className="flex items-center gap-1.5">
                    <span className="text-green-600">✓</span>
                    <strong className="font-semibold">Twój zespół dokładnie wie, co ma robić</strong>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-green-600">✓</span>
                    <strong className="font-semibold">Studio działa sprawnie</strong>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-green-600">✓</span>
                    <strong className="font-semibold">Ty wypełniasz raporty w weekend</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL KARTA */}
          <div className="mx-auto mt-16 w-full max-w-3xl rounded-[2rem] bg-white p-6 shadow-xl sm:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8 text-left">
              <div className="w-32 shrink-0 sm:w-40">
                {TESTIMONIAL.photo}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base italic leading-relaxed text-gray-700 sm:text-lg">
                  {TESTIMONIAL.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-bold text-gray-900">
                    ~ {TESTIMONIAL.name}
                  </p>
                  <p className="mt-1.5 inline-block rounded-md bg-orange-100 px-3 py-1 text-sm font-bold tracking-wide text-orange-700">
                    Wynik: {TESTIMONIAL.figure}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAŁY ZIELONY PASEK ODZIELAJĄCY SEKCJE */}j 
      <div className="relative z-10 flex w-full items-center justify-center bg-green-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-white shadow-sm sm:text-base md:text-lg">
        Zaufało nam już ponad 40 osób w 2026!
      </div>
    </div>
  );
}
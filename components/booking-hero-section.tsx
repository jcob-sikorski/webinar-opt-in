"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";

const STATS = [
  { value: "6 mies.", label: "Pracy ze mną i zespołem" },
  { value: "4 studia", label: "Z których pochodzą procesy" },
  { value: "40+", label: "Wdrożeń systemu w rok" },
];

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

export function BookingHeroSection() {
  return (
    <div className="relative bg-[#fcfbf9]">
      <BackgroundCarousel />
      <div className="absolute inset-0 bg-[#fcfbf9]/85" aria-hidden />

      <section className="relative px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <p className="mx-auto max-w-[46rem] text-[0.7rem] font-bold uppercase leading-[1.7] tracking-[0.14em] text-coral text-balance sm:text-xs">
            Dla trenerów z pełnym grafikiem i właścicieli, bez których studio
            się zatrzymuje
          </p>

          <h1 className="mx-auto mt-7 max-w-[20ch] font-display text-[clamp(2rem,5.2vw,3.75rem)] font-bold italic leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Sprawdź, Czy{" "}
            <span className="text-coral">Dochodowe Studio</span> Jest Dla
            Ciebie
          </h1>

          <p className="mx-auto mt-7 max-w-[40rem] font-display text-[1.0625rem] italic leading-[1.65] text-gray-700 text-pretty sm:text-lg">
            Widziałeś już cały model na warsztacie. Ta rozmowa służy jednej
            rzeczy:{" "}
            <strong className="font-semibold text-gray-900">
              sprawdzeniu, czy Twoja konkretna sytuacja pasuje do tego
              programu
            </strong>{" "}
            — i czy jestem w stanie doprowadzić Cię tam, gdzie chcesz być za
            sześć miesięcy.{" "}
            <em>Jeśli nie pasuje, powiem Ci to wprost.</em>
          </p>

          <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-line bg-background px-2 py-5 text-center sm:px-4 sm:py-6"
              >
                <p className="text-lg font-extrabold text-coral sm:text-[1.6rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.625rem] font-medium uppercase leading-snug tracking-[0.07em] text-ink-subtle sm:text-[0.6875rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#kalendarz"
            className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-coral bg-coral-bright px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-coral-dark hover:bg-coral-dark sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6" />
            Wybierz termin rozmowy
          </a>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gray-500">
            <span>Rozmowa bezpłatna</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-coral" />
            <span>Ok. 45 minut</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-coral" />
            <span>Bez presji</span>
          </p>
        </div>
      </section>
    </div>
  );
}
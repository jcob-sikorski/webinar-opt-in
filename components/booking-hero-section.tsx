"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";

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
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Rozmowa kwalifikacyjna 1:1
          </p>

          <h1 className="mx-auto mt-4 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Sprawdź, czy program{" "}
            <span className="text-[#ef6b4a]">Dochodowe Studio</span> pasuje do Twojej sytuacji
          </h1>

          <div className="mx-auto mt-7 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
            <p>
              Widziałeś już cały model na warsztacie.{" "}
              <strong className="font-semibold not-italic text-gray-900">
                Teraz nie musisz podejmować decyzji na podstawie ogólnych przykładów.
              </strong>{" "}
              Ta rozmowa służy temu, by przełożyć cały proces na Twoje miasto, Twój budżet i Twoją obecną sytuację.
            </p>

            <p>
              Pracujemy z trenerami, którzy mają pełny grafik i doszli do momentu, w którym{" "}
              <em className="text-[#ef6b4a]">kolejne godziny na sali nie rozwiązują już problemu</em>, oraz z właścicielami studiów, którzy wciąż są jedynym trybikiem zamykającym każdą sprzedaż.
            </p>

            <p>
              Przez około 45 minut zdiagnozujemy Twoje wąskie gardło. Jeśli zobaczę, że możemy Ci pomóc — pokażę plan działania. Jeśli nie —{" "}
              <strong className="font-semibold not-italic text-gray-900">
                powiem Ci to wprost, bez wciskania czegokolwiek na siłę.
              </strong>
            </p>
          </div>

          <div className="mt-10 border-y border-[#d6d6d6] py-6 text-center">
            <p className="font-display text-base font-semibold italic text-gray-900 sm:text-lg">
              Model powstał na bazie <span className="text-[#ef6b4a]">6 miesięcy mentoringu</span>, procesów z{" "}
              <span className="text-[#ef6b4a]">4 własnych placówek</span> oraz ponad{" "}
              <span className="text-[#ef6b4a]">40 wdrożeń</span> w całej Polsce.
            </p>
          </div>

          <div className="mt-10 flex w-full flex-col items-center">
            <a
              href="#kalendarz"
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
            >
              <CalendarCheck className="h-6 w-6 shrink-0" />
              Wybierz termin rozmowy
            </a>

            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
              <span>Rozmowa bezpłatna</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
              <span>Ok. 45 minut</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
              <span>Zero presji</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
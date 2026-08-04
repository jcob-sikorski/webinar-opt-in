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
            Dla trenerów, którzy chcą skończyć ze sprzedawaniem godzin i przebić sufit oraz właścicieli, których studio zamieniło ich życie w chaos
          </p>

          <h1 className="mx-auto mt-7 max-w-[22ch] font-display text-[clamp(2.1rem,5.6vw,4.25rem)] font-bold italic leading-[1.04] tracking-[-0.02em] text-ink text-balance [text-wrap:balance] sm:max-w-[20ch]">
            Jak <span className="text-coral">Zbudować Studio</span> Generujące{" "}
            <span className="whitespace-nowrap">600 000&nbsp;tys. zł</span>
            — Bez Franczyzy i Milionowego Kredytu
          </h1>

          <p className="mx-auto mt-7 max-w-[38rem] font-display text-[1.0625rem] italic leading-[1.65] text-gray-700 text-pretty sm:text-lg">
            2 godzinny warsztat od gościa, który{" "}
            <strong className="font-semibold text-gray-900">
              wygenerował 38M zł+
            </strong>{" "}
            sprzedając treningi personalne — otwierając przy tym{" "}
            <strong className="font-semibold text-gray-900">
              4 placówki Sportowe Przedmieście
            </strong>{" "}
            — gdzie omówię dokładnie framework, który nazywam &quot;Złotym
            Modelem Biznesowym.&quot;{" "}
            <span className="text-gray-900">
              <strong className="font-semibold">37 otwartych placówek.</strong>{" "}
              <strong className="font-semibold">35 tys. zł wkładu własnego w lokal.</strong>{" "}
              <strong className="font-semibold">3 miesiące spłaty.</strong>{" "}
              <strong className="font-semibold">2 trenerów.</strong>
            </span>
          </p>

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
              <span>Nagranie na lata</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
              <span>Dokładny model otworzenia studio</span>
            </p>

            <div className="mt-14 w-full max-w-xl">
              <div className="flex items-center gap-5" aria-hidden>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gray-400">
                  Obietnica
                </span>
                <span className="h-px flex-1 bg-[#0a101d]/10" />
              </div>

              <p className="mt-6 font-display text-lg italic leading-[1.6] text-gray-700 text-pretty sm:text-xl">
                Wyjdziesz z tego warsztatu z{" "}
                <span className="font-sans text-[0.95em] font-bold uppercase not-italic tracking-[0.06em] text-[#0a101d]">
                  modelem
                </span>{" "}
                — dzięki któremu Twoje studio może zarabiać więcej z tego samego
                grafiku, bez dokładania ani jednej Twojej godziny na sali.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DashboardStrip {
  highlight: string;
  subtext: string;
  imageSrc: string;
  alt: string;
  link?: string;
}

const DASHBOARD_STRIPS: DashboardStrip[] = [
  {
    highlight: "2 Studia PG Power",
    subtext: "Jak Patryk zaryzykował wdrożenie 'sztywnych' procedur i zyskał pełną niezależność od grafiku sali",
    imageSrc: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/43d3825b-1a86-400c-943d-7e52e840e2cf.png",
    alt: "Patryk Grzemski PG Power Case Study",
  },
  {
    highlight: "20.000 zł Zysku z 40 m²",
    subtext: "Sekret Piotra na upchnięcie 2 trenerów w mikroskopijnym lokalu i generowanie marży zadowalającej 'dużych' graczy",
    imageSrc: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/be616acc-e195-471f-a051-c329bdc6b45a.png",
    alt: "Piotr Smulczyk wywiad po 6 miesiącach",
  },
  {
    highlight: "Ucieczka z Sieciówki",
    subtext: "Jak Igor pokonał finansowy sufit na etacie i zbudował własne, samodzielnie funkcjonujące studio",
    imageSrc: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/02059f6c-c119-4ed3-a480-01bac9d1d210.png",
    alt: "Igor Czobot wywiad z otwarcia Kobiecy Portal",
  },
  {
    highlight: "Architektura Marży od Startu",
    subtext: "System sprzedaży Adama, który zagwarantował mu rentowność jeszcze zanim otworzył drzwi swojego studia",
    imageSrc: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6aa03671a08d19d927525e54.png",
    alt: "Adam Stołowski STO POWER",
  },
  {
    highlight: "30.000 zł Zysku Miesięcznie",
    subtext: "Model Adriana i Konrada na całkowite oddelegowanie studia do 7 trenerów bez utraty jakości obsługi",
    imageSrc: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6aa037d3641597c752b0cb8a.jpeg",
    alt: "Stillmotion Tychy Adrian i Konrad Case Study",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="w-full bg-white pt-1 pb-12 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">

        {/* Top Highlighter Header */}
        <div className="inline-block bg-[#faea75] px-5 min-[390px]:px-6 py-1 text-center">
          <h2 className="text-[1.2rem] min-[390px]:text-[1.35rem] sm:text-[1.5rem] font-bold leading-tight tracking-tight text-black">
            Takie tam{" "}
            <span className="underline decoration-black decoration-[2px] underline-offset-[2px]">
              rezultaty poniżej..
            </span>
          </h2>
        </div>

        {/* ================= CASE STUDY 1 ================= */}
        <div className="mt-6 flex w-full flex-col items-center">
          <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-neutral-900">
            Jak Eryk przestał być „zakładnikiem” własnego studia i zautomatyzował pracę 4 trenerów, uwalniając czas dla rodziny.
          </h3>

          <div className="relative mt-2 w-full overflow-hidden rounded-[1.1rem] border border-neutral-200/80 shadow-xs">
            <Image
              src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6aa034478de363112b5458c8.jpeg"
              alt="Eryk Witecki Gym Clinic"
              width={800}
              height={450}
              className="h-auto w-full block"
            />
          </div>

          <a
            href="https://www.youtube.com/watch?v=oy-C_Nn6aW0&t=1s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center text-[1.05rem] min-[390px]:text-[1.18rem] font-bold tracking-tight text-neutral-900 hover:text-[#ea580c] transition-colors"
          >
            40k Zysku/Mies. • Otworzył Drugie Studio
          </a>
        </div>

        {/* ================= CASE STUDY 2 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
          <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-neutral-900">
            Strategia Joanny na porzucenie „zajechania” na sali i przekazanie klientów 3 trenerom bez fochów i rezygnacji.
          </h3>

          <div className="relative mt-2 w-full overflow-hidden rounded-[1.1rem] border border-neutral-200/80 shadow-xs">
            <Image
              src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6aa032fa641597c752b045d3.png"
              alt="Joanna Wójcik Kraków"
              width={800}
              height={450}
              className="h-auto w-full block"
            />
          </div>

          <a
            href="https://www.youtube.com/watch?v=CNuw67TbZhA&t=2s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center text-[1.05rem] min-[390px]:text-[1.18rem] font-bold tracking-tight text-neutral-900 hover:text-[#ea580c] transition-colors"
          >
            54k Zysku/Mies. • W 90% oddelegowane
          </a>
        </div>

        {/* ================= CASE STUDY 3 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
          <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-neutral-900">
            Od pracy na 3 etaty do własnego lokalu – jak Karolina generuje 40 tys. zł zysku bez wydawania złotówki na płatne reklamy.
          </h3>

          <div className="relative mt-2 w-full overflow-hidden rounded-[1.25rem] border border-neutral-200/80 shadow-xs">
            <Image
              src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/15316c21-f546-4d32-8b2e-408a797c0f10.png"
              alt="Karolina Owczarzak Trenerka K"
              width={800}
              height={450}
              className="h-auto w-full block"
            />
          </div>

          <p className="mt-2 text-center text-[1.05rem] min-[390px]:text-[1.18rem] font-bold tracking-tight text-neutral-900">
            40 tys. zysku mies. • 0 zł na reklamy • 3 osoby w zespole
          </p>
        </div>

        {/* ================= CASE STUDY 4 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
          <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-neutral-900">
            Metoda Klaudii na zarządzanie studiem z poziomu laptopa (podczas podróży) i wyciąganie 40–50k „na rękę”.
          </h3>

          <div className="relative mt-2 w-full overflow-hidden rounded-[1.25rem] border border-neutral-200/80 shadow-xs">
            <Image
              src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/ba4a3bef-891e-465e-a44f-7a2752211efd.png"
              alt="Klaudia Ostrowska Fitko Toruń"
              width={800}
              height={450}
              className="h-auto w-full block"
            />
          </div>

          <p className="mt-2 text-center text-[1.05rem] min-[390px]:text-[1.18rem] font-bold tracking-tight text-neutral-900">
            40–50 tys. na rękę • 3 trenerki w zespole • Biznes prowadzony z laptopa
          </p>
        </div>
 
        {/* ================= CASE STUDY 5 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
          <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-neutral-900">
            Jak Krzysztof zbudował maszynę zatrudniającą 7 trenerów, która zarabia pieniądze, gdy on wyjeżdża na obozy i walki.
          </h3>

          <div className="relative mt-2 w-full overflow-hidden rounded-[1.25rem] border border-neutral-200/80 shadow-xs">
            <Image
              src="https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/cdcc5416-c085-474b-aae1-5225c2e61570.png"
              alt="Krzysztof Mariańczyk Champion Katowice"
              width={800}
              height={450}
              className="h-auto w-full block"
            />
          </div>

          <p className="mt-2 text-center text-[1.05rem] min-[390px]:text-[1.18rem] font-bold tracking-tight text-neutral-900">
            7 Osób w Zespole • Czas na obozy i walki
          </p>
        </div>

        {/* ================= DASHBOARD STRIPS LIST ================= */}
        <div className="mt-9 flex w-full flex-col gap-6">
          {DASHBOARD_STRIPS.map((strip) => (
            <a
              key={strip.highlight}
              href={strip.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col items-center transition-opacity hover:opacity-95"
            >
              <h4 className="text-center text-[1.15rem] min-[390px]:text-[1.25rem] leading-tight tracking-tight text-neutral-900">
                <span className="font-extrabold text-[#ea580c] group-hover:underline">
                  {strip.highlight}
                </span>{" "}
                <span className="block text-[0.82rem] font-normal text-neutral-600 mt-0.5">
                  {strip.subtext}
                </span>
              </h4>

              <div className="relative mt-2 w-full overflow-hidden rounded-[0.85rem] border border-neutral-200/80 shadow-xs">
                <Image
                  src={strip.imageSrc}
                  alt={strip.alt}
                  width={800}
                  height={450}
                  className="h-auto w-full block transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Highlighter Banner */}
        <div className="mt-8 sm:mt-10 flex w-full justify-center">
          <div className="w-[90%] sm:w-[85%] bg-[#faea75] py-1 sm:py-1.5 text-center">
            <h3 className="text-[1.18rem] min-[390px]:text-[1.32rem] sm:text-[1.48rem] font-bold leading-tight tracking-tight text-neutral-950">
              I{" "}
              <span className="underline decoration-neutral-950 decoration-[1.8px] sm:decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]">
                wielu innych właścicieli...
              </span>
            </h3>
          </div>
        </div>

        {/* Social Proof Context Subtext */}
        <p className="mt-2 text-center text-[0.78rem] sm:text-[0.84rem] text-neutral-500 max-w-[21rem]">
          M.in. Adrian i Konrad (Stillmotion Tychy: 70 podopiecznych, 7 trenerów, 30k dochodu bez sprzedaży) czy Klaudia Ostrowska (Fitko Toruń: 40–50k na rękę, zarządzanie z podróży).
        </p>

        {/* CTA Button replacing onClick scroll with Dialog */}
        <div className="mt-6 flex w-full justify-center">
          <Button
            type="button"
            onClick={() => {
              const el = document.getElementById("zapis");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex !h-auto w-full max-w-[22rem] sm:max-w-[28rem] flex-col items-center justify-center gap-1 rounded-xl !border-none !bg-[#ea580c] !px-6 !py-3.5 shadow-sm transition-colors hover:!bg-[#c2410c] active:scale-[0.99]"
          >
            <span className="text-base font-bold uppercase tracking-normal text-white sm:text-[1.1rem] leading-snug text-center">
              REZERWUJĘ MOJE MIEJSCE
            </span>
            <span className="text-xs font-medium text-orange-100 leading-none text-center">
              100% Darmowy Dostęp Live
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
}
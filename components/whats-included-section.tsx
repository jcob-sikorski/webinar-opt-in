import React from "react";

interface PlaybookBonus {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PLAYBOOK_PILLARS: PlaybookBonus[] = [
  {
    title: "Standard bezpiecznego oddawania podopiecznych",
    description:
      "Procedura wdrożenia trenera i przekazania klientów krok po kroku — bez fochów, spadku jakości i strachu, że klient odejdzie.",
    icon: (
      <svg
        className="h-5 w-5 text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: "Skrypt konsultacji diagnostycznej & Oferta 90 Dni",
    description:
      "Gotowa struktura rozmowy zamykającej procesy transformacyjne za 5 000–12 000 zł zamiast wiecznego licytowania się na cenę za pojedynczą godzinę.",
    icon: (
      <svg
        className="h-5 w-5 text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M8 2v4M16 2v4M3 9h18" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Kalkulator marży i model semi-personal",
    description:
      "Arkusz wyliczania stawek dla zespołu i ekonomii sali, który podnosi przychód z jednej godziny do 300–580 zł przy zachowaniu 50–80% marży.",
    icon: (
      <svg
        className="h-5 w-5 text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
];

export function WhatsIncludedSection() {
  return (
    <section className="w-full bg-white pt-2 pb-8 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Main Playbook Card */}
        <div className="relative w-full rounded-[1.45rem] border border-[#fed7aa] bg-white p-4 sm:p-5 shadow-xs">
          
          {/* Subtle Accent Edge */}
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-[1.45rem] border-[3px] border-[#ea580c]"
            style={{
              WebkitMaskImage: "linear-gradient(to right, #000 24px, transparent 40px)",
              maskImage: "linear-gradient(to right, #000 24px, transparent 40px)",
            }}
          />

          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#fed7aa] bg-[#fff7ed]">
              <svg
                className="h-5 w-5 text-[#ea580c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <polyline points="8.5 12 11 14.5 15.5 9.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#ea580c]">
                Bonus dla uczestników na żywo
              </span>
              <h3 className="text-[1.02rem] min-[390px]:text-[1.08rem] font-extrabold text-neutral-900 leading-tight tracking-tight">
                Playbook Dochodowego Studia
              </h3>
            </div>
          </div>

          <p className="mt-2.5 text-[0.8rem] sm:text-[0.84rem] text-neutral-600 leading-[1.4]">
            Kompletne narzędzia operacyjne ze stacjonarnych placówek, gotowe do natychmiastowego wdrożenia w Twoim lokalu:
          </p>

          {/* 3 Core Pillars */}
          <div className="mt-4 space-y-3">
            {PLAYBOOK_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-3 rounded-xl border border-[#fed7aa]/70 bg-[#fffaf5] p-3"
              >
                <div className="mt-0.5 shrink-0">{pillar.icon}</div>
                <div className="flex flex-col">
                  <h4 className="text-[0.86rem] min-[390px]:text-[0.9rem] font-bold text-neutral-900 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-[0.76rem] min-[390px]:text-[0.79rem] text-neutral-600 leading-[1.38]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note inside card */}
          <p className="mt-3.5 text-center text-[0.72rem] font-medium text-neutral-500">
            Dostępny do pobrania bez opłat wyłącznie dla obecnych na transmisji 17 września.
          </p>
        </div>

      </div>
    </section>
  );
}
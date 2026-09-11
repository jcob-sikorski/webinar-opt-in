import React from "react";

interface PlaybookBonus {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
}

const PLAYBOOK_PILLARS: PlaybookBonus[] = [
  {
    title: "Standard bezpiecznego oddawania podopiecznych",
    description:
      "Procedura wdrożenia trenera i przekazania klientów krok po kroku — bez fochów, spadku jakości i strachu, że klient odejdzie.",
    value: "Wycena: 490 zł",
    icon: (
      <svg className="h-5 w-5 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: "Skrypt konsultacji diagnostycznej & Oferta 90 Dni",
    description:
      "Gotowa struktura rozmowy zamykającej procesy transformacyjne za 5 000 – 12 000 zł zamiast wiecznego licytowania się na cenę za godzinę.",
    value: "Wycena: 650 zł",
    icon: (
      <svg className="h-5 w-5 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    value: "Wycena: 350 zł",
    icon: (
      <svg className="h-5 w-5 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="w-full bg-[#fffaf5] border-y border-[#fed7aa]/50 py-12 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[24rem] sm:max-w-[28rem] flex-col items-center">
        
        {/* Odznaka limitowanego bonusu */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#fed7aa] bg-white px-3.5 py-1 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ea580c]" />
          </span>
          <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#7c2d12]">
            PREZENT ZA OBECNOŚĆ NA ŻYWO
          </span>
        </div>

        <h2 className="mt-3 text-center text-[1.45rem] sm:text-[1.75rem] font-black tracking-tight text-neutral-900 leading-tight">
          Playbook Dochodowego Studia <br />
          <span className="text-[#ea580c]">(Łączna Wartość: 1 490 zł — Gratis)</span>
        </h2>

        <p className="mt-2 text-center text-[0.82rem] sm:text-[0.88rem] text-neutral-600 leading-relaxed">
          Każdy uczestnik obecny na transmisji 17 września otrzyma komplet plików, arkuszy kalkulacyjnych i procedur gotowych do wdrożenia następnego dnia:
        </p>

        {/* Lista Bonusów */}
        <div className="mt-6 w-full space-y-3">
          {PLAYBOOK_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-2 rounded-2xl border border-[#fed7aa]/80 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#ea580c]">
                    {pillar.icon}
                  </div>
                  <h3 className="text-[0.92rem] font-bold text-neutral-900 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded bg-orange-100/70 px-2 py-0.5 text-[0.65rem] font-extrabold text-[#c2410c]">
                  {pillar.value}
                </span>
              </div>
              <p className="text-[0.78rem] text-neutral-600 leading-relaxed pl-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-center">
          <p className="text-[0.74rem] font-semibold text-amber-900 leading-tight">
            ⚠️ <strong>Ważne:</strong> Pliki zostaną udostępnione na czacie na żywo wyłącznie osobom biorącym udział w warsztacie. Nie wysyłamy ich w powtórkach.
          </p>
        </div>
      </div>
    </section>
  );
}
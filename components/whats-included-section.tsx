import React from "react";

interface InclusionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const INCLUSIONS: InclusionItem[] = [
  {
    title: "00 — Ile kosztują złe decyzje",
    description:
      "Policzysz, ile może kosztować zły lokal, brak procesu, słaba sprzedaż albo model oparty wyłącznie na Twoich godzinach.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "04 — Nie sprzedajesz treningu",
    description:
      "Zobaczysz, jak przestać konkurować ceną za godzinę i zacząć sprzedawać konkretną zmianę, którą klient chce osiągnąć.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "05 — Program 90 dni",
    description:
      "Ułożysz ofertę, w której klient kupuje konkretny proces zamiast kolejnego pakietu treningów, a po 90 dniach masz naturalną drogę do kontynuacji.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="17" rx="4" />
        <path d="M8 2v4M16 2v4M3 9h18" />
      </svg>
    ),
  },
  {
    title: "06 — Semi-personal to nie grupówki",
    description:
      "Zobaczysz, jak wykorzystać semi-personal, żeby klient został z Tobą na lata, a jedna godzina na sali zarabiała więcej.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c.5-3.2 2.1-5 5-5s4.5 1.8 5 5" />
        <path d="M11 20c.5-3.2 2.1-5 5-5 2.9 0 4.5 1.8 5 5" />
      </svg>
    ),
  },
  {
    title: "11 — Konsultacja, która sprzedaje",
    description:
      "Dostaniesz strukturę rozmowy, treningu i domknięcia, dzięki której klient rozumie, dlaczego Twój proces jest dla niego, zanim usłyszy cenę.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5h16v11H7l-3 3V5Z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
  {
    title: "12 — Pierwszy trener",
    description:
      "Przejdziesz przez proces wdrożenia trenera krok po kroku, żeby nie wrzucać nowej osoby od razu na głęboką wodę i później poprawiać wszystko po niej.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c.7-4.2 3-6.5 7-6.5s6.3 2.3 7 6.5" />
      </svg>
    ),
  },
  {
    title: "13 — Metodyka miejsca",
    description:
      "Ustalisz standard tego, jak wygląda trening i obsługa klienta, żeby każdy trener nie robił wszystkiego po swojemu.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "14 — Jak oddawać klientów",
    description:
      "Zobaczysz, jak stopniowo przekazywać swoich podopiecznych trenerom, bez sytuacji, w której klient czuje, że został Ci zabrany.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
        <path d="M5 6v12" />
      </svg>
    ),
  },
  {
    title: "16 — 21 brutalnych prawd",
    description:
      "Bez owijania sprawdzisz, które rzeczy właściciele studiów najczęściej robią źle i dlaczego większy lokal, więcej sprzętu czy więcej leadów nie zawsze rozwiązuje problem.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 4 7v5c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V7l-8-4Z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Quick Reference — system w pigułce",
    description:
      "Cały model masz w jednym miejscu: model, oferta, marketing, sprzedaż, retencja, zespół i metodyka — razem z planem działania na 90 dni.",
    icon: (
      <svg
        className="h-[1.15rem] w-[1.15rem] text-[#ea580c]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <polyline points="8.5 12 11 14.5 15.5 9.5" />
      </svg>
    ),
  },
];

export function WhatsIncludedSection() {
  return (
    <section className="w-full bg-white pt-2 pb-10 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Top Highlight Card: Warm peach accents & orange ribbon */}
        <div className="relative w-full rounded-[1.35rem] border border-[#fed7aa]/80 bg-white p-3.5 sm:p-4 shadow-xs">
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-[1.35rem] border-[3px] border-[#ea580c]"
            style={{
              WebkitMaskImage: "linear-gradient(to right, #000 24px, transparent 38px)",
              maskImage: "linear-gradient(to right, #000 24px, transparent 38px)",
            }}
          />

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#fed7aa] bg-[#fff7ed]">
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

          {/* Wariant 2: Ścieżka od zera do samobieżnego studia */}
          <div className="flex flex-col">
            <h3 className="text-[0.92rem] min-[390px]:text-[0.97rem] font-bold text-neutral-800 leading-tight tracking-tight">
              Nagroda? Playbook Dochodowego Studia
            </h3>
            <p className="mt-1 text-[0.8rem] sm:text-[0.84rem] font-normal text-neutral-600 leading-[1.35]">
              18 rozdziałów z czystą praktyką: jak wybrać lokal, aby nie utonąć w czynszu, jak ułożyć ofertę, semi-personal, skrypt rolki reklamowej i proces bezpiecznego przekazania podopiecznych zespołowi.
            </p>
          </div>
          </div>
        </div>

        {/* Section Divider with Label */}
        <div className="mt-6 mb-3.5 flex w-full items-center gap-3">
          <span className="shrink-0 text-[0.68rem] sm:text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#ea580c]">
            DOSTAJESZ RÓWNIEŻ
          </span>
          <div className="h-[1px] flex-1 bg-[#fed7aa]/80" />
        </div>

        {/* Inclusions Card: Consistent warm border and cream item badges */}
        <div className="w-full overflow-hidden rounded-[1.45rem] border border-[#fed7aa]/90 bg-white shadow-2xs divide-y divide-[#ffedd5]/80">
          {INCLUSIONS.map((item) => (
            <div key={item.title} className="flex items-start gap-3 py-3 px-3.5 sm:py-3.5 sm:px-4">
              <div className="flex h-9 w-9 min-[390px]:h-10 min-[390px]:w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#fed7aa] bg-[#fff7ed]">
                {item.icon}
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-[0.9rem] min-[390px]:text-[0.95rem] font-bold text-neutral-900 leading-tight tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-[0.79rem] min-[390px]:text-[0.83rem] font-normal text-neutral-600 leading-[1.35]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
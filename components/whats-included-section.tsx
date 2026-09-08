import React from "react";

interface InclusionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const INCLUSIONS: InclusionItem[] = [
  {
    title: "Dostęp do pełnego nagrania warsztatu",
    description: "Obejrzysz na spokojnie między treningami i wrócisz do materiałów w trakcie wdrażania.",
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
        <circle cx="12" cy="12" r="9" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Checklista gotowości i audyt studia",
    description: "Punkt po punkcie sprawdzisz, gdzie ucieka marża, co blokuje Cię przed zejściem z sali i od czego zacząć.",
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
  {
    title: "Kalkulatory rentowności i matryca semi-personal",
    description: "Gotowe wzory wyliczeń: czynsz, stawki dla trenerów i marża, dzięki którym wiesz dokładnie, ile wyciągasz z każdej godziny.",
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
        <path d="m7.5 15 3-3 2.5 2.5 3.5-4.5" />
        <polyline points="13.5 10 16.5 10 16.5 13" />
      </svg>
    ),
  },
  {
    title: "Baza skryptów rolek i reklam pod studio",
    description: "Gotowe formaty wideo pod kobiety 35+ i mężczyzn 40+, które zapełniają grafik ludźmi gotowymi płacić za proces.",
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
        <rect width="18" height="18" x="3" y="3" rx="4" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "Rozłożone na czynniki 4 Case Studies",
    description: "Konkretne liczby i proces: jak trenerzy mający po 7 sesji dziennie weszli na 50 000 – 66 000 zł/mc bez tyrania na sali.",
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
        <rect width="13" height="12" x="2.5" y="6" rx="3" />
        <path d="m15.5 10.5 5.5-3.5v10l-5.5-3.5Z" />
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
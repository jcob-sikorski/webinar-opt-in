import React from "react";

interface Pillar {
  number: string;
  pillarLabel: string;
  title: string;
  description: string;
  bullets: (string | React.ReactNode)[];
}

// Definicja danych podmieniana w komponencie lub pliku konfiguracyjnym:
const PILLARS = [
{
    number: "01",
    pillarLabel: "FILAR 1: Klienci na lata zamiast rotacji",
    title: "Zatrzymaj ludzi na lata",
    description:
      "Przestań łatać dziury w grafiku i zaczynać każdy miesiąc od zera. Wdróż model, w którym podopieczni płacą co miesiąc jak w zegarku i trenują latami bez wciskania kolejnych pakietów.",
    bullets: [
      "Treningi semi-personalne — 300–580 zł z jednej godziny na sali przy niższej cenie dla klienta.",
      "Stały abonament — pewny zysk od 1. dnia miesiąca i czysta marża na wypłaty dla zespołu.",
    ],
  },
  {
    number: "02",
    pillarLabel: "FILAR 2: Bezpieczne zejście z sali",
    title: "Oddaj klientów swoim trenerom bez strachu, że tamci odejdą",
    description:
      "Myślisz, że podopieczni trenują tylko dla Ciebie? To najdroższa pułapka. Zobacz, jak przekazać klientów trenerom tak, żeby czuli, że dostają jeszcze lepszą opiekę, a Ty żebyś wreszcie zszedł z 30 godzin na macie.",
    bullets: [
      "Metodyka twarda i miękka studia — jednolity standard treningu i relacji z podopiecznym, dzięki któremu klient czuje tę samą jakość u każdego trenera na sali.",
      "Proste procedury dla zespołu — trenerzy wiedzą dokładnie, jak prowadzić sesję i rozmawiać z ludźmi, bez Twojego wiecznego stania nad głową i poprawiania.",
    ],
  },
  {
    number: "03",
    pillarLabel: "FILAR 3: Lojalny zespół bez podkradania ludzi",
    title: "Zbuduj ekipę, która nie ucieknie z bazą",
    description:
      "Boisz się, że wyszkolisz trenera, a on pójdzie na swoje i zabierze Ci klientów? Zobacz, jak dobierać i rozliczać ludzi, żeby z zaangażowaniem dbali o Twoje studio, zamiast hodować konkurencję za ścianą.",
    bullets: [
      "Proste sito rekrutacji — szybko odsiewasz gwiazdorów scrollujących telefon i wybierasz rzetelnych trenerów na lata.",
      "Prowizja za retencję i żelazne umowy — płacisz za utrzymanie podopiecznego, a nie tylko „odbębnienie” godziny, blokując kradzież bazy.",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Top Tag Pill: Warm amber border and rust typography */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fffaf5] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#7c2d12]">
            ONE LIVE SESSION
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-3.5 text-center text-[1.42rem] min-[390px]:text-[1.6rem] sm:text-[2rem] font-bold leading-tight tracking-tight text-neutral-900">
          Sprawdź, <span className="text-[#ea580c]">co przerobimy</span>
        </h2>

          {/* Wariant 1: Bez owijania w bawełnę (trener do trenera) */}
          <p className="mt-2 text-center text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-normal leading-[1.38] text-neutral-600">
            Dostaniesz prosty plan: jak wreszcie zejść z sali, ogarnąć trenerów i zacząć wyciągać ze studia kasę rzędu 20-50 tys. msc. — zamiast tyrać od 6:00 do 22:00.
          </p>

          {/* Section Divider */}
          <div className="mt-7 mb-4 flex w-full items-center gap-3">
            <span className="shrink-0 text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#ea580c]">
              DOBRA, CZYLI CZEGO SIĘ WŁAŚCIWIE DOWIESZ?
            </span>
            <div className="h-[1px] flex-1 bg-neutral-200" />
          </div>

          {/* Pillar Cards Stack: Dark warm obsidian background with amber top-light */}
          <div className="flex w-full flex-col gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="relative overflow-hidden rounded-[1.75rem] border border-orange-950/30 bg-[#0c0a09] bg-[radial-gradient(ellipse_at_top_left,_#29180c_0%,_#140e0a_40%,_#0c0a09_100%)] p-5 sm:p-6 shadow-xl"
              >
                {/* Header: Number Badge + Pillar Titles */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-[14px] bg-[#ea580c] text-[1.25rem] font-bold text-white shadow-sm">
                    {pillar.number}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#fb923c]">
                      {pillar.pillarLabel}
                    </span>
                    <h3 className="text-[1.28rem] sm:text-[1.4rem] font-bold leading-tight text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.46] text-stone-300">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-emerald-400"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2.5 8.5 6 12 13.5 4" />
                      </svg>
                      <span className="text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-stone-100">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
}
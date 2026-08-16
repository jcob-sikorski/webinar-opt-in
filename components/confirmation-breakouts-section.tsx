import { Section } from "@/components/ui/section";

interface BreakoutVideo {
  title: string;
  question: string;
  duration: string;
  description: string;
  /** Link do nagrania wideo / ID Mux / YouTube embed */
  videoSrc?: string;
}

const BREAKOUT_VIDEOS: BreakoutVideo[] = [
  {
    title: "Obiekcja #1: Lokalizacja",
    question: "„Czy to zadziała w moim małym mieście / gminie 15 tys. mieszkańców?”",
    duration: "3:40 min",
    description:
      "Pokazuję na przykładzie studia w Poddębicach i Żorach, dlaczego model kameralnego studia premium opiera się na 40 lojalnych klientach, a nie masowym przepływie ludzi z wielkich aglomeracji.",
    videoSrc: "https://player.mux.com/OM1SCoPFsNx86K4fE601c19RFqkHxu5ns38eAXEfTMsE",
  },
  {
    title: "Obiekcja #2: Budżet i Ryzyko",
    question: "„Ile realnie muszę mieć na start lokalu i co jeśli nie wypali?”",
    duration: "4:15 min",
    description:
      "Rozbijam kosztorys 35–60 tys. zł na wyposażenie i adaptację. Tłumaczę zasadę bezpiecznego progu rentowności przy czynszu stanowiącym maksymalnie 10% prognozowanego przychodu.",
    videoSrc: "https://player.mux.com/OM1SCoPFsNx86K4fE601c19RFqkHxu5ns38eAXEfTMsE",
  },
  {
    title: "Obiekcja #3: Utrata Klientów",
    question: "„Co jeśli wyszkolę trenera, a on odejdzie z moimi ludźmi?”",
    duration: "3:10 min",
    description:
      "Wyjaśniam mechanizm wiązania klienta z metodyką i marką studia, a nie z pojedynczą osobą na sali, oraz gotowe zapisy umowne chroniące bazę.",
    videoSrc: "https://player.mux.com/OM1SCoPFsNx86K4fE601c19RFqkHxu5ns38eAXEfTMsE",
  },
];

export function ConfirmationBreakoutsSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Odpowiedzi w 3 minuty
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Odpowiedzi na pytania,{" "}
          <span className="text-[#ef6b4a]">które masz w głowie</span>
        </h2>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {BREAKOUT_VIDEOS.map((item) => (
            <article key={item.title} className="py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  {item.title}
                </span>
                <span className="font-mono text-xs font-semibold text-gray-500">
                  Czas trwania: {item.duration}
                </span>
              </div>

              <h3 className="mt-2 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {item.question}
              </h3>

              <div className="relative mx-auto my-6 aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-gray-900 shadow-md">
                <iframe
                  src={item.videoSrc}
                  className="h-full w-full border-none"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                />
              </div>

              <p className="text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
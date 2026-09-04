import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

const PILLARS = [
  {
    title: "Środowe sesje 1:1 na żywo (12:00 – 14:00)",
    description:
      "Jeśli masz jakiekolwiek pytanie do mnie lub do innego właściciela studio, pytasz a my odpowiadamy.",
  },
  {
    title: "Czwartkowe sesje płatnego marketingu z Kornelią",
    description:
      "Zapełniamy na początku Twoje studio pierwszymi klientami, jeśli tego potrzebujesz. Potem uczysz się pozyskiwać leady samodzielnie, żeby nigdy więcej już nie płacić agencji.",
  },
  {
    title: "Bezpośredni kontakt na Telegramie (Pn–Pt 8:00–19:00)",
    description:
      "Jeśli gdziekolwiek podczas wdrożenia modelu Dochodowego Studio, lokal, sprzęt, trener, manager - jeśli gdziekolwiek zostaniesz przyblokowany napisz do mnie na Telegramie i doradzę Ci jak rozwiązać ten problem.",
  },
  {
    title: "Platforma Skool i Roczny Mastermind Stacjonarny",
    description:
      "Baza wszystkich dokumentów, szkoleń, systemów, które potrzebujesz Ty, Twoje studio i trenerzy, aby działać na autopilocie i serwować pakiety premium + coroczny zjazd właścicieli studiów w celu wymiany doświadczeń.",
  },
];

export function ApplicationOfferSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Rdzeń programu
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          6 miesięcy pracy: <span className="text-[#ef6b4a]">Instalacja Systemu Dochodowe Studio</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Pół roku współpracy wdrożeniowej. Celem programu jest uczynienie z Ciebie kompletnego przedsiębiorcy, który po 6 miesiącach jest gotowy na wyjście z sali, a studio pracuje na niego.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="py-8 sm:py-9">
              <h3 className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a
            href="#aplikacja"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            Wypełnij aplikację
            <ArrowRight className="h-6 w-6 shrink-0" />
          </a>
        </div>
      </div>
    </Section>
  );
}
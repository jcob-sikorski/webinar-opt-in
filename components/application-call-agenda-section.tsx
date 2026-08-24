import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

const AGENDA_STEPS = [
  {
    number: "01",
    title: "Wstępna weryfikacja (telefon)",
    description:
      "Nasz konsultant dzwoni, by potwierdzić czy kwalifikujesz się do rozmowy strategicznej.",
  },
  {
    number: "02",
    title: "Diagnoza z konsultantem",
    description:
      "Na bezpłatnej rozmowie strategicznej zlokalizujemy, czego Ci brakuje, żeby być właścicielem studio, który może wyjść z sali.",
  },
  {
    number: "03",
    title: "Plan wdrożenia",
    description:
      "Jeśli widzimy pełne dopasowanie — pokazujemy ścieżkę na najbliższe 6 miesięcy, żeby zdjąć Ciebie z sali i zwiększyć zysk właścicielski do 20-50 tys. zł miesięcznie.",
  },
];

export function ApplicationCallAgendaSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Proces kwalifikacji
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Jak wygląda droga do <span className="text-[#ef6b4a]">rozmowy strategicznej?</span>
        </h2>

        <div className="mx-auto mt-4 max-w-2xl text-pretty font-display text-lg italic leading-[1.6] text-gray-700">
          <p>
            Zero agresywnej sprzedaży. To bezpłatny audyt operacyjny Twojego biznesu — dedykowany tylko zweryfikowanym osobom.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#d6d6d6] text-left">
          {AGENDA_STEPS.map((step) => (
            <article key={step.number} className="py-6 sm:py-7">
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                Krok {step.number}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty font-display text-base italic leading-[1.6] text-gray-700">
                {step.description}
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
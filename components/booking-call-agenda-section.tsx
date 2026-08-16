import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

const AGENDA_STEPS = [
  {
    number: "01",
    title: "Diagnoza sytuacji wyjściowej",
    description:
      "Liczymy Twoje twarde liczby: grafik, stawki, przepustowość i czas pracy na sali. Sprawdzamy, gdzie dokładnie tracisz marżę i energię.",
  },
  {
    number: "02",
    title: "Ustalenie celu na 6 miesięcy",
    description:
      "Określamy konkretny próg przychodu, liczbę klientów i docelową liczbę godzin, którą chcesz spędzać na zarządzaniu zamiast trenowania.",
  },
  {
    number: "03",
    title: "Nazwanie głównego wąskiego gardła",
    description:
      "Lokalizujemy jeden element, który blokuje rozwój: zła oferta pojedynczych wejść, brak przewidywalnego marketingu, strach przed ceną czy brak zespołu.",
  },
  {
    number: "04",
    title: "Weryfikacja dopasowania do programu",
    description:
      "Jeśli widzimy przestrzeń do wdrożenia — przedstawiamy plan na pierwsze 30 dni. Jeśli nie — wskażemy, co należy przygotować przed startem.",
  },
];

export function BookingCallAgendaSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Przebieg spotkania
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Jak dokładnie wygląda <span className="text-[#ef6b4a]">ta rozmowa?</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            To nie jest rozmowa, na której ktoś próbuje Ci coś natychmiast sprzedać. 
            Traktujemy ten czas jak audyt operacyjny — wchodzimy głęboko w Twój model.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {AGENDA_STEPS.map((step) => (
            <article key={step.number} className="py-8 sm:py-9">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  Krok {step.number}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <a
            href="#kalendarz"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6 shrink-0" />
            Wybierz termin rozmowy
          </a>
        </div>
      </div>
    </Section>
  );
}
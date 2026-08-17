import { Section } from "@/components/ui/section";

const AGENDA_BLOCKS = [
  {
    number: "01",
    time: "20:00 - 20:15",
    title: "Szklany sufit trenera i pułapka wiecznej pracy",
    description:
      "Dlaczego prowadzenie treningów po 12 godzin na dobę i ciągłe podnoszenie stawek za godzinę to prosta droga do wypalenia. Pokażę Ci, w którym momencie musisz przestać być jedynym pracownikiem, a zacząć budować biznes.",
  },
  {
    number: "02",
    time: "20:15 - 20:40",
    title: "Matematyka Kameralnego Studia (50–120 m²)",
    description:
      "Zamiast drogiego lokalu w centrum — mniejsza przestrzeń z niskim czynszem. Przeanalizujemy konkretne liczby i pokażę Ci, jak przy 40–50 stałych podopiecznych wyciągać 20–50 tys. zł czystego zysku co miesiąc.",
  },
  {
    number: "03",
    time: "20:40 - 21:00",
    title: "Pakiety metamorfoz zamiast pojedynczych wejść",
    description:
      "Jak tworzyć i sprzedawać kompleksowe programy za 5 000–12 000 zł. Sprawisz, że klienci przestaną porównywać Cię z tanimi karnetami na siłowni i zostaną u Ciebie na wiele miesięcy.",
  },
  {
    number: "04",
    time: "21:00 - 21:15",
    title: "Zaufany zespół trenerów, który nie odejdzie z klientami",
    description:
      "Jak rekrutować, szkolić i rozliczać trenerów, by prowadzili zajęcia w Twoim standardzie. Wdrożysz proste zasady, które budują silną markę studia i zabezpieczają Twoją bazę klientów.",
  },
  {
    number: "05",
    time: "21:15 - 21:30",
    title: "Pytania na żywo + Protokół Dochodowego Studia",
    description:
      "Odpowiem na Twoje konkretne wątpliwości i przekażę gotową checklistę wdrożeniową krok po kroku, którą możesz zacząć realizować od razu po spotkaniu.",
  },
];

export function ConfirmationAgendaSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Dokładny plan spotkania
        </p>

        {/* Nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Czego konkretnie dowiesz się{" "}
          <span className="text-[#ef6b4a]">w trakcie tych 75 minut</span>?
        </h2>

        {/* Wprowadzenie narracyjne */}
        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Szanuję Twój czas — zero lania wody, slajdów o niczym i pustej motywacji.{" "}
            <strong className="font-semibold not-italic text-gray-900">
              Przejdziemy przez cały schemat krok po kroku
            </strong>
            : od znalezienia odpowiedniego lokalu i wyliczenia rentowności, po ofertę i budowę samodzielnego zespołu.
          </p>
        </div>

        {/* Lista modułów */}
        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {AGENDA_BLOCKS.map((block) => (
            <article key={block.number} className="py-8 sm:py-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#ef6b4a]">
                  Część {block.number}
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="font-mono text-xs font-semibold text-gray-500 sm:text-sm">
                  {block.time}
                </span>
              </div>

              <h3 className="mt-2 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {block.title}
              </h3>

              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {block.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
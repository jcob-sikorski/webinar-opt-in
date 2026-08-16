import { Section } from "@/components/ui/section";

const AGENDA_BLOCKS = [
  {
    number: "01",
    time: "20:00 - 20:15",
    title: "Pułapka Rzemieślnika i sufit trenerski",
    description:
      "Dlaczego praca po 12 godzin na sali dziennie i podnoszenie pojedynczych stawek to najkrótsza droga do wypalenia. Pokażę Ci moment, w którym rzemiosło musi ustąpić miejsca architekturze systemu.",
  },
  {
    number: "02",
    time: "20:15 - 20:40",
    title: "Model Kameralnego Studia (50–120 m²)",
    description:
      "Zamiast wielkiej siłowni i gigantycznego czynszu — lokal na obrzeżach za 1500–5000 zł miesięcznie. Dokładne wyliczenia, jak przy 40–50 stałych klientach generować 20–50 tys. zł czystego zysku właścicielskiego.",
  },
  {
    number: "03",
    time: "20:40 - 21:00",
    title: "Pakiety Transformacyjne zamiast pojedynczych wejściówek",
    description:
      "Mechanizm konstruowania i sprzedaży ofert transformacyjnych za 5 000–12 000 zł. Jak sprawić, by klient nie porównywał Cię ze stawką godzinową sieciówki i zostawał w studio na lata.",
  },
  {
    number: "04",
    time: "21:00 - 21:15",
    title: "Zespół trenerów pracujący według Twoich standardów",
    description:
      "Jak rekrutować, wdrażać i rozliczać trenerów, żeby to studio było marką, a nie pojedynczy trener. Procedury chroniące biznes przed odejściem pracownika z Twoimi klientami.",
  },
  {
    number: "05",
    time: "21:15 - 21:30",
    title: "Q&A na żywo oraz Protokół Dochodowego Studia",
    description:
      "Odpowiedzi na żywo na konkretne wyzwania uczestników oraz przekazanie kompletnego Protokołu — checklisty wdrożenia modelu A-Z.",
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

        {/* Nagłówek w tonie długiej strony sprzedażowej */}
        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Czego dokładnie dowiesz się{" "}
          <span className="text-[#ef6b4a]">podczas tych 75 minut</span>?
        </h2>

        {/* Wprowadzenie narracyjne */}
        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Nie zamierzam marnować Twojego czasu na lanie wody i motywacyjne hasła.{" "}
            <strong className="font-semibold not-italic text-gray-900">
              Rozłożymy model kameralnego studia na czynniki pierwsze
            </strong>
            , krok po kroku — od wyboru lokalu, przez pakiety, po budowę zespołu.
          </p>
        </div>

        {/* Płynna lista modułów agendy */}
        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {AGENDA_BLOCKS.map((block) => (
            <article key={block.number} className="py-8 sm:py-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#ef6b4a]">
                  Moduł {block.number}
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
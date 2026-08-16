import { Section } from "@/components/ui/section";

const METRICS = [
  {
    label: "Wskaźnik sporów (Stripe / Banki)",
    value: "0.0%",
    description: "Zero chargebacków i sporów transakcyjnych w historii rozliczeń spółki.",
  },
  {
    label: "Aktywne lokalizacje własne",
    value: "4 placówki",
    description: "Działające studia z realnym personelem i stałą bazą klientów w Polsce.",
  },
  {
    label: "Wdrożone studia w mentoringu",
    value: "40+ placówek",
    description: "Niezależne kluby i studia, które wdrożyły procedury Dochodowego Studia.",
  },
];

export function ConfirmationDueDiligenceSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Twoje własne śledztwo
        </p>

        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Zanim wpiszesz moje nazwisko w{" "}
          <span className="text-[#ef6b4a]">Google lub na forum</span>...
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Gdy podejmujesz decyzję o poświęceniu swojego czasu na warsztat, naturalnym odruchem jest sprawdzenie:{" "}
            <strong className="font-semibold not-italic text-gray-900">
              „Czy to kolejny naciągacz, czy gość z realnym biznesem?”.
            </strong>
          </p>

          <p>
            Nie zamierzam Cię przed tym powstrzymywać. Wręcz przeciwnie — zachęcam, byś to sprawdził. 
            Wpisz w wyszukiwarkę <em>„Bartek Sikorski opinie”</em>, <em>„Sportowe Przedmieście Poddębice”</em> czy przejrzyj profile moich klientów na Instagramie. 
            Oto twarde dane z systemów bankowych i operacyjnych, na które trafisz:
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {METRICS.map((metric) => (
            <article key={metric.label} className="py-8 sm:py-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  Fakt operacyjny
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="font-display text-sm font-semibold text-gray-500">
                  {metric.label}
                </span>
              </div>

              <h3 className="mt-2 font-display text-3xl font-bold italic text-gray-900 sm:text-4xl">
                {metric.value}
              </h3>

              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {metric.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
          <p className="font-display text-base italic leading-[1.7] text-gray-600 sm:text-lg">
            Nie ukrywam potknięć — dwa razy zbankrutowałem, zanim poukładałem ten system. 
            Właśnie dlatego to, co zobaczysz na szkoleniu, chroni Cię przed błędami, które mnie kosztowały lata pracy na magazynie i setki tysięcy złotych.
          </p>
        </div>
      </div>
    </Section>
  );
}
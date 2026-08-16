"use client";

import { Section } from "@/components/ui/section";

interface OutcomeTier {
  share: string;
  label: string;
  range: string;
  description: string;
}

const TIERS: OutcomeTier[] = [
  {
    share: "~15% uczestników",
    label: "Brak wdrożenia",
    range: "0 zł / mc",
    description:
      "Osoby, które przychodzą po wiedzę, ale nie wykonują pracy: nie szukają lokalu, nie prowadzą rekrutacji i nie wdrażają procedur. Żaden model ani system nie przyniesie zysku, jeśli zostaje tylko teorią w notatniku.",
  },
  {
    share: "~60% uczestników",
    label: "Typowy, stabilny rezultat",
    range: "5 000 – 20 000 zł / mc",
    description:
      "Wdrożenie modelu 1:1 oraz semi w kameralnym lokalu (50–100 m²), zatrudnienie pierwszych 1–2 trenerów i ustabilizowanie rentowności. Właściciel stopniowo schodzi z godzin na sali, a studio generuje powtarzalny zysk.",
  },
  {
    share: "~25% uczestników",
    label: "Pełna skala i liderzy rynku",
    range: "20 000 – 50 000+ zł / mc",
    description:
      "Zbudowanie zespołu 3–7 trenerów, maksymalne obłożenie grafiku pakietami transformacyjnymi lub otwarcie drugiej i trzeciej placówki. Właściciel całkowicie wychodzi z prowadzenia treningów i zarządza biznesem w oparciu o wskaźniki.",
  },
];

export function ConfirmationRealisticOutcomesSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Transparentność i twarde liczby
        </p>

        {/* Nagłówek w tonie długiego copy */}
        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Jaki wynik jest <span className="text-[#ef6b4a]">naprawdę realistyczny</span>?
        </h2>

        {/* Wprowadzenie narracyjne */}
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Nie obiecuję milionów z dnia na dzień. W biznesie fitness nie ma dróg na skróty — jest powtarzalny proces,
            matematyka lokalu i konsekwencja we wdrażaniu standardów.
          </p>

          <p>
            <strong className="font-semibold not-italic text-gray-900">
              Oto jak w praktyce rozkładają się wyniki
            </strong>{" "}
            właścicieli studiów, którzy wdrożyli ten model — bez ubarwiania i z pełną uczciwością wobec tych, którzy nie osiągają nic:
          </p>
        </div>

        {/* Płynna lista progów w stylu czystego copy sprzedażowego */}
        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {TIERS.map((tier) => (
            <article key={tier.label} className="py-8 sm:py-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  {tier.share}
                </span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="font-display text-sm font-semibold text-gray-500">
                  {tier.label}
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-bold italic text-gray-900 sm:text-3xl">
                {tier.range}
              </h3>

              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {tier.description}
              </p>
            </article>
          ))}
        </div>

        {/* Podsumowanie sekcji */}
        <div className="mx-auto mt-6 max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
          <p className="font-display text-base italic leading-[1.7] text-gray-600 sm:text-lg">
            Różnica między zerem a 50 000 zł zysku nie leży w wielkości miasta ani znajomościach.{" "}
            <strong className="font-semibold not-italic text-gray-900">
              Leży w tym, czy traktujesz studio jak pasję z wieczną pracą na sali, czy jak poukładany biznes oparty na systemie.
            </strong>
          </p>
        </div>
      </div>
    </Section>
  );
}
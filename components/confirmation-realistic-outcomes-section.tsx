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
    share: "~15% osób",
    label: "Brak wdrożenia",
    range: "0 zł / mc",
    description:
      "Osoby, które zbierają wiedzę, ale nie robią kolejnego kroku: nie szukają lokalu, nie zatrudniają trenerów i nie wprowadzają nowych zasad. Nawet najlepszy model nie zarobi ani złotówki, jeśli zostanie tylko notatką w zeszycie.",
  },
  {
    share: "~60% osób",
    label: "Standardowy, stabilny wynik",
    range: "5 000 – 20 000 zł / mc",
    description:
      "Wprowadzenie treningów personalnych i w małych grupach w lokalu 50–100 m², zatrudnienie 1–2 sprawdzonych trenerów i wyjście na stały plus. Właściciel prowadzi coraz mniej treningów, a studio co miesiąc przynosi przewidywalny zysk.",
  },
  {
    share: "~25% osób",
    label: "Pełna skala i liderzy w regionie",
    range: "20 000 – 50 000+ zł / mc",
    description:
      "Zgrana ekipa 3–7 trenerów, pełne grupy na kompleksowych programach lub otwarcie 2. i 3. lokalu. Właściciel całkowicie schodzi z sali, nie musi prowadzić treningów i skupia się wyłącznie na rozwoju biznesu.",
  },
];

export function ConfirmationRealisticOutcomesSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Szczere liczby, bez owijania w bawełnę
        </p>

        {/* Nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Jakich wyników możesz się <span className="text-[#ef6b4a]">naprawdę spodziewać</span>?
        </h2>

        {/* Wprowadzenie */}
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Nie obiecuję złotych gór w tydzień. W tym biznesie nie ma magii — liczy się prosta matematyka kosztów,
            dobre dopasowanie oferty i konsekwencja we wdrażaniu sprawdzonych zasad.
          </p>
        </div>

        {/* Lista progów */}
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

        {/* Podsumowanie */}
        <div className="mx-auto mt-6 max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
          <p className="font-display text-base italic leading-[1.7] text-gray-600 sm:text-lg">
            Różnica między 0 zł a 50 000 zł zysku nie zależy od wielkości miasta ani szczęścia.{" "}
            <strong className="font-semibold not-italic text-gray-900">
              Zależy od tego, czy traktujesz studio jak wieczną harówkę na sali, czy jak poukładany biznes, który ma pracować na Ciebie.
            </strong>
          </p>
        </div>
      </div>
    </Section>
  );
}
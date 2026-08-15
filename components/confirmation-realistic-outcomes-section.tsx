"use client";

import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface OutcomeTier {
  share: string;
  label: string;
  range: string;
  description: string;
  accent: "muted" | "primary" | "strong";
}

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const TIERS: OutcomeTier[] = [
  {
    share: "~15%",
    label: "Nie wdrażają",
    range: "0 zł",
    description:
      "Kupują dostęp, ale nie robią pierwszego kroku — nie szukają lokalu, nie dzwonią, nie działają. Bez wdrożenia żaden model nic nie zmieni.",
    accent: "muted",
  },
  {
    share: "~60%",
    label: "Typowy wynik",
    range: "5 000–20 000 zł / mc",
    description:
      "Otwierają studio, budują bazę klientów i zespół 1–2 trenerów. Zysk właścicielski rośnie stopniowo w pierwszych 3–6 miesiącach.",
    accent: "primary",
  },
  {
    share: "~25%",
    label: "Najlepsi wykonawcy",
    range: "20 000–50 000+ zł / mc",
    description:
      "Skalują do 2–4 trenerów, drugiej lokalizacji albo modelu semipersonalnego. To osoby, które trzymają się procesu i szybko iterują.",
    accent: "strong",
  },
];

const ACCENT_STYLES: Record<
  OutcomeTier["accent"],
  { border: string; badge: string; range: string }
> = {
  muted: {
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-600",
    range: "text-gray-500",
  },
  primary: {
    border: "border-[#ef6b4a]",
    badge: "bg-[#ef6b4a]/10 text-[#ef6b4a]",
    range: "text-gray-900",
  },
  strong: {
    border: "border-green-600",
    badge: "bg-green-600/10 text-green-700",
    range: "text-green-700",
  },
};

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

export function ConfirmationRealisticOutcomesSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Pre-header */}
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
          Jeśli jesteś ciekawy liczb...
        </p>

        <h2 className="mx-auto mt-5 max-w-[34ch] text-center text-[1.875rem] font-bold leading-tight text-gray-900 sm:text-[2.375rem]">
          Jaki wynik jest{" "}
          <span className="text-[#ef6b4a]">realistyczny</span>?
        </h2>

        <p className="mx-auto mt-5 max-w-[60ch] text-center text-lg text-gray-600">
          Oto jak orientacyjnie rozkładają się wyniki uczestników
          — łącznie z tymi, którzy nie osiągają nic, bo nic nie wdrażają.
        </p>

        {/* Tiers */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TIERS.map((tier) => {
            const styles = ACCENT_STYLES[tier.accent];
            return (
              <div
                key={tier.label}
                className={`flex flex-col rounded-2xl border-2 bg-white p-6 sm:p-7 ${styles.border}`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${styles.badge}`}
                >
                  {tier.share} uczestników
                </span>
                <p className="mt-4 text-base font-bold text-gray-900 sm:text-lg">
                  {tier.label}
                </p>
                <p
                  className={`mt-2 text-2xl font-extrabold leading-tight sm:text-3xl ${styles.range}`}
                >
                  {tier.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {tier.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-[62ch] text-center text-sm leading-relaxed text-gray-500">
          To orientacyjny rozkład oparty na doświadczeniach dotychczasowych
          uczestników, nie gwarancja wyniku. Twój rezultat
          zależy od zaangażowania, rynku i tego, czy faktycznie wdrożysz to,
          czego się nauczysz.
        </p>
      </div>
    </Section>
  );
}
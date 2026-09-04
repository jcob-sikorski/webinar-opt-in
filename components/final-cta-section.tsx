"use client";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

// Sits directly above LegalFooter. Deliberately visually loud (dark bg,
// high contrast) so the disclaimer block that follows it reads as a
// separate, calmer "fine print" zone rather than bleeding into the CTA
// momentum — the two should never share a visual flow.
export function FinalCtaSection() {
  return (
    <Section className="bg-[#101915] px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
          Zero ryzyka
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
          Warsztat jest bezpłatny. Plan, z którym wyjdziesz, zostaje Twój
          niezależnie od tego, co zrobisz później.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Nic Ci nie sprzedajemy w trakcie. Nie musisz niczego kupować, żeby
          skorzystać z modelu A-Z. Zostajesz z konkretnym planem na 6
          miesięcy — koniec, kropka.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6 shrink-0" />
            Tak, chcę się zapisać
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali
          </p>
        </div>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
          Nie możesz być na żywo 4 Września o 19:00? Zapisz się mimo to —
          wyślemy Ci link do nagrania, dostępny przez 5 dni.
        </p>
      </div>
    </Section>
  );
}
"use client";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

export function FinalCtaSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-20 sm:px-6 sm:py-32">
      {/* Nagłówek */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Twój Następny Krok
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl">
          Przestań zamieniać swój czas na pieniądze. <br className="hidden sm:block" />
          <span className="text-[#ef6b4a]">Zbuduj prawdziwe aktywo.</span>
        </h2>
      </div>

      {/* Treść */}
      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-gray-700 sm:text-xl">
        <p>
          <strong className="font-bold text-gray-900">Jedna decyzja</strong>{" "}
          dzieli Cię od zupełnie innej rzeczywistości. Ten sam wysiłek, ta sama pasja i branża, ale zupełnie inna gra.{" "}
          <em className="italic text-gray-900">
            Różnica polega na tym, czy codziennie walczysz o przetrwanie w pękającym grafiku, czy masz niezależny zespół i procesy, które generują zysk, gdy Ty pracujesz z plaży lub po prostu odpoczywasz.
          </em>
        </p>
        <p>
          Podczas <strong className="font-bold text-gray-900">bezpłatnego warsztatu</strong>{" "}
          pokażę Ci fundamenty systemu, który przetestowałem na własnej skórze i który działa już w{" "}
          <strong className="font-bold text-[#ef6b4a]">
            ponad 40 studiach
          </strong>{" "}
          w Polsce. To ten sam model, który pozwala wyjść ze złotej klatki trenera-solo.
        </p>
      </div>

      {/* Wyróżniony blok z wynikami (Karta Premium) */}
      <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
          Mały lokal 40-50 m² • Zespół 2-4 trenerów • Usługi Premium
        </p>
        <p className="mt-6 text-5xl font-black italic tracking-tight text-[#ef6b4a] sm:text-6xl">
          30 000 – 50 000 zł
        </p>
        <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
          Tyle stabilnego zysku potrafi wygenerować zoptymalizowane butikowe studio treningowe.{" "}
          <em className="italic">Nie potrzebujesz 500 m² ani ogromnej komercyjnej siłowni</em>, żeby osiągnąć{" "}
          <strong className="font-bold text-gray-900">pełną wolność finansową i czasową</strong>.
        </p>
      </div>

      {/* Krótkie podsumowanie i CTA */}
      <p className="mx-auto mt-16 max-w-2xl text-center text-xl font-bold italic leading-snug text-gray-900 sm:text-2xl">
        Weź udział w warsztacie i zobacz, jak bezpiecznie przejść z modelu{" "}
        <span className="text-[#ef6b4a]">"wszystko zależy ode mnie"</span>{" "}
        do własnego, dochodowego biznesu.
      </p>

      <div className="mt-12 flex flex-col items-center">
        <RegisterCtaButton
          size="lg"
          className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
        >
          TAK, REZERWUJĘ MIEJSCE — 0 zł
        </RegisterCtaButton>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
          <span>5 dni na obejrzenie nagrania</span>
          <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-[#ef6b4a] sm:block" />
          <span>Ekskluzywne bonusy na żywo</span>
        </p>
      </div>

      {/* Podpis */}
      <div className="mx-auto mt-20 max-w-xs text-center">
        <span aria-hidden className="mx-auto block h-1 w-16 rounded-full bg-[#ef6b4a]" />
        <p className="mt-8 text-lg italic text-gray-600">
          Widzimy się na żywo,
        </p>
        <p className="mt-2 text-2xl font-black text-gray-900">
          Bartłomiej Sikorski
        </p>
      </div>
    </Section>
  );
}
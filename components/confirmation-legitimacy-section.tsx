"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";

interface Studio {
  city: string;
  name: string;
  mapsUrl: string;
  context: string;
}

export function ConfirmationLegitimacySection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Twarde fakty, zero teorii
        </p>

        {/* Nagłówek narracyjny */}
        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          „Czy ten gość naprawdę wie,{" "}
          <span className="text-[#ef6b4a]">o czym mówi?</span>”
        </h2>

        {/* Copy wprowadzające */}
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Masz pełne prawo do wątpliwości. Internet pęka w szwach od „doradców biznesowych”,
            którzy nigdy nie podpisali umowy najmu, nie zatrudnili ani jednego trenera i nie zaryzykowali własnych pieniędzy.
          </p>

          <p>
            <strong className="font-semibold not-italic text-gray-900">
              Sportowe Przedmieście sp. z o.o. (KRS: 0001189312) to firma, która
            </strong>{" "}
            ma realne, działające studia, fizyczne lokale i setki zadowolonych klubowiczów każdego roku.
          </p>
        </div>

        {/* Wyróżniony box o 4 placówkach */}
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border-2 border-[#ef6b4a]/25 bg-[#ef6b4a]/5 p-6 text-center sm:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-[#ef6b4a]">
            <MapPin className="h-6 w-6" />
          </div>

          <p className="mt-4 font-display text-lg font-bold text-gray-900 sm:text-xl">
            Prowadzimy aktualnie kilka placówek
          </p>
          <p className="mt-2 text-base text-gray-700">
            Wpisz po prostu <strong className="font-semibold text-gray-900">„Sportowe Przedmieście”</strong> w Google Maps, aby zweryfikować.
          </p>
        </div>
      </div>
    </Section>
  );
}
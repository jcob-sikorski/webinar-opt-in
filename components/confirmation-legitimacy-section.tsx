"use client";

import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";

interface Studio {
  city: string;
  name: string;
  mapsUrl: string;
  context: string;
}

const STUDIOS: Studio[] = [
  {
    city: "Poddębice",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+Podd%C4%99bice/@52.0195479,18.8086723,9.97z/data=!4m6!3m5!1s0x471bab7e594f3cef:0x3a93847f35ebc902!8m2!3d51.892702!4d18.9705149!16s%2Fg%2F11mfsrzzr4",
    context:
      "Nasza pierwsza placówka. To tutaj metodą prób i błędów przetestowałem cały model, wyeliminowałem potknięcia i dopracowałem system, który dziś działa bez zarzutu.",
  },
  {
    city: "Łęczyca",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego dla Kobiet",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+dla+Kobiet+%C5%81%C4%99czyca/@52.059355,19.1967356,17z/data=!3m1!4b1!4m6!3m5!1s0x471ba5cfc686ea47:0x9702cb93592eb7ed!8m2!3d52.059355!4d19.1993105!16s%2Fg%2F11sk4rp2jq",
    context:
      "Kameralna przestrzeń stworzona tylko dla kobiet w mniejszym mieście. Żywy dowód na to, że wysoka rentowność nie zależy od mieszkania w Warszawie czy Krakowie.",
  },
  {
    city: "Julianów",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+Julian%C3%B3w/@51.8389131,19.4007471,11.94z/data=!4m6!3m5!1s0x471bcb685612e4dd:0x3f8fa117f7a7773b!8m2!3d51.8142182!4d19.4422363!16s%2Fg%2F11m776vl48",
    context:
      "Studio z samodzielną, zgraną ekipą trenerską. Zarabia przewidywalnie miesiąc w miesiąc, podczas gdy ja nie muszę prowadzić tam ani jednego treningu.",
  },
  {
    city: "Żory",
    name: "Sportowe Przedmieście Żory — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+%C5%BBory+-+Studio+Treningu+Personalnego/@50.0509555,18.698491,14.1z/data=!4m6!3m5!1s0x47114d004088922f:0x607c4e7952155092!8m2!3d50.0463673!4d18.6955272!16s%2Fg%2F11xtd_29tb",
    context:
      "Kolejna placówka uruchomiona dokładnie według tego samego schematu: ta sama oferta, te same zasady obsługi klienta i poukładana rekrutacja.",
  },
];

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
              Sportowe Przedmieście sp. z o.o. (KRS: 0001189312) to firma, która.
            </strong>{" "}
            ma realne, działające studia, fizyczne lokale i setki zadowolonych klubowiczów każdego roku.
          </p>
        </div>

        {/* Lista placówek */}
        <div className="mt-14 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {STUDIOS.map((studio) => (
            <article key={studio.city} className="py-8 sm:py-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                  {studio.city} — {studio.name}
                </h3>
                <a
                  href={studio.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-[#ef6b4a] underline-offset-4 hover:underline"
                >
                  Zobacz studio na Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {studio.context}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
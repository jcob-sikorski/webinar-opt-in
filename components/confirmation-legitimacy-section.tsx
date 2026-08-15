"use client";

import { MapPin, ExternalLink, BadgeCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface Studio {
  city: string;
  name: string;
  mapsUrl: string;
}

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const STUDIOS: Studio[] = [
  {
    city: "Poddębice",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+Podd%C4%99bice/@52.0195479,18.8086723,9.97z/data=!4m6!3m5!1s0x471bab7e594f3cef:0x3a93847f35ebc902!8m2!3d51.892702!4d18.9705149!16s%2Fg%2F11mfsrzzr4",
  },
  {
    city: "Łęczyca",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego dla Kobiet",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+dla+Kobiet+%C5%81%C4%99czyca/@52.059355,19.1967356,17z/data=!3m1!4b1!4m6!3m5!1s0x471ba5cfc686ea47:0x9702cb93592eb7ed!8m2!3d52.059355!4d19.1993105!16s%2Fg%2F11sk4rp2jq",
  },
  {
    city: "Julianów",
    name: "Sportowe Przedmieście — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+Studio+Treningu+Personalnego+Julian%C3%B3w/@51.8389131,19.4007471,11.94z/data=!4m6!3m5!1s0x471bcb685612e4dd:0x3f8fa117f7a7773b!8m2!3d51.8142182!4d19.4422363!16s%2Fg%2F11m776vl48",
  },
  {
    city: "Żory",
    name: "Sportowe Przedmieście Żory — Studio Treningu Personalnego",
    mapsUrl:
      "https://www.google.com/maps/place/Sportowe+Przedmie%C5%9Bcie+%C5%BBory+-+Studio+Treningu+Personalnego/@50.0509555,18.698491,14.1z/data=!4m6!3m5!1s0x47114d004088922f:0x607c4e7952155092!8m2!3d50.0463673!4d18.6955272!16s%2Fg%2F11xtd_29tb",
  },
];

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

export function ConfirmationLegitimacySection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Nagłówek sekcji */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Odpowiadając na Twoje pytanie...
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-gray-900 text-balance sm:text-4xl md:text-5xl">
            „Czy ten gość <span className="text-[#ef6b4a]">wie o czym mówi?</span>”
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Oto cztery studia, które faktycznie otworzyłem, których byłem właścicielem i które nadal działają. Sprawdź je sam na mapie.
          </p>
        </div>

        {/* Firma - Dowód wiarygodności */}
        <div className="mx-auto mt-14 flex max-w-3xl items-start gap-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
          <BadgeCheck
            className="mt-1 h-8 w-8 shrink-0 text-green-600"
            strokeWidth={2.5}
          />
          <div className="text-left text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              <strong className="font-bold text-gray-900">
                Sportowe Przedmieście sp. z o.o.
              </strong>{" "}
              to zarejestrowana spółka, którą znajdziesz w KRS. Firma prowadzi realne studia
              treningu personalnego w kilku lokalizacjach w Polsce, widoczne
              publicznie na Mapach Google, polecam przeczytać opinie naszych klientów.
            </p>
          </div>
        </div>

        {/* Grid studiów (Karty) */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {STUDIOS.map((studio) => (
            <a
              key={studio.city}
              href={studio.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ef6b4a]/40 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef6b4a]/10 transition-colors duration-300 group-hover:bg-[#ef6b4a]">
                  <MapPin
                    className="h-6 w-6 text-[#ef6b4a] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2}
                  />
                </span>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {studio.city}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {studio.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#ef6b4a] opacity-80 transition-opacity group-hover:opacity-100">
                Zobacz na mapie
                <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
              </div>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base italic text-gray-500">
          Cztery ściany, sprzęt, trenerzy i klienci, którzy przychodzą co
          tydzień — to nie są tylko obietnice na slajdzie.
        </p>
      </div>
    </Section>
  );
}
"use client";

import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { useRegisterModal } from "@/components/register-modal-provider";

const ADRIAN_TESTIMONIAL = {
  name: "Adrian Januszewski",
  business: "Twórca Studio Treningu",
  figure: "30 000 zł zysku miesięcznie",
  photo:
    "https://ucarecdn.com/6ef23292-7bba-4e02-91b8-80877180df70/496175391_17844081156481671_4746889831378198272_n.jpg",
};

const ADRIAN_QUOTES = [
  {
    category: "Rentowność i start",
    quote:
      "To, że poznaliśmy się, myślę, że zapobiegło temu i że od pierwszego miesiąca cyferki były na plusie. Z perspektywy teraz czasu bym powiedział: kurde, no to jest banalnie proste. To jest system dobrze poukładany.",
  },
  {
    category: "Wolność czasowa",
    quote:
      "Dzięki temu, że ja jestem na drugim końcu świata, tak naprawdę interes dalej leci. Wszyscy wiedzą, co mają robić. W tej chwili godzina 14:00–15:00 i jestem wolnym człowiekiem. Mogę jechać z dzieckiem na zajęcia, spędzić czas z rodziną, a cyferki też się zgadzają.",
  },
  {
    category: "Trener → właściciel",
    quote:
      "Jeżeli ktoś myśli, że jest super, bo robi 12 godzin treningów dziennie i zarabia 15 000 zł – no jesteś gość, tylko jakim kosztem? Od początku naszym celem nie było samotrenowanie, tylko zarządzanie i prowadzenie tego interesu.",
  },
  {
    category: "Mentoring i system",
    quote:
      "Ktoś by powiedział z boku: kurde, ale ryzyko. Ja tak naprawdę jeszcze sam nie nauczyłem się tego biznesu, a już budowałem zespół. To nie jest ryzyko – to odpowiedzialność, słuchanie dobrych rad i wdrażanie ich. W tych prostych rzeczach jest efekt.",
  },
];

export function AdrianProofSection() {
  const { openRegister } = useRegisterModal();

  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow */}
        <p className="text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Dowód wdrożenia modelu
        </p>

        {/* Nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[24ch] text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Od pełnego grafiku na sali do{" "}
          <span className="text-[#ef6b4a]">30 000 zł zysku</span> miesięcznie
        </h2>

        {/* Profil Adriana */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-lg sm:h-56 sm:w-56 md:h-64 md:w-64">
            <img
              src={ADRIAN_TESTIMONIAL.photo}
              alt={ADRIAN_TESTIMONIAL.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            {ADRIAN_TESTIMONIAL.name}
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#ef6b4a] sm:text-base">
            {ADRIAN_TESTIMONIAL.figure}
          </p>
          <p className="mt-0.5 text-xs font-medium text-gray-500 sm:text-sm">
            {ADRIAN_TESTIMONIAL.business}
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
            „Studio ma się bardzo dobrze. Od pierwszego miesiąca cyferki były na plusie, a o 14:00 jestem wolnym człowiekiem.”
          </p>
        </div>

        {/* Karty z cytatami */}
        <div className="mt-12 space-y-6">
          {ADRIAN_QUOTES.map((item) => (
            <article
              key={item.category}
              className="rounded-r-xl border-l-4 border-[#ef6b4a] bg-white/70 p-5 pl-6 shadow-sm backdrop-blur-sm"
            >
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                {item.category}
              </p>
              <p className="mt-2 font-display text-base italic leading-[1.7] text-gray-800 sm:text-lg">
                „{item.quote}”
              </p>
            </article>
          ))}
        </div>

        {/* Zielony Przycisk CTA */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={openRegister}
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6 shrink-0" />
            Zapisz się na warsztat
          </button>
          <p className="mt-4 max-w-md text-center text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
            Bezpłatny warsztat na żywo — zobacz model wdrożony u Adriana
          </p>
        </div>
      </div>
    </Section>
  );
}
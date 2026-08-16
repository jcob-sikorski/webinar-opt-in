"use client";

import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { useRegisterModal } from "@/components/register-modal-provider";

const JOANNA_TESTIMONIAL = {
  name: "Joanna",
  business: "Właścicielka Silna Studio Kraków",
  figure: "70 000 zł przychodu / msc.",
  photo:
    "https://ucarecdn.com/07716a95-25c5-4593-9fa3-f9c67a271b81/Screenshot20260816at84156AM.png",
};

const JOANNA_QUOTES = [
  {
    category: "Od widma bankructwa do zysku",
    quote:
      "Wstawałam rano i płakałam. Piąty miesiąc zastanawiasz się, czy za chwilę nie będziesz musiała tego wszystkiego zwijać, bo koszty zjadały wszystko. Uruchomiliśmy proces i w pierwszym miesiącu przyszło tyle klientek, że dokonałam czegoś, na co dawałam sobie kilka lat.",
  },
  {
    category: "Proces rekrutacji i delegowanie",
    quote:
      "Z gotowym procesem zatrudniania to była czysta przyjemność. Wszystko spisane krok po kroku: na co zwracać uwagę, co mówić na rozmowie. Dziś uwalnia mi się czas, mam zgrany zespół, a na salę wchodzę trenować klientki wyłącznie z pasji.",
  },
  {
    category: "Twarde działanie zamiast iluzji",
    quote:
      "Przez ostatnie cztery miesiące nie manifestowałam i z niczym nie rezonowałam – po prostu działałam według wytycznych. Wszyscy guru w książkach zapomnieli o jednym: bez poukładanego systemu i zapieprzania afirmacje nic nie dadzą.",
  },
  {
    category: "Poczucie bezpieczeństwa i kontroli",
    quote:
      "Przez ostatnie cztery miesiące zrobiłam więcej niż przez 5 lat. Pierwszy raz w życiu dałam sobie poczucie bezpieczeństwa — i to nie tylko przez zarobione pieniądze, ale dlatego, że wiem, jak ten biznes prowadzić.",
  },
];

export function JoannaProofSection() {
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
          Od myśli o zamknięciu lokalu do{" "}
          <span className="text-[#ef6b4a]">70 000 zł przychodu</span> miesięcznie
        </h2>

        {/* Profil Joanny */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-lg sm:h-56 sm:w-56 md:h-64 md:w-64">
            <img
              src={JOANNA_TESTIMONIAL.photo}
              alt={`${JOANNA_TESTIMONIAL.name} — ${JOANNA_TESTIMONIAL.business}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            {JOANNA_TESTIMONIAL.name}
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#ef6b4a] sm:text-base">
            {JOANNA_TESTIMONIAL.figure}
          </p>
          <p className="mt-0.5 text-xs font-medium text-gray-500 sm:text-sm">
            {JOANNA_TESTIMONIAL.business}
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
            „Byłam o krok od rezygnacji z bycia trenerem. Dziś studio generuje 70 000 zł miesięcznie, zespół przejmuje grafik, a ja prowadzę treningi tylko wtedy, kiedy mam na to ochotę.”
          </p>
        </div>

        {/* Karty z cytatami */}
        <div className="mt-12 space-y-6">
          {JOANNA_QUOTES.map((item) => (
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
            Bezpłatny warsztat na żywo — zobacz model wdrożony w Silna Studio Kraków
          </p>
        </div>
      </div>
    </Section>
  );
}
"use client";

import { Section } from "@/components/ui/section";

interface Objection {
  question: string;
  answer: string;
}

const OBJECTIONS: Objection[] = [
  {
    question: "„Próbowałem już czegoś podobnego i nie zadziałało.”",
    answer:
      "Masz prawo być sceptyczny. Najczęściej problemem było skupienie się na jednym elemencie (same reklamy albo nowy sprzęt) bez poukładanego systemu sprzedaży i zespołu. W programie wdrażamy kompletny łańcuch operacyjny.",
  },
  {
    question: "„Mam etat / pełny grafik. Kiedy mam na to znaleźć czas?”",
    answer:
      "Program wymaga około 5 godzin tygodniowo. Pracujemy w środy i czwartki na sesjach na żywo, a zadania wdrożeniowe wykonujesz w dogodnym dla siebie momencie. Sam łączyłem etat z budową studia.",
  },
  {
    question: "„Boję się, że wyszkolę trenera, a on odejdzie z moimi klientami.”",
    answer:
      "Uczymy Cię budować ofertę i metodykę tak, by klient kupował standard studia, a nie pojedynczego trenera. Dostajesz gotowe procedury umowne, a przedsiębiorczym trenerom proponujemy partnerstwo przy kolejnych lokalizacjach.",
  },
  {
    question: "„W moim małym mieście nikt nie zapłaci kilku tysięcy za pakiet.”",
    answer:
      "Klient nie płaci za godzinę machania hantlem — płaci za transformację i indywidualną opiekę. Nasze studia w Poddębicach czy Żorach udowadniają, że popyt na usługi premium w małych miastach jest ogromny.",
  },
  {
    question: "„Jaki jest minimalny kapitał potrzebny do wystartowania?”",
    answer:
      "Na adaptację i start w formacie START wystarczy 35–45 tys. zł. Przy lokalu 45–60 m² i czynszu 2000–4000 zł próg rentowności osiągasz już przy 10–15 stałych podopiecznych.",
  },
];

export function ApplicationObjectionsSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Odpowiedzi na obiekcje
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Pytania przed <span className="text-[#ef6b4a]">rozmową kwalifikacyjną</span>
        </h2>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {OBJECTIONS.map((item) => (
            <article key={item.question} className="py-8 sm:py-9">
              <h3 className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {item.question}
              </h3>
              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
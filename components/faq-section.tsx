"use client";

import type { ReactNode } from "react";
import { HelpCircle } from "lucide-react";
import { Section } from "@/components/ui/section";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

// Emphasis helper — keeps the data array readable
const M = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-gray-900">{children}</strong>
);

const FAQS: FaqItem[] = [
  {
    question: "Warsztat jest za darmo. W czym haczyk?",
    answer: (
      <>
        Nie ma tu żadnego haczyka w sensie ukrytych opłat. Warsztat jest darmowy, bo{" "}
        <M>tak buduję relacje z właścicielami studiów</M> — pokazuję konkretny model, a Ty sam
        oceniasz, czy chcesz w to iść dalej. Jeśli po godzinie uznasz, że to nie dla Ciebie,{" "}
        <M>i tak wychodzisz z gotowym planem</M>, który możesz wdrożyć samodzielnie.
      </>
    ),
  },
  {
    question: "Dlaczego mam słuchać akurat Ciebie, a nie kogoś innego z branży?",
    answer: (
      <>
        Bo <M>nie uczę teorii — pokazuję to, co sam wdrożyłem</M>. Cztery działające placówki
        Sportowe Przedmieście, 38M zł wygenerowane z klientami i ponad 40 instalacji tego
        systemu u innych właścicieli w ciągu roku.
      </>
    ),
  },
  {
    question: "Byłem/byłam już na kilku takich warsztatach i zawsze kończy się na sprzedaży.",
    answer: (
      <>
        Rozumiem tę czujność, różnica jest taka, że{" "}
        <M>ta godzina to nie jest przynęta na dalszą sprzedaż</M> — tu pokażę Ci realny model, który faktycznie zarabia bez
        właściciela. Jeśli pod koniec zechcesz porozmawiać o dalszej współpracy — świetnie.
        Jeśli nie — <M>i tak masz z czym wyjść</M>.
      </>
    ),
  },
  {
    question: "Mam już swoją wizję. Po co mi kolejny głos w głowie?",
    answer: (
      <>
        Ten warsztat nie jest po to, żeby zastąpić kogoś, z kim już pracujesz — jest po to, żeby{" "}
        <M>dać Ci konkretny model</M>, z którym możesz skonfrontować to, co robisz teraz. Jeśli
        Twój obecny kierunek się pokrywa — świetnie, wyjdziesz z potwierdzeniem. Jeśli nie —{" "}
        <M>lepiej wiedzieć to teraz</M>, niż za rok.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <Section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
      {/* Nagłówek sekcji */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Wahasz się zapisać?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl">
          Rozwiejmy Twoje obawy
        </h2>
      </div>

      {/* Lista pytań i odpowiedzi (karty) */}
      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-6">
        {FAQS.map((faq) => (
          <div
            key={faq.question}
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#fcfbf9] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ef6b4a]/10">
                <HelpCircle className="h-6 w-6 text-[#ef6b4a]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
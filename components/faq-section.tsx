"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";
import { CalendarCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Nie mam jeszcze własnego studia. Czy ten warsztat mi się przyda?",
    answer:
      "Zdecydowanie tak. Pokażę Ci cały model od podstaw — od wyboru lokalu, przez koszty, aż po cennik. Niezależnie od tego, czy planujesz start za 3 miesiące, czy dopiero układasz plan w głowie, wyjdziesz świadomy i będziesz mógł uniknąć błędów, które kosztują dziesiątki tysięcy złotych.",
  },
  {
    question: "Prowadzę już studio od lat. Czy to nie będą zbyt podstawowe rzeczy?",
    answer:
      "Doświadczeni właściciele rzadko mają problem z brakiem wiedzy trenerskiej — ich problemem jest brak procesów. Jeśli wciąż musisz osobiście dopinać każdy detal, nie możesz wyjechać na urlop bez spadku przychodów lub nie wiesz, jak otworzyć kolejną lokalizację bez podwajania chaosu, ten warsztat jest w 100% dla Ciebie.",
  },
  {
    question: "Czy podczas warsztatu będziecie coś sprzedawać?",
    answer:
      "Głównym celem jest pokazanie Ci co Cię czeka przy budowaniu takiego studio oraz plan działania. Pod koniec krótko opowiem o możliwości dołączenia do programu mentoringowego dla osób, które chcą wdrożyć ten model krok po kroku z moim osobistym wsparciem. Udział w warsztacie jest całkowicie bezpłatny i nikt do niczego Cię nie zobowiązuje.",
  },
  {
    question: "Nie dam rady być na żywo w poniedziałek o 20:00. Czy dostanę powtórkę?",
    answer:
      "Tak, zapisz się tak czy inaczej. Po spotkaniu wyślemy Ci powtórkę wideo, która będzie aktywna przez 5 dni. Pamiętaj jednak, że pełny Protokół Dochodowego Studia (praktyczną checklistę wdrożeniową) oraz sesję pytań i odpowiedzi udostępniamy na żywo, więc jeśli możesz wygospodarować choć fragment wieczoru — naprawdę warto.",
  },
  {
    question: "Ile potrwa spotkanie i jak mam się przygotować?",
    answer:
      "Przeznacz około 75 minut. Przygotuj notes i coś do pisania — osoby, które notują kluczowe wnioski, wdrażają zmiany znacznie szybciej niż bierni słuchacze.",
  },
];

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-gray-900 sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#ef6b4a] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 text-base leading-relaxed text-gray-700">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl">
          Najczęściej zadawane pytania
        </h2>

        <div className="mt-10">
          {FAQS.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>

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
      </div>
    </Section>
  );
}
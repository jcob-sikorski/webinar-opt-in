"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Co jeśli nie mogę być na żywo 24 sierpnia o 20:00?",
    answer:
      "Wyślemy Ci link do powtórki na podany e-mail, ale nagranie będzie aktywne tylko przez 5 dni. Pamiętaj jednak, że 'Protokół Dochodowego Studia' oraz sesja Q&A są dostępne wyłącznie dla uczestników obecnych na żywo.",
  },
  {
    question: "Nie mam jeszcze otwartego studia ani lokalu. Czy to szkolenie ma sens?",
    answer:
      "Jak najbardziej. Pokazujemy proces od zera — w tym kryteria doboru lokalu (50–120 m²), szacowanie budżetu startowego oraz unikanie najczęstszych błędów przy podpisywaniu umowy najmu.",
  },
  {
    question: "Prowadzę już studio od kilku lat. Czy nie będzie to zbyt podstawowa wiedza?",
    answer:
      "Warsztat skupia się na przejściu z 'trenera-właściciela' w 'architekta biznesu'. Jeśli dziś sam stoisz na sali i Twój wyjazd oznacza spadek przychodów — ten model pokazuje, jak zbudować zespół i procedury delegowania.",
  },
  {
    question: "Czy podczas warsztatu będziecie coś nachalnie sprzedawać?",
    answer:
      "Nie. Przez 75 minut otrzymujesz pełny, merytoryczny model A-Z. Pod sam koniec w kilku minutach pokażemy, jak wygląda nasza 6-miesięczna współpraca wdrożeniowa dla chętnych, ale z warsztatu wyjdziesz z kompletnym planem niezależnie od Twojej decyzji.",
  },
  {
    question: "Gdzie znajdę link do pokoju webinarowego?",
    answer:
      "Link wysłaliśmy od razu na Twój adres e-mail (sprawdź folder Oferty/SPAM). Dodatkowo wyślemy przypomnienie SMS z linkiem 24h, 2h oraz 10 minut przed startem.",
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

export function ConfirmationFaqSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
          Odpowiedzi Na Pytania
        </p>
        <h2 className="mt-4 text-center text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl">
          Często zadawane <span className="text-[#ef6b4a]">pytania</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-gray-600">
          Wszystko, co musisz wiedzieć przed wejściem na salę webinarową.
        </p>

        <div className="mt-10">
          {FAQS.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
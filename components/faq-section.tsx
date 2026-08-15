"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface FaqItem {
  question: string;
  answer: string;
}

// Pre-handling najczęstszych obiekcji PRZED zapisem — nie po.
const FAQS: FaqItem[] = [
  {
    question: "Nie mam jeszcze studio. Czy ten warsztat jest dla mnie?",
    answer:
      "Tak. Model butikowego studio pokazuję od zera — jeśli otwierasz studio za 3 miesiące albo nie wiesz jeszcze kiedy, to wyjdziesz z planem, który wdrożysz gdy będziesz gotowy/a. Nie musisz mieć lokalu, żeby zrozumieć system.",
  },
  {
    question: "Prowadzę już studio od kilku lat. Czy to nie będzie zbyt podstawowe?",
    answer:
      "Najczęstszy problem doświadczonych właścicieli to nie brak wiedzy, tylko brak wdrożonego systemu. Jeśli nie jesteś w stanie w sposób skalowalny otwierać kolejnych placówek — to jest dokładnie dla Ciebie.",
  },
  {
    question: "Czy będziecie mi coś sprzedawać podczas warsztatu?",
    answer:
      "Wyjdziesz z konkretnym planem. Pod koniec pokażę, jak wygląda dalsza współpraca dla osób, które chcą wdrożyć model z moim wsparciem — ale nie musisz nic kupować, żeby skorzystać z tego, co dziś pokażę.",
  },
  {
    question: "Nie mogę być na żywo w poniedziałek 20:00. Czy mam się zapisywać?",
    answer:
      "Tak, zapisz się mimo to. Wyślemy Ci przypomnienie i link do nagrania — zostaje ono dostępne przez 5 dni. Jedyna różnica: Protokół Dochodowego Studia (checklista wdrożenia) trafia wyłącznie do osób, które są na żywo do końca, więc jeśli możesz się urwać choćby na Q&A, warto.",
  },
  {
    question: "Ile to zajmie i co mam przygotować?",
    answer:
      "Ok. 75 minut, bez przerwy. Przygotuj coś do notowania — warsztat ma dużo mięsa, a ludzie, którzy notują, wdrażają zdecydowanie więcej niż ci, którzy tylko oglądają.",
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
          Najczęstsze pytania
        </h2>

        <div className="mt-10">
          {FAQS.map((item) => (
            <FaqRow key={item.question} item={item} />
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Tak, chcę się zapisać
          </RegisterCtaButton>
        </div>
      </div>
    </Section>
  );
}
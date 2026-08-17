"use client";

import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";
import { CalendarCheck } from "lucide-react";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

// Konkretny, "minuta po minucie" plan warsztatu — zamiast ogólnikowego
// "wyjdziesz z wizją", pokazujemy DOKŁADNIE co jest omawiane i kiedy.
const AGENDA: AgendaItem[] = [
  {
    time: "20:00",
    title: "Dlaczego Twój obecny model ma sufit",
    description:
      "Pokażę Ci, dlaczego bycie najlepszym trenerem w mieście nie wystarczy i gdzie dokładnie tracisz pieniądze przy pełnym grafiku.",
  },
  {
    time: "20:15",
    title: "Model Kameralnego Studia — 3 filary",
    description:
      "Rozbiję model A-Z na 3 konkretne filary: SYSTEMY, ZARZĄDZANIE, ZESPÓŁ — z przykładami z moich 4 placówek.",
  },
  {
    time: "20:35",
    title: "Jak sprzedawać transformacje, nie wejściówki",
    description:
      "Zobaczysz dokładny mechanizm przejścia z pojedynczych treningów na wysokomarżowe pakiety, które zatrzymują klienta na lata.",
  },
  {
    time: "20:55",
    title: "Budowa zespołu, który pracuje bez Ciebie",
    description:
      "Konkretny proces rekrutacji i wdrażania trenerów pracujących według Twojej metodyki — bez freelancerskiego chaosu.",
  },
  {
    time: "21:15",
    title: "Q&A + Protokół Dochodowego Studia",
    description:
      "Odpowiadam na pytania na żywo. Osoby, które zostają do końca, otrzymują Protokół — checklistę wdrożenia modelu krok po kroku.",
  },
];

export function AgendaSection() {
  return (
    <Section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Dokładny plan
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl">
          Co dokładnie zobaczysz na warsztacie
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-gray-700">
          Zero lania wody. 75 minut, 5 konkretnych bloków — każdy z gotowym
          do wdrożenia elementem modelu A-Z.
        </p>

        <ol className="mt-14 flex flex-col gap-0">
          {AGENDA.map((item, index) => (
            <li key={item.time} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Linia łącząca kroki */}
              {index !== AGENDA.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[27px] top-14 h-full w-px bg-gray-200"
                />
              )}
              <div className="flex shrink-0 flex-col items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-sm font-black uppercase tracking-wide text-[#ef6b4a]">
                  {item.time}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

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
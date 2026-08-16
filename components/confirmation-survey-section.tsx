"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/section";

interface Question {
  id: string;
  question: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: "sytuacja",
    question: "Co najlepiej opisuje Twoją sytuację dzisiaj?",
    options: [
      "Mam pełny grafik, ale mój dochód uderzył w sufit",
      "Mam studio, ale beze mnie na sali wszystko się zatrzymuje",
      "Dopiero planuję otworzyć własne studio od zera",
      "Prowadzę studio i chcę otworzyć kolejną placówkę",
    ],
  },
  {
    id: "tempo",
    question: "Jak szybko chcesz wdrożyć nowy model?",
    options: [
      "W ciągu najbliższego miesiąca (zależy mi na czasie)",
      "W ciągu najbliższych 3–6 miesięcy",
      "Na spokojnie — najpierw chcę poznać cały system",
    ],
  },
];

async function submitSurvey(answers: Record<string, string>) {
  console.log("survey answers", answers);
}

export function ConfirmationSurveySection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id]);

  function handleSelect(questionId: string, option: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  function handleSubmit() {
    if (!allAnswered) return;
    submitSurvey(answers);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Section className="bg-[#fcfbf9]">
        <div className="mx-auto max-w-2xl border-t border-[#d6d6d6] pt-12 text-center">
          <span
            aria-hidden
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-sm"
          >
            <Check className="h-6 w-6" strokeWidth={3} />
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold italic text-gray-900 sm:text-3xl">
            Dzięki za odpowiedź. <span className="text-green-600">Zapisałem to.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-lg font-display text-lg italic leading-[1.7] text-gray-700">
            Dostosuję konkretne przykłady i case studies podczas warsztatu pod Twoją sytuację.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Zajmie Ci to 20 sekund
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Zanim się połączymy, pozwól mi lepiej zrozumieć{" "}
          <span className="text-[#ef6b4a]">Twoją sytuację</span>
        </h2>

        {/* Pytania i opcje */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-10 text-left">
          {QUESTIONS.map((q, qIndex) => (
            <div key={q.id}>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-xs font-black text-[#ef6b4a]">
                  0{qIndex + 1}
                </span>
                <p className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                  {q.question}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                {q.options.map((option) => {
                  const selected = answers[q.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(q.id, option)}
                      className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                        selected
                          ? "border-[#ef6b4a] bg-white shadow-md ring-1 ring-[#ef6b4a]"
                          : "border-gray-200 bg-white/70 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          selected
                            ? "border-[#ef6b4a] bg-[#ef6b4a] text-white"
                            : "border-gray-300 group-hover:border-gray-400"
                        }`}
                      >
                        {selected && <Check className="h-3 w-3" strokeWidth={3.5} />}
                      </span>
                      <span
                        className={`text-base leading-relaxed ${
                          selected
                            ? "font-semibold text-gray-900"
                            : "font-normal text-gray-700"
                        }`}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 sm:text-2xl"
          >
            Zapisz moją odpowiedź
            <ArrowRight className="h-6 w-6 shrink-0" />
          </button>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500">
            Dostosujemy treść transmisji pod Twoją sytuację
          </p>
        </div>
      </div>
    </Section>
  );
}
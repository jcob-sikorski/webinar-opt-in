"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
      "Mam pełny grafik, ale dochód ma sufit",
      "Mam studio, ale beze mnie się zatrzymuje",
      "Dopiero planuję otworzyć własne studio",
      "Coś innego",
    ],
  },
  {
    id: "tempo",
    question: "Jak szybko chcesz to zmienić?",
    options: [
      "W ciągu najbliższego miesiąca",
      "W ciągu 3–6 miesięcy",
      "Rozglądam się na spokojnie",
    ],
  },
];

// TODO: wire this to your ESP/CRM — e.g. POST to a server action or webhook,
// keyed by the registrant's email (from the query string or session), so the
// answers can drive segmented follow-up emails and ad copy.
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
      <Section>
        <div className="rounded-xl border border-line border-t-[3px] border-t-coral-bright p-8 text-center">
          <span
            aria-hidden
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral-bright"
          >
            <Check className="h-6 w-6 text-white" strokeWidth={3} />
          </span>
          <p className="mt-5 text-body-lg font-semibold text-ink">
            Dzięki. Zapisałem to sobie.
          </p>
          <p className="mt-2 text-body text-ink-muted">
            Dostosuję część warsztatu pod Twoją sytuację — do zobaczenia w
            piątek.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Zajmie Ci to 20 sekund
      </p>
      <h2 className="mx-auto mt-5 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Zanim Zaczniemy, Powiedz Mi{" "}
        <span className="text-coral">Jedną Rzecz</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[46ch] text-center text-body-lg text-ink-muted">
        Im lepiej rozumiem, z czym mierzysz się dzisiaj, tym bardziej trafi w
        Ciebie sam warsztat.
      </p>

      <div className="mt-10 flex flex-col gap-9">
        {QUESTIONS.map((q) => (
          <div key={q.id}>
            <p className="text-body-lg font-semibold text-ink">
              {q.question}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {q.options.map((option) => {
                const selected = answers[q.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(q.id, option)}
                    className={cn(
                      "flex items-center gap-3 rounded-md border px-4 py-3.5 text-left text-body transition-colors duration-150",
                      selected
                        ? "border-coral bg-coral/5 text-ink"
                        : "border-line text-ink-muted hover:border-ink/20"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                        selected
                          ? "border-coral-bright bg-coral-bright"
                          : "border-line"
                      )}
                    >
                      {selected && (
                        <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-9 flex justify-center">
        <Button
          size="lg"
          disabled={!allAnswered}
          onClick={handleSubmit}
          className="w-full max-w-xs"
        >
          Wyślij
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </Section>
  );
}

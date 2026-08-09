import { ArrowRight } from "lucide-react";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

const STATS = [
  {
    label: "Dziś",
    rate: "Czas za pieniądze",
    revenue: "Zarabiasz, gdy Ty trenujesz",
    detail: "Wypadasz z grafiku — przychód staje",
    highlighted: false,
  },
  {
    label: "Po Dochodowym Studiu",
    rate: "System, nie Ty",
    revenue: "20–50 000 zł/mc",
    detail: "Bez Twojego stałego udziału",
    highlighted: true,
  },
];

export function TransformationSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold italic leading-[1.15] sm:text-[2.375rem]">
        Ile Naprawdę Warte Jest{" "}
        <span className="text-coral">Studio, Które Zarabia Bez Ciebie?</span>
      </h2>

      <p className="mt-6 text-center text-body-lg font-semibold text-ink">
        Te same godziny na sali. Ten sam lokal. Ten sam zespół.
        <br />
        Jedyne, co się zmienia, to{" "}
        <span className="text-coral">system, który to spina</span>.
      </p>

      <div className="mt-10 rounded-xl bg-[#0F0F0F] p-6 sm:p-8">
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.09em] text-white/55 sm:text-xs">
          Program Dochodowe Studio · 21 000 zł / 6 miesięcy
        </p>

        <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="contents sm:flex sm:flex-1 sm:items-center sm:gap-5"
            >
              <div
                className={`w-full max-w-[15rem] rounded-lg border px-4 py-6 text-center ${
                  stat.highlighted ? "border-coral-bright" : "border-white/15"
                }`}
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-white/55">
                  {stat.label}
                </p>
                <p
                  className={`mt-2.5 text-[1.75rem] font-extrabold leading-tight ${
                    stat.highlighted ? "text-coral-bright" : "text-white"
                  }`}
                >
                  {stat.rate}
                </p>
                <p className="mt-3.5 text-lg font-semibold text-white">
                  {stat.revenue}
                </p>
                <p className="mt-1 text-sm text-white/50">{stat.detail}</p>
              </div>
              {i === 0 && (
                <ArrowRight
                  aria-hidden
                  className="h-5 w-5 shrink-0 rotate-90 text-white/50 sm:rotate-0"
                  strokeWidth={2.5}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-white/15 px-4 py-6 text-center">
          <p className="text-[2rem] font-extrabold leading-none text-coral-bright sm:text-[2.5rem]">
            200–600 000 zł
            <span className="text-lg font-semibold text-white sm:text-xl">
              /rok
            </span>
          </p>
          <p className="mt-3 text-[0.6875rem] font-semibold uppercase leading-relaxed tracking-[0.08em] text-white/55 sm:text-xs">
            Tyle może zarabiać butikowe studio treningu personalnego
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-line pt-9">
        <dl className="mx-auto max-w-lg">
          <div className="flex items-baseline gap-6">
            <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.4rem] font-bold italic leading-[1.2] tracking-[-0.02em] text-ink-subtle">
              1 studio
            </dt>
            <dd className="text-body-lg leading-[1.4] text-ink-muted">
              Ty jesteś sterem i okrętem.
            </dd>
          </div>

          <div className="mt-6 flex items-baseline gap-6">
            <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.6rem] font-bold italic leading-[1.2] tracking-[-0.025em] text-ink">
              Zespół
            </dt>
            <dd className="text-body-lg leading-[1.4] text-ink-muted">
              Studio działa, gdy Ciebie nie ma na sali.
            </dd>
          </div>

          <div className="mt-8 flex items-baseline gap-6">
            <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.4rem] font-bold italic leading-[1.2] tracking-[-0.03em] text-coral">
              87%
            </dt>
            <dd className="font-display text-[1.4rem] font-bold italic leading-[1.25] text-ink sm:text-[1.6rem]">
              tylu z programu otwiera kolejną lokalizację.
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-9 text-center">
        <RegisterCtaButton
          size="lg"
          className="w-full max-w-xs whitespace-normal text-center sm:w-auto sm:max-w-none sm:whitespace-nowrap"
        >
          Zarezerwuj swoje miejsce
        </RegisterCtaButton>
        <p className="mt-3.5 text-sm text-ink-subtle">
          Poznaj na tym bezpłatnym warsztacie sprawdzony plan osiągnięcia rentowności.
        </p>
      </div>
    </Section>
  );
}
import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

// --- Sub-components (Kept in the same file for encapsulation) ---

const SectionHeader = () => (
  <h2 className="text-center text-[1.875rem] font-bold italic leading-[1.15] sm:text-[2.375rem]">
    Ile Naprawdę Zarabia Studio, Które{" "}
    <span className="text-coral">Wdrożyło Przewidywalny Model?</span>
  </h2>
);

const RevenueCard = () => (
  <div className="mt-10 rounded-xl bg-[#0F0F0F] p-6 sm:p-8">
    <div className="mt-5 rounded-lg border border-white/15 px-4 py-6 text-center">
      <p className="text-[2rem] font-extrabold leading-none text-coral-bright sm:text-[2.5rem]">
        200–600 000 zł
        <span className="text-lg font-semibold text-white sm:text-xl">
          {" "}/rok
        </span>
      </p>
      <p className="mt-3 text-[0.6875rem] font-semibold uppercase leading-relaxed tracking-[0.08em] text-white/55 sm:text-xs">
        Tyle może zarabiać kameralne studio treningu personalnego
      </p>
    </div>
  </div>
);

const BusinessMilestones = () => (
  <div className="mt-12 border-t border-line pt-9">
    <dl className="mx-auto max-w-lg space-y-6">
      
      {/* 1 Studio */}
      <div className="flex items-baseline gap-6">
        <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.4rem] font-bold italic leading-[1.2] tracking-[-0.02em] text-ink-subtle">
          1 studio
        </dt>
        <dd className="text-body-lg leading-[1.4] text-ink-muted">
          Ty jesteś sterem i okrętem.
        </dd>
      </div>

      {/* Team */}
      <div className="flex items-baseline gap-6">
        <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.6rem] font-bold italic leading-[1.2] tracking-[-0.025em] text-ink">
          Zespół
        </dt>
        <dd className="text-body-lg leading-[1.4] text-ink-muted">
          Studio działa, gdy Ciebie nie ma na sali.
        </dd>
      </div>

      {/* Expansion (Added extra top margin to match your original design) */}
      <div className="mt-2 flex items-baseline gap-6">
        <dt className="w-[6.5rem] shrink-0 text-right font-display text-[1.4rem] font-bold italic leading-[1.2] tracking-[-0.03em] text-coral">
          87%
        </dt>
        <dd className="font-display text-[1.4rem] font-bold italic leading-[1.25] text-ink sm:text-[1.6rem]">
          osób z 1 placówką otwiera kolejne.
        </dd>
      </div>
      
    </dl>
  </div>
);

const CtaBlock = () => (
  <div className="mt-9 text-center">
    <RegisterCtaButton
      size="lg"
      className="w-full max-w-xs whitespace-normal text-center sm:w-auto sm:max-w-none sm:whitespace-nowrap"
    >
      Zarezerwuj swoje miejsce
    </RegisterCtaButton>
    <p className="mt-3.5 text-sm text-ink-subtle">
      Poznaj na tym bezpłatnym warsztacie sprawdzony plan osiągnięcia prawdziwej skali.
    </p>
  </div>
);

// --- Main Component ---

export function TransformationSection() {
  return (
    <Section>
      <SectionHeader />
      <RevenueCard />
      <BusinessMilestones />
      <CtaBlock />
    </Section>
  );
}
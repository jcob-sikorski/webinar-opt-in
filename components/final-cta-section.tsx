import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

export function FinalCtaSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Twój Następny Krok
        </p>
        <h2 className="mx-auto mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] font-bold italic leading-[1.1] tracking-[-0.02em] text-ink text-balance">
          Przestań Zamieniać Każdą Swoją Godzinę Na Pieniądze
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-[60ch] space-y-6 text-body-lg leading-[1.65] text-ink-muted text-pretty">
        <p>
          <strong className="font-semibold text-ink">Jedna decyzja</strong>{" "}
          dzieli Cię od zupełnie innej rzeczywistości. Ten sam trening, ta sama pasja i ta sama branża —{" "}
          <em className="italic">
            różnica polega na tym, czy codziennie walczysz o przetrwanie w pękającym grafiku, czy masz niezależny zespół i procesy, które generują zysk, gdy Ty odpoczywasz.
          </em>
        </p>
        <p>
          Podczas <strong className="font-semibold text-ink">bezpłatnego, merytorycznego warsztatu</strong>{" "}
          pokażę Ci fundamenty systemu, który przetestowałem na własnej skórze i w{" "}
          <strong className="font-semibold text-ink">
            ponad 40 studiach
          </strong>{" "}
          —{" "}
          <em className="italic">
            tego samego systemu, który pozwolił dziesiątkom trenerów odzyskać swój czas i zbudować biznesy z prawdziwego zdarzenia
          </em>
          .
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-lg border-t border-line pt-9 text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ink-subtle">
          Zaledwie 45 klientów · mały lokal 45 m² · ceny premium
        </p>
        <p className="mt-5 font-display text-[clamp(2.75rem,8vw,4.25rem)] font-bold italic leading-[0.95] tabular-nums tracking-[-0.035em] text-coral">
          80 000 zł
        </p>
        <p className="mt-4 text-body leading-[1.6] text-ink-muted">
          aż tyle zysku operacyjnego potrafi wygenerować zoptymalizowane studio w tym modelu.{" "}
          <em className="italic">Nie potrzebujesz 150 klientów ani ogromnej siłowni</em>, żeby osiągnąć{" "}
          <strong className="font-semibold text-ink">
            pełną wolność finansową
          </strong>
          .
        </p>
      </div>

      <p className="mx-auto mt-12 max-w-[34ch] text-center font-display text-[1.4rem] italic leading-[1.35] text-ink text-balance sm:text-[1.7rem]">
        Weź udział w warsztacie i zobacz, jak bezpiecznie przejść z modelu{" "}
        <strong className="font-semibold not-italic">
          "wszystko zależy ode mnie"
        </strong>{" "}
        do własnego, zyskownego studia butikowego.
      </p>

      <div className="mt-10 flex flex-col items-center">
        <RegisterCtaButton size="lg">Zapisz się na bezpłatny warsztat</RegisterCtaButton>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-subtle">
          <span>Ograniczony czas nagrania</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-coral" />
          <span>Ekskluzywne bonusy za obecność</span>
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-xs text-center">
        <span aria-hidden className="mx-auto block h-px w-16 bg-line" />
        <p className="mt-8 font-display text-body italic text-ink-muted">
          Widzimy się na żywo.
        </p>
        <p className="mt-2 font-display text-[1.3rem] font-bold italic text-ink">
          Bartłomiej Sikorski
        </p>
      </div>
    </Section>
  );
}
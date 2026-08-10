import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

export function FinalCtaSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Wymiana
        </p>
        <h2 className="mx-auto mt-5 max-w-* font-display text-[clamp(1.9rem,4.4vw,3rem)] font-bold italic leading-[1.1] tracking-[-0.02em] text-ink text-balance">
          Przestań Zamieniać Każdą Swoją Godzinę Na Pieniądze
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-[60ch] space-y-6 text-body-lg leading-[1.65] text-ink-muted text-pretty">
        <p>
          <strong className="font-semibold text-ink">Jedna decyzja</strong>{" "}
          dzieli Cię od zupełnie innego biznesu. Ten sam trening, ta sama sala, ci sami
          klienci —{" "}
          <em className="italic">
            różnica polega na tym czy sprzedajesz swój czas, czy masz system,
            który działa bez Ciebie.
          </em>
          .
        </p>
        <p>
          Podczas <strong className="font-semibold text-ink">bezpłatnego, 75-minutowego warsztatu</strong>{" "}
          pokażę Ci dokładnie te same{" "}
          <strong className="font-semibold text-ink">pięć filarów</strong>,
          które poukładałem w{" "}
          <strong className="font-semibold text-ink">
            czterech własnych studiach
          </strong>{" "}
          —{" "}
          <em className="italic">
            te same, dzięki którym dziś wyjeżdżam na wakacje dziesięć razy w
            roku i pracuję z basenu
          </em>
          .
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-lg border-t border-line pt-9 text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ink-subtle">
          1 klient · 1 000 zł/mc · 24 miesiące
        </p>
        <p className="mt-5 font-display text-[clamp(2.75rem,8vw,4.25rem)] font-bold italic leading-[0.95] tabular-nums tracking-[-0.035em] text-coral">
          24 000 zł
        </p>
        <p className="mt-4 text-body leading-[1.6] text-ink-muted">
          tyle generuje jeden klient, który zostaje z Tobą dwa lata — a to
          dopiero{" "}
          <strong className="font-semibold text-ink">
            jeden slot w grafiku Twojego zespołu
          </strong>
          , <em className="italic">nie limit Twoich własnych godzin</em>.
        </p>
      </div>

      <p className="mx-auto mt-12 max-w-[30ch] text-center font-display text-[1.4rem] italic leading-[1.35] text-ink text-balance sm:text-[1.7rem]">
        Bezpłatny warsztat, który pokaże Ci, jak z pojedynczych
        klientów zbudować{" "}
        <strong className="font-semibold not-italic">
          przychód rzędu 200–600 tys. zł rocznie
        </strong>
        .
      </p>

      <div className="mt-10 flex flex-col items-center">
        <RegisterCtaButton size="lg">Zapisz się na warsztat</RegisterCtaButton>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-subtle">
          <span>Nagranie na lata</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-coral" />
          <span>Protokół Otwarcia Studia</span>
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-xs text-center">
        <span aria-hidden className="mx-auto block h-px w-16 bg-line" />
        <p className="mt-8 font-display text-body italic text-ink-muted">
          Do zobaczenia na warsztacie.
        </p>
        <p className="mt-2 font-display text-[1.3rem] font-bold italic text-ink">
          Bartłomiej Sikorski
        </p>
      </div>
    </Section>
  );
}
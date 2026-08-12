import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

interface Persona {
  label: string;
  content: React.ReactNode;
}

const PERSONAS: Persona[] = [
  {
    label: "01 — Jesteś trenerem z pełnym grafikiem",
    content: (
      <>
        Pracujesz od rana do wieczora. Klienci przychodzą, płacą, wracają — ale
        Twój grafik nie ma już miejsca na kolejną osobę.{" "}
        <em className="italic">Urlop kosztuje Cię pieniądze, nie tylko czas.</em>{" "}
        <strong className="font-semibold text-ink">
          Chcesz w końcu przestać być jedynym trybikiem własnego biznesu.
        </strong>
      </>
    ),
  },
  {
    label: "02 — Jesteś właścicielem studio i stoisz na sali",
    content: (
      <>
        <strong className="font-semibold text-ink">
          Prowadzisz większość treningów, Ty odpisujesz na wiadomości, Ty
          zamykasz każdą sprzedaż.
        </strong>{" "}
        Kiedy wyjeżdżasz, <em className="italic">przychód leci w dół</em>.
        Marża jest cienka, a trenerzy robią wszystko po swojemu.{" "}
        <strong className="font-semibold text-ink">
          Chcesz w końcu wyjść z sali i poukładać model, zanim pomyślisz o
          kolejnej placówce.
        </strong>
      </>
    ),
  },
];

// 1. Extracted Card Component for cleaner mapping
function PersonaCard({ label, content }: Persona) {
  return (
    <article className="rounded-lg border border-line p-6 sm:p-8">
      <h3 className="text-xl font-bold text-coral sm:text-2xl">
        {label}
      </h3>
      <p className="mt-3 text-body text-ink-muted">
        {content}
      </p>
    </article>
  );
}

export function IsThisForYouSection() {
  return (
    <Section>
      {/* Header */}
      <h2 className="text-center text-3xl font-bold leading-tight sm:text-4xl">
        Ten Warsztat <br />
        Jest <span className="text-coral">Dla Ciebie</span> Jeśli
      </h2>

      {/* Personas Grid */}
      <div className="mt-8 flex flex-col gap-5">
        {PERSONAS.map((persona) => (
          <PersonaCard key={persona.label} {...persona} />
        ))}
      </div>

      {/* Footer Content Grouped */}
      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <p className="max-w-prose text-lg font-bold leading-snug text-ink sm:text-xl">
          <em className="italic">
            To może być najważniejsza godzina w Twoim kalendarzu.
          </em>
        </p>

        <p className="max-w-prose text-body italic text-ink-muted">
          <strong className="font-semibold not-italic text-ink">
            Studio nie rozwiązuje problemów jakie masz obecnie, tylko je
            powiększa, jeśli nie wiesz jak je rozwiązać.
          </strong>
        </p>

        <div className="mt-3">
          <RegisterCtaButton
            size="lg"
            className="w-full max-w-xs whitespace-normal sm:w-auto sm:max-w-none sm:whitespace-nowrap"
          >
            Zajmij swoje miejsce — 0 zł
          </RegisterCtaButton>
          <p className="mt-3.5 text-sm text-ink-subtle">
            Warsztat na żywo o tym, jak zbudować studio treningu personalnego, które zarabia bez Ciebie na sali.
          </p>
        </div>
      </div>
    </Section>
  );
}
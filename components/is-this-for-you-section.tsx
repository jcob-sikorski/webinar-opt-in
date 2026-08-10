import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

interface Persona {
  label: string;
  lead: string;
  body: React.ReactNode;
}

const PERSONAS: Persona[] = [
  {
    label: "01 — Trener z pełnym grafikiem",
    lead: "Masz pełny grafik — a dochód i tak ma sufit.",
    body: (
      <>
        Pracujesz od rana do wieczora. Klienci przychodzą, płacą, wracają — ale
        Twój grafik nie ma już miejsca na kolejną osobę.{" "}
        <strong className="font-semibold text-ink">
          Każda dodatkowa złotówka oznacza kolejną godzinę na sali.
        </strong>{" "}
        <em className="italic">
          Urlop kosztuje Cię pieniądze, nie tylko czas.
        </em>{" "}
        <strong className="font-semibold text-ink">
          Chcesz w końcu przestać być jedynym produktem własnego biznesu.
        </strong>
      </>
    ),
  },
  {
    label: "02 — Właściciel, który nadal stoi na sali",
    lead: "Masz już studio — a bez Ciebie nic nie działa.",
    body: (
      <>
        Masz lokal, może nawet zespół. Ale{" "}
        <strong className="font-semibold text-ink">
          to Ty prowadzisz większość treningów, Ty odpisujesz na wiadomości, Ty
          zamykasz każdą sprzedaż.
        </strong>{" "}
        Kiedy wyjeżdżasz,{" "}
        <em className="italic">przychód leci w dół</em>. Z zewnątrz
        to co masz wygląda jak biznes: masz to logo, lokal jest, są profesjonalne treningi.{" "}
        <em className="italic">
          A w środku wiesz, że utknąłeś na tych samych kilkudziesięciu tysiącach
          przychodu miesiąc w miesiąc
        </em>
        , marża jest cienka, a trenerzy robią wszystko po swojemu.{" "}
        <strong className="font-semibold text-ink">
          Chcesz w końcu wyjść z sali i poukładać model, zanim pomyślisz o
          kolejnej placówce.
        </strong>
      </>
    ),
  },
];

export function IsThisForYouSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Czy Ten Warsztat Naprawdę
        <br />
        Jest <span className="text-coral">Dla Ciebie</span>?
      </h2>

      <p className="mt-7 text-body-lg text-ink-muted">
        Ten warsztat jest skierowany do{" "}
        <strong className="font-semibold text-ink">
          dwóch konkretnych osób
        </strong>
        :
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {PERSONAS.map((persona) => (
          <article
            key={persona.label}
            className="rounded-lg border border-line p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-coral sm:text-2xl">
              {persona.label}
            </h3>
            <p className="mt-3 text-body font-semibold text-ink sm:text-body-lg">
              {persona.lead}
            </p>
            <p className="mt-3 text-body text-ink-muted">{persona.body}</p>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-prose text-center text-lg font-bold leading-snug text-ink sm:text-xl">
        Jeśli rozpoznajesz się w którymkolwiek z tych opisów —{" "}
        <em className="italic">
          to może być najważniejsza godzina w Twoim kalendarzu w tym miesiącu
        </em>
        .
      </p>

      <p className="mx-auto mt-6 max-w-prose text-center text-body italic text-ink-muted">
        Jeśli nie masz jeszcze żadnych klientów i dopiero zastanawiasz się, czy
        chcesz być trenerem — ten warsztat te jest dla Ciebie.{" "}
        <strong className="font-semibold not-italic text-ink">
          Studio nie rozwiązuje problemów jakie masz obecnie, tylko je
          powiększa jeśli nie wiesz jak je rozwiązać.
        </strong>{" "}
        Zbuduj najpierw pierwszą bazę i wróć, gdy Twój własny grafik zacznie
        być sufitem, a nie szansą.
      </p>

      <div className="mt-9 text-center">
        <RegisterCtaButton
          size="lg"
          className="w-full max-w-xs whitespace-normal text-center sm:w-auto sm:max-w-none sm:whitespace-nowrap"
        >
          Zajmij swoje miejsce — 0 zł
        </RegisterCtaButton>
        <p className="mt-3.5 text-sm text-ink-subtle">
          Warsztat na żywo. Protokół Dochodowego Studia dla tych, którzy
          zostaną do końca.
        </p>
      </div>
    </Section>
  );
}
import { CreditCard, Lock, Users } from "lucide-react";

import { Section } from "@/components/ui/section";

const PAYMENT = [
  {
    icon: CreditCard,
    title: "Jednorazowo albo w ratach",
    body: "Umowa jest elastyczna i dopasowana do Twojej sytuacji. Konkretny harmonogram rat ustalamy indywidualnie na rozmowie — nie ma jednego schematu dla wszystkich.",
  },
  {
    icon: Lock,
    title: "Rata to nie rabat",
    body: "To sposób finansowania pełnego zobowiązania — dokładnie tak, jak uczę Cię strukturyzować płatności Twoich własnych klientów.",
  },
];

export function BookingPriceSection() {
  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Inwestycja
      </p>
      <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Ile To Kosztuje — <span className="text-coral">Bez Owijania</span>
      </h2>

      <p className="mx-auto mt-7 max-w-[52ch] text-center text-body-lg text-ink-muted">
        Sam zapłaciłem za tę wiedzę{" "}
        <strong className="font-semibold text-ink">
          250 000 zł i dwa lata życia
        </strong>
        . Nie w reklamy — w mentorów, w kursy i przede wszystkim w błędy,
        które kosztowały mnie dziesiątki tysięcy, zanim nauczyłem się dobrze
        zatrudniać.
      </p>

      <div className="mt-10 rounded-xl border border-line border-t-[3px] border-t-coral-bright p-8 text-center sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          Program Dochodowe Studio — 6 miesięcy
        </p>
        <p className="mt-4 font-display text-[clamp(2.25rem,7vw,3.5rem)] font-bold leading-none text-ink">
          21 000 zł{" "}
          <span className="font-display text-xl font-semibold text-ink-muted">
            netto
          </span>
        </p>
        <p className="mt-5 text-body-lg text-ink-muted">
          To jest{" "}
          <strong className="font-semibold text-coral">116 zł dziennie</strong>{" "}
          — mniej niż jeden semi-personal, który sam sprzedajesz swoim
          klientom.
        </p>

        <hr className="my-7 border-line" />

        <p className="mx-auto max-w-[46ch] text-body text-ink-muted">
          Jeden klient płacący 1 000 zł miesięcznie, który zostaje z Tobą dwa
          lata, to{" "}
          <strong className="font-semibold text-ink">
            24 000 zł przychodu
          </strong>
          . Program kosztuje 21 000 zł.{" "}
          <em className="italic">
            Nie musisz zdobyć stu klientów, żeby to się spięło — musisz zdobyć
            jednego, który zostanie dłużej niż dwa miesiące.
          </em>
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PAYMENT.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-lg border border-line p-6"
            >
              <Icon className="h-5 w-5 text-coral" aria-hidden />
              <p className="mt-3.5 text-body font-semibold text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-body text-ink-muted">{item.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-line bg-panel p-6 sm:p-8">
        <h3 className="flex items-center gap-2.5 text-lg font-bold text-ink">
          <Users className="h-5 w-5 text-coral" aria-hidden />
          Dlaczego nie warto zwlekać
        </h3>
        <div className="mt-4 space-y-4 text-body text-ink-muted">
          <p>
            <strong className="font-semibold text-ink">
              Cena jest zamrożona na pół roku.
            </strong>{" "}
            To nie sztuczka sprzedażowa — to konsekwencja tego, że koszty
            prowadzenia programu rosną: mój czas, czas Kornelii, liczba osób,
            którą realnie mogę objąć uwagą na środowych sesjach.
          </p>
          <p>
            <strong className="font-semibold text-ink">
              Liczba miejsc jest naturalnie ograniczona.
            </strong>{" "}
            Środowe sesje działają dlatego, że są kameralne — pracuję na żywo
            nad Twoim konkretnym studiem, nie prowadzę wykładu do stu osób.
            Powyżej pewnej liczby ludzi ta sesja przestaje być tym, czym ma
            być.
          </p>
        </div>
      </div>
    </Section>
  );
}
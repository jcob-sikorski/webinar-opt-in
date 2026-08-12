import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

interface Failure {
  title: string;
  description: string;
  note?: string;
}

const FAILURES: Failure[] = [
  {
    title: "Model biznesowy",
    description:
      "sprzedawanie pojedynczych wejść lub karnetów bez systemu, który zatrzymuje klienta na 2 lata — to błąd, który wielu popełnia już na starcie, i który potem kosztuje najwięcej, żeby naprawić.",
  },
  {
    title: "Marketing",
    description:
      "brak systemu, który przynosi klientów niezależnie od nastroju czy sezonu, leady giną w wiadomościach, a profil IG nie mówi w 3 sekundy jaki problem rozwiązuje — to jednakowo zabija nowe studia i te już działające.",
  },
  {
    title: "Zespół",
    description:
      "rekrutacja oparta na przypadku zamiast na systemie. Trenerzy uciekają lub nie są godni zaufania, a właściciel zostaje jedyną osobą, która pilnuje wszystkiego na sali — czy to już się dzieje, czy dopiero czeka.",
  },
  {
    title: "Finanse",
    description:
      "brak przejrzystości w liczbach — ile można zainwestować, a ile zostawić dla siebie. Bez tego każda decyzja, na każdym etapie, jest zgadywanką.",
  },
  {
    title: "Zarządzanie",
    description:
      "biznes zbudowany tak, że urlop oznacza stratę, bo wszystko opiera się na jednej osobie. To pułapka, w którą łatwo wpaść od pierwszego dnia, jeśli system nie jest ustawiony inaczej od początku.",
  },
];

export function WebinarFailuresSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.75rem] font-bold leading-[1.15] sm:text-[2.125rem]">
        Oto 5 filarów, które decydują, czy studio zarabia bez Ciebie:
      </h2>

      <p className="mt-8 text-body-lg text-ink-muted">
        Przeanalizowałem{" "}
        <strong className="font-semibold text-ink">
          dziesiątki studiów treningu personalnego
        </strong>{" "}
        w całej Polsce — jednoosobowe działalności, studia butikowe, sieci
        wielolokalizacyjne, a także osoby, które dopiero planowały otworzyć własne miejsce — i{" "}
        <em className="italic">prawie zawsze widzę te same 5 błędów</em>, które decydują, czy 
        studio zarabia bez właściciela, czy staje się jego więzieniem. Czyli{" "}
        <strong className="font-semibold text-ink">
          model, marketing, zespół, liczby i zarządzanie
        </strong>
        .
      </p>

      <ul className="mt-8 divide-y divide-line">
        {FAILURES.map((failure) => (
          <CheckItem key={failure.title} className="py-6">
            <p className="text-body text-ink-muted">
              <strong className="font-semibold text-ink">
                {failure.title}
              </strong>{" "}
              — {failure.description}
            </p>
            {failure.note && (
              <p className="mt-3 text-body italic text-ink-subtle">
                {failure.note}
              </p>
            )}
          </CheckItem>
        ))}
      </ul>

      <p className="mx-auto mt-9 max-w-prose text-center text-body-lg font-semibold italic text-ink">
        Jeśli jeden z tych filarów jest dla Ciebie znajomy, to ten warsztat jest przeznaczony dla Ciebie.
      </p>
    </Section>
  );
}
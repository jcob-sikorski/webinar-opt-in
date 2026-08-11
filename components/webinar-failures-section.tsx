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
      "sprzedajesz pojedyncze wejścia lub karnety, a potem nie wiesz co zrobić, żeby taki klient został na 2 lata.",
  },
  {
    title: "Marketing",
    description:
      "nie masz systemu, który przynosi klientów niezależnie od Twojego nastroju, leady giną w wiadomościach, a profil IG nie mówi w 3 sekundy jaki problem rozwiązujesz.",
  },
  {
    title: "Zespół",
    description:
      'Twoja obecna rekrutacja to loteria. Trenerzy uciekają lub nie są godni zaufania, a Ty jesteś jedyną osobą, która pilnuje wszystkiego na sali.',
  },
  {
    title: "Finanse",
    description:
      "nie masz przejrzystości w liczbach. Nie wiesz ile możesz zainwestować, a ile zostawić dla siebie.",
  },
  {
    title: "Zarządzanie",
    description:
      "Twój urlop oznacza stratę, bo wszystko opiera się na Tobie.",
  },
];

export function WebinarFailuresSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.75rem] font-bold leading-[1.15] sm:text-[2.125rem]">
        Oto, co robisz nie tak:
      </h2>

      <p className="mt-8 text-body-lg text-ink-muted">
        Przeanalizowałem{" "}
        <strong className="font-semibold text-ink">
          dziesiątki studiów treningu personalnego
        </strong>{" "}
        w całej Polsce — jednoosobowe działalności, studia butikowe, sieci
        wielolokalizacyjne — i{" "}
        <em className="italic">prawie zawsze widzę te same błędy</em>. Czyli{" "}
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
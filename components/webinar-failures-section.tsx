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
      "sprzedajesz pojedyncze wejścia i wygasające pakiety, a nie zaprojektowaną ścieżkę. Reklama, DM, konsultacja, trening — to osobne wyspy, które codziennie ręcznie spinasz. To nie jest ścieżka klienta. To chaos, który z zewnątrz wygląda jak biznes.",
  },
  {
    title: "Marketing",
    description:
      "nie masz systemu, który przynosi klientów niezależnie od Twojego nastroju i wolnego czasu — masz nadzieję, że ktoś w końcu napisze. Leady giną w wiadomościach, bo nikt ich nie pilnuje, a profil nie mówi w dziesięć sekund, dla kogo jesteś i jaki problem rozwiązujesz.",
  },
  {
    title: "Zespół",
    description:
      '"fajny człowiek, ma kurs, spróbujemy" — to nie jest rekrutacja. To loteria. Bez metodyki twardej i miękkiej każdy trener robi po swojemu, a Ty zostajesz jedyną osobą, która pilnuje jakości na sali.',
  },
  {
    title: "Liczby",
    description:
      "nie wiesz, ile realnie zostaje z jednej godziny sali, ile kosztuje Cię pusty slot i czy gonisz za najtańszym leadem zamiast za właściwym klientem. Duży przychód bez znajomości marży to tylko duży, droższy chaos.",
  },
  {
    title: "Zarządzanie",
    description:
      "wszystko nadal działa tylko wtedy, gdy Ty tam jesteś. Urlop oznacza stratę, choroba oznacza stratę — bo jesteś Rzemieślnikiem, który sam jest systemem, a nie Architektem, który ten system zaprojektował.",
  },
];

export function WebinarFailuresSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.75rem] font-bold leading-[1.15] sm:text-[2.125rem]">
        Oto, co naprawdę jest nie tak z Twoim studiem
        (albo dlaczego wciąż stoisz na sali)
      </h2>

      <p className="mt-8 text-body-lg text-ink-muted">
        Przeanalizowałem{" "}
        <strong className="font-semibold text-ink">
          dziesiątki studiów treningu personalnego
        </strong>{" "}
        w całej Polsce — jednoosobowe działalności, studia butikowe, sieci
        wielolokalizacyjne — i{" "}
        <em className="italic">prawie zawsze widzę te same pęknięcia</em>. Nie
        w jednym miejscu, tylko w konkretnych filarach, z których składa się
        każdy stabilny biznes:{" "}
        <strong className="font-semibold text-ink">
          model, marketing, zespół, liczby i zarządzanie
        </strong>
        . Większość studiów ma{" "}
        <em className="italic">dziury w kilku z nich naraz</em>.
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
        To nie jest teoria. To pięć filarów, które sprawdzam jako pierwsze,
        kiedy ktoś prosi mnie o audyt swojego studia.
      </p>
    </Section>
  );
}
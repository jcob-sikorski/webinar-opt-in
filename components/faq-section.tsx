import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

// Emphasis helper — keeps the data array readable
const M = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

const FAQS: FaqItem[] = [
  {
    question: "Co jeśli nie mogę być na żywo?",
    answer: (
      <>
        Dostaniesz <M>nagranie na lata</M> — bez limitu czasowego. Jest jedno
        zastrzeżenie: <M>Protokół Dochodowego Studia</M> trafia tylko do osób,
        które zostaną z nami do samego końca warsztatu na żywo — to jedna z
        trzech rzeczy, o które proszę na starcie. Bycie na żywo daje Ci też
        możliwość zadawania pytań na czacie, na które odpowiadam wprost.
      </>
    ),
  },
  {
    question: "Czym dokładnie jest Protokół Dochodowego Studia?",
    answer: (
      <>
        To nie jest kolejne nagranie do obejrzenia raz i odłożenia na półkę.
        To <M>cały model Dochodowego Studia od A do Z</M>, zbudowany na
        podstawie pracy z ponad 40 placówkami, które już go wdrożyły — każdy
        etap, każdy typowy błąd i jego rozwiązanie, w formie, do której
        wracasz dokładnie wtedy, kiedy jest Ci to potrzebne.
      </>
    ),
  },
  {
    question: "Nie mam jeszcze studia — czy to dla mnie?",
    answer: (
      <>
        Tak — <M>jeśli masz kapitał lub dostęp do finansowania</M> i realnie
        myślisz o otwarciu własnego butikowego studia, a nie tylko ciekawi Cię
        temat. Jeśli dziś nie masz jeszcze żadnych klientów jako trener i
        dopiero zastanawiasz się, czy w ogóle chcesz pracować z ludźmi — ten
        warsztat przebije Twoje oczekiwania. Studio nie rozwiązuje braku
        klientów, tylko zwiększa konsekwencje ich braku.
      </>
    ),
  },
  {
    question: "Mam etat i nie mogę go teraz rzucić — czy mogę zacząć równolegle?",
    answer: (
      <>
        Tak. To <M>nie jest model, który wymaga</M>, żebyś jutro złożył
        wypowiedzenie. Pokazuję dokładnie, jak wygląda pierwszy tydzień, kiedy
        jeszcze pracujesz gdzie indziej, i jak rozłożyć pierwsze kroki, żeby
        zmieściły się w Twoim obecnym grafiku.
      </>
    ),
  },
  {
    question: "Czy to zadziała w mniejszym mieście?",
    answer: (
      <>
        Małe studio butikowe <M>nie jest sieciówką</M> — nie potrzebujesz
        setek klientów. Kilkunastu dobrze obsłużonych, płacących
        klientów wystarczy, żeby zbudować bardzo sensowny biznes, także w
        mniejszej miejscowości. Na warsztacie pokazuję dokładnie, jak liczyć,
        ilu klientów realnie potrzebujesz w Twoim przypadku.
      </>
    ),
  },
  {
    question: "Ile kosztuje otwarcie studia?",
    answer: (
      <>
        Nie potrzebujesz inwestora ani <M>450–600 tys. zł</M>. Pierwszy lokal
        w modelu Dochodowego Studia otwierasz za{" "}
        <M>35–100 tys. zł brutto</M>, zależnie od standardu — to kwota, która
        obejmuje już wyposażenie i adaptację lokalu, nie tylko sam sprzęt.
        Wariant START (35–45 tys. zł) daje studio, które ma działać i
        zarabiać, nie imponować. Do tego dochodzi indywidualnie kaucja,
        pierwszy czynsz i podstawowa rezerwa operacyjna — a przy dobrze
        dobranym lokalu (czynsz w okolicach 10–20% przyszłego przychodu)
        studio potrafi spłacić się w ciągu dwóch–trzech miesięcy działania.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Zanim się zdecydujesz
        </p>
        <h2 className="mx-auto mt-5 max-w-[28ch] font-display text-[clamp(1.75rem,3.9vw,2.6rem)] font-bold uppercase leading-[1.1] tracking-wide text-ink text-balance">
          Szybkie Odpowiedzi, Zanim Zarezerwujesz Miejsce
        </h2>
      </div>

      <dl className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {FAQS.map((faq) => (
          <div key={faq.question} className="py-8">
            <dt className="font-display text-[1.1rem] font-bold uppercase leading-[1.3] tracking-wide text-coral sm:text-[1.25rem]">
              {faq.question}
            </dt>
            <dd className="mt-3.5 max-w-[58ch] text-body leading-[1.7] text-ink-muted text-pretty">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
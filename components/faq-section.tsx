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
    question: "Warsztat jest za darmo. W czym haczyk?",
    answer: (
      <>
        Nie ma tu żadnego haczyka w sensie ukrytych opłat. Warsztat jest darmowy, bo{" "}
        <M>tak buduję relacje z właścicielami studiów</M> — pokazuję konkretny model, a Ty sam
        oceniasz, czy chcesz w to iść dalej. Jeśli po godzinie uznasz, że to nie dla Ciebie,{" "}
        <M>i tak wychodzisz z gotowym planem</M>, który możesz wdrożyć samodzielnie.
      </>
    ),
  },
  {
    question: "Dlaczego mam słuchać akurat Ciebie, a nie kogoś innego z branży?",
    answer: (
      <>
        Bo <M>nie uczę teorii — pokazuję to, co sam wdrożyłem</M>. Cztery działające placówki
        Sportowe Przedmieście, 38M zł wygenerowane z klientami i ponad 40 instalacji tego
        systemu u innych właścicieli w ciągu roku.
      </>
    ),
  },
  {
    question: "Byłem/byłam już na kilku takich warsztatach i zawsze kończy się na sprzedaży.",
    answer: (
      <>
        Rozumiem tę czujność, różnica jest taka, że{" "}
        <M>ta godzina to nie jest przynęta na dalszą sprzedaż</M> — tu pokażę Ci realny model, który faktycznie zarabia bez
        właściciela. Jeśli pod koniec zechcesz porozmawiać o dalszej współpracy — świetnie.
        Jeśli nie — <M>i tak masz z czym wyjść</M>.
      </>
    ),
  },
  {
    question: "Mam już swoją wizję. Po co mi kolejny głos w głowie?",
    answer: (
      <>
        Ten warsztat nie jest po to, żeby zastąpić kogoś, z kim już pracujesz — jest po to, żeby{" "}
        <M>dać Ci konkretny model</M>, z którym możesz skonfrontować to, co robisz teraz. Jeśli
        Twój obecny kierunek się pokrywa — świetnie, wyjdziesz z potwierdzeniem. Jeśli nie —{" "}
        <M>lepiej wiedzieć to teraz</M>, niż za rok.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Wahasz się zapisać?
        </p>
        <h2 className="mx-auto mt-5 max-w-[28ch] font-display text-[clamp(1.75rem,3.9vw,2.6rem)] font-bold uppercase leading-[1.1] tracking-wide text-ink text-balance">
          Rozwiejmy Twoje obawy
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
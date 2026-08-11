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
    question: "Mój grafik pęka w szwach. Skąd mam wziąć czas na ten webinar?",
    answer: (
      <>
        Jeśli pracujesz od świtu do nocy i nie masz nawet chwili na spokojny obiad, to <M>właśnie dlatego MUSISZ tu być</M>. Ten warsztat to nie jest kolejny film do puszczenia w tle. To brutalnie szczera rozmowa o tym, jak przestać być niewolnikiem własnego biznesu, wyrwać się z chaosu i w końcu <M>odzyskać swój czas i życie prywatne</M>.
      </>
    ),
  },
  {
    question: "Boję się, że nie dam rady. Czy własne studio jest w ogóle dla mnie?",
    answer: (
      <>
        Strach przed pierwszym krokiem paraliżuje wielu wybitnych trenerów. Otwarcie własnego, butikowego miejsca to nie jest skok na głęboką wodę bez spadochronu. To świadoma decyzja o tym, że masz dość <M>zarabiania tylko wtedy, gdy fizycznie stoisz na sali</M>. Jeśli marzysz o przestrzeni, w której to Ty ustalasz zasady – pokażę Ci, że masz w sobie wszystko, by to osiągnąć.
      </>
    ),
  },
  {
    question: "Co, jeśli to ryzyko mnie przerośnie i stracę to, co mam teraz?",
    answer: (
      <>
        Nikt nie każe Ci palić za sobą mostów z dnia na dzień. Budowanie wolności finansowej wymaga mądrości, a nie brawury. Pokażę Ci historie ludzi, którzy zaczynali, <M>łącząc ten proces z pracą na etacie</M>, a dziś zarządzają własnymi zespołami i podróżują po świecie z czystą głową. Twoja transformacja odbędzie się mądrze i krok po kroku.
      </>
    ),
  },
  {
    question: "Działam w małym mieście. Tu ludzie nie zapłacą stawek premium...",
    answer: (
      <>
        To jedno z najbardziej krzywdzących przekonań, które trzyma Cię w miejscu. Twoi klienci <M>nie szukają najtańszego karnetu</M> – szukają transformacji i uwagi, za którą chętnie zapłacą. Udowodnię Ci to na przykładach trenerów z małych miejscowości, którzy przestali konkurować ceną, zbudowali prestiż i dziś cieszą się kolejką chętnych, pracując za godne pieniądze.
      </>
    ),
  },
  {
    question: "Nie mam wielkich oszczędności. Czy to w ogóle ma sens?",
    answer: (
      <>
        Wielki, przeszklony lokal i maszyny za miliony to ego, a nie biznes. Pokażę Ci, jak na <M>zaledwie kilkudziesięciu metrach</M> stworzyć kameralne, ekskluzywne miejsce, które zacznie zarabiać błyskawicznie. Zobaczysz, że zamiast przepalać oszczędności życia, możesz zbudować wysoce rentowny biznes oparty na relacjach i mądrym modelu, a nie na worku pieniędzy.
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
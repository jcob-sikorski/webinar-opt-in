import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/case-study-card";

export function ScriptIsTheBusinessSection() {
  const CASE_STUDIES = [
    {
      name: "Ela Ziółkowska",
      figure: "47 000 zł / msc.",
      photo: (
        <img
          src="https://ucarecdn.com/5e1654aa-f4af-4f92-9816-565479e06d64/Screenshot20260803at10920AM.png"
          alt="Ela Ziółkowska"
          className="aspect-[3/4] w-full rounded-md object-cover"
        />
      ),
      description:
        "„To jest fajne, nie zostajemy sami przez to pół roku mentoringu. Cały czas jesteśmy zaopiekowani. Gdzieś tam właśnie Bartek i jego zespół, nie mam słów, żeby po prostu to opisać. To są ludzie z prawdziwego zdarzenia i którzy, chcesz czy nie chcesz, oni ci po prostu pomogą. Czy masz te wątpliwości, czy nie masz, prędzej czy później osiągniesz sukces.”",
    },
    {
      name: "Patryk Grzemski",
      figure: "84 000 zł / msc.",
      photo: (
        <img
          src="https://ucarecdn.com/81f5306f-f2a9-4960-aa9d-bc3e2e26ecd2/Screenshot20260803at11909AM.png"
          alt="Patryk Grzemski"
          className="aspect-[3/4] w-full rounded-md object-cover"
        />
      ),
      description:
        "„Dzięki temu mam własne studio, ogarnięty team trenerski oraz to, co najważniejsze — znacznie więcej czasu dla siebie. Zamieniłem pracę na biznes z głową i ciągłym rozwojem, który pozwala mi pracować mniej, a zarabiać więcej.”",
    },
    {
      name: "Włodek Troszyn",
      figure: "100 000 zł / msc.",
      photo: (
        <img
          src="https://ucarecdn.com/2ebc4530-7f86-427f-9a45-1b3529facbf9/Screenshot20260803at12420AM.png"
          alt="Włodek Troszyn"
          className="aspect-[3/4] w-full rounded-md object-cover"
        />
      ),
      description:
        "„Co do podjętych decyzji — pół roku temu poznałem świetnego gościa, Bartka, który zaraził mnie swoim mindsetem, wizją przyszłości i nastawieniem na rozwój. Uważam, że to była moja najlepsza decyzja w życiu, żeby zainwestować w siebie, podjąć odpowiednie kroki i dołączyć do mentoringu u Bartka.”",
    },
  ];

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mx-auto max-w-[34ch] text-body-lg leading-[1.55] text-ink-subtle text-balance">
          Większość ludzi myśli, że wielki metraż i ogromne koszty stałe to przepustka do wolności.
        </p>

        <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Ja wiem, że jest zupełnie odwrotnie
        </p>

        <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold italic leading-[1.05] tracking-[-0.02em] text-ink text-balance">
          Jakość<span className="text-coral"> Ścieżki Klienta</span> i Zespół to Twój Biznes.
        </h2>

        <p className="mx-auto mt-7 max-w-[42ch] text-body-lg leading-[1.6] text-ink-muted text-pretty">
          Studio to przestrzeń, w której klienci osiągają prawdziwą transformację, a Ty budujesz zyskowną firmę, która pracuje na Ciebie.
        </p>
      </div>

      <div className="mt-14">
        <div className="mx-auto flex max-w-3xl items-center gap-5">
          <span aria-hidden className="h-px flex-1 bg-ink/10" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ink-subtle">
            Prawdziwe aktywo buduje się w oparciu o sprawdzony system
          </span>
          <span aria-hidden className="h-px flex-1 bg-ink/10" />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.name} {...study} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[46ch] space-y-6 text-body-lg leading-[1.65] text-ink-muted">
        <p>
          Każde studio, które zarabia bez właściciela na sali, pod spodem{" "}
          <strong className="font-semibold text-ink">działa na systemie, a nie na jego godzinach</strong>. Oferta, proces sprzedaży i metodyka robią robotę,
          którą dziś robisz osobiście — powtarzalnie, w cudzych rękach, bez
          spadku jakości.
        </p>
        <p className="font-display text-[1.15em] italic leading-[1.55] text-ink">
          To szkolenie jest o tym, jak ten system wdrożyć u siebie — czy sprzedajesz treningi personalne za 150 zł, semi-personal, czy trzymiesięczny program transformacyjny za kilka tysięcy.
        </p>
      </div>

      <div className="mt-14 flex flex-col items-center">
        <RegisterCtaButton size="lg">Chcę wziąć udział — 0 zł</RegisterCtaButton>
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-subtle">
          <span>Dostęp natychmiastowy</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-coral" />
          <span>Nagranie na lata</span>
        </p>
      </div>
    </Section>
  );
}
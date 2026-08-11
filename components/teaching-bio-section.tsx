import { CheckItem } from "@/components/ui/check-item";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

interface Highlight {
  title: string;
  description: string;
}

const STATS = [
  { value: "+38M zł", label: "Wygenerowane z klientami" },
  { value: "80 tys. zł", label: "Miesięczny rekord w placówce 80 m²" },
  { value: "40 instalacji", label: "Systemu w rok" },
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "80 tys. zł przychodu w jednym miesiącu",
    description:
      "w mojej głównej placówce na 80 m² — dowód, że mały metraż nie jest ograniczeniem, jeśli model jest poukładany.",
  },
  {
    title: "Pakiety za 5 900 i 6 900 zł sprzedane 150–200 razy",
    description:
      "w mieście liczącym 7 500 mieszkańców — Poddębice. Jeśli to działa tam, działa wszędzie.",
  },
  {
    title: "+40 wdrożonych instalacji systemu w ciągu roku",
    description:
      "jako mentor, w rynku szkoleń dla właścicieli studiów, który sam jest bardzo konkurencyjny.",
  },
  {
    title: "Klienci generujący 30 tys. zł bez samodzielnego prowadzenia treningów",
    description:
      "to jest coś, czego nie da się przeoczyć w tej branży — i nie znam nikogo, kto robi to lepiej.",
  },
];

interface TeachingBioSectionProps {
  /** Pass a real headshot (<img>/<Image>) to replace the placeholder circle. */
  photo?: React.ReactNode;
}

interface TeachingBioSectionProps {
  /** Pass a real headshot (<img>/<Image>) to override the default. */
  photo?: React.ReactNode;
}

export function TeachingBioSection({ photo }: TeachingBioSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Kim jest prowadzący?
      </h2>
      <hr className="mx-auto mt-5 w-40 border-t-2 border-dashed border-coral-bright/60" />

      {/* Headshot slot */}
      <div className="mx-auto mt-9 h-44 w-44 overflow-hidden rounded-full sm:h-48 sm:w-48">
        {photo ?? (
          <img
            src="https://ucarecdn.com/4affc127-f414-4273-9d91-e2ca72688417/Screenshot20260803at120107PM.png"
            alt="Bartek Sikorski"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-line px-2 py-5 text-center sm:px-4 sm:py-6"
          >
            <p className="text-xl font-extrabold text-coral sm:text-[1.75rem]">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[0.625rem] font-medium uppercase leading-snug tracking-[0.07em] text-ink-subtle sm:text-[0.6875rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-9 text-body-lg text-ink-muted">
        Jestem <strong className="font-semibold text-ink">Bartek Sikorski.</strong>{" "}
        Ostatnie <strong className="font-semibold text-ink">5 lat</strong> spędziłem
        budując studia treningu personalnego,{" "}
        <em className="italic">które zarabiają, kiedy mnie tam nie ma</em>. Wcześniej jako
        trener-solo, teraz dziś inwestor mający na koncie{" "}
        <strong className="font-semibold text-ink">cztery placówki</strong> pod
        marką <strong className="font-semibold text-ink">Sportowe Przedmieście</strong>.
        Ten temat{" "}
        <em className="italic">wchłonął mnie do obsesji</em> — po tym, jak zainwestowałem{" "}
        <strong className="font-semibold text-ink">ponad 250 000 zł</strong> w
        mentorów i kursy, rozłożyłem na czynniki pierwsze model biznesowy,
        marketing, sprzedaż i zarządzanie zespołem w tej branży, aż{" "}
        <em className="italic">sam zacząłem uczyć tego innych właścicieli studiów</em>.
      </p>

      <p className="mt-5 text-body-lg text-ink-muted">
        Kilka faktów, jeśli jeszcze mnie nie znasz:
      </p>

      <ul className="mt-5 divide-y divide-line">
        {HIGHLIGHTS.map((highlight) => (
          <CheckItem key={highlight.title} className="py-5">
            <p className="text-body text-ink-muted">
              <strong className="font-semibold text-ink">
                {highlight.title}
              </strong>{" "}
              — {highlight.description}
            </p>
          </CheckItem>
        ))}
      </ul>
    </Section>
  );
}
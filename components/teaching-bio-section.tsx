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
    title: "40 wdrożonych instalacji systemu w ciągu roku",
    description:
      "jako mentor, w rynku szkoleń dla właścicieli studiów, który sam jest bardzo konkurencyjny.",
  },
  {
    title: "10 nowych placówek w pierwsze trzy miesiące pracy jako mentor",
    description:
      "bo jestem praktykiem, nie teoretykiem — praktyczność dała mi ten wynik.",
  },
  {
    title: "Klienci generujący 30 tys. zł bez samodzielnego prowadzenia treningów",
    description:
      "to jest coś, czego nie da się przeoczyć w tej branży — i nie znam nikogo, kto robi to lepiej.",
  },
  {
    title: "Od zera do dwóch placówek i dziesięcioosobowego zespołu",
    description:
      "rozwijam ludzi od pełnego grafiku trenera-solo aż do tego etapu — konsekwentnie, nie jednorazowo.",
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
        Kto właściwie tego uczy
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
        Ostatnie <strong className="font-semibold text-ink">pięć lat</strong> spędziłem,
        robiąc jedną rzecz: budując studia treningu personalnego,{" "}
        <em className="italic">które zarabiają, kiedy mnie tam nie ma</em>. Jako
        trener-solo, jako właściciel jednego studia, dziś jako inwestor budujący{" "}
        <strong className="font-semibold text-ink">cztery placówki</strong> pod
        marką <strong className="font-semibold text-ink">Sportowe Przedmieście</strong>,
        razem z zespołem. To jest to, co robię. Ten temat{" "}
        <em className="italic">wchłonął mnie do obsesji</em> — po tym, jak w{" "}
        <strong className="font-semibold text-ink">2022 roku</strong> straciłem{" "}
        <strong className="font-semibold text-ink">dziesiątki tysięcy złotych</strong>{" "}
        przez brak systemu, zainwestowałem{" "}
        <strong className="font-semibold text-ink">ponad 250 000 zł</strong> w
        mentorów i kursy, rozłożyłem na czynniki pierwsze model biznesowy,
        marketing, sprzedaż i zarządzanie zespołem w tej branży, aż{" "}
        <em className="italic">sam zacząłem uczyć tego innych właścicieli studiów</em>.
      </p>

      <p className="mt-5 text-body-lg text-ink-muted">
        Kilka konkretów, gdybyśmy się jeszcze nie poznali:
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

      <p className="mt-9 text-body-lg text-ink-muted">
        <strong className="font-semibold text-ink">
          To nie jest żadna teoria i nie jestem kolejnym &quot;coachem od
          fitnessu&quot;.
        </strong>{" "}
        To <strong className="font-semibold text-ink">cztery studia</strong>{" "}
        marki "Sportowe Przedmieście", <strong className="font-semibold text-ink">
          rekord 80 tys. zł przychodu
        </strong>{" "}
        w jednym miesiącu, i{" "}
        <em className="italic">
          najlepsze wyniki klientów, jakie widziałem w tej branży w Polsce
        </em>
        . Nie robię tylko marketingu — robię szkolenia zespołu, zatrudnianie i
        całą resztę systemu.{" "}
        <em className="italic">
          Dlatego też jestem najdroższy na rynku
        </em>
        : to filtr, dzięki któremu rozmawiam tylko z ludźmi, z którymi mamy{" "}
        <strong className="font-semibold text-ink">wspólny język</strong>.
      </p>
    </Section>
  );
}
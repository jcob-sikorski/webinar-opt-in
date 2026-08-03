import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

const PROOF: { highlight: string; caption: string }[] = [
  {
    highlight: "66 000 zł w pierwszym miesiącu współpracy",
    caption:
      "Joanna Wójcik — od sekundy przed bankructwem do stabilnego studia",
  },
  {
    highlight: "Zespół 4 trenerów",
    caption:
      "Klaudia Ostrowska — od bycia najlepszym i jedynym trenerem w studio do poukładanej machiny",
  },
  {
    highlight: "Z 2 do 3 studiów",
    caption:
      "Michał Mekitow — dziś ma managera i poukładane procesy zamiast robienia wszystkiego samemu",
  },
];

export function ConfirmationProofSection() {
  return (
    <Section width="wide">
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Osoby, Które Były{" "}
        <span className="text-coral">Dokładnie Tam, Gdzie Ty Teraz</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {PROOF.map((item) => (
          <figure key={item.caption}>
            <div className="overflow-hidden rounded-lg">
              <PhotoPlaceholder aspect="aspect-[4/3]" label="Zrzut ekranu" />
            </div>
            <figcaption className="mt-3.5 text-center">
              <p className="text-body font-semibold text-coral">
                {item.highlight}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-lg rounded-xl border border-line border-t-[3px] border-t-coral-bright p-7 text-center">
        <p className="text-body-lg font-semibold text-ink">
          Jedno przypomnienie, zanim zamkniesz tę stronę:
        </p>
        <p className="mt-3 text-body text-ink-muted">
          Nagranie zostaje z Tobą{" "}
          <strong className="font-semibold text-ink">na zawsze</strong>.{" "}
          <em className="italic">
            Protokół Dochodowego Studia dostają wyłącznie osoby, które zostają
            na żywo do samego końca warsztatu
          </em>
          . Zablokuj kalendarz na{" "}
          <strong className="font-semibold text-ink">
            14 sierpnia, 19:00
          </strong>{" "}
          — nie na &bdquo;obejrzę później&rdquo;.
        </p>
      </div>
    </Section>
  );
}

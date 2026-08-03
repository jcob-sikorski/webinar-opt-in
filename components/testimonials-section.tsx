import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

const PHOTO_ASPECT = "aspect-[4/3]";

interface Testimonial {
  highlight?: string;
  caption?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    highlight: "66 000 zł w pierwszym miesiącu współpracy",
    caption: "Joanna Wójcik — od sekundy przed bankructwem do stabilnego studia",
  },
  {
    highlight: "20 tys. zł zysku, studio na pół etatu",
    caption:
      "Piotr Smulczyk — od trenera pracującego w środy do szefa własnego zespołu",
  },
  {
    highlight: "7 trenerów w zespole",
    caption:
      "Krzysztof Mariańczyk — od bycia sterem i okrętem studia do ciągłych wyjazdów za granicę, gdy firma działa bez niego",
  },
  {
    highlight: "Zespół 4 trenerów",
    caption:
      "Klaudia Ostrowska — od bycia najlepszym i jedynym trenerem w studio do poukładanej machiny",
  },
  {
    highlight: "300 godzin pracy → własne studio",
    caption:
      "Alicja Wieczorek — od recepcji i grupówek do własnych treningów personalnych",
  },
  {
    highlight: "Z 2 do 3 studiów",
    caption:
      "Michał Mekitow — dziś ma managera i poukładane procesy zamiast robienia wszystkiego samemu",
  },
];

interface TestimonialsSectionProps {
  /** Override individual screenshots by index. */
  photos?: Partial<Record<number, React.ReactNode>>;
}

export function TestimonialsSection({ photos }: TestimonialsSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Co Mówią <span className="text-coral">Właściciele</span>
        <br />
        <span className="text-coral">Po Wdrożeniu</span> Tego Modelu
      </h2>

      <p className="mt-6 text-center text-body-lg text-ink-muted">
        Prawdziwe historie właścicieli studiów, którzy wdrożyli ten model.
      </p>

      <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2">
        {TESTIMONIALS.map((item, i) => (
          <figure key={i}>
            <div className="overflow-hidden rounded-lg">
              {photos?.[i] ?? (
                <PhotoPlaceholder aspect={PHOTO_ASPECT} label="Zrzut ekranu" />
              )}
            </div>
            {(item.highlight || item.caption) && (
              <figcaption className="mt-3.5 text-center">
                {item.highlight && (
                  <p className="text-body font-semibold text-coral">
                    {item.highlight}
                  </p>
                )}
                {item.caption && (
                  <p className="mt-1 text-body text-ink-muted">
                    {item.caption}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}
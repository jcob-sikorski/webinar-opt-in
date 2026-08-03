import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

const GALLERY = [
  "Writing a stage pitch for Dan Kennedy",
  "Doubling sales for a Russell Brunson event",
  "Consistent Webinar Results For Over A Decade (Look How Young I Was!)",
  "WSJ Bestseller plaque",
];

interface ProofSectionProps {
  /** Pass a real dashboard screenshot to replace the top placeholder. */
  proofScreenshot?: React.ReactNode;
  /** Override individual gallery photos by index. */
  galleryPhotos?: Partial<Record<number, React.ReactNode>>;
}

export function ProofSection({
  proofScreenshot,
  galleryPhotos,
}: ProofSectionProps) {
  return (
    <Section>
      {/* Proof card */}
      <figure className="rounded-xl border border-line p-6 sm:p-8">
        <div className="overflow-hidden rounded-lg">
          {proofScreenshot ?? (
            <PhotoPlaceholder aspect="aspect-[5/3]" label="Screenshot" />
          )}
        </div>

        <figcaption className="mt-7">
          <p className="text-center text-xl font-bold italic text-coral sm:text-2xl">
            ★ Prawdziwy dowód ★
          </p>
          <p className="mx-auto mt-4 max-w-md text-center text-body italic text-ink-muted">
            Tak, to jest prawdziwe. Tak, to zrzut ekranu
            z platformy — to nie są całkowite wyniki wszech czasów.
            Jedno studio, 70,000 zł w sprzedaży.
          </p>
        </figcaption>
      </figure>

      {/* Photo gallery */}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2">
        {GALLERY.map((caption, i) => (
          <figure key={caption}>
            <div className="overflow-hidden rounded-lg">
              {galleryPhotos?.[i] ?? <PhotoPlaceholder aspect="aspect-[4/3]" />}
            </div>
            <figcaption className="mt-3 text-center text-body italic text-ink-muted">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

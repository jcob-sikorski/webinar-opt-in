import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

// const GALLERY = [
//   "Writing a stage pitch for Dan Kennedy",
//   "Doubling sales for a Russell Brunson event",
//   "Consistent Webinar Results For Over A Decade (Look How Young I Was!)",
//   "WSJ Bestseller plaque",
// ];

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
            <img 
              src="https://ucarecdn.com/1ab0d8d1-e42b-4afc-a31e-65296b1876c5/Screenshot20260806at13838AM.png" 
              alt="Wyniki Sportowe Przedmieście" 
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <figcaption className="mt-7">
          <p className="text-center text-xl font-bold italic text-coral sm:text-2xl">
            ★ 4 Placówki Sportowe Przedmieście ★
          </p>

          <div className="mx-auto mt-4 max-w-md space-y-4 text-center text-body italic text-ink-muted">
            <p>
              Moje placówki pod marką „Sportowe Przedmieście” w miastach takich jak Poddębice, 
              Łódź, Mikołów i Orzesze w najlepszym okresie generują prawie 
              100 tys. zł dochodu miesięcznie. Biznes szedł tak dobrze, że – mówiąc szczerze – 
              zaczął być zbyt przewidywalny. Teraz robię to co mnie spełnia. Dzielę się wiedzą 
              i pomagam zrobić to samo innym.
            </p>
            
            <p>
              Jeśli prowadzisz już własne studio lub dopiero planujesz otwarcie i chcesz zejść 
              z sali jako trener, budując placówkę generującą 20–50 tys. zł miesięcznie – 
              zapraszam Cię na ten warsztat!
            </p>
          </div>
        </figcaption>
      </figure>

      {/* Photo gallery
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
      </div> */}
    </Section>
  );
}
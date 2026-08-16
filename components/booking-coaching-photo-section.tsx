import { Section } from "@/components/ui/section";

const PHOTOS = [
  {
    src: "https://ucarecdn.com/93cd06ce-4786-4952-8f94-be394dae6d0f/Screenshot20260804at92101PM.png",
    alt: "Praca z podopiecznym na sali treningowej",
  },
  {
    src: "https://ucarecdn.com/dc18c5b5-24e5-4352-92e8-a18a8b9b9d1d/f12472d028b04fb98357dc87b53daa9b.jpeg",
    alt: "Studio Sportowe Przedmieście od środka",
  },
  {
    src: "https://ucarecdn.com/8c09b2ff-9953-4bfd-bb16-145c4f7a33f4/Gemini_Generated_Image_tywnr0tywnr0tywn.png",
    alt: "Klimat kameralnego studia treningu personalnego",
  },
];

export function BookingCoachingPhotoSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-4xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Klimat studia premium
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Kameralna przestrzeń, <span className="text-[#ef6b4a]">która zarabia na siebie</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="overflow-hidden rounded-2xl ring-4 ring-white shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[3/4] w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
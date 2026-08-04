import { Section } from "@/components/ui/section";

const PHOTOS = [
  {
    src: "https://ucarecdn.com/93cd06ce-4786-4952-8f94-be394dae6d0f/Screenshot20260804at92101PM.png",
    alt: "Bartek podczas treningu z klientem w Sportowe Przedmieście",
  },
  {
    src: "https://ucarecdn.com/dc18c5b5-24e5-4352-92e8-a18a8b9b9d1d/f12472d028b04fb98357dc87b53daa9b.jpeg",
    alt: "Bartek podczas treningu z klientem w Sportowe Przedmieście",
  },
  {
    src: "https://ucarecdn.com/8c09b2ff-9953-4bfd-bb16-145c4f7a33f4/Gemini_Generated_Image_tywnr0tywnr0tywn.png",
    alt: "Bartek podczas treningu z klientem w Sportowe Przedmieście",
  },
];

export function BookingCoachingPhotoSection() {
  return (
    <Section width="wide">
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
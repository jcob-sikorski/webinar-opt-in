import { Section } from "@/components/ui/section";

interface CaseStudyVideo {
  title: string;
  description: string;
  youtubeId: string;
}

const CASE_STUDY_VIDEOS: CaseStudyVideo[] = [
  {
    title: "Miała piękne studio i prawie je zamknęła",
    description:
      "Właścicielka studia pod Krakowem o tym, co naprawdę uratowało jej biznes, gdy sam ładny lokal przestał wystarczać.",
    youtubeId: "Faf0TBg_DpQ",
  },
  {
    title: "Studio zarabia, gdy właściciel jest w Tajlandii",
    description:
      "Adrian, pół roku po otwarciu — o systemie i zespole, dzięki którym studio działa bez niego na miejscu.",
    youtubeId: "PuLUm907meI",
  },
  {
    title: "Otworzył własne studio dla kobiet",
    description:
      "Dlaczego na sieciówce nie da się dać tej samej jakości — i jak wyglądało przejście z trenera w przedsiębiorcę.",
    youtubeId: "WNcbyFyhPyQ",
  },
  {
    title: "Dziś sprzedaje pakiety za 6900 zł",
    description:
      "Rok wcześniej sam by w to nie uwierzył. Jak model semipersonalny zmienił zasady gry w jego studiu.",
    youtubeId: "c9JNecprL68",
  },
];

export function CallConfirmationBonusSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Zanim się usłyszymy
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Zobacz, jak wygląda wdrożenie modelu{" "}
          <span className="text-[#ef6b4a]">w praktyce</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Posłuchaj rozmów z właścicielami studiów, którzy mierzyli się z dokładnie tymi samymi wąskimi gardłami co Ty i wdrożyli ten proces u siebie:
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {CASE_STUDY_VIDEOS.map((video) => (
            <article key={video.youtubeId} className="py-10">
              <h3 className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {video.title}
              </h3>

              <div className="relative mx-auto my-6 aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-gray-900 shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="h-full w-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {video.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
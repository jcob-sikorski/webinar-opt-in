import { Section } from "@/components/ui/section";

interface EducationalVideo {
  title: string;
  description: string;
  youtubeId: string;
}

const EDUCATIONAL_VIDEOS: EducationalVideo[] = [
  {
    title: "Rzuć plan B",
    description:
      "Dlaczego robienie jednej rzeczy i odrzucenie planu B to najszybsza, choć czasami ryzykowna, droga do biznesowego sukcesu i uwolnienia własnego czasu.",
    youtubeId: "Nf2V1WV8fS0",
  },
  {
    title: 'Tip na duży dochód z treningów w "specyficznych" miejscowościach',
    description:
      "Jak przestać winić rynek za brak wyników i wziąć pełną odpowiedzialność za sprzedaż, ofertę i skalowanie swojego biznesu, niezależnie od wielkości miasta.",
    youtubeId: "UDz-b0m9tjM",
  },
  {
    title: "Zajęcia grupowe czy trening personalny? Co bardziej opłaca się w studiu?",
    description:
      "Zrozum argumenty, dla których model treningu personalnego (i semi-personalnego) często wygrywa finansowo i organizacyjnie z masowymi zajęciami grupowymi.",
    youtubeId: "4bsCi1cuhwM",
  },
  {
    title: "Klient chce odejść z trenerem? Tak zabezpiecz studio treningowe",
    description:
      "Praktyczne wskazówki, jak budować wartość miejsca, tworzyć zintegrowaną społeczność i odpowiednie procedury, by klienci byli lojalni wobec Twojej marki.",
    youtubeId: "NcTeijCgs34",
  },
  {
    title: "Jak zatrzymać klienta na 2 lata? System retencji dla studia",
    description:
      "Skuteczne wdrażanie modelu biznesowego opartego na 90-dniowej transformacji, budowaniu społeczności, sesjach semi-personalnych i systemie relacji (CRM).",
    youtubeId: "fBzZtbft8sA",
  },
  {
    title: "Dlaczego Studio Treningu Personalnego To NAJLEPSZY Biznes 2026?",
    description:
      "Odkryj rynkową lukę w branży fitness i dowiedz się, jak dobrze poukładane procesy potrafią wygenerować od kilkudziesięciu do kilkuset tysięcy zysku rocznie.",
    youtubeId: "Mhze1zvpcuA",
  },
  {
    title: "Trenerzy Freelancerzy NIE zbudują Ci dochodowego studia",
    description:
      "Wynajem sprzętu podnajmującym trenerom rzadko buduje zyskowny biznes. Zobacz, jak zbudować stały, odpowiedzialny zespół oparty na autorskiej metodzie i karierze.",
    youtubeId: "eG-W1HkkuAs",
  },
  {
    title: "Jak otworzyć studio treningowe, które zarabia 20–50 tys. zł miesięcznie?",
    description:
      "Krok po kroku: od szacowania kapitału początkowego (od 35 tys. zł), przez wyznaczanie idealnego klienta i precyzyjną ofertę premium, po budowanie powtarzalnych procesów.",
    youtubeId: "2WY27FPIvDI",
  },
  {
    title: "Miała piękne studio i prawie je zamknęła. Co uratowało jej biznes?",
    description:
      "Inspirujący wywiad z właścicielką studia pod Krakowem. Opowiada o tym, jak zmiana oferty, mentalności i wdrażanie trudnych procesów wyciągnęły biznes z krawędzi bankructwa.",
    youtubeId: "Faf0TBg_DpQ",
  },
  {
    title: "Studio zarabia, gdy właściciel jest w Tajlandii",
    description:
      "Rozmowa z Adrianem, którego studio dzięki wprowadzonym systemom zarządzania, odpowiedzialnemu zespołowi i zaufaniu z powodzeniem działa bez jego codziennej obecności.",
    youtubeId: "PuLUm907meI",
  },
  {
    title: "Siłownia NIE jest konkurencją dla studia. To dlatego studia zarabiają więcej",
    description:
      "Duże, sieciowe siłownie i kameralne studia fitness przyciągają kompletnie inny typ klienta. Dowiedz się, dlaczego intymność jest ogromną dźwignią do tworzenia usług premium.",
    youtubeId: "QryJ92nlpdE",
  },
  {
    title: "3 rozmowy, które zwiększają sprzedaż i utrzymanie klientów w studio",
    description:
      "Kluczowe strategie i pytania dotyczące szczerych rozmów z podopiecznymi: na etapie marketingu, na spotkaniu sprzedażowym i pod koniec pierwszego pakietu treningowego.",
    youtubeId: "h7NAbV4AIMQ",
  },
  {
    title: "Kłamałem: NIE musisz być trenerem, żeby otworzyć studio treningowe",
    description:
      "Zmiana perspektywy: dlaczego przeskoczenie prosto w tożsamość przedsiębiorcy i inwestora może wyeliminować blokady powstrzymujące wielu trenerów przed skalowaniem.",
    youtubeId: "4bAZclMM3mE",
  },
  {
    title: "Otworzył własne studio i przeszło za nim prawie 100% klientów",
    description:
      "Rozmowa z Adamem, trenerem z Łodzi, który postawił na swoje miejsce i dzięki bardzo silnym relacjom i więzi z podopiecznymi, zatrzymał u siebie całą bazę.",
    youtubeId: "DfHVKnmTn3c",
  }
];

export function CuratedEducationalContentSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Baza wiedzy
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Merytoryczne wskazówki i{" "}
          <span className="text-[#ef6b4a]">rozwiązywanie problemów</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Obejrzyj starannie wyselekcjonowane, treściwe porady edukacyjne, w których rozkładamy na czynniki pierwsze największe wyzwania każdego właściciela studia:
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {EDUCATIONAL_VIDEOS.map((video) => (
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
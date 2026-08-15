"use client";

import { PlayCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface CaseStudyVideo {
  title: string;
  description: string;
  youtubeId: string;
}

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const CASE_STUDY_VIDEOS: CaseStudyVideo[] = [
  {
    title: "Miała piękne studio i prawie je zamknęła",
    description: "Właścicielka studia pod Krakowem o tym, co naprawdę uratowało jej biznes, gdy sam ładny lokal przestał wystarczać.",
    youtubeId: "Faf0TBg_DpQ",
  },
  {
    title: "Studio zarabia, gdy właściciel jest w Tajlandii",
    description: "Adrian, pół roku po otwarciu — o systemie i zespole, dzięki którym studio działa bez niego na miejscu.",
    youtubeId: "PuLUm907meI",
  },
  {
    title: "Otworzył własne studio dla kobiet",
    description: "Dlaczego na sieciówce nie da się dać tej samej jakości — i jak wyglądało przejście z trenera w przedsiębiorcę.",
    youtubeId: "WNcbyFyhPyQ",
  },
  {
    title: "W miesiąc otworzyła własne studio treningowe",
    description: "Od trenerki mobilnej bez czasu dla siebie do właścicielki Studio Balans, z zespołem i poukładanym procesem.",
    youtubeId: "bHBhj0a1S0U",
  },
  {
    title: "Dziś sprzedaje pakiety za 6900 zł",
    description: "Rok wcześniej sam by w to nie uwierzył. Jak model semipersonalny zmienił zasady gry w jego studiu.",
    youtubeId: "c9JNecprL68",
  },
  {
    title: "Otworzył studio i zbudował zespół",
    description: "Dawid, w dniu otwarcia — o decyzjach, ofercie i mastermindach, które poukładały biznes od środka.",
    youtubeId: "u7rk1lC03cM",
  },
  {
    title: "Z 3 etatów do własnego studia",
    description: "Jak trenerka, która czekała miesiącami na wolny termin, postawiła granice i zbudowała system zamiast chaosu.",
    youtubeId: "_qTuIWqnVIY",
  },
  {
    title: "Brał 50 zł za trening. Dziś ma klub z 7 trenerami",
    description: "Krzysztof Mariańczyk o drodze od pojedynczych treningów z polecenia do klubu z zespołem i podniesionymi stawkami.",
    youtubeId: "JmSl_mpfoQA",
  },
  {
    title: "Zmniejszył koszty trzykrotnie przed otwarciem",
    description: "Dlaczego zaczął planować 4 miesiące wcześniej, uniknął zakupu drogiego sprzętu premium i zmienił decyzję o lokalu aż trzy razy.",
    youtubeId: "oy-C_Nn6aW0",
  },
  {
    title: "Z etatu na kopalni do dwóch własnych studiów",
    description: "Historia o tym, jak po wypadku w pracy zbudował zespół trenerów, rzucił etat i odzyskał czas, otwierając kolejne studio w Żorach.",
    youtubeId: "eLsnc0_OZFY",
  },
];

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

export function ConfirmationBonusSection() {
  return (
    <Section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
      {/* Zmieniono max-w-6xl na max-w-7xl, aby sekcja dorównywała szerokością do innych głównych bloków na stronie */}
      <div className="mx-auto max-w-7xl">
        {/* Pre-header */}
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
          Jesteś sceptykiem? Dobrze!
        </p>

        {/* Główny nagłówek */}
        <h2 className="mx-auto mt-5 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight text-gray-900 sm:text-[2.375rem]">
          Wywiady z ludźmi, którzy <span className="text-[#ef6b4a]">otworzyli ze mną</span> pierwsze i kolejne studio
        </h2>

        <p className="mx-auto mt-5 max-w-[50ch] text-center text-lg text-gray-600">
          Posłuchaj, jak zarządzanie studiem wygląda w praktyce.
          Wywiady z właścicielami, którzy już przeszli tę drogę i uwolnili swój czas.
        </p>

        {/* Pionowa lista dużych kart wideo */}
        <div className="mt-12 flex flex-col gap-6">
          {CASE_STUDY_VIDEOS.map((video) => (
            <VideoRow key={video.youtubeId} video={video} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex w-full flex-col items-center sm:mt-24">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Tak, chcę się zapisać
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali.
          </p>
        </div>
      </div>
    </Section>
  );
}

function VideoRow({ video }: { video: CaseStudyVideo }) {
  const videoUrl = `https://youtu.be/${video.youtubeId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
<a
  href={videoUrl}
  target="_blank"
  rel="noopener noreferrer"
  // Added sm:items-center below to prevent vertical stretching
  className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#ef6b4a] sm:flex-row sm:items-center"
>
  {/* I recommend using sm:w-2/5 here so the image isn't too small */}
  <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gray-900 sm:w-2/5 sm:m-4 sm:rounded-xl">
    <img
      src={thumbnailUrl}
      alt={video.title}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/80 sm:h-16 sm:w-16">
        <PlayCircle className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.75} />
      </div>
    </div>
  </div>

  <div className="flex flex-1 flex-col justify-center p-5 sm:w-3/5 sm:p-6 lg:p-8">
    <h3 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
      {video.title}
    </h3>
    <p className="mt-2 text-base leading-relaxed text-gray-600 sm:text-lg">
      {video.description}
    </p>
    <div className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#ef6b4a]">
      <PlayCircle className="h-5 w-5" />
      Obejrzyj rozmowę
    </div>
  </div>
</a>
  );
}
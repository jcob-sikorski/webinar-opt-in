"use client";

import { PlayCircle, CalendarCheck, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface CaseStudyVideo {
  title: string;
  description: string;
  youtubeId: string;
}

interface CaseStudyYTVidsSectionProps {
  showCta?: boolean;
  wypelnijAplikacje?: boolean; 
}

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const CASE_STUDY_VIDEOS: CaseStudyVideo[] = [
  {
    title: "Miała piękne studio i była o krok od zamknięcia",
    description: "Historia właścicielki spod Krakowa o tym, jak sam ładny wystrój nie dawał zysków — i co realnie uratowało jej studio.",
    youtubeId: "Faf0TBg_DpQ",
  },
  {
    title: "Studio zarabia, gdy on wypoczywa w Tajlandii",
    description: "Adrian 6 miesięcy po otwarciu — jak poukładał zespół i procedury, by biznes nie wymagał jego codziennej obecności.",
    youtubeId: "PuLUm907meI",
  },
  {
    title: "Od trenera na siłowni sieciowej do własnego studia dla kobiet",
    description: "Dlaczego w dużym klubie nie da się utrzymać wysokiej jakości i jak bezboleśnie przejść drogę od trenera do przedsiębiorcy.",
    youtubeId: "WNcbyFyhPyQ",
  },
  {
    title: "Otworzyła własne studio w zaledwie miesiąc",
    description: "Od wiecznie zabieganej trenerki dojazdowej do właścicielki Studio Balans ze zgranym zespołem i poukładanym grafikiem.",
    youtubeId: "bHBhj0a1S0U",
  },
  {
    title: "Dziś sprzedaje pakiety transformacji po 6 900 zł",
    description: "Rok wcześniej sam by w to nie uwierzył. Zobacz, jak przejście na model semipersonalny całkowicie odmieniło rentowność studia.",
    youtubeId: "c9JNecprL68",
  },
  {
    title: "Otwarcie studia bez chaosu i od razu z zespołem",
    description: "Dawid w dniu startu — o kluczowych decyzjach, układaniu oferty i wsparciu, które zaoszczędziło mu miesięcy błędów.",
    youtubeId: "u7rk1lC03cM",
  },
  {
    title: "Z 3 wycieńczających prac do własnego, rentownego studia",
    description: "Jak trenerka, która nie miała ani wolnego weekendu, postawiła granice i zamieniła wieczny pośpiech w przewidywalny biznes.",
    youtubeId: "_qTuIWqnVIY",
  },
  {
    title: "Brał 50 zł za trening. Dziś zarządza 7-osobowym zespołem",
    description: "Krzysztof Mariańczyk o drodze od niepewnych zleceń z polecenia do stabilnego studia ze świetnymi stawkami i trenerami.",
    youtubeId: "JmSl_mpfoQA",
  },
  {
    title: "Obciął koszty inwestycji 3-krotnie jeszcze przed otwarciem",
    description: "Dlaczego wczesne planowanie pozwoliło mu uniknąć przepłacenia za drogi sprzęt i uratowało go przed złą umową najmu.",
    youtubeId: "oy-C_Nn6aW0",
  },
  {
    title: "Z pracy na kopalni do dwóch rentownych studiów",
    description: "Wypadek w pracy zmusił go do zmian. Dziś ma poukładany zespół w Żorach, rzucił etat i w pełni odzyskał kontrolę nad czasem.",
    youtubeId: "eLsnc0_OZFY",
  },
];

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

export function CaseStudyYTVidsSection({ showCta = true, wypelnijAplikacje = false }: CaseStudyYTVidsSectionProps) {
  return (
    <Section className="bg-white px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Pre-header */}
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
          Nie wierz mi na słowo
        </p>

        {/* Główny nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight text-gray-900 sm:text-[2.375rem]">
          Zobacz historie trenerów, którzy <span className="text-[#ef6b4a]">już przeszli tę drogę</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[55ch] text-center text-base text-gray-600 sm:text-lg">
          Szczere rozmowy o błędach, kosztach, wyjściu z sali treningowej i budowaniu biznesu, który daje wolność.
        </p>

        {/* Lista kart wideo */}
        <div className="mt-12 flex flex-col gap-6">
          {CASE_STUDY_VIDEOS.map((video) => (
            <VideoRow key={video.youtubeId} video={video} />
          ))}
        </div>

        {/* CTA warunkowe: Zapisz się na warsztat */}
        {showCta && (
          <div className="mt-12 flex flex-col items-center">
            <RegisterCtaButton
              size="lg"
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 active:scale-[0.99] sm:text-2xl"
            >
              <CalendarCheck className="h-6 w-6 shrink-0" />
              Tak, chcę się zapisać
            </RegisterCtaButton>
            <p className="mt-4 max-w-md text-center text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
              Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali
            </p>
          </div>
        )}

        {/* CTA warunkowe: Wypełnij aplikację (niezależne od showCta) */}
        {wypelnijAplikacje && (
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <a
              href="#aplikacja"
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
            >
              Wypełnij aplikację
              <ArrowRight className="h-6 w-6 shrink-0" />
            </a>
          </div>
        )}
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
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-[#ef6b4a] hover:shadow-lg sm:flex-row sm:items-center"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gray-900 sm:m-4 sm:w-2/5 sm:rounded-xl">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/75 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16">
            <PlayCircle className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.75} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 sm:w-3/5 sm:p-6 lg:p-8">
        <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#ef6b4a] sm:text-2xl">
          {video.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-gray-600 sm:text-lg">
          {video.description}
        </p>
        <div className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#ef6b4a]">
          <PlayCircle className="h-5 w-5" />
          <span>Zobacz, jak to zrobili &rarr;</span>
        </div>
      </div>
    </a>
  );
}
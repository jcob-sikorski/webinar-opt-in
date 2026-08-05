import { PlayCircle } from "lucide-react";

import { Section } from "@/components/ui/section";

interface CaseStudyVideo {
  title: string;
  description: string;
  youtubeId: string;
}

// Real interviews from the DochodoweStudio YouTube channel. Thumbnails are
// pulled live from YouTube's public thumbnail CDN (no API key needed) —
// swap `youtubeId` here if a video gets replaced or unlisted.
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

export function ConfirmationBonusSection() {
  return (
    <Section width="wide" className="bg-panel">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        W międzyczasie
      </p>
      <h2 className="mx-auto mt-5 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Poznaj Ludzi, Którzy{" "}
        <span className="text-coral">Już To Zrobili</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[50ch] text-center text-body-lg text-ink-muted">
        Nie musisz czekać do 24 sierpnia, żeby zobaczyć, jak to wygląda w
        praktyce. Oto prawdziwe rozmowy z właścicielami studiów, którzy
        przeszli tę drogę.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDY_VIDEOS.map((video) => (
          <a
            key={video.youtubeId}
            href={`https://youtu.be/${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-coral-bright"
          >
            <div className="relative aspect-video overflow-hidden bg-ink">
              <img
                src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/80">
                  <PlayCircle className="h-6 w-6 text-white" strokeWidth={1.75} />
                </span>
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-body font-semibold text-ink">
                {video.title}
              </p>
              <p className="mt-2 flex-1 text-sm text-ink-muted">
                {video.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                <PlayCircle className="h-4 w-4" />
                Obejrzyj rozmowę
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
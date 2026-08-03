import { PlayCircle } from "lucide-react";

import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

interface BonusItem {
  title: string;
  description: string;
  href: string;
  duration: string;
}

// Swap `href` for real YouTube/Vimeo links once the clips are cut.
const BONUS_ITEMS: BonusItem[] = [
  {
    title: "Jak policzyć, ilu klientów naprawdę potrzebujesz",
    description:
      "Krótki rozkład liczb z małego, butikowego studia — żebyś przestał/a strzelać w ciemno.",
    href: "#",
    duration: "6 min",
  },
  {
    title: "Pierwszy tydzień po otwarciu drzwi",
    description:
      "Co robię krok po kroku w pierwszych siedmiu dniach nowej placówki.",
    href: "#",
    duration: "9 min",
  },
  {
    title: "Środek Protokołu Dochodowego Studia",
    description:
      "Podgląd jednego elementu modelu, zanim zobaczysz go w całości na warsztacie.",
    href: "#",
    duration: "5 min",
  },
];

export function ConfirmationBonusSection() {
  return (
    <Section width="wide" className="bg-panel">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        W międzyczasie
      </p>
      <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Trzy Krótkie Nagrania Na Czas Oczekiwania
      </h2>
      <p className="mx-auto mt-5 max-w-[46ch] text-center text-body-lg text-ink-muted">
        Nie musisz czekać do 14 sierpnia, żeby dostać wartość. Zacznij od
        tych trzech.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {BONUS_ITEMS.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-background transition-colors hover:border-coral-bright"
          >
            <div className="relative">
              <PhotoPlaceholder
                aspect="aspect-video"
                label="Podgląd"
                rounded="rounded-none"
              />
              <span
                aria-hidden
                className="absolute bottom-2.5 right-2.5 rounded bg-ink/80 px-1.5 py-0.5 text-[0.6875rem] font-semibold text-white"
              >
                {item.duration}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-body font-semibold text-ink">{item.title}</p>
              <p className="mt-2 flex-1 text-sm text-ink-muted">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                <PlayCircle className="h-4 w-4" />
                Obejrzyj teraz
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

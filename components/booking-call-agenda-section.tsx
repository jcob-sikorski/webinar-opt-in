import { Check, X } from "lucide-react";

import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

const AGENDA = [
  {
    title: "Gdzie jesteś dzisiaj",
    body: "Twoje liczby: ilu masz klientów, ile godzin stoisz na sali, co zostaje na koniec miesiąca. Bez tego reszta rozmowy to zgadywanie.",
  },
  {
    title: "Gdzie chcesz być za sześć miesięcy",
    body: "Konkretnie. Nie „więcej zarabiać”, tylko: ilu klientów, jaki zespół, ile Twoich godzin na sali.",
  },
  {
    title: "Co realnie stoi Ci na drodze",
    body: "Zwykle nie jest to brak wiedzy. Zwykle to jeden konkretny element systemu — oferta, sprzedaż, zespół albo pozyskiwanie.",
  },
  {
    title: "Czy Dochodowe Studio jest właściwym narzędziem",
    body: "Jeśli tak — pokazuję dokładnie, jak wyglądałby Twój pierwszy miesiąc, i rozmawiamy o warunkach. Jeśli nie — mówię to i podpowiadam, co zrobiłbym na Twoim miejscu.",
  },
];

const FOR_YOU = [
  "Masz pełny grafik i wiesz, że Twój dochód ma sufit wyznaczony liczbą godzin w dobie.",
  "Masz już studio, ale bez Ciebie ono się zatrzymuje — Ty trenujesz, Ty odpisujesz, Ty zamykasz każdą sprzedaż.",
  "Planujesz otworzyć studio i masz kapitał lub dostęp do finansowania (35–100 tys. zł na lokal i wyposażenie).",
  "Jesteś gotów wdrażać, a nie tylko oglądać materiały. Robimy to z Tobą, nie za Ciebie.",
];

const NOT_FOR_YOU = [
  "Nie masz jeszcze żadnych klientów i dopiero zastanawiasz się, czy chcesz być trenerem. Studio nie rozwiązuje braku klientów — zwiększa konsekwencje ich braku.",
  "Szukasz agencji albo kogoś, kto poprowadzi firmę za Ciebie. To mentoring, nie usługa, od której będziesz uzależniony.",
  "Chcesz kupić dostęp do nagrań i wrócić do nich „kiedyś”. Sam dostęp do wiedzy nie jest aktywem — aktywem staje się wdrożony system.",
  "Nie masz dziś przestrzeni na 2–3 godziny tygodniowo na materiały, spotkania i wdrożenie.",
];

export function BookingCallAgendaSection() {
  return (
    <Section width="wide">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Zanim zarezerwujesz
      </p>
      <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Jak Wygląda Ta Rozmowa
      </h2>
      <p className="mx-auto mt-5 max-w-[52ch] text-center text-body-lg text-ink-muted">
        To nie jest prezentacja handlowa w przebraniu. To cztery pytania,
        które muszę zadać, żeby wiedzieć, czy w ogóle powinienem Ci cokolwiek
        proponować.
      </p>

      <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {AGENDA.map((item, i) => (
          <li
            key={item.title}
            className="rounded-lg border border-line p-6 sm:p-7"
          >
            <p className="font-display text-sm font-bold text-coral">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2.5 text-body font-semibold text-ink">
              {item.title}
            </p>
            <p className="mt-2 text-body text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line border-t-[3px] border-t-coral-bright p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 text-lg font-bold text-ink">
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full bg-coral-bright"
            >
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
            </span>
            Umów rozmowę, jeśli:
          </h3>
          <ul className="mt-5 divide-y divide-line">
            {FOR_YOU.map((item) => (
              <CheckItem key={item} className="py-3.5">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-line border-t-[3px] border-t-ink/30 p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 text-lg font-bold text-ink">
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/70"
            >
              <X className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
            </span>
            Nie umawiaj się, jeśli:
          </h3>
          <ul className="mt-5 divide-y divide-line">
            {NOT_FOR_YOU.map((item) => (
              <li key={item} className="flex gap-3.5 py-3.5 sm:gap-4">
                <span
                  aria-hidden
                  className="mt-[0.3rem] flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-full bg-ink/25"
                >
                  <X className="h-3 w-3 text-white" strokeWidth={3.5} />
                </span>
                <p className="min-w-0 flex-1 text-body text-ink-muted">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
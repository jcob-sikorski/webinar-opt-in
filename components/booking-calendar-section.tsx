import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";
import { BookingCalendarEmbed } from "@/components/ui/booking-calendar-embed";

const BEFORE_CALL = [
  "Przygotuj swoje liczby: ilu masz dziś klientów, ile godzin stoisz na sali, ile zostaje na koniec miesiąca.",
  "Zarezerwuj 45 minut w miejscu, w którym możesz spokojnie rozmawiać — nie między treningami.",
  "Jeśli decyzję podejmujesz z partnerem, umów termin, na którym możecie być oboje.",
];

export function BookingCalendarSection() {
  return (
    <div id="kalendarz" className="scroll-mt-8">
      <Section width="wide" className="bg-panel">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
          Ostatni krok
        </p>
        <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
          Wybierz Termin <span className="text-coral">Rozmowy</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-center text-body-lg text-ink-muted">
          Bezpłatnie, około 45 minut, bez presji. Jeśli po tej rozmowie okaże
          się, że to nie jest moment dla Ciebie — powiem Ci to wprost i
          rozejdziemy się w dobrych relacjach.
        </p>

        <div className="mt-9">
          <BookingCalendarEmbed />
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl border border-line bg-background p-6 sm:p-7">
          <p className="text-body font-semibold text-ink">
            Zanim się połączymy — trzy rzeczy:
          </p>
          <ul className="mt-4 divide-y divide-line">
            {BEFORE_CALL.map((item) => (
              <CheckItem key={item} className="py-3.5">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-11 max-w-2xl text-center">
          <p className="font-display text-lg italic leading-[1.65] text-ink-muted sm:text-xl">
            Ja swoją drogę przeszedłem przez dwa bankructwa, magazyn w DHL-u i
            rok, w którym straciłem dziesiątki tysięcy złotych, bo nikt mi nie
            pokazał, jak zrobić to dobrze.{" "}
            <strong className="font-semibold text-ink">
              Nie musisz przechodzić tej samej drogi. Możesz przejść krótszą.
            </strong>
          </p>
        </div>
      </Section>
    </div>
  );
}
import { Section } from "@/components/ui/section";
import { BookingCalendarEmbed } from "@/components/ui/booking-calendar-embed";

export function BookingCalendarSection() {
  return (
    <div id="kalendarz" className="scroll-mt-8">
      <Section className="bg-[#fcfbf9]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Zrób pierwszy krok
          </p>

          <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
            Wybierz dogodny <span className="text-[#ef6b4a]">termin rozmowy</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty font-display text-lg italic leading-[1.7] text-gray-700 sm:text-xl">
            Bezpłatnie, około 45 minut, bez presji. Sprawdzamy stan faktyczny Twojego biznesu i ustalamy, co konkretnie blokuje Cię przed wyjściem z sali.
          </p>

          {/* Osadzony widget GHL */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <BookingCalendarEmbed />
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold italic text-gray-900 sm:text-3xl">
              Zanim się połączymy:
            </h3>

            <div className="mt-6 space-y-5 text-left font-display text-base italic leading-[1.75] text-gray-700 sm:text-lg">
              <p>
                <strong className="font-semibold not-italic text-gray-900">
                  Przygotuj swoje realne liczby:
                </strong>{" "}
                Ilu masz podopiecznych, ile płacą, ile godzin spędzasz na sali i jaki masz czynsz. Im bardziej precyzyjne dane, tym szybciej znajdziemy rozwiązanie.
              </p>

              <p>
                <strong className="font-semibold not-italic text-gray-900">
                  Jeśli masz wspólnika lub partnera:
                </strong>{" "}
                Wybierz termin, w którym możecie być oboje. Omawiamy kluczowe decyzje finansowe i organizacyjne — najlepiej odbyć tę rozmowę wspólnie.
              </p>
            </div>

            <div className="mt-10 border-t border-[#d6d6d6] pt-8">
              <p className="font-display text-lg italic leading-[1.6] text-gray-900 sm:text-xl">
                Ja swoją drogę przeszedłem przez 2 bankructwa i pracę na magazynie.{" "}
                <span className="text-[#ef6b4a]">Ty nie musisz powtarzać tych samych błędów.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
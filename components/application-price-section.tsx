import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

export function ApplicationPriceSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Inwestycja w biznes
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Ile wynosi inwestycja w <span className="text-[#ef6b4a]">6-miesięczny program?</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Sam zapłaciłem za tę wiedzę ponad 250 000 zł i kilka lat potknięć. 
            Nie w reklamy — w mentorów, kursy i przede wszystkim w błędy rekrutacyjne, które kosztowały mnie dziesiątki tysięcy złotych.
          </p>
        </div>

        <div className="mx-auto my-12 max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            Cena programu (zamrożona na 6 miesięcy)
          </p>
          <p className="mt-3 font-display text-4xl font-extrabold italic text-gray-900 sm:text-5xl md:text-6xl">
            21 000 zł <span className="text-xl font-normal text-gray-500 sm:text-2xl">netto</span>
          </p>
          <p className="mt-3 font-display text-lg italic text-[#ef6b4a] sm:text-xl">
            To 116 zł dziennie — mniej niż cena jednego treningu, który sam prowadzisz.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-5 text-left font-display text-base italic leading-[1.75] text-gray-700 sm:text-lg">
          <p>
            <strong className="font-semibold not-italic text-gray-900">
              Prosta matematyka zwrotu z inwestycji:
            </strong>{" "}
            Jeden podopieczny kupujący program transformacyjny za 1 000 zł miesięcznie, który zostaje w Twoim studio na 2 lata w modelu semi-personal, przynosi 24 000 zł przychodu. 
            Nie musisz zdobywać setek osób — wystarczy jeden dobrze wdrożony klient, by inwestycja w program w całości się zwróciła.
          </p>

          <p>
            <strong className="font-semibold not-italic text-gray-900">
              Elastyczne finansowanie:
            </strong>{" "}
            Istnieje możliwość płatności jednorazowej lub rozłożenia inwestycji na raty dopasowane do przepływów finansowych Twojego studia (ustalamy to indywidualnie podczas rozmowy).
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <a
            href="#kalendarz"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6 shrink-0" />
            Wybierz termin rozmowy
          </a>
        </div>
      </div>
    </Section>
  );
}
import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

export function ApplicationGuaranteeSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Bezpieczeństwo współpracy
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Gwarancja oparta na <span className="text-[#ef6b4a]">min. 20 tys. zł</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Dołączasz do programu i zostajesz w nim ze mną tak długo, aż osiągniesz minimum{" "}
            <strong className="font-semibold not-italic text-gray-900">
              20 000 złotych zysku właścicielskiego miesięcznie
            </strong>.
          </p>

          <p>
            Liczy się wynik.
          </p>

          <p>
            Dopóki go nie osiągniesz — pracujemy dalej,{" "}
            <strong className="font-semibold not-italic text-gray-900">bez dodatkowych opłat</strong>.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
          <a
            href="#aplikacja"
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
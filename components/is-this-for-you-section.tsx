"use client";

import { CalendarCheck } from "lucide-react";
import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

export function IsThisForYouSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow */}
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
          Dla kogo jest ten warsztat
        </p>

        {/* Nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[24ch] text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Ten warsztat jest <span className="text-[#ef6b4a]">dla Ciebie</span>, jeśli...
        </h2>

        {/* Płynne copy sprzedażowe */}
        <div className="mt-10 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            <strong className="font-semibold not-italic text-gray-900">
              Jesteś trenerem z pełnym grafikiem.
            </strong>{" "}
            Pracujesz od rana do wieczora. Klienci przychodzą, płacą, wracają
            — ale Twój grafik nie ma już miejsca na kolejną osobę.{" "}
            <em className="text-[#ef6b4a]">
              Urlop kosztuje Cię pieniądze, nie tylko czas.
            </em>{" "}
            Chcesz w końcu przestać być jedynym trybikiem własnego biznesu i wyjść z sufitu zarobkowego.
          </p>

          <p className="mt-6">
            <strong className="font-semibold not-italic text-gray-900">
              Albo masz już studio, ale bez Ciebie wszystko stoi.
            </strong>{" "}
            Prowadzisz większość treningów, Ty odpisujesz na wiadomości i Ty
            zamykasz każdą sprzedaż. Kiedy wyjeżdżasz,{" "}
            <em className="text-[#ef6b4a]">przychód natychmiast leci w dół</em>. Marża
            jest cienka, a trenerzy robią wszystko po swojemu. Chcesz w końcu
            zbudować poukładaną machinę, zanim pomyślisz o kolejnej placówce.
          </p>
        </div>

        {/* Osobista prawda i przejście do sedna zamiast szarego kafelka UI */}
        <div className="mt-14 border-t border-[#d6d6d6] pt-10 text-center">
          <p className="font-display text-xl font-semibold italic leading-[1.6] text-gray-900 sm:text-2xl">
            To może być najważniejsza godzina w Twoim kalendarzu w tym roku.
          </p>

          <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
            <p>
              Samo otwarcie studia nie rozwiązuje problemów, z którymi mierzysz się dzisiaj.{" "}
              <strong className="font-semibold not-italic text-gray-900">
                Ono je tylko powiększa i dokłada koszty stałe
              </strong>
              , jeśli wejdziesz w to bez gotowego systemu.
            </p>

            <p className="mt-5">
              Na warsztacie pokażę Ci, jak poukładać studio tak, żeby zarabiało{" "}
              <em className="text-[#ef6b4a]">
                dzięki modelowi i zespołowi, a nie Twojej obecności na sali od 6:00 do 22:00.
              </em>
            </p>
          </div>
        </div>

        {/* CTA */}
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
      </div>
    </Section>
  );
}
"use client";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

export function IsThisForYouSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Nagłówek */}
        <h2 className="text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Ten warsztat jest <span className="text-[#ef6b4a]">dla Ciebie</span>, jeśli...
        </h2>

        {/* Płynny tekst zamiast kart z personami */}
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
            Chcesz w końcu przestać być jedynym trybikiem własnego biznesu.
          </p>

          <p className="mt-6">
            <strong className="font-semibold not-italic text-gray-900">
              Albo jesteś właścicielem studia i wciąż stoisz na sali.
            </strong>{" "}
            Prowadzisz większość treningów, Ty odpisujesz na wiadomości, Ty
            zamykasz każdą sprzedaż. Kiedy wyjeżdżasz,{" "}
            <em className="text-[#ef6b4a]">przychód leci w dół</em>. Marża
            jest cienka, a trenerzy robią wszystko po swojemu. Chcesz w końcu
            wyjść z sali i poukładać model, zanim pomyślisz o kolejnej
            placówce.
          </p>
        </div>

        {/* Zgrupowane podsumowanie w wyróżnionej ramce */}
        <div className="mt-14 flex flex-col items-center text-center">
          <div className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed] p-6 shadow-sm sm:p-8">
            <p className="mx-auto max-w-prose text-lg font-extrabold italic leading-snug text-gray-900 sm:text-2xl">
              To może być najważniejsza godzina w Twoim kalendarzu.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              <strong className="font-bold text-gray-900">
                Studio samo w sobie nie rozwiązuje problemów, jakie masz
                obecnie. Ono je tylko powiększa, jeśli wejdziesz w to bez
                gotowego systemu.
              </strong>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex w-full flex-col items-center">
            <RegisterCtaButton
              size="lg"
              className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
            >
              Tak, chcę się zapisać
            </RegisterCtaButton>
            <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
              Warsztat na żywo o tym, jak zbudować studio, które zarabia bez
              Ciebie na sali.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
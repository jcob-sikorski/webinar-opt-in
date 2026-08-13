"use client";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

interface Persona {
  number: string;
  title: string;
  content: React.ReactNode;
}

const PERSONAS: Persona[] = [
  {
    number: "01",
    title: "Jesteś trenerem z pełnym grafikiem",
    content: (
      <>
        Pracujesz od rana do wieczora. Klienci przychodzą, płacą, wracają — ale
        Twój grafik nie ma już miejsca na kolejną osobę.{" "}
        <em className="italic text-[#ef6b4a]">Urlop kosztuje Cię pieniądze, nie tylko czas.</em>{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz w końcu przestać być jedynym trybikiem własnego biznesu.
        </strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Jesteś właścicielem studio i stoisz na sali",
    content: (
      <>
        <strong className="font-bold text-gray-900">
          Prowadzisz większość treningów, Ty odpisujesz na wiadomości, Ty
          zamykasz każdą sprzedaż.
        </strong>{" "}
        Kiedy wyjeżdżasz, <em className="italic text-[#ef6b4a]">przychód leci w dół</em>.
        Marża jest cienka, a trenerzy robią wszystko po swojemu.{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz w końcu wyjść z sali i poukładać model, zanim pomyślisz o
          kolejnej placówce.
        </strong>
      </>
    ),
  },
];

// Zmieniony wygląd karty - teraz wygląda jak moduł premium
function PersonaCard({ number, title, content }: Persona) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
      <div className="mb-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-xl font-black text-[#ef6b4a]">
          {number}
        </span>
        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {title}
        </h3>
      </div>
      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
        {content}
      </p>
    </article>
  );
}

export function IsThisForYouSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      {/* Nagłówek */}
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        Ten warsztat jest <span className="text-[#ef6b4a]">dla Ciebie</span>, jeśli...
      </h2>

      {/* Grid z personami */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
        {PERSONAS.map((persona) => (
          <PersonaCard key={persona.number} {...persona} />
        ))}
      </div>

      {/* Zgrupowane podsumowanie w wyróżnionej ramce */}
      <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center">
        <div className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed] p-6 shadow-sm sm:p-8">
          <p className="mx-auto max-w-prose text-lg font-extrabold italic leading-snug text-gray-900 sm:text-2xl">
            To może być najważniejsza godzina w Twoim kalendarzu.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            <strong className="font-bold text-gray-900">
              Studio samo w sobie nie rozwiązuje problemów, jakie masz obecnie. 
              Ono je tylko powiększa, jeśli wejdziesz w to bez gotowego systemu.
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex w-full flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Zajmij swoje miejsce — 0 zł
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali.
          </p>
        </div>
      </div>
    </Section>
  );
}
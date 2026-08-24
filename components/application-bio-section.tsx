import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

const CREDENTIALS = [
  "4 własne placówki Sportowe Przedmieście",
  "80+ przedsiębiorców poprowadzonych w mentoringu",
  "250 000 zł zainwestowane we własną edukację",
  "2 bankructwa i praca na magazynie po drodze",
];

export function BookingBioSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Twój mentor
        </p>

        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Nazywam się <span className="text-[#ef6b4a]">Bartek Sikorski</span>
        </h2>

        <div className="mx-auto mt-8 h-48 w-48 overflow-hidden rounded-full ring-4 ring-white shadow-xl sm:h-56 sm:w-56">
          <img
            src="https://ucarecdn.com/ba6c76cb-c90e-4605-94b8-d46909c23c8a/Screenshot20260804at90228PM.png"
            alt="Bartek Sikorski"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            W 2016 roku zaliczyłem pierwsze bankructwo. W 2020 r. straciłem studio po raz drugi i trafiłem na magazyn DHL-u, pakując paczki po 10 godzin dziennie.
          </p>

          <p>
            Mój przełom nastąpił wtedy, gdy zrozumiałem różnicę między{" "}
            <strong className="font-semibold not-italic text-gray-900">Rzemieślnikiem</strong> (który wymienia czas na pieniądze) a{" "}
            <strong className="font-semibold not-italic text-gray-900">Architektem</strong> (który projektuje powtarzalny system).
          </p>

          <p>
            Dziś prowadzę 4 rentowne placówki, a procedury, które otrzymujesz w programie, to te same narzędzia, które codziennie pracują w moich firmach.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 text-left">
          {CREDENTIALS.map((item) => (
            <div key={item} className="border-l-2 border-[#ef6b4a] pl-3 py-1 font-display text-sm font-semibold italic text-gray-800">
              {item}
            </div>
          ))}
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
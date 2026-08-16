"use client";

import { Mail } from "lucide-react";

const EVENT_TITLE = "Rozmowa Strategiczna: Dochodowe Studio";
const EVENT_DETAILS =
  "Link do spotkania (Google Meet) wyślemy na Twój adres e-mail. Przygotuj swoje twarde liczby i bądź punktualnie.";

const START_UTC = "20260824T100000Z";
const END_UTC = "20260824T104500Z";
const START_ISO = "2026-08-24T12:00:00+02:00";
const END_ISO = "2026-08-24T12:45:00+02:00";

const CALENDAR_LINKS = {
  apple: `data:text/calendar;charset=utf8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0ABEGIN%3AVEEVENT%0ADTSTART%3A${START_UTC}%0ADTEND%3A${END_UTC}%0ASUMMARY%3A${encodeURIComponent(
    EVENT_TITLE
  )}%0ADESCRIPTION%3A${encodeURIComponent(EVENT_DETAILS)}%0AEND%3AVEEVENT%0AEND%3AVCALENDAR`,
  google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    EVENT_TITLE
  )}&dates=${START_UTC}/${END_UTC}&details=${encodeURIComponent(EVENT_DETAILS)}`,
  outlook: `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    EVENT_TITLE
  )}&startdt=${START_ISO}&enddt=${END_ISO}&body=${encodeURIComponent(EVENT_DETAILS)}`,
  yahoo: `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(
    EVENT_TITLE
  )}&st=${START_UTC}&et=${END_UTC}&desc=${encodeURIComponent(EVENT_DETAILS)}`,
};

export function CallConfirmationHeroSection() {
  return (
    <div className="relative bg-[#fcfbf9]">
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Rozmowa zarezerwowana
          </p>

          <h1 className="mx-auto mt-4 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Twoja rozmowa kwalifikacyjna jest{" "}
            <span className="text-[#ef6b4a]">potwierdzona.</span>
          </h1>

          <p className="mt-6 font-display text-xl font-semibold italic text-gray-900 sm:text-2xl">
            Teraz zrób te <span className="text-[#ef6b4a]">dwa kroki</span>:
          </p>

          {/* KROK 1: Kalendarze */}
          <div className="mx-auto mt-10 w-full max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
              Krok 1
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Dodaj termin do kalendarza w telefonie
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600">
              Jedno kliknięcie, aby nie zapomnieć o spotkaniu w biegu między treningami:
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a
                href={CALENDAR_LINKS.google}
                target="_blank"
                rel="noreferrer"
                title="Google Calendar"
                className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105"
              >
                <img src="/icons/google.svg" alt="Google Calendar" className="h-12 w-12" />
                <span className="text-xs font-semibold text-gray-600 group-hover:text-[#ef6b4a]">Google</span>
              </a>

              <a
                href={CALENDAR_LINKS.apple}
                target="_blank"
                rel="noreferrer"
                title="Apple Calendar"
                className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105"
              >
                <img src="/icons/apple.svg" alt="Apple Calendar" className="h-12 w-12" />
                <span className="text-xs font-semibold text-gray-600 group-hover:text-[#ef6b4a]">Apple</span>
              </a>

              <a
                href={CALENDAR_LINKS.outlook}
                target="_blank"
                rel="noreferrer"
                title="Outlook"
                className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105"
              >
                <img src="/icons/outlook.svg" alt="Outlook" className="h-12 w-12" />
                <span className="text-xs font-semibold text-gray-600 group-hover:text-[#ef6b4a]">Outlook</span>
              </a>

              <a
                href={CALENDAR_LINKS.yahoo}
                target="_blank"
                rel="noreferrer"
                title="Yahoo Calendar"
                className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105"
              >
                <img src="/icons/yahoo.svg" alt="Yahoo Calendar" className="h-12 w-12" />
                <span className="text-xs font-semibold text-gray-600 group-hover:text-[#ef6b4a]">Yahoo</span>
              </a>
            </div>
          </div>

          {/* KROK 2: Przygotowanie */}
          <div className="mx-auto mt-12 w-full max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
              Krok 2
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Sprawdź skrzynkę i przygotuj swoje liczby
            </h2>

            <div className="mx-auto mt-6 max-w-xl space-y-4 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
              <p>
                <strong className="font-semibold not-italic text-gray-900">
                  Wysłaliśmy wiadomość z potwierdzeniem i linkiem do Google Meet
                </strong>{" "}
                na Twój adres e-mail. Jeśli jej nie widzisz, sprawdź folder Oferty lub SPAM.
              </p>

              <p>
                Przygotuj informacje o swoim obecnym grafiku, stawkach i kosztach lokalu. Im bardziej precyzyjne dane podasz, tym konkretniejszy plan ułożymy.
              </p>
            </div>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
            <Mail className="h-4 w-4 text-[#ef6b4a]" aria-hidden />
            Wiadomość przyjdzie z adresu:{" "}
            <span className="font-semibold text-gray-800">kontakt@dochodowestudio.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
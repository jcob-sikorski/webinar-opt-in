"use client";

import { Mail } from "lucide-react";

const CALENDAR_LINKS = {
  apple: `data:text/calendar;charset=utf8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0ABEGIN%3AVEEVENT%0ADTSTART%3A20260824T180000Z%0ADTEND%3A20260824T200000Z%0ASUMMARY%3AWarsztat%3A%20Z%C5%82oty%20Model%20Biznesowy%20(Dochodowe%20Studio)%0ADESCRIPTION%3ALink%20do%20warsztatu%20na%20%C5%BCywo%3A%20sprawd%C5%BA%20skrzynk%C4%99%20e-mail%20oraz%20SMS.%20Przygotuj%20notatnik%20i%20b%C4%85d%C5%BA%205%20minut%20wcze%C5%9Bniej.%0AEND%3AVEEVENT%0AEND%3AVCALENDAR`,
  google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Warsztat%3A%20Z%C5%82oty%20Model%20Biznesowy%20(Dochodowe%20Studio)&dates=20260824T180000Z/20260824T200000Z&details=Link%20do%20warsztatu%20na%20%C5%BCywo%3A%20sprawd%C5%BA%20skrzynk%C4%99%20e-mail%20oraz%20SMS.%20Przygotuj%20notatnik%20i%20b%C4%85d%C5%BA%205%20minut%20wcze%C5%9Bniej.`,
  outlook: `https://outlook.office.com/calendar/0/deeplink/compose?subject=Warsztat%3A%20Z%C5%82oty%20Model%20Biznesowy%20(Dochodowe%20Studio)&startdt=2026-08-24T20:00:00%2B02:00&enddt=2026-08-24T22:00:00%2B02:00&body=Link%20do%20warsztatu%20na%20%C5%BCywo%3A%20sprawd%C5%BA%20skrzynk%C4%99%20e-mail%20oraz%20SMS.%20Przygotuj%20notatnik%20i%20b%C4%85d%C5%BA%205%20minut%20wcze%C5%9Bniej.`,
  yahoo: `https://calendar.yahoo.com/?v=60&title=Warsztat%3A%20Z%C5%82oty%20Model%20Biznesowy%20(Dochodowe%20Studio)&st=20260824T180000Z&et=20260824T200000Z&desc=Link%20do%20warsztatu%20na%20%C5%BCywo%3A%20sprawd%C5%BA%20skrzynk%C4%99%20e-mail%20oraz%20SMS.%20Przygotuj%20notatnik%20i%20b%C4%85d%C5%BA%205%20minut%20wcze%C5%9Bniej.`,
};

export function ConfirmationHeroSection() {
  return (
    <div className="relative bg-[#fcfbf9]">
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Główny nagłówek */}
          <h1 className="mx-auto max-w-[22ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Twoje miejsce na warsztat jest{" "}
            <span className="text-[#ef6b4a]">potwierdzone.</span>
          </h1>

          {/* Fraza przejścia */}
          <p className="mt-6 font-display text-xl font-semibold italic text-gray-900 sm:text-2xl">
            Teraz zrób te <span className="text-[#ef6b4a]">dwa kroki</span>:
          </p>

          {/* KROK 1: Płynna sekcja kalendarza */}
          <div className="mx-auto mt-10 w-full max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
              Krok 1
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Dodaj warsztat do swojego kalendarza
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600">
              Jedno kliknięcie, aby automatycznie zapisać datę i link do pokoju webinarowego:
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

          {/* KROK 2: Dostęp i obecność na żywo */}
          <div className="mx-auto mt-12 w-full max-w-2xl border-t border-[#d6d6d6] pt-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
              Krok 2
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Sprawdź skrzynkę i bądź z nami na żywo
            </h2>

            <div className="mx-auto mt-6 max-w-xl space-y-4 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
              <p>
                <strong className="font-semibold not-italic text-gray-900">
                  Wysłaliśmy wiadomość z bezpośrednim linkiem
                </strong>{" "}
                do transmisji na Twój adres e-mail. Jeśli jej nie widzisz, sprawdź folder Oferty lub SPAM.
              </p>
            </div>
          </div>

          {/* Nadawca */}
          <p className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
            <Mail className="h-4 w-4 text-[#ef6b4a]" aria-hidden />
            Wiadomość z dostępem przyjdzie z adresu:{" "}
            <span className="font-semibold text-gray-800">kontakt@dochodowestudio.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
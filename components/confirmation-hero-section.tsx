"use client";

import { Check, Mail } from "lucide-react";
import { CheckItem } from "@/components/ui/check-item";

const WORKSHOP_DATE_LABEL = "Piątek, 24 Sierpnia @ 20:00";

// Konfiguracja wydarzenia do wygenerowania bezpośrednich linków (zaktualizowana dla 6 opcji)
const EVENT_TITLE = "Warsztat: Złoty Model Biznesowy";
const EVENT_DETAILS = "Link do warsztatu wyślemy na Twój adres e-mail przed startem. Sprawdź skrzynkę (i SPAM).";

// ZMIENIONE: 24 Sierpnia, 18:00 UTC (czyli 20:00 CEST)
const START_UTC = "20260824T180000Z"; 
// ZMIENIONE: 24 Sierpnia, 20:00 UTC (czyli 22:00 CEST) - zakłada 2 godziny
const END_UTC = "20260824T200000Z"; 

const START_ISO = "2026-08-24T20:00:00+02:00";
const END_ISO = "2026-08-24T22:00:00+02:00";

// Wygenerowane bezpośrednie linki do kalendarzy
const CALENDAR_LINKS = {
  apple: `data:text/calendar;charset=utf8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0ABEGIN%3AVEEVENT%0ADTSTART%3A${START_UTC}%0ADTEND%3A${END_UTC}%0ASUMMARY%3A${encodeURIComponent(EVENT_TITLE)}%0ADESCRIPTION%3A${encodeURIComponent(EVENT_DETAILS)}%0AEND%3AVEEVENT%0AEND%3AVCALENDAR`,
  google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_TITLE)}&dates=${START_UTC}/${END_UTC}&details=${encodeURIComponent(EVENT_DETAILS)}`,
  office365: `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(EVENT_TITLE)}&startdt=${START_ISO}&enddt=${END_ISO}&body=${encodeURIComponent(EVENT_DETAILS)}`,
  outlook: `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(EVENT_TITLE)}&startdt=${START_ISO}&enddt=${END_ISO}&body=${encodeURIComponent(EVENT_DETAILS)}`, // Mapujemy to współczesnego Outlooka dla firm
  outlookcom: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(EVENT_TITLE)}&startdt=${START_ISO}&enddt=${END_ISO}&body=${encodeURIComponent(EVENT_DETAILS)}`, // Mapujemy do starszego Outlook.com
  yahoo: `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(EVENT_TITLE)}&st=${START_UTC}&et=${END_UTC}&desc=${encodeURIComponent(EVENT_DETAILS)}`,
};

export function ConfirmationHeroSection() {
  return (
    <div className="bg-[#fcfbf9]">
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <span
            aria-hidden
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600"
          >
            <Check className="h-7 w-7 text-white" strokeWidth={3} />
          </span>

          <h1 className="mx-auto mt-4 max-w-[18ch] font-display text-[clamp(2rem,5.2vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Gratulacje! <span className="text-green-600">Zarezerwowaliśmy Tobie Miejsce!</span>
          </h1>

          {/* Sekcja ikon kalendarzy */}
          <div className="mt-8 w-full max-w-md">
            <h2 className="mb-6 font-display text-2xl font-bold text-black text-center">DODAJ DO KALENDARZA</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-6 p-4">
              <a href={CALENDAR_LINKS.apple} target="_blank" rel="noreferrer" title="Apple Calendar" className="transition-transform hover:scale-105">
                <img src="/icons/apple.svg" alt="Apple Calendar" className="h-20 w-20" />
              </a>
              <a href={CALENDAR_LINKS.google} target="_blank" rel="noreferrer" title="Google Calendar" className="transition-transform hover:scale-105">
                <img src="/icons/google.svg" alt="Google Calendar" className="h-20 w-20" />
              </a>
              <a href={CALENDAR_LINKS.outlookcom} target="_blank" rel="noreferrer" title="Outlook.com (Personal)" className="transition-transform hover:scale-105">
                <img src="/icons/outlook.svg" alt="Outlook.com (Personal)" className="h-20 w-20" />
              </a>
              <a href={CALENDAR_LINKS.yahoo} target="_blank" rel="noreferrer" title="Yahoo Calendar" className="transition-transform hover:scale-105">
                <img src="/icons/yahoo.svg" alt="Yahoo Calendar" className="h-20 w-20" />
              </a>
            </div>
          </div>

          <ul className="mt-10 w-full max-w-md divide-y divide-line text-left">
            <CheckItem shape="square" className="py-4">
              <p className="text-body text-ink-muted">
                <strong className="font-semibold text-ink">
                  Sprawdź skrzynkę e-mail
                </strong>{" "}
                (i folder SPAM lub Oferty) — wysłaliśmy tam wiadomość z
                linkiem do warsztatu i danymi dostępu.
              </p>
            </CheckItem>
            <CheckItem shape="square" className="py-4">
              <p className="text-body text-ink-muted">
                <strong className="font-semibold text-ink">
                  Dodaj warsztat do kalendarza
                </strong>{" "}
                — jedno kliknięcie, żeby przypomnienie nie zginęło w
                skrzynce.
              </p>
            </CheckItem>
          </ul>

          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-subtle">
            <Mail className="h-4 w-4" aria-hidden />
            Wiadomość przyjdzie z adresu kontakt@dochodowestudio.com
          </p>

          <p className="mx-auto mt-6 max-w-[36rem] font-display text-[1.0625rem] italic leading-[1.65] text-gray-700 text-pretty sm:text-lg">
            Zobaczymy się{" "}
            <strong className="font-semibold text-gray-900">
              {WORKSHOP_DATE_LABEL}
            </strong>{" "}
            na warsztacie.
          </p>
        </div>
      </section>
    </div>
  );
}
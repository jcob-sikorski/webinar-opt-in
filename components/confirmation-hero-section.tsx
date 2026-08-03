"use client";

import { CalendarPlus, Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CheckItem } from "@/components/ui/check-item";
import { CountdownTimer } from "@/components/countdown-timer";

// Keep this in sync with the target used on the main page's hero/countdown.
const WORKSHOP_START = "2026-08-14T19:00:00+02:00";
const WORKSHOP_DATE_LABEL = "Piątek, 14 Sierpnia @ 19:00";

// Google Calendar deep link. Swap in the real Zoom/Meet join URL under
// `details` once it exists — for now we just point people back to their inbox.
const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("Warsztat: Złoty Model Biznesowy") +
  "&dates=20260814T170000Z/20260814T190000Z&details=" +
  encodeURIComponent(
    "Link do warsztatu wyślemy na Twój adres e-mail przed startem. Sprawdź skrzynkę (i SPAM)."
  );

export function ConfirmationHeroSection() {
  return (
    <div className="bg-[#fcfbf9]">
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <span
            aria-hidden
            className="flex h-14 w-14 items-center justify-center rounded-full bg-coral-bright"
          >
            <Check className="h-7 w-7 text-white" strokeWidth={3} />
          </span>

          <h1 className="mx-auto mt-4 max-w-[18ch] font-display text-[clamp(2rem,5.2vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Gratulacje! <span className="text-coral">Zarezerwowaliśmy Tobie Miejsce!</span>
          </h1>

                    <div className="mt-8 w-full max-w-md">
            <Button
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 border-orange-500 hover:border-orange-600 text-white text-base sm:text-lg"
              onClick={() => window.open(CALENDAR_URL, "_blank")}
            >
              <CalendarPlus className="h-5 w-5" />
              Dodaj do kalendarza
            </Button>
          </div>

          <ul className="mt-10 w-full max-w-md divide-y divide-line text-left">
            <CheckItem shape="square" className="py-4">
              <p className="text-body text-ink-muted">
                <strong className="font-semibold text-ink">
                  Sprawdź skrzynkę e-mail
                </strong>{" "}
                (i folder SPAM lub Oferty) — wysłaliśmy tam wiadomość z linkiem do
                warsztatu i danymi dostępu.
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
            na warsztacie &bdquo;Złoty Model Biznesowy&rdquo;. Zanim wyjdziesz z
            tej strony — zrób dwie rzeczy poniżej, żeby na pewno się pojawić.
          </p>

        </div>
      </section>
    </div>
  );
}

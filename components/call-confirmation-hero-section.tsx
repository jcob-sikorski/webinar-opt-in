"use client";

import { PhoneCall, CheckCircle2, Clock } from "lucide-react";

export function ApplicationConfirmationHeroSection() {
  return (
    <div className="relative bg-[#fcfbf9]">
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Aplikacja wysłana
          </p>

          <h1 className="mx-auto mt-4 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold italic leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Twoje zgłoszenie zostało <span className="text-[#ef6b4a]">przyjęte.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty font-display text-lg italic leading-[1.6] text-gray-700 sm:text-xl">
            Dziękujemy za wypełnienie ankiety. Twój profil trafił do weryfikacji.
          </p>

          {/* KROK: Czekaj na telefon */}
          <div className="mx-auto mt-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-[#ef6b4a]">
              <PhoneCall className="h-7 w-7" />
            </div>

            <h2 className="mt-5 font-display text-2xl font-bold italic text-gray-900 sm:text-3xl">
              Co dzieje się teraz?
            </h2>

            <div className="mt-6 space-y-4 text-left font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                <p>
                  <strong className="font-semibold not-italic text-gray-900">
                    Weryfikacja danych:
                  </strong>{" "}
                  Nasz konsultant analizuje Twoje odpowiedzi i sprawdza, czy Twój model biznesowy kwalifikuje się do programu.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                <p>
                  <strong className="font-semibold not-italic text-gray-900">
                    Krótki telefon (ok. 5 minut):
                  </strong>{" "}
                  Odezwiemy się do Ciebie telefonicznie, aby szybko sprawdzić Twoją gotowość do wdrożenia i doprecyzować liczby.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                <p>
                  <strong className="font-semibold not-italic text-gray-900">
                    Rezerwacja terminu:
                  </strong>{" "}
                  Jeśli wszystko się zgadza — od razu podczas rozmowy ustalimy dogodny termin na pełną, bezpłatną 45-minutową sesję strategiczną 1:1.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm font-semibold text-gray-600">
                Miej telefon pod ręką — dzwonimy zazwyczaj w ciągu{" "}
                <span className="text-[#ef6b4a]">24-48 godzin</span> (w dni robocze).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
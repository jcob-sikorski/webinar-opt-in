"use client";

import { Section } from "@/components/ui/section";
import { FileText, AlertCircle, CheckCircle2 } from "lucide-react";

const VIDEO_ID = "7bQVkgCap00";
const PLAYBOOK_URL = "https://drive.google.com/file/d/1HfpuFoPEpsr2ijQ5ZVWE297gUL7SBnoD/view?usp=sharing";

const PLAYBOOK_HIGHLIGHTS = [
  <>
    <strong className="font-bold text-gray-900">Kalkulator wyboru lokalu:</strong> Jak uniknąć toksycznej umowy i utrzymać bezpieczny czynsz (zawsze poniżej 20% przychodu).
  </>,
  <>
    <strong className="font-bold text-gray-900">Architektura oferty premium:</strong> Jak przestać sprzedawać tanie "wejściówki" i zacząć sprzedawać pakiety transformacji.
  </>,
  <>
    <strong className="font-bold text-gray-900">System rekrutacji:</strong> 6-tygodniowy proces wdrażania trenera, który odciąży Cię z grafiku i zostanie z Tobą na lata.
  </>,
  <>
    <strong className="font-bold text-gray-900">Metodyka Miejsca:</strong> Twarde i miękkie standardy, dzięki którym klient ufa marce Twojego studia, a nie tylko Tobie.
  </>,
  <>
    <strong className="font-bold text-gray-900">21 brutalnych prawd biznesu fitness:</strong> Fundamenty, które musisz znać, zanim zainwestujesz pierwszą złotówkę.
  </>,
];

export function CallConfirmationBonusSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
          <AlertCircle className="h-4 w-4" />
          Krok 2: Przygotowanie do rozmowy
        </div>

        {/* Nagłówek */}
        <h2 className="mx-auto max-w-[28ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Zanim się zdzwonimy, <span className="text-[#ef6b4a]">obejrzyj ten materiał</span>
        </h2>

        {/* Copy wprowadzające */}
        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Szanuję Twój czas. Zależy mi na tym, aby nasza rozmowa strategiczna od pierwszej minuty dotyczyła planu skalowania Twojego biznesu, a nie tłumaczenia samej teorii.
          </p>
          <p className="mt-4">
            Dlatego proszę Cię, abyś przed naszym spotkaniem zapoznał się z fundamentami modelu Dochodowego Studia. <strong className="font-semibold not-italic text-gray-900">Dzięki temu od razu przejdziemy do konkretów.</strong>
          </p>
        </div>

        <div className="mt-14 border-t border-[#d6d6d6] text-center">
          {/* ARTYKUŁ WIDEO */}
          <article className="py-10">
            <h3 className="mx-auto max-w-[32ch] font-display text-xl font-bold italic text-gray-900 sm:text-2xl text-balance">
              Model Biznesowy: Jak zbudować studio, które zarabia bez Ciebie na sali (45 min)
            </h3>

            <div className="relative mx-auto my-6 aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-gray-900 shadow-md">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Dochodowe Studio - Model Biznesowy"
                className="h-full w-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mx-auto max-w-2xl space-y-5 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
              <p>
                Większość świetnych trenerów zarabia 15–20 tysięcy złotych miesięcznie, ale płaci za to ogromną cenę. Pracują po 10-12 godzin dziennie na sali, a gdy próbują wyjechać na urlop – <strong className="font-semibold not-italic text-gray-900">ich przychód z dnia na dzień spada do zera.</strong>
              </p>
              
              <p>
                W tym nagraniu pokazuję, jak wyrwać się z tej pułapki i zbudować kameralne studio (50–150 m²), które generuje 20–50 tysięcy powtarzalnego zysku:
              </p>

              {/* Lista - wyśrodkowany blok, tekst do lewej dla czytelności */}
              <ul className="mx-auto max-w-xl list-none space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                  <span><strong className="font-semibold not-italic text-gray-900">Dlaczego bycie świetnym trenerem to za mało:</strong> Zobaczysz, dlaczego budowanie biznesu wyłącznie na własnych godzinach to ślepa uliczka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                  <span><strong className="font-semibold not-italic text-gray-900">Matematyka małego studia:</strong> Zrozumiesz, dlaczego mniejszy metraż i 40 stałych klientów to znacznie bezpieczniejszy i bardziej rentowny model niż duża siłownia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                  <span><strong className="font-semibold not-italic text-gray-900">Koniec z tanimi wejściówkami:</strong> Pokażę Ci, jak wdrożyć Program 90 Dni oraz model semi-personalny (2-4 osoby).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                  <span><strong className="font-semibold not-italic text-gray-900">Złota zasada delegowania:</strong> Dowiesz się, kiedy jest ten właściwy moment, aby zatrudnić pierwszy zespół i zacząć schodzić z grafiku.</span>
                </li>
              </ul>

              <p className="pt-2">
                Niezależnie od tego, czy masz już placówkę, czy dopiero planujesz jej otwarcie, ten materiał uświadomi Ci, gdzie uciekają Twoje pieniądze i czas. <strong className="font-semibold not-italic text-gray-900">Studio nie powinno być Twoim kolejnym etatem. Powinno być poukładanym systemem.</strong>
              </p>
            </div>
          </article>
        </div>

        {/* SEKCJA PLAYBOOKA */}
        <div className="border-t border-[#d6d6d6] pt-10 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Materiały dodatkowe
          </p>
          <h3 className="mx-auto mt-3 max-w-[24ch] font-display text-2xl font-bold italic text-gray-900 sm:text-3xl text-balance">
            Dochodowe Studio: Playbook Kompletny 2026
          </h3>
          
          <p className="mx-auto mt-5 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
            To nie jest kolejny teoretyczny e-book, który przekartkujesz w kilka minut. To twardy, 18-rozdziałowy zapis procedur, kalkulatorów i standardów wyciągniętych prosto z naszych placówek.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
            <span>18 Rozdziałów</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
            <span>5 Systemów</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[#ef6b4a]" />
            <span>21 Narzędzi</span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
            Przestudiuj go przed rozmową, aby zrozumieć, jak działamy od kuchni:
          </p>
          
          {/* Lista - wyśrodkowany blok, tekst do lewej */}
          <div className="mx-auto mt-6 max-w-xl text-left">
            <ul className="space-y-4">
              {PLAYBOOK_HIGHLIGHTS.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10 flex flex-col items-center">
            <a
              href={PLAYBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-[#ef6b4a] bg-[#ef6b4a] px-8 py-5 text-center text-lg font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:bg-[#de5c3c] active:scale-[0.99] sm:text-xl"
            >
              <FileText className="h-6 w-6 shrink-0" />
              Pobierz Playbook (PDF)
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}
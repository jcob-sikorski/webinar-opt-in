"use client";

import { CountdownTimer } from "@/components/countdown-timer";
import { RegisterForm } from "@/components/register-form";

const WORKSHOP_START = "2026-09-17T20:00:00+02:00";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white font-sans selection:bg-orange-200">
      <div className="mx-auto w-full max-w-[25rem] px-3 pt-1 pb-4 min-[390px]:pt-1.5 min-[390px]:pb-5 sm:max-w-[34rem] sm:px-3.5 sm:pt-2 sm:pb-6 lg:max-w-6xl lg:px-8 lg:py-10">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          
          {/* LEWA KOLUMNA */}
          <div className="flex w-full flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            
            {/* Top Badge: Skrócony padding pionowy */}
            <div className="flex w-full max-w-[21.5rem] flex-col items-center justify-center rounded-xl border-[1.5px] border-[#ea580c] bg-[#fff7ed] py-0.5 px-2.5 text-center shadow-xs sm:rounded-2xl sm:py-1 sm:px-3 sm:max-w-[23.5rem] lg:mx-0">
              <div className="flex items-center gap-1.5 text-[0.72rem] font-extrabold tracking-tight text-[#7c2d12] min-[390px]:text-[0.78rem] sm:gap-2 sm:text-[0.85rem]">
                <span className="relative flex h-2 w-2 shrink-0 items-center justify-center sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
                </span>
                SZKOLENIE NA ŻYWO: CZWARTEK, 17 WRZ
              </div>
              <div className="text-[0.67rem] font-bold leading-tight text-[#ea580c] min-[390px]:text-[0.72rem] sm:text-[0.78rem]">
                Dla Właścicieli Studiów PT, Butikowych Siłowni i Boxów
              </div>
            </div>

            {/* Main Headline - Zwiększony rozmiar fontu */}
            <h1 className="mt-2 w-full text-[1.28rem] font-extrabold leading-[1.2] tracking-tight text-black min-[390px]:mt-2.5 min-[390px]:text-[1.42rem] sm:mt-3.5 sm:text-[1.85rem] sm:leading-[1.18] lg:text-[2.25rem]">
              <span className="block text-neutral-900">
                Otworzyłeś studio, żeby mieć wolność,{" "}
                <span className="text-[#ea580c]">a stworzyłeś sobie najdroższy etat?</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-1.5 w-full text-[0.82rem] font-light leading-[1.32] tracking-normal text-neutral-800 min-[390px]:mt-2 min-[390px]:text-[0.9rem] sm:mt-2.5 sm:text-[1.05rem]">
              Dlaczego kolejne godziny na macie i nowi klienci tylko pogłębią chaos — i jak przebudować model{" "}
              <span className="font-bold text-black">na 20–50 tys. zł zysku / mies. bez stania na sali</span>
            </p>

            {/* Social Proof */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 min-[390px]:mt-2.5 sm:mt-3.5 sm:gap-2.5 lg:justify-start">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50/80 py-0.5 pl-1 pr-2.5 shadow-xs sm:gap-2 sm:py-1 sm:pl-1.5 sm:pr-3">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img className="inline-block h-4 w-4 rounded-full object-cover ring-1 ring-white sm:h-5 sm:w-5 sm:ring-1.5" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-4 w-4 rounded-full object-cover ring-1 ring-white sm:h-5 sm:w-5 sm:ring-1.5" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-4 w-4 rounded-full object-cover ring-1 ring-white sm:h-5 sm:w-5 sm:ring-1.5" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-4 w-4 rounded-full object-cover ring-1 ring-white sm:h-5 sm:w-5 sm:ring-1.5" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                </div>
                <span className="text-[0.72rem] font-bold tracking-tight text-neutral-800 min-[390px]:text-[0.78rem]">
                  +38 mln zł przychodu uczestników
                </span>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50/80 px-2.5 py-0.5 shadow-xs sm:gap-1.5 sm:px-3 sm:py-1">
                <div className="flex items-center text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[0.7rem] font-bold text-neutral-800 min-[390px]:text-[0.75rem]">100+ opinii 4.8/5</span>
              </div>

              {/* Live Scarcity & No-Replay Policy */}
              <div className="mt-4 flex w-full max-w-md items-center justify-center gap-2.5 text-center text-sm font-medium text-neutral-600 sm:max-w-lg sm:text-base">
                <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500" />
                </span>
                <span>
                  Zostało miejsc: <strong className="font-bold text-neutral-900">11</strong>
                </span>
              </div>
            </div>

          </div>

          {/* PRAWA KOLUMNA: Formularz bezpośrednio pod obietnicą, licznik poniżej */}
          <div id="zapis" className="mt-2.5 flex w-full scroll-mt-4 flex-col items-center min-[390px]:mt-3 sm:mt-4 lg:col-span-5 lg:mt-0">
            <RegisterForm className="shadow-2xl" />
            
            {/* Countdown: Urgency pod przyciskiem CTA */}
            <div className="mt-3 flex w-full flex-col items-center min-[390px]:mt-3.5">
              <h2 className="mb-1 text-center text-[0.74rem] font-black uppercase tracking-[0.04em] text-[#ea580c] min-[390px]:text-[0.8rem] sm:text-[0.88rem]">
                SZKOLENIE STARTUJE ZA
              </h2>
              <div className="w-full max-w-[21.5rem] sm:max-w-[23.5rem]">
                <CountdownTimer target={WORKSHOP_START} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { CountdownTimer } from "@/components/countdown-timer";
import { RegisterForm } from "@/components/register-form";

const WORKSHOP_START = "2026-09-16T20:00:00+02:00";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white font-sans selection:bg-orange-200">
      <div className="mx-auto w-full max-w-[25rem] px-3.5 pt-2 pb-6 sm:max-w-[34rem] lg:max-w-6xl lg:px-8 lg:py-10">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          
          {/* LEWA KOLUMNA */}
          <div className="flex w-full flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            
            {/* Top Badge: Warm Urgent Accent */}
            <div className="flex w-full max-w-[21.5rem] flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#ea580c] bg-[#fff7ed] py-1 px-3 text-center shadow-xs sm:max-w-[23.5rem] lg:mx-0">
              <div className="flex items-center gap-2 text-[0.78rem] font-extrabold tracking-tight text-[#7c2d12] sm:text-[0.85rem]">
                <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
                </span>
                SZKOLENIE NA ŻYWO: ŚRODA, 16 WRZ
              </div>
              <div className="text-[0.72rem] font-bold leading-tight text-[#ea580c] sm:text-[0.78rem]">
                Dla Właścicieli Studiów PT, Butikowych Siłowni i Boxów
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mt-3 w-full text-[1.15rem] font-extrabold leading-[1.3] tracking-tight text-black min-[390px]:text-[1.3rem] sm:text-[1.65rem] lg:text-[1.95rem]">
              <span className="block text-black">Pułapka Trenera-Właściciela:</span>
              <span className="mt-1 block text-neutral-900">
                Dlaczego im więcej godzin trenujesz osobiście,{" "}
                <span className="text-[#ea580c]">tym mniej zarabiasz</span>{" "}
                <span className="whitespace-nowrap font-bold text-neutral-600">
                  (i jak to odwrócić)
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-2.5 w-full text-[0.875rem] font-light leading-[1.38] tracking-normal text-neutral-800 min-[390px]:text-[0.95rem] sm:text-[1.05rem]">
              Jak poukładać procesy, zespół i marżę w studiu treningu personalnego, aby bezpiecznie zejść z sali i{" "}
              <span className="font-bold text-black">przestać pracować po 60h tygodniowo.</span>
            </p>

            {/* Social Proof */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 py-1 pl-1.5 pr-3 shadow-xs">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                  <img className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" alt="Student avatar" />
                </div>
                <span className="text-[0.78rem] font-bold tracking-tight text-neutral-800">
                  +38 mln zł przychodu uczestników
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50/80 px-3 py-1 shadow-xs">
                <div className="flex items-center gap-0.5 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[0.75rem] font-bold text-neutral-800">Ponad 100 opinii 5/5</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mt-4 flex w-full flex-col items-center lg:items-start">
              <h2 className="mb-1.5 text-center text-[1.05rem] font-black uppercase tracking-[0.04em] text-[#ea580c] sm:text-[1.2rem] lg:text-left">
                SZKOLENIE STARTUJE ZA
              </h2>
              <div className="w-full max-w-[21.5rem] sm:max-w-[23.5rem]">
                <CountdownTimer target={WORKSHOP_START} />
              </div>
            </div>

          </div>

          {/* PRAWA KOLUMNA */}
          <div id="zapis" className="mt-4 flex w-full scroll-mt-4 flex-col items-center lg:col-span-5 lg:mt-0">
            <RegisterForm className="shadow-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
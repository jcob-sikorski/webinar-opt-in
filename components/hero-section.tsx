"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import { useRegisterModal } from "@/components/register-modal-provider";

const WORKSHOP_START = "2026-09-04T19:00:00+02:00";

export function HeroSection() {
  const { openRegister } = useRegisterModal();

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-blue-200 flex flex-col items-center overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[25rem] sm:max-w-[32rem] md:max-w-[38rem] flex-col items-center px-3.5 pt-2.5 pb-8 sm:pt-4">
        
        {/* Top Badge */}
        <div className="mx-auto flex w-full max-w-[21.5rem] sm:max-w-[23.5rem] flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#2563eb] bg-[#edf4ff] py-1.5 px-3 text-center shadow-xs">
          <div className="flex items-center gap-2 text-[0.78rem] sm:text-[0.85rem] font-extrabold text-[#0f2864] tracking-tight">
            <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
            </span>
            LIVE WORKSHOP: Wednesday 7PM EDT
          </div>
          <div className="text-[0.72rem] sm:text-[0.78rem] font-bold text-[#1665f5] leading-tight">
            For Coaches, Consultants &amp; Course Creators
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mt-4 w-full text-center text-[2.05rem] min-[390px]:text-[2.25rem] sm:text-[3.1rem] md:text-[3.6rem] font-extrabold leading-[1.12] tracking-[-0.015em] text-black">
          <span className="block">Copy My $20M+</span>
          <span className="block">Webinar Strategy <span className="text-[#1665f5]">To</span></span>
          <span className="block text-[#1665f5]">Add An Extra</span>
          <span className="block"><span className="text-[#1665f5]">100k/Mo</span> Showing Up</span>
          <span className="block">Just 1 Hour Per Week</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-3 w-full text-center text-[0.875rem] min-[390px]:text-[0.95rem] sm:text-[1.1rem] font-light leading-[1.38] tracking-normal text-black">
          Scale Further With Less Sales Calls, Higher<br />
          Quality Clients &amp; <span className="font-bold text-black">Only Show Up 1 Hour/Week</span>
        </p>

        {/* Video Preview Box */}
        <div className="mx-auto mt-3.5 w-full max-w-[23rem] sm:max-w-[28rem]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[4px] border-[4px] sm:border-[5px] border-[#1665f5] bg-black shadow-[0_4px_25px_rgba(0,0,0,0.14)]">
            <img
              src="https://ucarecdn.com/3cb95e08-818a-470b-b52a-a9e5d9d37d8d/unnamed9.webp"
              alt="Workshop Preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Countdown Section - Tight gap to video & timer */}
        <div className="mt-4 flex w-full flex-col items-center">
          <h2 className="mb-2 text-center text-[1.15rem] sm:text-[1.35rem] font-black uppercase tracking-[0.04em] text-[#1665f5]">
            MASTERCLASS STARTS IN
          </h2>
          <div className="w-full max-w-[21.5rem] sm:max-w-[23.5rem]">
            <CountdownTimer target={WORKSHOP_START} />
          </div>
        </div>

        {/* CTA Button & Bottom Replay Text */}
        <div className="mt-3.5 flex w-full flex-col items-center">
          <Button
            onClick={openRegister}
            className="flex h-auto w-full max-w-[23rem] sm:max-w-[25.5rem] flex-col items-center justify-center rounded-[14px] !border-none !bg-[#1665f5] py-3 px-4 !normal-case !tracking-normal shadow-sm transition-transform hover:!bg-[#1354cc] active:scale-[0.98]"
          >
            <span className="text-[1.45rem] min-[390px]:text-[1.6rem] sm:text-[1.75rem] font-black leading-tight text-white tracking-tight">
              Claim Your Ticket - $27
            </span>
            <span className="mt-0.5 text-[0.78rem] min-[390px]:text-[0.84rem] font-semibold leading-tight text-white/95">
              +Get $7,830 Worth Of Bonuses
            </span>
          </Button>

          <p className="mt-2.5 text-center text-[0.92rem] min-[390px]:text-[0.98rem] font-black text-black tracking-tight">
            Lifetime Replay + Webinar Mastery Vault
          </p>
        </div>

      </div>
    </div>
  );
}
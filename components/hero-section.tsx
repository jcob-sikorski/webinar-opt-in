"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import { useRegisterModal } from "@/components/register-modal-provider";

const WORKSHOP_START = "2026-09-04T19:00:00+02:00";

export function HeroSection() {
  const { openRegister } = useRegisterModal();

  return (
    <div className="relative w-full bg-white font-sans selection:bg-blue-200 flex flex-col items-center overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[25rem] sm:max-w-[32rem] md:max-w-[38rem] flex-col items-center px-3.5 pt-2.5 pb-4 sm:pt-4 sm:pb-6">
        
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
          <span className="block whitespace-nowrap">Copy My $20M+</span>
          <span className="block whitespace-nowrap">Webinar Strategy <span className="text-[#1665f5]">To</span></span>
          <span className="block whitespace-nowrap text-[#1665f5]">Add An Extra</span>
          <span className="block whitespace-nowrap"><span className="text-[#1665f5]">100k/Mo</span> Showing Up</span>
          <span className="block whitespace-nowrap">Just 1 Hour Per Week</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-3 w-full text-center text-[0.875rem] min-[390px]:text-[0.95rem] sm:text-[1.1rem] font-light leading-[1.38] tracking-normal text-black">
          Scale Further With Less Sales Calls, Higher<br />
          Quality Clients &amp; <span className="font-bold text-black">Only Show Up 1 Hour/Week</span>
        </p>

        {/* Countdown Section */}
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
            className="flex !h-auto w-full max-w-[22rem] sm:max-w-[24rem] flex-col items-center justify-center rounded-[12px] !border-none !bg-[#1665f5] !py-2 !px-2.5 !normal-case shadow-[0_4px_14px_rgba(0,0,0,0.22)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
            style={{ paddingTop: "8px", paddingBottom: "8px", minHeight: "unset" }}
          >
            <span className="text-[1.65rem] min-[390px]:text-[1.78rem] font-bold leading-none text-white tracking-normal whitespace-nowrap">
              Claim Your Ticket - $27
            </span>
            <span className="mt-1 text-[0.82rem] min-[390px]:text-[0.88rem] font-bold leading-none text-[#b8d2fe] tracking-normal whitespace-nowrap">
              +Get $7,830 Worth Of Bonuses
            </span>
          </Button>

          <p className="mt-2.5 text-center text-[0.92rem] min-[390px]:text-[0.98rem] font-black text-black tracking-tight">
            Lifetime Replay + Webinar Mastery Vault
          </p>

          {/* Social Proof Badges */}
          <div className="mt-3 flex flex-col items-center gap-1.5">
            {/* 100+ Star Rating Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50/80 px-3 py-1 shadow-xs">
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[0.78rem] font-bold tracking-tight text-neutral-800">
                Over 100+ 5 Star Ratings
              </span>
            </div>

            {/* Student Revenue + Avatar Stack Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 py-1 pl-1.5 pr-3 shadow-xs">
              <div className="flex -space-x-1.5 overflow-hidden">
                <img
                  className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
                  alt="Student avatar"
                />
                <img
                  className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                  alt="Student avatar"
                />
                <img
                  className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
                  alt="Student avatar"
                />
                <img
                  className="inline-block h-5 w-5 rounded-full object-cover ring-1.5 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
                  alt="Student avatar"
                />
              </div>
              <span className="text-[0.78rem] font-bold tracking-tight text-neutral-800">
                $38M in Student Revenue
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
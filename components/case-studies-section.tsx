"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRegisterModal } from "@/components/register-modal-provider";

interface DashboardStrip {
  highlight: string;
  subtext: string;
  imageSrc: string;
  alt: string;
}

const DASHBOARD_STRIPS: DashboardStrip[] = [
  {
    highlight: "260k/Month",
    subtext: "From Webinars",
    imageSrc: "/case-studies/260k-month.png",
    alt: "260k/Month From Webinars Dashboard",
  },
  {
    highlight: "644k/Month",
    subtext: "From Webinars",
    imageSrc: "/case-studies/644k-month.png",
    alt: "644k/Month From Webinars Dashboard",
  },
  {
    highlight: "153k/Month",
    subtext: "From Webinars",
    imageSrc: "/case-studies/153k-month.png",
    alt: "153k/Month From Webinars Dashboard",
  },
  {
    highlight: "126k/Month",
    subtext: "From Webinars",
    imageSrc: "/case-studies/126k-month.png",
    alt: "126k/Month From Webinars Dashboard",
  },
  {
    highlight: "50k Days",
    subtext: "From Webinars",
    imageSrc: "/case-studies/50k-days.png",
    alt: "50k Days From Webinars Dashboard",
  },
];

export function CaseStudiesSection() {
  const { openRegister } = useRegisterModal();

  return (
    <section className="w-full bg-white pt-1 pb-12 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Top Highlighter Header */}
        <div className="inline-block bg-[#faea75] px-5 min-[390px]:px-6 py-1 text-center">
          <h2 className="text-[1.2rem] min-[390px]:text-[1.35rem] sm:text-[1.5rem] font-bold leading-tight tracking-tight text-black">
            Some casual{" "}
            <span className="underline decoration-black decoration-[2px] underline-offset-[2px]">
              results below..
            </span>
          </h2>
        </div>

        {/* ================= CASE STUDY 1 ================= */}
        <div className="mt-6 flex w-full flex-col items-center">
        <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-black">
            $292k From $48k Spent On Just 1<br />Webinar (6X ROAS)
        </h3>

        <div className="relative mt-2 aspect-[1.12/1] w-full overflow-hidden rounded-[1.1rem] border border-[#e2e8f0] bg-[#f8fafc] shadow-xs">
            <img
            src="/case-studies/292k-funnel.png"
            alt="421 Live Attendees and Revenue Breakdown"
            className="h-full w-full object-contain"
            />
        </div>

        <p className="mt-2 text-center text-[1.15rem] min-[390px]:text-[1.28rem] font-bold tracking-tight text-black">
            1Mil/Month Offer
        </p>
        </div>

        {/* ================= CASE STUDY 2 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
        <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-black">
            $236k From $56k Spent In A Month<br />On Webinars (5.6X ROAS)
        </h3>

        <div className="relative mt-2 aspect-[1.08/1] w-full overflow-hidden rounded-[1.1rem] border border-[#e2e8f0] bg-[#f8fafc] shadow-xs">
            <img
            src="/case-studies/236k-funnel.png"
            alt="13,764 visitors to 1,344 live attendees breakdown"
            className="h-full w-full object-contain"
            />
        </div>

        <p className="mt-2 text-center text-[1.15rem] min-[390px]:text-[1.28rem] font-bold tracking-tight text-black">
            700k/Month Offer
        </p>
        </div>

        {/* ================= CASE STUDY 3 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
        <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-black">
            $321k From $56k Spent In A Month<br />On Webinars (5.6X ROAS)
        </h3>

        <div className="relative mt-2 aspect-[1.05/1] w-full overflow-hidden rounded-[1.25rem] border border-[#1e293b] bg-[#0c1322] shadow-md">
            <img
            src="/case-studies/321k-dashboard.png"
            alt="Revenue and Cost Chart Dashboard"
            className="h-full w-full object-contain"
            />
        </div>
        </div>

        {/* ================= CASE STUDY 4 ================= */}
        <div className="mt-7 flex w-full flex-col items-center">
        <h3 className="text-center text-[1.12rem] min-[390px]:text-[1.24rem] sm:text-[1.38rem] font-bold leading-[1.18] tracking-tight text-black">
            $96k From $11k Spent (8.2X ROAS)
        </h3>

        <div className="relative mt-2 aspect-[1.05/1] w-full overflow-hidden rounded-[1.25rem] border border-[#1e293b] bg-[#0c1322] shadow-md">
            <img
            src="/case-studies/96k-dashboard.png"
            alt="8.2X ROAS Dashboard"
            className="h-full w-full object-contain"
            />
        </div>
        </div>

        {/* ================= CASE STUDY 5 (POV Calendar) ================= */}
        <div className="relative mt-9 aspect-[1/1.08] w-full overflow-hidden rounded-[1.4rem] border border-[#111827] bg-black shadow-lg">
          <img
            src="/case-studies/pov-84-calls.png"
            alt="POV: You booked 84 Calls on a Sunday webinar"
            className="h-full w-full object-contain"
          />
        </div>

        {/* ================= DASHBOARD STRIPS LIST ================= */}
        <div className="mt-9 flex w-full flex-col gap-6">
          {DASHBOARD_STRIPS.map((strip) => (
            <div key={strip.highlight} className="flex w-full flex-col items-center">
              <h4 className="text-center text-[1.2rem] min-[390px]:text-[1.32rem] leading-tight tracking-tight text-black">
                <span className="font-extrabold">{strip.highlight}</span>{" "}
                <span className="font-light text-slate-800">{strip.subtext}</span>
              </h4>

              {/* Strip Container with fixed wide aspect ratio */}
              <div className="relative mt-2 aspect-[4.8/1] w-full overflow-hidden rounded-[0.85rem] border border-[#1e293b] bg-[#0b1220] shadow-xs">
                <img
                  src={strip.imageSrc}
                  alt={strip.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlighter Banner */}
        <div className="mt-8 sm:mt-10 flex w-full justify-center">
        <div className="w-[90%] sm:w-[85%] bg-[#faea75] py-1 sm:py-1.5 text-center">
            <h3 className="text-[1.18rem] min-[390px]:text-[1.32rem] sm:text-[1.48rem] font-bold leading-tight tracking-tight text-black">
            And{" "}
            <span className="underline decoration-black decoration-[1.8px] sm:decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]">
                Many Many More...
            </span>
            </h3>
        </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 w-full flex justify-center">
            <Button
            onClick={openRegister}
            className="flex !h-auto w-full max-w-[28rem] flex-col items-center justify-center rounded-[14px] !border-none !bg-[#1665f5] !px-8 !py-2.5 !normal-case shadow-[0_4px_14px_rgba(0,0,0,0.22)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
            >
                <span className="text-[1.9rem] min-[390px]:text-[2.15rem] font-bold leading-none text-white tracking-tight whitespace-nowrap">
                    Claim Your Ticket - $27
                </span>
                <span className="mt-1 text-[0.95rem] min-[390px]:text-[1.05rem] font-bold leading-none text-[#b8d2fe] tracking-tight whitespace-nowrap">
                    +Get $7,830 Worth Of Bonuses
                </span>
            </Button>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from "react";

export function RealTransparencySection() {
  return (
    <section className="relative w-full bg-white font-sans selection:bg-orange-200 flex flex-col items-center overflow-x-hidden pt-4 pb-14 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Step / Topic Tag: Amber border with subtle peach fill */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
            UNFILTERED DATA
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-center text-[1.28rem] min-[390px]:text-[1.42rem] sm:text-[1.65rem] font-black leading-tight tracking-tight text-neutral-900">
          The Outcome Spectrum: <br />
          <span className="text-[#ea580c]">Averages, Worst-Cases &amp; Hard Stats</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-neutral-600">
          Most marketers only show the top 1% $500K dashboard. Here is what actually happens across all tiers of operators.
        </p>

        {/* 3 Real Data Counter Badges */}
        <div className="mt-5 grid w-full grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-200/90 bg-[#fffcf8] py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-neutral-900 tracking-tight">
              &lt; 0.08%
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-neutral-500 leading-tight">
              Stripe Dispute Rate
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-200/90 bg-[#fffcf8] py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-neutral-900 tracking-tight">
              1.4%
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-neutral-500 leading-tight">
              Refund Request Rate
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#fed7aa] bg-[#fff7ed]/60 py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-[#ea580c] tracking-tight">
              2.4X
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-neutral-600 leading-tight">
              Median 60-Day ROAS
            </span>
          </div>
        </div>

        {/* Outcome Breakdown Cards */}
        <div className="mt-5 flex w-full flex-col gap-3">
          
          {/* Card 1: Realistic Average / Mid-Level Win (Warm Primary) */}
          <div className="w-full rounded-[1.25rem] border border-[#fed7aa] bg-[#fffaf5] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#ea580c]">
                THE TYPICAL OPERATOR (MIDDLE 70%)
              </span>
              <span className="rounded-md bg-[#ffedd5] px-1.5 py-0.5 text-[0.62rem] font-bold text-[#c2410c]">
                +$8k–$25k/Mo
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-neutral-900 leading-snug">
              Consistent Cash Flow &amp; Less Sales Call Burnout
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-neutral-700 leading-[1.42]">
              They aren&apos;t hitting $1M/month, and they don&apos;t need to. They invest $1,500–$3,000 in monthly ad spend, fill a weekly room with 40–80 targeted attendees, and close 2–4 high-ticket clients like clockwork while cutting out 15 hours of manual outreach.
            </p>
          </div>

          {/* Card 2: The Worst-Case / Less Than Ideal (Subtle Ochre/Amber) */}
          <div className="w-full rounded-[1.25rem] border border-amber-200/80 bg-[#fffcf6] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-amber-700">
                WORST-CASE SCENARIO (BOTTOM 10–15%)
              </span>
              <span className="rounded-md bg-amber-100/70 px-1.5 py-0.5 text-[0.62rem] font-bold text-amber-800">
                Barely Broke Even
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-neutral-900 leading-snug">
              Launch #1 Flatlines or Barely Covers Ad Spend
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-neutral-700 leading-[1.42]">
              Example: Spend $1,200 on cold ads, generate 1 single sale ($1,500) on the replay. Why does this happen? Usually an untested offer, bad audio/video delivery, or an audience mismatch. The upside? They don&apos;t lose money, they retain every lead in their CRM, and they fix the hook on run #2.
            </p>
          </div>

          {/* Card 3: The 10% Who Fail Completely (Crisp Red Alert) */}
          <div className="w-full rounded-[1.25rem] border border-red-200/80 bg-[#fffafa] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-red-600">
                WHO DOES NOT SUCCEED
              </span>
              <span className="rounded-md bg-red-100 px-1.5 py-0.5 text-[0.62rem] font-bold text-red-700">
                Zero Traction
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-neutral-900 leading-snug">
              No Market Demand + Giving Up Before The 2nd Webinar
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-neutral-700 leading-[1.42]">
              Webinars amplify market resonance; they do not create desire out of thin air. People who quit after spending $150 with zero sales and refuse to adjust their pitch or offer angle do not win with this model.
            </p>
          </div>

        </div>

        {/* Closing Truth Callout */}
        <div className="mt-5 flex w-full items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white p-3 shadow-2xs">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] text-[0.7rem] font-black text-[#ea580c]">
            i
          </span>
          <p className="text-[0.74rem] text-neutral-600 leading-tight">
            If you want unrealistic &quot;overnight push-button riches&quot;, this room is not for you. If you want engineered economics, you will thrive.
          </p>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from "react";

export function RealTransparencySection() {
  return (
    <section className="relative w-full bg-white font-sans selection:bg-blue-200 flex flex-col items-center overflow-x-hidden pt-4 pb-14 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Step / Topic Tag */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#dbeafe] bg-[#f0f6fe] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#1665f5]">
            UNFILTERED DATA
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-center text-[1.28rem] min-[390px]:text-[1.42rem] sm:text-[1.65rem] font-black leading-tight tracking-tight text-[#0c1e38]">
          The Outcome Spectrum: <br />
          <span className="text-[#1665f5]">Averages, Worst-Cases &amp; Hard Stats</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-[#64748b]">
          Most marketers only show the top 1% $500K dashboard. Here is what actually happens across all tiers of operators.
        </p>

        {/* 3 Real Data Counter Badges */}
        <div className="mt-5 grid w-full grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#fafcff] py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-[#0c1e38] tracking-tight">
              &lt; 0.08%
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-[#64748b] leading-tight">
              Stripe Dispute Rate
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#fafcff] py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-[#0c1e38] tracking-tight">
              1.4%
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-[#64748b] leading-tight">
              Refund Request Rate
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#fafcff] py-2.5 px-1 text-center shadow-2xs">
            <span className="text-[1.05rem] sm:text-[1.15rem] font-black text-[#1665f5] tracking-tight">
              2.4X
            </span>
            <span className="mt-0.5 text-[0.62rem] font-semibold text-[#64748b] leading-tight">
              Median 60-Day ROAS
            </span>
          </div>
        </div>

        {/* Outcome Breakdown Cards */}
        <div className="mt-5 flex w-full flex-col gap-3">
          
          {/* Card 1: Realistic Average / Mid-Level Win */}
          <div className="w-full rounded-[1.25rem] border border-[#dce8fd] bg-[#f8fbff] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#1665f5]">
                THE TYPICAL OPERATOR (MIDDLE 70%)
              </span>
              <span className="rounded-md bg-[#edf4fe] px-1.5 py-0.5 text-[0.62rem] font-bold text-[#1665f5]">
                +$8k–$25k/Mo
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-[#0c1e38] leading-snug">
              Consistent Cash Flow &amp; Less Sales Call Burnout
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-[#475569] leading-[1.42]">
              They aren&apos;t hitting $1M/month, and they don&apos;t need to. They invest $1,500–$3,000 in monthly ad spend, fill a weekly room with 40–80 targeted attendees, and close 2–4 high-ticket clients like clockwork while cutting out 15 hours of manual outreach.
            </p>
          </div>

          {/* Card 2: The Worst-Case / Less Than Ideal */}
          <div className="w-full rounded-[1.25rem] border border-[#f1e5d5] bg-[#fffcf8] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#b5854b]">
                WORST-CASE SCENARIO (BOTTOM 10–15%)
              </span>
              <span className="rounded-md bg-[#fdf3e7] px-1.5 py-0.5 text-[0.62rem] font-bold text-[#b5854b]">
                Barely Broke Even
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-[#0c1e38] leading-snug">
              Launch #1 Flatlines or Barely Covers Ad Spend
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-[#475569] leading-[1.42]">
              Example: Spend $1,200 on cold ads, generate 1 single sale ($1,500) on the replay. Why does this happen? Usually an untested offer, bad audio/video delivery, or an audience mismatch. The upside? They don&apos;t lose money, they retain every lead in their CRM, and they fix the hook on run #2.
            </p>
          </div>

          {/* Card 3: The 10% Who Fail Completely */}
          <div className="w-full rounded-[1.25rem] border border-[#fee2e2] bg-[#fffbfa] p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#dc2626]">
                WHO DOES NOT SUCCEED
              </span>
              <span className="rounded-md bg-[#fee2e2] px-1.5 py-0.5 text-[0.62rem] font-bold text-[#b91c1c]">
                Zero Traction
              </span>
            </div>

            <h3 className="mt-2 text-[0.92rem] font-extrabold text-[#0c1e38] leading-snug">
              No Market Demand + Giving Up Before The 2nd Webinar
            </h3>

            <p className="mt-1.5 text-[0.77rem] text-[#475569] leading-[1.42]">
              Webinars amplify market resonance; they do not create desire out of thin air. People who quit after spending $150 with zero sales and refuse to adjust their pitch or offer angle do not win with this model.
            </p>
          </div>

        </div>

        {/* Closing Truth Callout */}
        <div className="mt-5 flex w-full items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-2xs">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf4fe] text-[0.7rem] font-black text-[#1665f5]">
            i
          </span>
          <p className="text-[0.74rem] text-[#64748b] leading-tight">
            If you want unrealistic &quot;overnight push-button riches&quot;, this room is not for you. If you want engineered economics, you will thrive.
          </p>
        </div>

      </div>
    </section>
  );
}
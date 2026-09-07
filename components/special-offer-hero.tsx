"use client";

import React from "react";
import { CountdownTimer } from "./countdown-timer";

export function SpecialOfferHero() {
  const EXPIRATION_DATE = "2026-09-015T23:59:59+02:00"; 

  return (
    <section className="relative w-full bg-white pt-4 pb-10 px-4 sm:px-6 flex flex-col items-center overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[23rem] sm:max-w-[27rem] flex-col items-center">
        
        {/* Scarcity Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ef4444]/30 bg-[#fef2f2] px-3.5 py-1 shadow-2xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
          </span>
          <span className="text-[0.68rem] sm:text-[0.74rem] font-black uppercase tracking-[0.12em] text-[#b91c1c]">
            ONLY 70 SPOTS AVAILABLE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-3 text-center text-[1.95rem] min-[390px]:text-[2.2rem] sm:text-[2.6rem] font-black leading-[1.12] tracking-tight text-[#0c1e38]">
          Yes Joe &amp; Jason <br />
          <span className="text-[#1665f5]">I&apos;m In!</span>
        </h1>

        {/* Expiry Subhead */}
        <p className="mt-2 text-center text-[0.85rem] sm:text-[0.92rem] font-semibold text-[#64748b]">
          Offer Expires In...
        </p>

        {/* Countdown Box */}
        <div className="mt-3 w-full">
          <CountdownTimer target={EXPIRATION_DATE} />
        </div>

        {/* Subheadline */}
        <p className="mt-5 w-full text-center text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-normal leading-[1.45] tracking-tight text-[#334155]">
        By signing up today, you guarantee your spot at{" "}
        <span className="font-bold text-[#0c1e38]">Genius Network Headquarters</span> where, for two days,{" "}
        <span className="font-bold text-[#1665f5]">Jason Fladlien</span> will walk you through exactly what it takes to create million dollar webinar presentations.
        </p>

        {/* Urgency Box */}
        <p className="mt-6 text-center text-[0.78rem] sm:text-[0.84rem] font-black uppercase tracking-tight text-[#0c1e38]">
          SPACING IS LIMITED AND AVAILABLE ON A FIRST COME, FIRST SERVED BASIS. SIGN UP NOW!
        </p>

        {/* CTA Button */}
        <a
          href="#register"
          className="mt-3 flex !h-auto w-full flex-col items-center justify-center rounded-[14px] !bg-[#1665f5] py-3.5 px-4 shadow-[0_4px_14px_rgba(22,101,245,0.35)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
        >
          <span className="text-[1.25rem] min-[390px]:text-[1.4rem] font-black uppercase tracking-wide text-white">
            &raquo; REGISTER HERE &laquo;
          </span>
        </a>

        {/* Bullet Section Header */}
        <div className="mt-7 mb-3 flex w-full items-center gap-3">
          <span className="shrink-0 text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.14em] text-[#1665f5]">
            WHAT YOU HAVE TO LOOK FORWARD TO
          </span>
          <div className="h-[1px] flex-1 bg-[#e2e8f0]" />
        </div>

        {/* Event Deliverables Cards */}
        <div className="flex w-full flex-col gap-3">
          {/* Item 1 */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf4fe] text-[#1665f5]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.86rem] sm:text-[0.9rem] font-bold text-[#0c1e38] leading-snug">
                Intimate environment geared toward success
              </h4>
              <p className="mt-1 text-[0.78rem] text-[#64748b] leading-[1.38]">
                This is the same room where legendary entrepreneurs like Dean Graziosi, Dan Sullivan, JJ Virgin and more go to attend Joe&apos;s Genius Network mastermind events.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf4fe] text-[#1665f5]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.86rem] sm:text-[0.9rem] font-bold text-[#0c1e38] leading-snug">
                Healthy breakfast and lunch catered in
              </h4>
              <p className="mt-1 text-[0.78rem] text-[#64748b] leading-[1.38]">
                From an Iron Chef America Champion, tasting delicious and will be nutritious. Plus, healthy snacks will be made available throughout the day.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf4fe] text-[#1665f5]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.86rem] sm:text-[0.9rem] font-bold text-[#0c1e38] leading-snug">
                Handouts, checklists &amp; worksheets
              </h4>
              <p className="mt-1 text-[0.78rem] text-[#64748b] leading-[1.38]">
                And more will be provided to assist you through the two day live training. This reference material is designed to enhance your learning and success.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-2xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf4fe] text-[#1665f5]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.86rem] sm:text-[0.9rem] font-bold text-[#0c1e38] leading-snug">
                Professional staff there to assist you
              </h4>
              <p className="mt-1 text-[0.78rem] text-[#64748b] leading-[1.38]">
                And make sure you&apos;re comfortable and have everything you need to get the best experience possible.
              </p>
            </div>
          </div>
        </div>

        {/* Urgency Box */}
        <p className="mt-6 text-center text-[0.78rem] sm:text-[0.84rem] font-black uppercase tracking-tight text-[#0c1e38]">
          SPACING IS LIMITED AND AVAILABLE ON A FIRST COME, FIRST SERVED BASIS. SIGN UP NOW!
        </p>

        {/* CTA Button */}
        <a
          href="#register"
          className="mt-3 flex !h-auto w-full flex-col items-center justify-center rounded-[14px] !bg-[#1665f5] py-3.5 px-4 shadow-[0_4px_14px_rgba(22,101,245,0.35)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
        >
          <span className="text-[1.25rem] min-[390px]:text-[1.4rem] font-black uppercase tracking-wide text-white">
            &raquo; REGISTER HERE &laquo;
          </span>
        </a>

      </div>
    </section>
  );
}
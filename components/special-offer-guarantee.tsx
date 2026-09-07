"use client";

import React from "react";
import { CountdownTimer } from "./countdown-timer";

export function SpecialOfferGuarantee() {
  const EXPIRATION_DATE = "2026-09-015T23:59:59+02:00"; 

  return (
    <section className="relative w-full bg-[#fafcff] border-t border-[#e2e8f0] pt-8 pb-16 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[23rem] sm:max-w-[27rem] flex-col items-center">
        
        {/* Guarantee Badge */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#22c55e]/30 bg-[#f0fdf4] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#15803d]">
            ZERO RISK POLICY
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-3 text-center text-[1.65rem] min-[390px]:text-[1.9rem] sm:text-[2.2rem] font-black leading-tight tracking-tight text-[#0c1e38]">
          The 20X Guarantee
        </h2>

        {/* Guarantee Copy */}
        <div className="mt-4 w-full text-center space-y-3">
        <p className="text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-normal leading-[1.48] tracking-tight text-[#334155]">
            <span className="font-bold text-[#0c1e38]">Sign up and show up.</span> If after the first day you don&apos;t feel like you&apos;ve gotten 20x the value for your investment (<span className="font-bold text-[#1665f5]">$100,000 in money making content, ideas and instruction</span>) not only will you be cut a check on the spot for your money back, we&apos;ll reimburse the travel expenses for you up to $2,000.
        </p>

        <p className="text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-bold text-[#0c1e38] leading-snug">
            In other words, you only stand to gain when you say yes to this incredible offer today.
        </p>
        </div>

        {/* Scarcity Note */}
        <p className="mt-7 text-center text-[0.78rem] sm:text-[0.84rem] font-black uppercase tracking-tight text-[#0c1e38]">
          SPACING IS LIMITED AND AVAILABLE ON A FIRST COME, FIRST SERVED BASIS. SIGN UP NOW!
        </p>

        {/* CTA Button */}
        <a
          id="register"
          href="#checkout"
          className="mt-3.5 flex !h-auto w-full flex-col items-center justify-center rounded-[14px] !bg-[#1665f5] py-3.5 px-4 shadow-[0_4px_14px_rgba(22,101,245,0.35)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
        >
          <span className="text-[1.25rem] min-[390px]:text-[1.4rem] font-black uppercase tracking-wide text-white">
            &raquo; REGISTER HERE &laquo;
          </span>
        </a>

        {/* Warning Expiry Label */}
        <p className="mt-8 text-center text-[0.85rem] font-black uppercase tracking-tight text-[#b91c1c]">
          Warning! Offer Expires in...
        </p>

        {/* Bottom Countdown */}
        <div className="mt-3 w-full">
          <CountdownTimer target={EXPIRATION_DATE} />
        </div>

      </div>
    </section>
  );
}
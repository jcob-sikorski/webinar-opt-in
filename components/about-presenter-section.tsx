"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function AboutPresenterSection() {
  return (
    <section className="w-full bg-white pt-4 pb-3 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Main Card Container */}
        <div className="w-full overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white p-3.5 sm:p-4 shadow-xs">
          
          {/* Host Image with Live Badge */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] bg-stone-900 shadow-xs">
            <img
              src="https://ucarecdn.com/13c19e59-a5e2-4f36-8a03-7cb73f1d431c/unnamed10.webp"
              alt="Scott Kelly"
              className="h-full w-full object-cover"
            />
            {/* Live Indicator Pill */}
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
                LIVE THIS WEDNESDAY
              </span>
            </div>
          </div>

          {/* Header Info */}
          <div className="mt-5 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3 py-0.5">
              <span className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
                YOUR HOST
              </span>
            </div>

            <h3 className="mt-2 text-[1.65rem] sm:text-[1.85rem] font-extrabold tracking-tight text-neutral-900">
              Scott Kelly
            </h3>

            <p className="mt-1 text-[0.82rem] sm:text-[0.875rem] font-normal leading-snug text-neutral-500">
              Founder of <span className="font-bold text-neutral-900">Infopros</span> — webinar marketing for<br />high-ticket offers
            </p>
          </div>

          {/* Subtle Separator */}
          <div className="my-5 h-[1px] w-full bg-neutral-100" />

          {/* Narrative Body Copy */}
          <div className="space-y-3.5 text-[0.84rem] sm:text-[0.89rem] font-normal leading-[1.46] text-neutral-700">
            <p>
              I started Infopros in November 2024: a webinar-based marketing agency built for high-ticket offers. Since then we&apos;ve{" "}
              <span className="font-bold text-neutral-900">collected over $20 million in cash for our clients</span> and grown my own agency past{" "}
              <span className="font-bold text-neutral-900">$200K/month</span>.
            </p>

            <p>
              I&apos;m a big believer in{" "}
              <span className="relative isolate px-0.5 font-bold text-neutral-900">
                <span className="absolute inset-x-0 bottom-0.5 -z-10 h-[48%] rounded-[2px] bg-[#fed7aa]/70" />
                give before you ask
              </span>
              . That&apos;s exactly why I&apos;m hosting this live and handing you everything you need to print with webinars — on a silver platter.
            </p>

            <p>
              It&apos;s the same system behind{" "}
              <span className="font-bold text-neutral-900">14 offers scaled past $100K/month</span> and{" "}
              <span className="font-bold text-neutral-900">2 past $1M/month</span>, broken all the way down.
            </p>

            {/* Accent Quote Callout */}
            <div className="border-l-[3.5px] border-[#ea580c] py-0.5 pl-3">
              <p className="text-[0.98rem] sm:text-[1.04rem] font-bold text-neutral-900 tracking-tight">
                And I do <span className="italic font-normal">not</span> hold back.
              </p>
            </div>
          </div>

          {/* Subtle Separator */}
          <div className="my-5 h-[1px] w-full bg-neutral-100" />

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 pb-1 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-[1.45rem] sm:text-[1.65rem] font-extrabold leading-tight text-neutral-900 tracking-tight">
                $20M<span className="text-[#ea580c]">+</span>
              </span>
              <span className="mt-0.5 text-[0.74rem] sm:text-[0.78rem] font-medium text-neutral-500">
                Cash collected for clients
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-[1.45rem] sm:text-[1.65rem] font-extrabold leading-tight text-neutral-900 tracking-tight">
                14
              </span>
              <span className="mt-0.5 text-[0.74rem] sm:text-[0.78rem] font-medium text-neutral-500">
                Offers past $100K/month
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-[1.45rem] sm:text-[1.65rem] font-extrabold leading-tight text-neutral-900 tracking-tight">
                2
              </span>
              <span className="mt-0.5 text-[0.74rem] sm:text-[0.78rem] font-medium text-neutral-500">
                Offers past $1M/month
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-[1.45rem] sm:text-[1.65rem] font-extrabold leading-tight text-neutral-900 tracking-tight">
                $200K/<span className="text-[#ea580c]">mo</span>
              </span>
              <span className="mt-0.5 text-[0.74rem] sm:text-[0.78rem] font-medium text-neutral-500">
                My own agency
              </span>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-7 flex w-full justify-center">
          <Button
            type="button"
            onClick={() => {
              const el = document.getElementById("zapis");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex !h-auto w-full max-w-[22rem] sm:max-w-[28rem] flex-col items-center justify-center gap-1 rounded-xl !border-none !bg-[#ea580c] !px-6 !py-3.5 shadow-sm transition-colors hover:!bg-[#c2410c] active:scale-[0.99]"
          >
            <span className="text-base font-bold uppercase tracking-normal text-white sm:text-[1.1rem] leading-snug">
              ZAPISZ SIĘ NA WARSZTAT
            </span>
            <span className="text-xs font-medium text-orange-100 leading-none">
              100% Darmowy Dostęp Live
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
}
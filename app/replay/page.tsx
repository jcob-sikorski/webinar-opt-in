"use client";

import React from "react";
import { CountdownTimer } from "@/components/countdown-timer";
import { LegalFooter } from "@/components/legal-footer";

interface ReplayPageProps {
  wistiaMediaId?: string;
  expirationDate?: string;
  expirationLabel?: string;
  ctaHref?: string;
  ctaText?: string;
}

export default function ReplayPage({
  wistiaMediaId,
  expirationDate = "2026-09-15T23:59:59+02:00",
  expirationLabel = "Limited Broadcast Replay Available",
  ctaHref = "/special-offer",
  ctaText = "Claim The Special Offer",
}: ReplayPageProps) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-white font-sans selection:bg-blue-200">
      {/* Main Replay Stage */}
      <main className="relative flex w-full flex-1 flex-col items-center overflow-x-hidden px-4 pt-5 pb-16 sm:px-6 sm:pt-8 sm:pb-20">
        <div className="mx-auto flex w-full max-w-[24rem] sm:max-w-[34rem] md:max-w-[44rem] lg:max-w-[48rem] flex-col items-center">
          
          {/* Expiration Scarcity Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/30 bg-[#edf4ff] px-3.5 py-1.5 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87171] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
            </span>
            <span className="text-[0.74rem] sm:text-[0.8rem] font-black uppercase tracking-[0.14em] text-[#0f2864]">
              {expirationLabel}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-center text-[1.45rem] min-[390px]:text-[1.7rem] sm:text-[2.25rem] font-black leading-[1.18] tracking-tight text-[#0c1e38]">
            Watch The Full Broadcast <span className="text-[#1665f5]">Replay</span>
          </h1>

          <p className="mt-2 text-center text-[0.8rem] min-[390px]:text-[0.85rem] sm:text-[0.92rem] font-normal leading-[1.4] text-[#64748b]">
            Take notes and watch before the countdown expires and the room is archived.
          </p>

          {/* Video Player Card Frame */}
          <div className="mt-5 w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] sm:rounded-[22px] border-[3.5px] sm:border-[4.5px] border-[#1665f5] bg-black shadow-[0_8px_32px_rgba(22,101,245,0.16)]">
              {wistiaMediaId ? (
                /* Wistia Responsive Video Embed */
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${wistiaMediaId}?videoFoam=true`}
                  title="Webinar Replay Video"
                  allow="autoplay; fullscreen"
                  allowTransparency
                  className="h-full w-full border-none"
                />
              ) : (
                /* High-Converting Placeholder Frame */
                <div className="relative flex h-full w-full select-none flex-col justify-between bg-[#040b17] bg-[radial-gradient(ellipse_at_top_left,_#163769_0%,_#09172e_40%,_#040a15_100%)] p-4 text-white sm:p-7">
                  <div className="flex items-start justify-between">
                    {/* Speaker Avatar & Info */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="relative flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-[#dbeafe]/30 bg-white/10 backdrop-blur-xs">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
                          alt="Jason Fladlien"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.88rem] sm:text-[1.12rem] font-black leading-tight text-white tracking-tight">
                          Jason Fladlien
                        </span>
                        <span className="mt-0.5 text-[0.62rem] sm:text-[0.72rem] font-bold text-[#8ea4c8]">
                          Co-Founder, Rapid Crush Inc.
                        </span>
                      </div>
                    </div>

                    {/* Live Replay Indicator */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[0.58rem] sm:text-[0.65rem] font-extrabold uppercase tracking-wider text-[#00df8f] backdrop-blur-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00df8f]" />
                      BROADCAST REPLAY
                    </span>
                  </div>

                  {/* Main Slide Replay Headline */}
                  <div className="my-auto py-2">
                    <h2 className="text-[1.18rem] min-[390px]:text-[1.38rem] sm:text-[1.95rem] md:text-[2.25rem] font-black leading-[1.12] tracking-tight">
                      How to profit from <br />
                      <span className="underline decoration-[#1665f5] decoration-[3px] underline-offset-[3px] sm:decoration-[4px]">
                        amazon.com
                      </span>
                      <br />
                      <span className="text-[#1665f5]">Once and for all!</span>
                    </h2>

                    <p className="mt-2 max-w-[28rem] text-[0.66rem] sm:text-[0.76rem] font-normal leading-[1.35] text-[#8ea4c8] line-clamp-3 sm:line-clamp-none">
                      &ldquo;There is, in my mind, at this very second no easier way on the internet to create multiple streams of income than doing Amazon the way we do it. The way our community consistently produces six, seven and eight figure Amazon Sellers.&rdquo;
                    </p>
                  </div>

                  {/* Scrub Progress Bar */}
                  <div className="w-full">
                    <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/15 sm:h-1.5">
                      <div className="h-full w-1/3 bg-[#1665f5]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Countdown Block */}
          <div className="mt-7 flex w-full flex-col items-center">
            <span className="text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.14em] text-[#1665f5]">
              ACCESS EXPIRES IN
            </span>
            <div className="mt-2.5 w-full max-w-[21.5rem] sm:max-w-[23.5rem]">
              <CountdownTimer target={expirationDate} />
            </div>
          </div>

          {/* Primary Action CTA */}
          {ctaHref && (
            <div className="mt-6 flex w-full flex-col items-center">
              <a
                href={ctaHref}
                className="flex !h-auto w-full max-w-[22rem] sm:max-w-[25rem] flex-col items-center justify-center rounded-[14px] !bg-[#1665f5] py-3.5 px-4 shadow-[0_4px_16px_rgba(22,101,245,0.32)] transition-all hover:!bg-[#1354cc] active:scale-[0.98]"
              >
                <span className="text-[1.15rem] min-[390px]:text-[1.28rem] font-black uppercase tracking-wide text-white">
                  &raquo; {ctaText} &laquo;
                </span>
              </a>
              <p className="mt-2 text-center text-[0.74rem] font-semibold text-[#64748b]">
                Special replay bonuses &amp; discounted pricing available for a limited time.
              </p>
            </div>
          )}

        </div>
      </main>

      {/* Unified Full-Width Legal Footer */}
      <LegalFooter />
    </div>
  );
}
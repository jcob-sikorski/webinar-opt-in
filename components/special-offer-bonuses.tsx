import React from "react";

interface BonusItem {
  number: string;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const BONUSES: BonusItem[] = [
  {
    number: "Bonus #1",
    title: "Professional Hi-Def Recordings",
    description: [
      "Multiple camera angles, professionally shot and edited to capture every word, every instruction, everything that can help you succeed with webinars.",
      "We will utilize the over $200,000+ in recording equipment in Genius Network headquarters to provide for you the best recordings on the best webinar information you'll ever be exposed to.",
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "Bonus #2",
    title: "The Ultimate Webinar Funnel",
    description: [
      "You'll get a fill in the blanks template that covers the webinar registration page, the thank you page, the order form and more.",
      "Not only will it be designed to covert, it will contain the right sales copy that you can easily tweak to immediately have a full on funnel that will take your webinar conversions to the next level.",
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "Bonus #3",
    title: "Pre-event Profits",
    description: [
      "Wouldn't it be wonderful if we set it up so you can start profiting from webinars asap? So you can step into the room already having realized multiples of your investment flowing to you? That's what we have here.",
      "You'll be invited to 2 web-based trainings that will also be recorded to help you see profits before we show up to the live Genius Webinars, in person training.",
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    number: "Bonus #4",
    title: "Slide Envy",
    description: [
      "There are certain ways you should design your Keynote/Power Point presentations to command absolute attention and maximize conversion.",
      "You'll get our exact slide decks and design frameworks so your presentations look world-class from the very first minute.",
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ea580c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
];

export function SpecialOfferBonuses() {
  return (
    <section className="relative w-full bg-white py-12 px-4 sm:px-6 selection:bg-orange-200">
      <div className="mx-auto flex w-full max-w-[23rem] sm:max-w-[27rem] flex-col items-center">
        
        {/* Section Pill: Amber border with subtle peach fill */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
            EXCLUSIVE VAULT
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-3 text-center text-[1.4rem] min-[390px]:text-[1.6rem] sm:text-[1.85rem] font-black leading-tight tracking-tight text-neutral-900">
          Plus, When You Sign Up Get <br />
          <span className="text-[#ea580c]">These Exclusive Bonuses!</span>
        </h2>

        {/* Bonuses Stack */}
        <div className="mt-6 flex w-full flex-col gap-4">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.number}
              className="w-full rounded-[1.4rem] border border-neutral-200/90 bg-white p-4 sm:p-5 shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#fed7aa] bg-[#fff7ed]">
                  {bonus.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#ea580c]">
                    {bonus.number}
                  </span>
                  <h3 className="text-[1.02rem] sm:text-[1.12rem] font-black text-neutral-900 leading-tight">
                    {bonus.title}
                  </h3>
                </div>
              </div>

              <div className="mt-3.5 space-y-2 border-t border-neutral-100 pt-3 text-[0.79rem] sm:text-[0.84rem] text-neutral-600 leading-[1.44]">
                {bonus.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
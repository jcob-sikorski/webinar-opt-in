import React from "react";

interface Pillar {
  number: string;
  pillarLabel: string;
  title: string;
  description: string;
  bullets: (string | React.ReactNode)[];
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    pillarLabel: "PILLAR ONE",
    title: "Why Webinars Win",
    description:
      "We rank all six funnel types live on screen — call, profile, DM, lead magnet, low-to-high ticket, webinar — and show you exactly where each one breaks.",
    bullets: [
      "The real pros and cons of every funnel type",
      "Why webinars replicate the organic sales process on paid",
      <>
        Pre-selling prospects on the offer <span className="italic font-normal">and</span> on themselves
      </>,
      "Selling one-to-many with a small sales team — or none",
    ],
  },
  {
    number: "02",
    pillarLabel: "PILLAR TWO",
    title: "Webinar Structure",
    description:
      "The full build, step by step: registration, VIP upsell, nurture, presentation, cleanup. Both paths — book-a-call and direct-to-checkout — modelled side by side.",
    bullets: [
      "Registration pages that hold 20–25% opt-in on cold traffic",
      "The VIP upsell that liquidates ad spend before you go live",
      "The email + SMS cadence behind 30%+ cold show rates",
      "Our slide-by-slide presentation framework and transition",
      "Real narratives instead of fake value stacks",
      "Encore and replay sequences that catch everyone else",
    ],
  },
  {
    number: "03",
    pillarLabel: "PILLAR THREE",
    title: "Promotion Strategy",
    description:
      "Fill the room two ways — organic that compounds and paid that scales on demand — including a live walkthrough of a real ad account.",
    bullets: [
      "The days, times and cadence that actually fill seats",
      "The 7–10 day organic promo: SMS, email, stories, reels",
      "Paid ad structure, budgets and the exclusions most people miss",
      "Creative volume rules for every level of spend",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Top Tag Pill */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#dbeafe] bg-white px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#0f2864]">
            ONE LIVE SESSION
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-3.5 text-center text-[1.42rem] min-[390px]:text-[1.6rem] sm:text-[2rem] font-bold leading-tight tracking-tight text-[#0f172a] whitespace-nowrap">
          Three Pillars, <span className="text-[#1665f5]">One Live Session</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-normal leading-[1.38] text-[#64748b]">
          Everything that goes into a webinar that actually prints<br />
          — taught end to end, with the assets to run it.
        </p>

        {/* Section Divider */}
        <div className="mt-7 mb-4 flex w-full items-center gap-3">
          <span className="shrink-0 text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#1665f5]">
            WHAT WE COVER LIVE
          </span>
          <div className="h-[1px] flex-1 bg-[#e2e8f0]" />
        </div>

        {/* Pillar Cards Stack */}
        <div className="flex w-full flex-col gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#1b3459]/50 bg-[#040b17] bg-[radial-gradient(ellipse_at_top_left,_#163769_0%,_#09172e_40%,_#040a15_100%)] p-5 sm:p-6 shadow-xl"
            >
              {/* Header: Number Badge + Pillar Titles */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-[14px] bg-[#1d68f5] text-[1.25rem] font-bold text-white shadow-sm">
                  {pillar.number}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#7198cf]">
                    {pillar.pillarLabel}
                  </span>
                  <h3 className="text-[1.28rem] sm:text-[1.4rem] font-bold leading-tight text-white tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.46] text-[#8ea4c8]">
                {pillar.description}
              </p>

              {/* Bullet Points */}
              <ul className="mt-5 space-y-2.5">
                {pillar.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-[#00df8f]"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2.5 8.5 6 12 13.5 4" />
                    </svg>
                    <span className="text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-[#d1deef]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
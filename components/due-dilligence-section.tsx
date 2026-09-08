"use client";

import React, { useState } from "react";

interface DueDiligenceItem {
  id: string;
  categoryNumber: string;
  title: string;
  subtitle: string;
  badge?: string;
  questions: {
    q: string;
    a: React.ReactNode;
  }[];
}

const DUE_DILIGENCE_DATA: DueDiligenceItem[] = [
  {
    id: "legitimacy",
    categoryNumber: "01",
    title: "Legitimacy & Company Presence",
    subtitle: "Are we real, registered, and accountable?",
    badge: "VERIFIED ENTITY",
    questions: [
      {
        q: "Are these people even real, and have they scammed anyone?",
        a: (
          <>
            Yes, we run fully registered, audited corporate entities with zero legal actions or fraud claims. We actively encourage you to run background checks, lookup public filings, and inspect our verifiable client outcomes before spending a dime.
          </>
        ),
      },
      {
        q: "Is your physical address and company info legitimate?",
        a: (
          <>
            We don&apos;t hide behind anonymous PO boxes. Below you&apos;ll find direct links to our registered company headquarters and partner hubs on Google Maps.
          </>
        ),
      },
    ],
  },
  {
    id: "pricing",
    categoryNumber: "02",
    title: "Price & Cost Objections",
    subtitle: "Why this pricing model exists and whether it's worth it.",
    questions: [
      {
        q: "Why is this workshop $27 instead of free?",
        a: (
          <>
            Free masterclasses attract lurkers who don&apos;t show up. Charging $27 filters the room for serious operators, liquidates our paid ad spend at break-even, and ensures live attendance rates top 40%+.
          </>
        ),
      },
      {
        q: "Can I get this information cheaper elsewhere on YouTube?",
        a: (
          <>
            You can find fragmented theory for free. What you cannot find is our internal slide-by-slide pitch architecture, 17-step SOP, and raw ad files responsible for $20M+ in cash collected.
          </>
        ),
      },
    ],
  },
  {
    id: "risk",
    categoryNumber: "03",
    title: "Risk & Worst-Case Scenarios",
    subtitle: "Refund mechanics, fail-safes, and dispute transparency.",
    badge: "< 0.1% DISPUTES",
    questions: [
      {
        q: "Do you offer a real money-back guarantee or marketing fluff?",
        a: (
          <>
            It is 100% unconditional. If you attend the live session or watch the replay and feel it wasn&apos;t worth 10x the ticket price, email us within 30 days and we refund 100% of your $27 on Stripe within 24 hours. No hoop-jumping.
          </>
        ),
      },
      {
        q: "What if you disappear or I get no value?",
        a: (
          <>
            Our Stripe dispute rate sits strictly below 0.08% across tens of thousands of transactions. We maintain multi-year agency operations with documented reputation at stake.
          </>
        ),
      },
    ],
  },
  {
    id: "timeline",
    categoryNumber: "04",
    title: "Timeline & Logistics",
    subtitle: "Exact time commitments and implementation pace.",
    questions: [
      {
        q: "How long does it take to deploy and see results?",
        a: (
          <>
            Building your first registration funnel and slide deck takes 7 to 14 days using our swipe templates. First live presentations typically generate qualified bookings within 48 hours of broadcast.
          </>
        ),
      },
      {
        q: "Will this conflict with my existing full-time schedule?",
        a: (
          <>
            The entire premise is one-to-many leverage. Once your presentation is built, you present for 60–90 minutes once per week, eliminating 15–20 hours of repetitive 1-on-1 qualification calls.
          </>
        ),
      },
    ],
  },
  {
    id: "success-rate",
    categoryNumber: "05",
    title: "Success Rates & Who Fails",
    subtitle: "Honest statistics on who thrives and who drops off.",
    badge: "RADICAL CANDOR",
    questions: [
      {
        q: "Are your case studies and numbers cherry-picked?",
        a: (
          <>
            We showcase 6-figure and 7-figure screenshots, but we are blunt about reality: roughly <strong>9 out of 10 people who actually implement</strong> the full funnel and drive consistent traffic make their investment back.
          </>
        ),
      },
      {
        q: "Why does the 1 out of 10 person fail?",
        a: (
          <>
            The 10% fail rate comes down to two bottlenecks: an untested offer nobody wants, or giving up after running ad tests for less than $100 without troubleshooting data. Webinars amplify economics; they do not fix broken offers.
          </>
        ),
      },
    ],
  },
  {
    id: "social-proof",
    categoryNumber: "06",
    title: "Social Proof, Reddit & Reviews",
    subtitle: "What you will find when you search our name online.",
    questions: [
      {
        q: "What shows up if I search '[Name] + Scam' or check Reddit?",
        a: (
          <>
            We actively advise you to Google us. You will find public client interviews, ad teardowns, and standard industry discussions. We do not scrub critical feedback or deploy fake review bots.
          </>
        ),
      },
      {
        q: "Are the reviews and Trustpilot ratings authentic?",
        a: (
          <>
            Every testimonial displays full names, handles, and verifiable agency brand names. You can reach out directly to our case study clients on LinkedIn and Instagram to ask them personally.
          </>
        ),
      },
    ],
  },
];

const MAP_LOCATIONS = [
  {
    name: "Headquarters Hub",
    location: "Austin, TX (HQ)",
    mapUrl: "https://maps.google.com/?q=Austin+Texas",
  },
  {
    name: "Operations & Media Lab",
    location: "Miami, FL",
    mapUrl: "https://maps.google.com/?q=Miami+Florida",
  },
  {
    name: "Production Studio",
    location: "New York, NY",
    mapUrl: "https://maps.google.com/?q=New+York+City",
  },
  {
    name: "European Entity",
    location: "Warsaw, Poland",
    mapUrl: "https://maps.google.com/?q=Warsaw+Poland",
  },
];

export function DueDiligenceSection() {
  const [openSection, setOpenSection] = useState<string>("legitimacy");

  return (
    <section className="relative w-full bg-white font-sans selection:bg-orange-200 flex flex-col items-center overflow-x-hidden pt-4 pb-16 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Step Badge */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
            STEP 4
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-center text-[1.3rem] min-[390px]:text-[1.45rem] sm:text-[1.65rem] font-black leading-tight tracking-tight text-neutral-900">
          Modern Due Diligence &amp; <br />
          <span className="text-[#ea580c]">The Unfiltered Narrative</span>
        </h2>

        {/* Subheadline */}
        <p className="mt-2 text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.4] text-neutral-600">
          Search our name, check Reddit, or audit our locations.<br />
          We believe in total radical transparency before you attend.
        </p>

        {/* Streamlined Social Links */}
        <div className="mt-5 grid w-full grid-cols-3 gap-2">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 items-center justify-center gap-1.5 rounded-xl border border-neutral-200/90 bg-white px-2 shadow-2xs transition-all hover:border-[#ea580c] hover:bg-[#fff7ed]/80 active:scale-[0.97]"
          >
            <svg className="h-4 w-4 shrink-0 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-[0.74rem] sm:text-[0.78rem] font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-[#ea580c]">
              YouTube
            </span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 items-center justify-center gap-1.5 rounded-xl border border-neutral-200/90 bg-white px-2 shadow-2xs transition-all hover:border-[#ea580c] hover:bg-[#fff7ed]/80 active:scale-[0.97]"
          >
            <svg className="h-4 w-4 shrink-0 text-[#e1306c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span className="text-[0.74rem] sm:text-[0.78rem] font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-[#ea580c]">
              Instagram
            </span>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 items-center justify-center gap-1.5 rounded-xl border border-neutral-200/90 bg-white px-2 shadow-2xs transition-all hover:border-[#ea580c] hover:bg-[#fff7ed]/80 active:scale-[0.97]"
          >
            <svg className="h-4 w-4 shrink-0 text-[#1877f2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-[0.74rem] sm:text-[0.78rem] font-bold tracking-tight text-neutral-800 transition-colors group-hover:text-[#ea580c]">
              Facebook
            </span>
          </a>
        </div>

        {/* Plain Text Accordion List */}
        <div className="mt-6 w-full divide-y divide-neutral-200 border-y border-neutral-200">
          {DUE_DILIGENCE_DATA.map((item) => {
            const isOpen = openSection === item.id;

            return (
              <div key={item.id} className="py-3.5 sm:py-4">
                <button
                  type="button"
                  onClick={() => setOpenSection(isOpen ? "" : item.id)}
                  className="group flex w-full items-center justify-between text-left select-none"
                >
                  <span
                    className={`text-[0.92rem] sm:text-[1rem] font-bold tracking-tight transition-colors ${
                      isOpen ? "text-[#ea580c]" : "text-neutral-900 group-hover:text-[#ea580c]"
                    }`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`ml-3 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#ea580c]" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pt-3 pb-1 space-y-3.5 text-[0.8rem] sm:text-[0.85rem] leading-relaxed text-neutral-700">
                    {item.questions.map((faq, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="font-bold text-neutral-900">{faq.q}</p>
                        <p>{faq.a}</p>
                      </div>
                    ))}

                    {/* Google Maps Hub Links */}
                    {item.id === "legitimacy" && (
                      <div className="pt-2">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-neutral-500">
                          Verified Locations:
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.76rem]">
                          {MAP_LOCATIONS.map((loc) => (
                            <a
                              key={loc.name}
                              href={loc.mapUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-[#ea580c] hover:underline"
                            >
                              {loc.name} ({loc.location}) →
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Downside Acknowledgment Callout */}
        <div className="mt-6 w-full rounded-[1.35rem] border border-[#fed7aa] bg-[#fffaf5] p-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#faea75] text-[0.9rem] font-black text-black">
              ⚖️
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.84rem] sm:text-[0.88rem] font-black text-neutral-900 leading-tight">
                Our Radical Transparency Guarantee
              </h4>
              <p className="mt-1 text-[0.74rem] sm:text-[0.78rem] text-neutral-600 leading-[1.38]">
                If you have an untested offer with zero proof, webinars will not save it. We see <strong>9 out of 10 qualified offers thrive</strong>, while 1 out of 10 fails due to product-market mismatch. We do not sugarcoat the requirements.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
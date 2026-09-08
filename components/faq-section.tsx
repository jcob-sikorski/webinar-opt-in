"use client";

import React, { useState } from "react";

interface FaqVideo {
  id: string;
  question: string;
  duration: string;
  progressPercent: number;
  videoUrl?: string;
}

const FAQ_VIDEOS: FaqVideo[] = [
  {
    id: "live",
    question: "Is this workshop Live?",
    duration: "1:22",
    progressPercent: 35,
    videoUrl: "",
  },
  {
    id: "cant-make-it",
    question: "What if I can't make the workshop?",
    duration: "1:41",
    progressPercent: 55,
    videoUrl: "",
  },
  {
    id: "burned-before",
    question: "I got burned before... will this work?",
    duration: "1:48",
    progressPercent: 20,
    videoUrl: "",
  },
  {
    id: "selling",
    question: "Will you try to sell me something?",
    duration: "2:14",
    progressPercent: 60,
    videoUrl: "",
  },
  {
    id: "experience",
    question: "Do I need an existing audience or offer?",
    duration: "1:55",
    progressPercent: 40,
    videoUrl: "",
  },
  {
    id: "bonuses",
    question: "Where and when do I get my bonuses?",
    duration: "1:15",
    progressPercent: 75,
    videoUrl: "",
  },
];

export function FaqVideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<FaqVideo | null>(null);

  return (
    <section className="relative w-full bg-white font-sans selection:bg-orange-200 flex flex-col items-center overflow-x-hidden pt-4 pb-14 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">
        
        {/* Step Badge */}
        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#ea580c]">
            STEP 3
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-center text-[1.25rem] min-[390px]:text-[1.38rem] sm:text-[1.58rem] font-black leading-tight tracking-tight text-neutral-900">
          Get Your Burning Questions <br />
          <span className="text-[#ea580c]">Answered Before The Workshop</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-neutral-600">
          Tap any question below to watch a quick 60–90 second answer from Scott.
        </p>

        {/* Single Column Stack */}
        <div className="mt-5 flex w-full flex-col gap-3.5">
          {FAQ_VIDEOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              type="button"
              className="group relative flex aspect-[1.85/1] sm:aspect-[2/1] w-full flex-col justify-between overflow-hidden rounded-[1.35rem] border border-orange-950/30 bg-[#0c0a09] bg-[radial-gradient(ellipse_at_top_left,_#29180c_0%,_#140e0a_45%,_#0c0a09_100%)] p-4 text-left shadow-md transition-all duration-200 hover:border-[#ea580c] hover:shadow-[0_4px_24px_rgba(234,88,12,0.24)] active:scale-[0.98]"
            >
              {/* Top Bar: Play Icon */}
              <div className="flex w-full justify-end">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs transition-colors group-hover:bg-[#ea580c]">
                  <svg
                    className="ml-0.5 h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>

              {/* Question Text */}
              <div className="my-auto px-2 text-center">
                <h3 className="text-[1.05rem] min-[390px]:text-[1.12rem] sm:text-[1.2rem] font-extrabold leading-[1.25] tracking-tight text-white transition-colors group-hover:text-[#fed7aa]">
                  {item.question}
                </h3>
              </div>

              {/* Bottom Video Progress Scrub Bar */}
              <div className="flex w-full items-center gap-2 pt-1">
                <span className="shrink-0 text-[0.68rem] font-medium text-stone-400">
                  {item.duration}
                </span>
                <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full bg-[#ea580c] transition-all group-hover:bg-orange-500"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center gap-[2px] text-stone-400">
                  <span className="h-0.5 w-0.5 rounded-full bg-current" />
                  <span className="h-0.5 w-0.5 rounded-full bg-current" />
                  <span className="h-0.5 w-0.5 rounded-full bg-current" />
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-[1.35rem] border border-neutral-800 bg-[#0c0a09] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h4 className="text-[0.88rem] sm:text-[0.95rem] font-bold text-white">
                {selectedVideo.question}
              </h4>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              {selectedVideo.videoUrl ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.question}
                  className="h-full w-full border-none"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-stone-400">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-lg">
                    <svg className="ml-0.5 h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                  <span className="text-[0.82rem]">Insert video embed for &quot;{selectedVideo.id}&quot;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
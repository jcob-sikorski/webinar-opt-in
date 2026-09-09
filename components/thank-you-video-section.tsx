"use client";

import React from "react";

interface ThankYouVideoSectionProps {
  workshopDateTime?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
}

export function ThankYouVideoSection({
  workshopDateTime = "CZWARTEK, 17 WRZEŚNIA o 20:00",
  thumbnailUrl = "https://ucarecdn.com/3cb95e08-818a-470b-b52a-a9e5d9d37d8d/unnamed9.webp",
  videoUrl,
}: ThankYouVideoSectionProps) {
  return (
    <section className="relative w-full bg-white font-sans selection:bg-orange-200 flex flex-col items-center overflow-x-hidden pt-3 pb-12 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[24rem] sm:max-w-[28rem] flex-col items-center">
        
        {/* Top 72% Progress Bar: Warm peach track with punchy orange fill */}
        <div className="w-full mb-4">
          <div className="relative h-3.5 sm:h-4 w-full overflow-hidden rounded-full bg-[#fff7ed] border border-[#fed7aa] shadow-2xs">
            {/* Orange Fill */}
            <div
              className="h-full bg-[#ea580c]"
              style={{ width: "72%" }}
            />
            {/* Perfectly Centered Label */}
            <span className="absolute inset-0 flex items-center justify-center text-[0.62rem] sm:text-[0.68rem] font-black leading-none text-white tracking-wider pointer-events-none">
              72%
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto w-full text-center text-[1.12rem] min-[390px]:text-[1.25rem] sm:text-[1.45rem] font-black uppercase leading-[1.2] tracking-tight text-neutral-900">
          Gratki, Widzimy Się Na Szkoleniu!<br />
          <span className="text-[#ea580c]">{workshopDateTime}</span>
        </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-2.5 w-full text-center text-[0.78rem] min-[390px]:text-[0.84rem] sm:text-[0.92rem] font-normal leading-[1.35] tracking-tight text-neutral-800">
        Krótka wiadomość ode mnie przed szkoleniem{" "}
        <span className="font-bold text-black">następnie przewiń stronę w dół</span>
      </p>

        {/* Video Preview Box: High-tension orange border */}
        <div className="mx-auto mt-4 sm:mt-5 w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px] sm:rounded-[16px] border-[3.5px] sm:border-[4px] border-[#ea580c] bg-black shadow-[0_4px_25px_rgba(0,0,0,0.12)]">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="Workshop Confirmation Video"
                className="h-full w-full border-none"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={thumbnailUrl}
                alt="Workshop Confirmation Preview"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
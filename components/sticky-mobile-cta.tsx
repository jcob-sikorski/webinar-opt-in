"use client";

import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż przycisk, gdy użytkownik przewinie poza hero (ok. 500px)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 block border-t border-neutral-200 bg-white/95 p-3 backdrop-blur-md shadow-[0_-8px_20px_rgba(0,0,0,0.08)] sm:hidden animate-in slide-in-from-bottom duration-200">
      <button
        type="button"
        onClick={() => {
          Clarity.event("sticky_cta_clicked");
          const el = document.getElementById("zapis");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#ea580c] to-[#c2410c] px-4 py-3 text-left shadow-md active:scale-[0.98]"
      >
        <div className="flex flex-col">
          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-orange-200">
            Darmowy Bilet Na Żywo
          </span>
          <span className="text-[0.88rem] font-black text-white leading-tight">
            Zapisz się na warsztat
          </span>
        </div>
        <div className="flex items-center gap-1 text-[0.82rem] font-extrabold text-white">
          <span>Rezerwuj</span>
          <span>»</span>
        </div>
      </button>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

function getTimeParts(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    dni: Math.floor(totalSeconds / 86400),
    godzin: Math.floor((totalSeconds % 86400) / 3600),
    minut: Math.floor((totalSeconds % 3600) / 60),
    sekund: totalSeconds % 60,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

interface CountdownTimerProps {
  /** ISO date string the countdown counts down to. */
  target?: string;
  variant: "topbar" | "boxes";
}

const ZERO_PARTS = { dni: 0, godzin: 0, minut: 0, sekund: 0 };

export function CountdownTimer({ 
  target = "2026-09-04T19:00:00+02:00", // Default set to Aug 24, 19:00 CEST
  variant 
}: CountdownTimerProps) {
  // Start from a fixed, server-safe value. Deriving this from Date.now()
  // during render would make the server markup and the client's first render
  // disagree by however many seconds elapsed between them — a hydration
  // mismatch. The real value lands in the effect, which is client-only.
  const [parts, setParts] = useState(ZERO_PARTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const targetDate = new Date(target);
    setMounted(true);
    setParts(getTimeParts(targetDate));
    const id = setInterval(() => setParts(getTimeParts(targetDate)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Hold the layout but hide the digits until the real value is in, so there
  // is no visible flash of zeroes.
  const visibility = mounted ? "" : "invisible";

  if (variant === "topbar") {
    return (
      <span
        className={`font-semibold tabular-nums text-coral-bright ${visibility}`}
      >
        {pad(parts.dni)}d : {pad(parts.godzin)}h : {pad(parts.minut)}m :{" "}
        {pad(parts.sekund)}s
      </span>
    );
  }

  const cells = [
    { label: "Dni", value: parts.dni, tone: "text-ink" },
    { label: "Godz", value: parts.godzin, tone: "text-coral-bright" },
    { label: "Min", value: parts.minut, tone: "text-coral-bright" },
    { label: "Sek", value: parts.sekund, tone: "text-coral-bright" },
  ];

  return (
    <div
      className={`mt-5 flex items-start justify-center gap-1.5 sm:gap-2.5 ${visibility}`}
    >
      {cells.map((cell, i) => (
        <div
          key={cell.label}
          className="flex items-start gap-1.5 sm:gap-2.5"
        >
          <div className="flex w-[3.75rem] flex-col items-center rounded-lg border border-line bg-white py-2.5 shadow-[0_1px_2px_rgba(27,36,64,0.06)] sm:w-[4.25rem]">
            <span
              className={`text-2xl font-bold leading-none tabular-nums sm:text-[1.75rem] ${cell.tone}`}
            >
              {pad(cell.value)}
            </span>
            <span className="mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.08em] text-ink-subtle">
              {cell.label}
            </span>
          </div>
          {i < cells.length - 1 && (
            <span
              aria-hidden
              className="pt-2.5 text-lg font-semibold leading-none text-ink/25"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
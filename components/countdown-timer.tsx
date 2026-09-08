"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  target: string;
}

export function CountdownTimer({ target }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Bezpieczne parsowanie daty z offsetem strefy (np. +02:00)
    const targetTimestamp = Date.parse(target);

    if (isNaN(targetTimestamp)) {
      console.error("Nieprawidłowa data przekazana do CountdownTimer:", target);
      return;
    }

    const calculateTime = () => {
      const now = Date.now();
      const difference = targetTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const units = [
    { label: "DNI", value: timeLeft.days },
    { label: "GODZ", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEK", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 select-none">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex h-[3.85rem] w-[4.15rem] min-[390px]:h-[4.2rem] min-[390px]:w-[4.55rem] sm:h-[4.5rem] sm:w-[4.85rem] flex-col items-center justify-center rounded-2xl border border-[#bfdbfe]/85 bg-gradient-to-b from-[#f6f9fe] to-[#edf4fe] px-1 shadow-[0_2px_8px_rgba(37,99,235,0.05)]">
            <span className="text-[1.85rem] min-[390px]:text-[2.05rem] sm:text-[2.2rem] font-extrabold leading-none text-[#103264] tracking-[-0.02em] tabular-nums">
              {unit.value}
            </span>
            <span className="mt-1 text-[0.62rem] min-[390px]:text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#627d98]">
              {unit.label}
            </span>
          </div>

          {index < units.length - 1 && (
            <div className="flex flex-col items-center justify-center gap-1.5 px-1 min-[390px]:px-1.5">
              <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#5ba2f8]" />
              <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#5ba2f8]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
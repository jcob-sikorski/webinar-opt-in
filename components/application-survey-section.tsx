"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { ApplicationSurveyEmbed } from "@/components/ui/booking-calendar-embed";
import { CountdownTimer } from "@/components/countdown-timer";

// Data wygaśnięcia: 24 sierpnia 22:00 + 48 godzin
const DEADLINE = "2026-08-26T22:00:00+02:00"; 

export function ApplicationSurveySection() {
  const [isExpired, setIsExpired] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Funkcja sprawdzająca, czy termin upłynął
    const checkExpiration = () => {
      if (Date.now() >= new Date(DEADLINE).getTime()) {
        setIsExpired(true);
      }
    };

    checkExpiration(); // Pierwsze sprawdzenie od razu po załadowaniu
    
    // Interwał sprawdzający czas co sekundę, aby zamknąć formularz w czasie rzeczywistym
    const interval = setInterval(checkExpiration, 1000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="aplikacja" className="scroll-mt-8">
      <Section className="bg-[#fcfbf9]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Krok 1: Weryfikacja zgłoszenia
          </p>
          <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
            Wypełnij krótką aplikację
          </h2>

          {/* Zabezpieczenie przed błędem hydratacji - nie renderujemy logiki czasu na serwerze */}
          {!mounted ? null : isExpired ? (
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-red-100 bg-red-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold italic text-red-600 sm:text-2xl">
                Formularz został zamknięty
              </h3>
              <p className="mt-3 text-base leading-relaxed text-red-500">
                Czas na przesłanie aplikacji minął. Zgłoszeń już nie przyjmujemy.
              </p>
            </div>
          ) : (
            <>
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
                Po weryfikacji zgłoszenia skontaktuje się z Tobą nasz konsultant, aby potwierdzić kwalifikację i ustalić termin bezpłatnej rozmowy strategicznej.
              </p>
              
              <div className="mx-auto mt-8 max-w-lg rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#ef6b4a]">
                  Czas na aplikację mija za:
                </p>
                <CountdownTimer target={DEADLINE} variant="boxes" />
              </div>

              <div className="mt-10 w-full">
                <ApplicationSurveyEmbed />
              </div>
            </>
          )}
        </div>
      </Section>
    </div>
  );
}
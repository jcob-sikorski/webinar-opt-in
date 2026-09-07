import { ConfirmationHeroSection } from "@/components/confirmation-hero-section";
import { ConfirmationVideoSection } from "@/components/confirmation-video-section";
import { ConfirmationSurveySection } from "@/components/confirmation-survey-section";
import { ConfirmationAgendaSection } from "@/components/confirmation-agenda-section";
import { ConfirmationProtocolBonusSection } from "@/components/confirmation-protocol-bonus-section";
import { ConfirmationLegitimacySection } from "@/components/confirmation-legitimacy-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { CaseStudyYTVidsSection } from "@/components/case-study-yt-vids-section";
import { ConfirmationBreakoutsSection } from "@/components/confirmation-breakouts-section";
import { CuratedEducationalContentSection } from "@/components/curated-educational-content-section";
import { ConfirmationFaqSection } from "@/components/confirmation-faq-section";
import { LegalFooter } from "@/components/legal-footer";

export default function ConfirmationPage() {
  return (
    <main>
      {/* FAZA 1: LOGISTYKA I POWITANIE */}
      {/* 1. Najważniejsza akcja: dodanie do kalendarza i informacja o mailu */}
      <ConfirmationHeroSection />

      {/* 2. Krótkie powitanie wideo (buduje relację od razu po załadowaniu strony) */}
      <ConfirmationVideoSection />

      {/* FAZA 2: MIKRO-ZAANGAŻOWANIE */}
      {/* 3. Ankieta: zasada konsekwencji. Po jej wypełnieniu tekst mówi "Zjedź niżej..." */}
      <ConfirmationSurveySection />

      {/* FAZA 3: BUDOWANIE SHOW-UP RATE (Dlaczego warto przyjść na żywo?) */}
      {/* 4. Agenda: uświadamia wartość samego spotkania */}
      <ConfirmationAgendaSection />

      {/* 5. Bonus za obecność: kluczowy element zwiększający frekwencję (marchewka) */}
      <ConfirmationProtocolBonusSection />

      {/* FAZA 4: DOWÓD I AUTORYTET (Czy on mówi prawdę? Czy to działa?) */}
      {/* 6. Legalność: "Jestem prawdziwą firmą, mam KRS i fizyczne lokale" */}
      <ConfirmationLegitimacySection />

      {/* 7. Szybki dowód społeczny: krótkie cytaty, łatwe do skanowania wzrokiem */}
      <ConfirmationProofSection showCta={false} />

      {/* 8. Głęboki dowód społeczny: wideo dla osób, które potrzebują mocniejszej weryfikacji */}
      <CaseStudyYTVidsSection showCta={false} wypelnijAplikacje={false} />

      {/* FAZA 5: PRE-FRAMING I ZBIJANIE OBIEKCJI */}
      {/* 9. Odpowiedzi na główne obiekcje (Lokalizacja, Budżet, Trenerzy). 
             Użytkownik widzi to po dowodach, więc myśli: "Okej, im to zadziałało, ale czy zadziała w moim małym mieście?" -> tu dostaje odpowiedź. */}
      <ConfirmationBreakoutsSection />

      <CuratedEducationalContentSection />

      {/* FAZA 6: ZAMKNIĘCIE LOGISTYCZNE */}
      {/* 10. Organizacyjne FAQ (powtórki, linki itp.) */}
      <ConfirmationFaqSection />

      {/* 11. Stopka */}
      <LegalFooter />
    </main>
  );
}
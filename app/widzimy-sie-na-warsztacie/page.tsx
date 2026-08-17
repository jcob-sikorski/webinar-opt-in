import { ConfirmationHeroSection } from "@/components/confirmation-hero-section";
import { ConfirmationSurveySection } from "@/components/confirmation-survey-section";
import { ConfirmationVideoSection } from "@/components/confirmation-video-section";
import { ConfirmationBreakoutsSection } from "@/components/confirmation-breakouts-section";
import { ConfirmationAgendaSection } from "@/components/confirmation-agenda-section";
import { ConfirmationProtocolBonusSection } from "@/components/confirmation-protocol-bonus-section";
import { ConfirmationLegitimacySection } from "@/components/confirmation-legitimacy-section";
// import { ConfirmationRealisticOutcomesSection } from "@/components/confirmation-realistic-outcomes-section";
import { CaseStudyYTVidsSection } from "@/components/case-study-yt-vids-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { ConfirmationFaqSection } from "@/components/confirmation-faq-section";
import { LegalFooter } from "@/components/legal-footer";

export default function ConfirmationPage() {
  return (
    <main>
      {/* 1. Potwierdzenie zapisu + kalendarze (Apple, Google, Outlook, Yahoo) w stylu copy */}
      <ConfirmationHeroSection />

      {/* 2. Szybka 20-sekundowa ankieta kwalifikacji i zaangażowania */}
      <ConfirmationSurveySection />

      {/* 3. Krótkie 60-sekundowe wideo orientacyjne od Bartka */}
      <ConfirmationVideoSection />

      {/* 4. Breakout Videos: 3-minutowe odpowiedzi na obiekcje (Lokalizacja, Budżet, Trenerzy) */}
      <ConfirmationBreakoutsSection />

      {/* 5. Agenda 75 minut minuta po minucie + zasady skupienia i notatek */}
      <ConfirmationAgendaSection />

      {/* 6. Wyróżnienie Protokołu Dochodowego Studia (bonusu za obecność na żywo) */}
      <ConfirmationProtocolBonusSection />

      {/* 7. Dowód fizyczny: KRS + 4 lokalizacje na Google Maps */}
      <ConfirmationLegitimacySection />

      {/* 9. Realistyczne oczekiwania: Rozkład 15% (brak wdrożenia) / 60% / 25% */}
      {/* <ConfirmationRealisticOutcomesSection /> */}

      {/* 10. Wideo case studies z YouTube */}
      <CaseStudyYTVidsSection showCta={false} />

      {/* 11. Galerie wdrożeń i historie właścicieli */}
      <ConfirmationProofSection />

      {/* 12. Pre-webinarowe FAQ organizacyjne */}
      <ConfirmationFaqSection />

      {/* 13. Stopka prawna z danymi spółki */}
      <LegalFooter />
    </main>
  );
}
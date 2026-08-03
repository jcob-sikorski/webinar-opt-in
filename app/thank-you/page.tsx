import { ConfirmationHeroSection } from "@/components/confirmation-hero-section";
import { ConfirmationSurveySection } from "@/components/confirmation-survey-section";
import { ConfirmationVideoSection } from "@/components/confirmation-video-section";
import { ConfirmationBonusSection } from "@/components/confirmation-bonus-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { LegalFooter } from "@/components/legal-footer";

export default function ConfirmationPage() {
  return (
    <main>
      <ConfirmationHeroSection />
      <ConfirmationSurveySection />
      <ConfirmationVideoSection />
      <ConfirmationBonusSection />
      <ConfirmationProofSection />
      <LegalFooter />
    </main>
  );
}

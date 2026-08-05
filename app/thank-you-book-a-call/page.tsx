import { CallConfirmationHeroSection } from "@/components/call-confirmation-hero-section";
import { CallConfirmationBonusSection } from "@/components/call-confirmation-bonus-section";
import { CallConfirmationProofSection } from "@/components/call-confirmation-proof-section";
import { LegalFooter } from "@/components/legal-footer";

export default function CallConfirmationPage() {
  return (
    <main>
      <CallConfirmationHeroSection />
      <CallConfirmationBonusSection />
      <CallConfirmationProofSection />
      <LegalFooter />
    </main>
  );
}
import { CallConfirmationHeroSection } from "@/components/call-confirmation-hero-section";
import { CallConfirmationBonusSection } from "@/components/call-confirmation-bonus-section";
import { CallConfirmationProofSection } from "@/components/call-confirmation-proof-section";
import { LegalFooter } from "@/components/legal-footer";

export default function CallConfirmationPage() {
  return (
    <main>
      {/* 1. Potwierdzenie terminu rozmowy 1:1 + Kalendarze w stylu copy */}
      <CallConfirmationHeroSection />

      {/* 2. Wywiady wideo z właścicielami przed rozmową strategiczną */}
      <CallConfirmationBonusSection />

      {/* 3. Rezultaty podopiecznych i dowody wdrożenia modelu */}
      <CallConfirmationProofSection />

      {/* 4. Stopka prawna (KRS, polityka prywatności, regulamin) */}
      <LegalFooter />
    </main>
  );
}
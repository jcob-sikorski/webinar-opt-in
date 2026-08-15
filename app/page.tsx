import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { WhatToExpectSection } from "@/components/what-to-expect-section";
import { WhatYouWillLearnSection } from "@/components/what-you-will-learn-section";
import { TeachingBioSection } from "@/components/teaching-bio-section";
import { IsThisForYouSection } from "@/components/is-this-for-you-section";

// Nowe sekcje (uzupełniają braki z audytu):
// - AgendaSection: konkretny plan warsztatu zamiast ogólników
// - FaqSection: pre-handling obiekcji przed zapisem
// - FinalCtaSection: risk reversal + capture dla osób niedostępnych na żywo,
//   wizualnie oddzielony od LegalFooter
// import { AgendaSection } from "@/components/agenda-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";

import { ConfirmationBonusSection } from "@/components/confirmation-bonus-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { LegalFooter } from "@/components/legal-footer";

export default function Home() {
  return (
    <main>
      {/* Hero: dodaj SeatsProgressBar zamiast statycznego "Tylko 500 miejsc!"
          — patrz components/seats-progress-bar.tsx */}
      <HeroSection />

      <StatsSection />

      <IsThisForYouSection />
      <WhatToExpectSection />

      {/* Konkretny plan warsztatu — odpowiada na "co dokładnie dostanę" */}
      {/* <AgendaSection /> */}

      <WhatYouWillLearnSection />
      <TeachingBioSection />

      <ConfirmationBonusSection />
      <ConfirmationProofSection />

      {/* Pre-handling obiekcji przed CTA, nie po */}
      <FaqSection />

      {/* Risk reversal + no-show capture, oddzielone wizualnie od stopki prawnej */}
      {/* <FinalCtaSection /> */}

      <LegalFooter />
    </main>
  );
}
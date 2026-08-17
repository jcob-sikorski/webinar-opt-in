import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { AdrianProofSection } from "@/components/adrian-proof-section";
import { JoannaProofSection } from "@/components/joanna-proof-section";
import { IsThisForYouSection } from "@/components/is-this-for-you-section";
import { WhatToExpectSection } from "@/components/what-to-expect-section";
import { WhatYouWillLearnSection } from "@/components/what-you-will-learn-section";
import { TeachingBioSection } from "@/components/teaching-bio-section";
import { FaqSection } from "@/components/faq-section";
import { CaseStudyYTVidsSection } from "@/components/case-study-yt-vids-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { LegalFooter } from "@/components/legal-footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <StatsSection />

      {/* Dowody wdrożenia modelu (Case Studies) */}
      <AdrianProofSection />

      <IsThisForYouSection />
      <WhatToExpectSection />

      <JoannaProofSection />

      <WhatYouWillLearnSection />

      <TeachingBioSection />

      <CaseStudyYTVidsSection />
      <ConfirmationProofSection />

      <FaqSection />

      <LegalFooter />
    </main>
  );
}
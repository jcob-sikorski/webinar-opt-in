import { HeroSection } from "@/components/hero-section";
import { LegalFooter } from "@/components/legal-footer";
import { PillarsSection } from "@/components/pillars-section";
import { WhatsIncludedSection } from "@/components/whats-included-section";
import { AboutPresenterSection } from "@/components/about-presenter-section";
import { CaseStudiesSection } from "@/components/case-studies-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <PillarsSection />   

      <WhatsIncludedSection />   

      <AboutPresenterSection />

      <CaseStudiesSection />

      <LegalFooter />
    </main>
  );
}
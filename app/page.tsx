import { HeroSection } from "@/components/hero-section";
import { ScriptIsTheBusinessSection } from "@/components/script-is-the-business-section";
import { WebinarFailuresSection } from "@/components/webinar-failures-section";
import { TransformationSection } from "@/components/trasnformation-section";
import { TeachingBioSection } from "@/components/teaching-bio-section";
import { ProofSection } from "@/components/proof-section";
import { IsThisForYouSection } from "@/components/is-this-for-you-section";
import { ConfirmationBonusSection } from "@/components/confirmation-bonus-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { OfferStackSection } from "@/components/offer-stack-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { LegalFooter } from "@/components/legal-footer";

export default function Home() {
  return (
    <main>
      <HeroSection
      // videoEmbed={
      //   <iframe
      //     src="https://your-video-host.com/embed/xxxx"
      //     className="absolute inset-0 h-full w-full"
      //     allow="autoplay; fullscreen"
      //     allowFullScreen
      //   />
      // }
      />
      <ScriptIsTheBusinessSection />
      <WebinarFailuresSection />
      <TransformationSection />
      <TeachingBioSection />
      <ProofSection />
      <IsThisForYouSection />
      <ConfirmationBonusSection />
      <ConfirmationProofSection />
      <OfferStackSection />
      <FaqSection />
      <FinalCtaSection />
      <LegalFooter />
    </main>
  );
}

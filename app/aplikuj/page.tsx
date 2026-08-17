import type { Metadata } from "next";
import { ApplicationHeroSection } from "@/components/application-hero-section";
import { ApplicationCallAgendaSection } from "@/components/application-call-agenda-section";
import { ApplicationOfferSection } from "@/components/application-offer-section";
import { ApplicationPriceSection } from "@/components/application-price-section";
import { ApplicationVaultsSection } from "@/components/application-vaults-section";
// import { ApplicationGuaranteeSection } from "@/components/application-guarantee-section";
import { ApplicationResultsSection } from "@/components/application-results-section";
import { ApplicationObjectionsSection } from "@/components/application-objections-section";
import { ApplicationSurveySection } from "@/components/application-survey-section";
import { LegalFooter } from "@/components/legal-footer";

// Dodane importy brakujących sekcji
import { CaseStudyYTVidsSection } from "@/components/case-study-yt-vids-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";

export const metadata: Metadata = {
  title: "Umów rozmowę | Dochodowe Studio",
  description:
    "Bezpłatna rozmowa kwalifikacyjna: sprawdzamy, czy program Dochodowe Studio pasuje do Twojej sytuacji.",
};

export default function ApplicationPage() {
  return (
    <main>
      <ApplicationHeroSection />
      <ApplicationSurveySection />
      <ApplicationCallAgendaSection />
      <ApplicationOfferSection />
      
      {/* Fladlien: cena idzie przed bonusami, żeby Moduły wracały do wartości. */}
      {/* <ApplicationPriceSection /> */}
      
      <ApplicationVaultsSection />
      {/* <ApplicationGuaranteeSection /> */}
      
      {/* Dodane obszerne galerie i wideo case studies */}
      <ConfirmationProofSection showCta={false} wypelnijAplikacje={true} />
      <CaseStudyYTVidsSection showCta={false} wypelnijAplikacje={true}/>
      
      <ApplicationObjectionsSection />
      <LegalFooter />
    </main>
  );
}
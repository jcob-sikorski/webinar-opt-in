import type { Metadata } from "next";
import { ReplayHeroSection } from "@/components/replay-hero-section";
import { ApplicationCallAgendaSection } from "@/components/application-call-agenda-section";
import { ApplicationOfferSection } from "@/components/application-offer-section";
import { ApplicationVaultsSection } from "@/components/application-vaults-section";
import { ApplicationResultsSection } from "@/components/application-results-section";
import { ApplicationObjectionsSection } from "@/components/application-objections-section";
import { ApplicationSurveySection } from "@/components/application-survey-section";
import { LegalFooter } from "@/components/legal-footer";
import { CaseStudyYTVidsSection } from "@/components/case-study-yt-vids-section";
import { ConfirmationProofSection } from "@/components/confirmation-proof-section";
import { CuratedEducationalContentSection } from "@/components/curated-educational-content-section";

export const metadata: Metadata = {
  title: "Powtórka Warsztatu | Dochodowe Studio",
  description: "Obejrzyj powtórkę z warsztatu i umów bezpłatną rozmowę strategiczną dotyczącą otwarcia Twojego kameralnego studia.",
};

export default function ReplayPage() {
  return (
    <main>
      {/* Nowa główna sekcja z Wideo i Licznikiem, zastępująca dawne ApplicationHeroSection */}
      <ReplayHeroSection />
      
      {/* Reszta strony to idealna kopia /aplikuj */}
      <ApplicationSurveySection deadline="2026-09-08T23:59:59+02:00" />
      <ApplicationCallAgendaSection />
      <ApplicationOfferSection />
      <ApplicationVaultsSection />
      
      <ConfirmationProofSection showCta={false} wypelnijAplikacje={true} />
      <CaseStudyYTVidsSection showCta={false} wypelnijAplikacje={true} />
      <CuratedEducationalContentSection />
      
      <ApplicationObjectionsSection />
      <LegalFooter />
    </main>
  );
}
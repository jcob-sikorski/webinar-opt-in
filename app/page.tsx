import { HeroSection } from "@/components/hero-section";
import { PillarsSection } from "@/components/pillars-section";
import { WhatsIncludedSection } from "@/components/whats-included-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { AboutPresenterSection } from "@/components/about-presenter-section";
import { FaqVideosSection } from "@/components/faq-section";
import { LegalFooter } from "@/components/legal-footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Hero: Hak uwagi, kotwica wartości, formularz opt-in */}
      <HeroSection />

      {/* 2. Filary: Co dokładnie zyska i jaki proces wdroży */}
      <PillarsSection />

      {/* 3. Bonus Attendance: Jason Fladlien's "Ethical Bribe" za obecność na żywo */}
      <WhatsIncludedSection />

      {/* 4. Dowód Społeczny: Konkretne liczby, studia przypadków i zyski */}
      <CaseStudiesSection />

      {/* 5. Autorytet Prelegenta: Dlaczego warto posłuchać właśnie jego */}
      <AboutPresenterSection />

      {/* 6. Rozbicie obiekcji: Odpowiedzi na palące pytania przed zapisem */}
      <FaqVideosSection />

      {/* 7. Pływające CTA na mobile po opuszczeniu Hero */}
      <StickyMobileCta />

      {/* 8. Stopka prawna */}
      <LegalFooter />
    </main>
  );
}
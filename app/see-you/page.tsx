import { LegalFooter } from "@/components/legal-footer";

import { ThankYouVideoSection } from "@/components/thank-you-video-section";
import { AddToCalendarSection } from "@/components/add-to-calendar-section";
import { FaqVideosSection } from "@/components/faq-section";

export default function ConfirmationPage() {
  return (
    <main>
      <ThankYouVideoSection />

      <AddToCalendarSection />

      <FaqVideosSection />

      {/* 11. Stopka */}
      <LegalFooter />
    </main>
  );
}
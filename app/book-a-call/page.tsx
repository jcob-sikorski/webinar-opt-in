import type { Metadata } from "next";

import { BookingHeroSection } from "@/components/booking-hero-section";
import { BookingCallAgendaSection } from "@/components/booking-call-agenda-section";
import { BookingOfferSection } from "@/components/booking-offer-section";
import { BookingPriceSection } from "@/components/booking-price-section";
import { BookingVaultsSection } from "@/components/booking-vaults-section";
import { BookingGuaranteeSection } from "@/components/booking-guarantee-section";
import { BookingResultsSection } from "@/components/booking-results-section";
import { BookingBioSection } from "@/components/booking-bio-section";
import { BookingCoachingPhotoSection } from "@/components/booking-coaching-photo-section";
import { BookingObjectionsSection } from "@/components/booking-objections-section";
import { BookingCalendarSection } from "@/components/booking-calendar-section";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Umów rozmowę — Dochodowe Studio",
  description:
    "Bezpłatna rozmowa kwalifikacyjna: sprawdzamy, czy program Dochodowe Studio pasuje do Twojej sytuacji.",
};

export default function BookingPage() {
  return (
    <main>
      <BookingHeroSection />
      <BookingCallAgendaSection />
      <BookingOfferSection />
      {/* Fladlien: cena idzie przed bonusami, żeby Moduły wracały do wartości. */}
      <BookingPriceSection />
      <BookingVaultsSection />
      <BookingGuaranteeSection />
      <BookingResultsSection />
      <BookingBioSection />
      <BookingCoachingPhotoSection />
      <BookingObjectionsSection />
      <BookingCalendarSection />
      <LegalFooter />
    </main>
  );
}
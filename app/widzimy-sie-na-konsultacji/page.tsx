import { ApplicationConfirmationHeroSection } from "@/components/call-confirmation-hero-section";
import { CallConfirmationProofSection } from "@/components/call-confirmation-proof-section";
import { CallConfirmationBonusSection } from "@/components/call-confirmation-bonus-section";
import { LegalFooter } from "@/components/legal-footer";

export default function CallConfirmationPage() {
  return (
    <main>
      {/* FAZA 1: LOGISTYKA I ZASADY GRY */}
      {/* 1. Potwierdzenie terminu rozmowy 1:1 + Kalendarze + Twarde zasady.
             Użytkownik musi wiedzieć, że to profesjonalne spotkanie biznesowe, 
             a nie luźna pogawędka (np. wymóg bycia przed komputerem, w cichym miejscu). */}
      <ApplicationConfirmationHeroSection />

      {/* FAZA 2: WALIDACJA DECYZJI (ZAPOBIEGANIE KUPCOWI-ŻALOWI) */}
      {/* 2. Dowód społeczny. Zaraz po rezerwacji czasu w kalendarzu, lead może czuć 
             lekki stres przed rozmową "sprzedażową". Pokazanie twardych wyników 
             innych właścicieli upewnia go: "Podjąłem dobrą decyzję, oni też tak zaczynali". */}
      <CallConfirmationProofSection />

      {/* FAZA 3: EDUKACJA I INDOKTRYNACJA ("PRACA DOMOWA") */}
      {/* 3. Baza wiedzy przed rozmową strategiczną. Działa jako obowiązkowy materiał 
             do przyswojenia. Drastycznie podnosi jakość rozmowy (lead zna już Twój 
             żargon, rozumie model semi-personalny i wyceny transformacji). */}
      <CallConfirmationBonusSection />

      {/* FAZA 4: ZAMKNIĘCIE */}
      {/* 4. Stopka prawna (KRS, polityka prywatności, regulamin) */}
      <LegalFooter />
    </main>
  );
}
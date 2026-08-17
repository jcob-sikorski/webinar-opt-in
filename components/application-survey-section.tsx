import { Section } from "@/components/ui/section";
import { ApplicationSurveyEmbed } from "@/components/ui/booking-calendar-embed";

export function ApplicationSurveySection() {
  return (
    <div id="aplikacja" className="scroll-mt-8">
      <Section className="bg-[#fcfbf9]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Krok 1: Weryfikacja zgłoszenia
          </p>

          <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
            Wypełnij krótką aplikację
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Po weryfikacji zgłoszenia skontaktuje się z Tobą nasz konsultant, aby potwierdzić kwalifikację i ustalić termin bezpłatnej rozmowy strategicznej.
          </p>

          <div className="mt-6 w-full">
            <ApplicationSurveyEmbed />
          </div>
        </div>
      </Section>
    </div>
  );
}
import { Section } from "@/components/ui/section";

const VAULTS = [
  {
    number: "01",
    name: "Moduł Operacyjny i CRM",
    context:
      "Gotowe bazy danych podopiecznych, pipeline leadów, regulamin studia oraz sekwencje onboardingowe.",
    proof:
      "To te same dokumenty, które pozwalają mi wyjeżdżać dziesięć razy w roku i zarządzać biznesem zdalnie.",
  },
  {
    number: "02",
    name: "Moduł Sprzedaży i Skrypty Konsultacji",
    context:
      "Arkusz ofertowy, kalkulator marży, kwestionariusz diagnostyczny oraz dosłowne skrypty domykania pakietów 90 dni.",
    proof:
      "Nowa trenerka po wdrożeniu tego skryptu zamknęła 11 programów na 12 przeprowadzonych konsultacji.",
  },
  {
    number: "03",
    name: "Moduł Płatnego i Organicznego Marketingu",
    context:
      "Pełny kurs Meta Ads dla branży fitness, prompty AI do tworzenia rolek pod awatar oraz mechaniki konkursów generujących setki leadów.",
    proof:
      "Nasz konkurs 'Wygraj Transformację' przyniósł 140 udostępnień w 24 godziny w małej miejscowości.",
  },
  {
    number: "04",
    name: "Moduł Zespołu, Rekrutacji i Zabezpieczenia Klientów",
    context:
      "Formularze rekrutacyjne, system 6 leveli trenerskich, system premiowy oraz biblioteka 48 szkoleń wideo dla personelu.",
    proof:
      "Eliminuje problem odejścia trenera z bazą klientów dzięki procedurom wiązania podopiecznych z marką studia.",
  },
  {
    number: "05",
    name: "Moduł Lokalu, Sprzętu i Negocjacji Czynszu",
    context:
      "Trzy budżety wyposażenia (35–100k), 20 pytań do właściciela nieruchomości oraz wzory zapisów o wakacjach czynszowych.",
    proof:
      "Wynegocjowane 2 miesiące bez czynszu na adaptację to często kilkanaście tysięcy złotych oszczędności na starcie.",
  },
  {
    number: "06",
    name: "Dedykowany Asystent AI Dochodowego Studia",
    context:
      "Model AI przeszkolony na całej bazie wiedzy programu — odpowiada na pytania o 23:00 i w weekendy, wskazując gotowe procedury.",
    proof:
      "Działa w języku polskim, natychmiast odsyłając do właściwego pliku w platformie Skool.",
  },
];

export function BookingVaultsSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Narzędzia wdrożeniowe
        </p>

        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Nie wymyślaj koła na nowo:{" "}
          <span className="text-[#ef6b4a]">Otrzymujesz gotowe procedury</span>
        </h2>

        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Przez 6 lat budowałem te procesy w 4 własnych placówkach. W ramach
            mentoringu otrzymujesz dostęp do kompletu plików — podmieniasz dane
            i wdrażasz u siebie od pierwszego tygodnia.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {VAULTS.map((vault) => (
            <article key={vault.number} className="py-8 sm:py-9">
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                Moduł {vault.number}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {vault.name}
              </h3>
              <p className="mt-2 font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {vault.context}
              </p>
              <p className="mt-3 border-l-2 border-[#ef6b4a] pl-4 font-display text-sm italic text-gray-600 sm:text-base">
                {vault.proof}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
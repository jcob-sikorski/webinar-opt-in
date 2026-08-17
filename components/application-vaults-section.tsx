import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

const VAULTS = [
  {
    number: "01",
    name: "Moduł Operacyjny: procesy z czterech studiów",
    context:
      "To nie jest teoretyczna wiedza do posłuchania w aucie. To twarde, sprawdzone w boju dokumenty operacyjne, na których opieram swoje własne biznesy. Budujesz to raz: otwierasz plik, podmieniasz logo i odzyskujesz kontrolę.",
    deliverables: [
      "CRM klientów aktualnych: monitoring urodzin, historii urazów i przypomnienia o nieobecnościach (ratuje LTV klienta).",
      "Regulamin studia + Skrypty: gotowe formuły obrony zasad, gdy klient odwołuje trening z dnia na dzień.",
      "System Onboardingu: zautomatyzowane maile (BASIC i PREMIUM) oraz SMS-y budujące ekskluzywne doświadczenie od pierwszej sekundy.",
      "Checklisty operacyjne i Proces Urlopowy: zabezpieczają przychód w wakacje i automatyzują otwarcie/zamknięcie lokalu.",
      "Gotowe systemy żywieniowe: pakiety, kalkulatory BMR i encyklopedia odżywiania dla klientów (zero dodatkowej pracy dla Ciebie).",
      "Konfiguracja płatności Stripe: pełna automatyzacja ściągania środków z kart, koniec z proszeniem się o przelewy.",
      "System budowania społeczności: gotowe schematy eventów i wyzwań, które wiążą klienta ze studiem na lata.",
    ],
    proof:
      "To dokładnie te pliki, o których moi podopieczni mówią: „Gdybym miał to od początku, zaoszczędziłbym rok życia”.",
  },
  {
    number: "02",
    name: "Moduł Sprzedażowy: Architektura Sprzedaży i Oferty",
    context:
      "Podanie ceny to tylko liczba kończąca prezentację – prawdziwa sprzedaż dzieje się wcześniej. To kompletny, rozpisany słowo w słowo proces przeprowadzania klienta od zapytania do zamknięcia high-ticket.",
    deliverables: [
      "Arkusz Ofertowy + Gotowy Prompt AI: najważniejszy dokument w Twoim biznesie (AI samo pomoże Ci go napisać).",
      "Kalkulator Cen i Rentowności: wpisujesz liczby i od razu wiesz, ile realnie zostaje Ci w kieszeni – koniec z wyceną „na czuja”.",
      "Kwestionariusz Konsultacyjny: formularz diagnostyczny, z którego korzystają studia robiące największe wyniki.",
      "Skrypt Konsultacji i Prezentacji Oferty 90 dni: dosłowne instrukcje co mówić (i kiedy milczeć) podczas podawania wysokiej ceny.",
      "Mechanika Zbierania Zaliczki i Potwierdzania Obecności: system SMS/tel, dzięki któremu ludzie przestają zapadać się pod ziemię.",
      "Skrypt Obsługi Klienta (DM/Social Media): jak przekuć luźne zapytanie „ile to kosztuje” w zamkniętą sprzedaż.",
    ],
    proof:
      "Dzięki tym skryptom zupełnie nowy trener (a nie Ty!) może zamknąć sprzedaż za 7000 zł. Jedna z trenerek w programie zamknęła w ten sposób 11 z 12 konsultacji.",
  },
  {
    number: "03",
    name: "Moduł Marketingowy: Niezależny Marketing i Leady",
    context:
      "Przestań płacić tysiące agencjom marketingowym za leady, których nie da się zamknąć. Zyskaj pełną kontrolę nad budżetem i przewidywalnie generuj zgłoszenia.",
    deliverables: [
      "Pełny kurs płatnego marketingu (Meta Ads) + checklista kampanii.",
      "Gotowy prompt AI do pisania rolek + System planowania treści na Instagramie (rytm publikacji nawet przy pełnym grafiku).",
      "Szablony pozycjonowania profilu: bio i opisy konwertujące widza w obserwatora w 10 sekund.",
      "Mechanika konkursu „Wygraj transformację”: gotowe grafiki, timing oraz system wiadomości follow-up zamieniający „przegranych” w ciepłe leady.",
      "Vouchery do druku w Canvie: systematyzacja darmowego marketingu szeptanego z poleceń.",
      "Pełna sekwencja i Szablon Dnia Otwartego: tabelka godzinowa i plan na 4 tygodnie budujący potężne napięcie na lokalnym rynku.",
      "System zbierania opinii: wideo i wywiady zdobywane niemal automatycznie (Twój najważniejszy dowód społeczny).",
    ],
    proof:
      "Mechanika konkursu u jednego z naszych klientów dała 140 udostępnień w jeden dzień. A jeśli nienawidzisz kamery? Możesz to wszystko zdelegować lub oprzeć wyłącznie na precyzyjnych Adsach.",
  },
  {
    number: "04",
    name: "Moduł Zespołu: Rekrutacja, Przywództwo i Ochrona",
    context:
      "Złe decyzje personalne mogą kosztować dziesiątki tysięcy. Tutaj dostajesz gotowe mechanizmy do przyciągnięcia odpowiednich ludzi, wdrożenia ich bez Twojej asysty i zabezpieczenia swojego biznesu przed kradzieżą bazy.",
    deliverables: [
      "Gotowe ogłoszenie rekrutacyjne z parametrami reklamowymi + Google Forms filtrujący kandydatów.",
      "Skrypty do rozmów (telefonicznej i kwalifikacyjnej): od pierwszej sekundy ustawiasz się w pozycji lidera.",
      "Proces Miesiąca Próbnego i Szkolenie Wdrożeniowe: weryfikacja pracownika przez pierwsze 8-12 godzin.",
      "System Sześciu Leveli Trenerskich: gotowe widełki stawek, awansów i zasady współpracy (UoP, B2B, zlecenie, %).",
      "Mechanika premii frekwencyjnej: legalne lekarstwo na powtarzające się „nagłe, piątkowe zachorowania” trenerów.",
      "Biblioteka 48 szkoleń + 40 live'ów: potężny system edukacji personelu, do którego dajesz im dostęp (nie musisz ich szkolić sam).",
      "Procedura bezpieczeństwa: mechanizmy ochrony danych wrażliwych i zatrzymywania klientów na wypadek odejścia trenera.",
    ],
    proof:
      "Zatrudniasz trenera, wysyłasz mu link, a on wdraża się sam. Moi trenerzy wyrabiają ponad 200 godzin z uśmiechem i lojalnością względem marki.",
  },
  {
    number: "05",
    name: "Moduł Otwarcia i Lokalu: Bezpieczeństwo Finansowe",
    context:
      "Najdroższym błędem jest podpisanie złej umowy najmu na 3 lata. Ten moduł uchroni Cię przed przepaleniem budżetu remontowego i zapewni optymalne warunki czynszowe od 1. dnia.",
    deliverables: [
      "Trzy gotowe budżety wyposażenia rynkowego (START: 35-45k, PRO: 60-70k, PREMIUM: 80-100k zł).",
      "Żelazne kryteria wyboru lokalu: zasada utrzymania czynszu na bezpiecznym poziomie ~10% przewidywanego przychodu.",
      "Tabela do porównywania ofert i checklista 20 pytań: demaskuje ukryte koszty lokalu (np. wentylacja, prąd) przed podpisaniem umowy.",
      "Skrypty i taktyki negocjacji: walcz o wakacje czynszowe, udział w kosztach adaptacji i mniejszą kaucję (nie tylko o niższy czynsz!).",
      "Formularz audytu biznesu („Gdzie jesteś dziś”): dla osób, które już mają studio i szukają dziur w budżecie.",
    ],
    proof:
      "Z tą checklistą landlord widzi w Tobie wytrawnego przedsiębiorcę. A wynegocjowanie 2 miesięcy bez czynszu na start da Ci często więcej, niż lata oszczędności na miesięcznej stawce.",
  },
  {
    number: "06",
    name: "Moduł „Wisienka”: Twój Prywatny Asystent AI",
    context:
      "Największy problem to nie brak wiedzy, ale brak kogoś, kto odpowie Ci o 22:00, w którym pliku jest błąd, gdy siedzisz zmęczony nad grafikiem.",
    deliverables: [
      "Spersonalizowany model AI „nakarmiony” wszystkimi modułami, skryptami i procesami Dochodowego Studia.",
      "Diagnozowanie wyzwań w czasie rzeczywistym: opisujesz problem z sali, a Asystent od ręki podaje przyczynę i rozwiązanie.",
      "Wsparcie 24/7 (również w weekendy i poza sesjami Q&A na żywo).",
      "Prosty język polski: zero technologicznego żargonu – po prostu piszesz do niego jak na messengerze.",
    ],
    proof:
      "Zamiast szukać informacji po nocach lub czekać dni na konsultację, od razu dostajesz gotowe linki i konkretne kroki z bazy wiedzy programu.",
  },
];

export function ApplicationVaultsSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Co dokładnie otrzymujesz?
        </p>

        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Nie wymyślaj koła na nowo.
        </h2>

        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Te 6 modułów to wszystkie narzędzia, których Ci potrzeba.
            Kopiujesz, wklejasz, podmieniasz logo, obrazek.
          </p>
        </div>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {VAULTS.map((vault) => (
            <article key={vault.number} className="py-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  Moduł {vault.number}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold italic text-gray-900 sm:text-3xl">
                {vault.name}
              </h3>
              
              <p className="mt-4 font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {vault.context}
              </p>

              <ul className="mt-8 space-y-4">
                {vault.deliverables.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-800">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ef6b4a]" />
                    <span className="leading-relaxed font-display italic">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg bg-gray-50 p-5 border border-gray-100">
                <p className="font-display text-base font-semibold italic text-gray-900">
                  Rezultat: <span className="font-normal text-gray-700">{vault.proof}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Dodany przycisk CTA kierujący do formularza aplikacji */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a
            href="#aplikacja"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            Wypełnij aplikację
            <ArrowRight className="h-6 w-6 shrink-0" />
          </a>
        </div>

      </div>
    </Section>
  );
}
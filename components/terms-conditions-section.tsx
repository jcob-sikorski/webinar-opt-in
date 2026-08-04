import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

const CONTACT_EMAIL = "bartlomiej.sikorski.96@gmail.com";

const DEFINITIONS = [
  {
    label: "Usługodawca",
    description:
      "SPORTOWE PRZEDMIEŚCIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, organizator Programu.",
  },
  {
    label: "Klient / Uczestnik",
    description:
      "osoba fizyczna prowadząca działalność gospodarczą lub zawodową, która zawarła Umowę o udział w Programie.",
  },
  {
    label: "Program",
    description:
      "sześciomiesięczny program mentoringowo-wdrożeniowy „Instalacja Systemu Dochodowe Studio”.",
  },
  {
    label: "Platforma",
    description:
      "platforma szkoleniowa Skool oraz komunikator Telegram wykorzystywane do realizacji Programu.",
  },
  {
    label: "Umowa",
    description:
      "umowa o udział w Programie zawierana na odległość za pośrednictwem Autenti.",
  },
];

const PROGRAM_SCOPE = [
  "dostęp do platformy szkoleniowej Skool i materiałów udostępnionych w Programie",
  "dostęp do mapy biznesu oraz materiałów wdrożeniowych",
  "indywidualny kontakt 1:1 z mentorem za pośrednictwem Telegrama",
  "udział w cotygodniowych grupowych spotkaniach online (środa i czwartek, po 2 godziny)",
  "dostęp do grupy uczestników Programu na Telegramie oraz materiałów dotyczących modelu biznesowego, sprzedaży, marketingu, budowy zespołu i retencji",
];

const RESPONSIBILITIES = [
  "wykonywanie zadań oraz samodzielne wdrażanie rekomendacji otrzymanych w ramach Programu",
  "prawdziwość i kompletność przekazywanych danych",
  "podejmowane decyzje biznesowe i zgodność własnej działalności z prawem",
  "nieudostępnianie danych dostępowych do Platformy osobom trzecim",
  "niezakłócanie pracy społeczności uczestników",
];

const TERMINATION_REASONS = [
  "bezprawne rozpowszechnianie materiałów Programu",
  "udostępnienie konta lub danych dostępowych osobom trzecim",
  "poważne zakłócanie pracy społeczności uczestników",
  "zwłoka w zapłacie mimo wezwania do zapłaty",
];

export function TermsConditionsSection() {
  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Dokument prawny
      </p>
      <h1 className="mx-auto mt-5 text-center font-display text-[clamp(1.9rem,4.4vw,2.75rem)] font-bold leading-tight text-ink text-balance">
        Regulamin
      </h1>
      <p className="mt-4 text-center text-sm text-ink-subtle">
        Data wejścia w życie: 19 sierpnia 2025 r.
      </p>

      <div className="mt-12 space-y-12 text-body leading-[1.7] text-ink-muted">
        {/* 1. Postanowienia ogólne */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            1. Postanowienia ogólne
          </h2>
          <p className="mt-4">
            Niniejszy Regulamin określa zasady uczestnictwa w programie
            mentoringowo-wdrożeniowym „Instalacja Systemu Dochodowe Studio”
            oraz zasady korzystania ze strony DochodoweStudio.com,
            prowadzonej przez{" "}
            <strong className="font-semibold text-ink">
              SPORTOWE PRZEDMIEŚCIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
            </strong>{" "}
            z siedzibą przy ul. Partyzantów 42B, 99-200 Poddębice, wpisaną do
            Krajowego Rejestru Sądowego pod numerem{" "}
            <strong className="font-semibold text-ink">
              KRS: 0001189312
            </strong>
            , <strong className="font-semibold text-ink">NIP 8281424752</strong>
            , <strong className="font-semibold text-ink">REGON 542481505</strong>
            , kapitał zakładowy{" "}
            <strong className="font-semibold text-ink">5 000,00 PLN</strong>.
          </p>
          <p className="mt-4">
            Korzystanie ze strony oraz przystąpienie do Programu oznacza
            akceptację postanowień niniejszego Regulaminu.
          </p>
        </div>

        <hr className="border-line" />

        {/* 2. Definicje */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            2. Definicje
          </h2>
          <ul className="mt-5 divide-y divide-line">
            {DEFINITIONS.map((item) => (
              <CheckItem key={item.label} className="py-3">
                <p className="text-body text-ink-muted">
                  <span className="text-ink">{item.label}</span> —{" "}
                  {item.description}
                </p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 3. Charakter i cel Programu */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            3. Charakter i cel Programu
          </h2>
          <p className="mt-4">
            Program ma charakter edukacyjny i doradczy. Usługodawca nie
            przejmuje zarządzania przedsiębiorstwem Klienta, nie wykonuje za
            niego wdrożeń i nie świadczy usług prawnych, podatkowych ani
            inwestycyjnych.
          </p>
          <p className="mt-4">
            Celem Programu jest wsparcie Klienta w uporządkowaniu modelu
            biznesowego studia, sprzedaży i marketingu lokalnego, budowie
            zespołu, delegowaniu, retencji oraz społeczności. Usługodawca nie
            gwarantuje osiągnięcia konkretnych wyników finansowych — wyniki
            uczestników są zróżnicowane i zależą od ich zaangażowania,
            doświadczenia oraz sytuacji rynkowej.
          </p>
        </div>

        <hr className="border-line" />

        {/* 4. Warunki uczestnictwa */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            4. Warunki uczestnictwa
          </h2>
          <p className="mt-4">
            Uczestnikiem Programu może zostać osoba fizyczna prowadząca
            działalność gospodarczą lub zawodową, zawierająca Umowę w
            bezpośrednim związku z tą działalnością. Umowa zawierana jest na
            odległość za pośrednictwem platformy Autenti i zostaje zawarta po
            złożeniu podpisów elektronicznych przez Klienta oraz osobę
            uprawnioną do reprezentowania Usługodawcy.
          </p>
          <p className="mt-4">
            Korzystanie z Programu wymaga dostępu do internetu oraz
            aktywnego konta na platformie Skool i komunikatorze Telegram.
          </p>
        </div>

        <hr className="border-line" />

        {/* 5. Zakres Programu */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            5. Zakres Programu
          </h2>
          <p className="mt-4">W ramach ceny Klient otrzymuje:</p>
          <ul className="mt-5 divide-y divide-line">
            {PROGRAM_SCOPE.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
          <p className="mt-6">
            Szczegółowa kolejność wdrożeń zależy od sytuacji Klienta i może
            zostać dostosowana w toku Programu bez zmniejszenia uzgodnionego
            zakresu świadczenia. Kanał indywidualny na Telegramie jest
            obsługiwany co do zasady od poniedziałku do czwartku w godzinach
            7:00–18:00, bez gwarancji odpowiedzi natychmiastowej ani stałej
            dostępności mentora.
          </p>
        </div>

        <hr className="border-line" />

        {/* 6. Czas trwania i rozpoczęcie */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            6. Czas trwania i rozpoczęcie
          </h2>
          <p className="mt-4">
            Program trwa 6 miesięcy. Dostęp do platformy zostanie przyznany
            po zaksięgowaniu pełnej ceny albo spełnieniu warunków
            finansowania, niezwłocznie, nie później niż w terminie 7 dni,
            chyba że Strony wskażą późniejszą datę startu.
          </p>
          <p className="mt-4">
            Niewykorzystywanie Programu przez Klienta, nieobecność na
            spotkaniach, brak korzystania z kanałów komunikacji lub
            niewykonywanie zadań nie przedłuża okresu obowiązywania Umowy i
            nie wstrzymuje płatności. Przerwa lub wydłużenie Programu wymaga
            udokumentowanego uzgodnienia Stron na trwałym nośniku.
          </p>
        </div>

        <hr className="border-line" />

        {/* 7. Cena i płatność */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            7. Cena i płatność
          </h2>
          <p className="mt-4">
            Cena Programu wynosi 21 000,00 zł netto, powiększona o VAT według
            stawki obowiązującej w dniu wystawienia faktury; przy stawce 23%
            cena brutto wynosi 25 830,00 zł. Sposób zapłaty — jednorazowy,
            ratalny lub finansowany przez podmiot trzeci — jest każdorazowo
            określany w warunkach przekazanych Klientowi przed zawarciem
            Umowy.
          </p>
          <p className="mt-4">
            Odmowa udzielenia finansowania przez podmiot trzeci nie oznacza
            zawarcia Umowy na raty z Usługodawcą. Opóźnienie w płatności
            uprawnia Usługodawcę, po wezwaniu Klienta i wyznaczeniu
            odpowiedniego dodatkowego terminu, do czasowego wstrzymania
            świadczeń oraz dochodzenia odsetek ustawowych za opóźnienie, bez
            naruszenia praw Klienta wynikających z bezwzględnie
            obowiązujących przepisów.
          </p>
        </div>

        <hr className="border-line" />

        {/* 8. Prawa autorskie i licencja */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            8. Prawa autorskie i licencja
          </h2>
          <p className="mt-4">
            Materiały udostępniane w ramach Programu są chronione prawem
            autorskim. Klient otrzymuje niewyłączną, nieprzenoszalną
            licencję na korzystanie z nich wyłącznie na potrzeby własnej
            działalności, przez okres udostępnienia określony w Umowie lub
            na platformie.
          </p>
          <p className="mt-4">
            Bez uprzedniej zgody Usługodawcy Klient nie może kopiować,
            sprzedawać, publicznie udostępniać, przekazywać osobom trzecim
            ani wykorzystywać materiałów do prowadzenia konkurencyjnych
            szkoleń lub mentoringu. Klient może wdrażać poznane metody we
            własnym przedsiębiorstwie i udostępniać zespołowi wyłącznie te
            narzędzia, które zostały wyraźnie oznaczone jako przeznaczone do
            wdrożenia zespołowego.
          </p>
        </div>

        <hr className="border-line" />

        {/* 9. Odpowiedzialność Uczestnika */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            9. Odpowiedzialność Uczestnika
          </h2>
          <p className="mt-4">Klient odpowiada w szczególności za:</p>
          <ul className="mt-5 divide-y divide-line">
            {RESPONSIBILITIES.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 10. Poufność i dane osobowe */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            10. Poufność i dane osobowe
          </h2>
          <p className="mt-4">
            Strony zachowują w poufności informacje biznesowe oznaczone jako
            poufne lub takie, których poufny charakter wynika z okoliczności.
            Regulamin nie udziela Usługodawcy zgody na publikację wizerunku,
            nazwy firmy, wypowiedzi, wyników ani case study Klienta — taka
            publikacja wymaga odrębnej zgody.
          </p>
          <p className="mt-4">
            Zasady przetwarzania danych osobowych określa{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-coral underline-offset-4 hover:underline"
            >
              Polityka Prywatności
            </a>
            .
          </p>
        </div>

        <hr className="border-line" />

        {/* 11. Rozwiązanie Umowy */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            11. Rozwiązanie Umowy
          </h2>
          <p className="mt-4">
            Każda Strona może rozwiązać Umowę ze skutkiem natychmiastowym w
            razie istotnego naruszenia Umowy przez drugą Stronę, po
            uprzednim wezwaniu do usunięcia naruszenia i bezskutecznym
            upływie odpowiedniego terminu, chyba że charakter naruszenia
            uzasadnia natychmiastowe zakończenie współpracy. Za istotne
            naruszenie przez Klienta uważa się w szczególności:
          </p>
          <ul className="mt-5 divide-y divide-line">
            {TERMINATION_REASONS.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
          <p className="mt-6">
            Rozliczenie po rozwiązaniu Umowy następuje z uwzględnieniem
            świadczeń prawidłowo spełnionych do dnia rozwiązania oraz
            bezwzględnie obowiązujących przepisów. Postanowienie nie
            ogranicza ustawowego prawa odstąpienia, jeżeli Klientowi ono
            przysługuje.
          </p>
        </div>

        <hr className="border-line" />

        {/* 12. Postanowienia końcowe */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            12. Postanowienia końcowe
          </h2>
          <p className="mt-4">
            Zmiana Umowy lub Regulaminu wymaga utrwalenia na trwałym nośniku
            i akceptacji obu Stron, chyba że Regulamin wyraźnie przewiduje
            dopuszczalną zmianę organizacyjną, która nie zmniejsza
            świadczenia. W sprawach nieuregulowanych stosuje się prawo
            polskie, w szczególności Kodeks cywilny oraz — gdy ma
            zastosowanie — ustawę o prawach konsumenta.
          </p>
          <p className="mt-4">
            Spory będą rozpoznawane przez sąd właściwy według przepisów
            powszechnie obowiązujących. Wobec Klienta niebędącego
            konsumentem Strony mogą uzgodnić właściwość sądu dla siedziby
            Usługodawcy.
          </p>
          <p className="mt-4">
            Pytania dotyczące Regulaminu można kierować na adres:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-coral underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <hr className="border-line" />

        {/* 13. Data wejścia w życie */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            13. Data wejścia w życie
          </h2>
          <p className="mt-4 font-semibold text-ink">19 sierpnia 2025 r.</p>
        </div>
      </div>
    </Section>
  );
}
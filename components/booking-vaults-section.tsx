import { Section } from "@/components/ui/section";

interface Moduł {
  number: string;
  name: string;
  context: string;
  items: string[];
  /** Shown as a pull-quote under the list. */
  proof?: string;
}

// Order is deliberate (Fladlien): lead with the second-strongest, close with
// the strongest. Moduł 6 (AI) is the "wisienka" and goes last.
const VAULTS: Moduł[] = [
  {
    number: "01",
    name: "Moduł Operacyjny",
    context:
      "Procesy z czterech moich studiów. To ten Moduł, o którym klienci mówią najczęściej: „gdybym miał to od początku, zaoszczędziłbym rok”.",
    items: [
      "CRM klientów aktualnych — urodziny, rocznica współpracy, opinie, źródło, urazy. Przestajesz tracić klientów dlatego, że nikt nie zauważył, że przestali przychodzić.",
      "CRM leadów — pełny pipeline: odebrał / nie odebrał / SMS pierwszy, drugi, trzeci / kupił. Żaden lead z reklamy nie ginie w wiadomościach na Instagramie.",
      "Regulamin studia i treningów — z zasadą przepadania treningów i skryptem, jak jej bronić, gdy klient się obruszy.",
      "Onboarding klienta — sekwencje maili BASIC i PREMIUM, SMS-y, dostęp do grupy FB.",
      "Proces umawiania treningów, checklista otwarcia i zamknięcia lokalu, proces urlopowy.",
      "Zalecenia żywieniowe BASIC i PREMIUM, diety kaloryczne, kalkulator BMR, encyklopedia sportowego odżywiania.",
      "Konfiguracja Stripe krok po kroku — płatności online od zera, subskrypcje, zwroty.",
      "System budowania społeczności — grupa FB, eventy co trzy miesiące, challenge'e i konkursy.",
    ],
    proof:
      "To dokładnie te same dokumenty, które pozwalają mi wyjeżdżać dziesięć razy w roku i pracować z basenu.",
  },
  {
    number: "02",
    name: "Moduł Sprzedażowy",
    context:
      "Cena to tylko liczba kończąca prezentację — cała sprzedaż wydarzyła się wcześniej. Ten Moduł to jest to „wcześniej”, rozpisane słowo w słowo.",
    items: [
      "Arkusz ofertowy — najważniejszy dokument w Twoim biznesie, plus prompt AI, który uzupełnia go za Ciebie, jeśli utkniesz.",
      "Kalkulator cen i rentowności — wpisujesz swoje liczby, widzisz, ile realnie zostaje. Koniec ustalania cen „na czuja”.",
      "Kwestionariusz konsultacyjny — ten sam, którego używamy u siebie. Podmieniasz twarz na swoją i działasz.",
      "Skrypt konsultacji sprzedażowej — trzy etapy plus prezentacja programu 90 dni.",
      "Skrypt prezentacji oferty 90 dni — słowo w słowo, łącznie z tym, co powiedzieć po podaniu ceny (podpowiedź: nic — i to najtrudniejsza część).",
      "Proces potwierdzania konsultacji — telefon, druga próba, SMS. Co pisać dosłownie.",
      "Skrypt zbierania zaliczki — sprawia, że frekwencja na konsultacjach przestaje być loterią.",
      "Skrypt obsługi klienta w DM i social media.",
    ],
    proof:
      "Nowa trenerka odpowiedzialna za sprzedaż zamknęła 11 programów na 12 przeprowadzonych konsultacji. To konkretny przypadek, nie średnia.",
  },
  {
    number: "03",
    name: "Moduł Marketingowy",
    context:
      "Powstał z mojej największej frustracji: latami płaciłem agencjom, dostawałem leady, których nie dało się sprzedać, i nie wiedziałem, czy problem jest w reklamie, czy we mnie.",
    items: [
      "Osobny, pełny kurs płatnego marketingu plus checklista kampanii — nie fragment, cały kurs.",
      "Prompt AI do pisania rolek, wytrenowany na awatarze klienta studia.",
      "System planowania treści na Instagramie plus proces produkcji — rytm, który da się utrzymać przy pełnym grafiku.",
      "Pozycjonowanie profilu — żeby w pierwszych dziesięciu sekundach było jasne, dla kogo jesteś.",
      "Mechanika konkursu „wygraj transformację” — grafiki, opisy, timing, plus follow-up, który zamienia stu przegranych w stu leadów.",
      "Vouchery do druku w Canvie — dla obecnych klientów i osób towarzyszących.",
      "Szablon dnia otwartego — tabelka godzinowa, ilu ludzi na godzinę, kto prowadzi konsultacje.",
      "Pełna sekwencja otwarcia studia — co robisz cztery tygodnie przed, tydzień przed i w dniu otwarcia.",
      "System zbierania opinii, wideo-opinii i wywiadów z klientami.",
    ],
    proof:
      "Jeden z moich trenerów spodziewał się kilkunastu zgłoszeń w konkursie. Dostał 140 udostępnień w jeden dzień. Wdrożyliśmy tę mechanikę dwa razy u siebie — za każdym razem zadziałała.",
  },
  {
    number: "04",
    name: "Moduł Zespołu i Rekrutacji",
    context:
      "Rok 2022. Straciłem dziesiątki tysięcy złotych, bo nie umiałem rekrutować, zarządzać ani negocjować. Ten Moduł to wszystko, czego nauczyłem się PO tej katastrofie — żebyś Ty jej nie przechodził.",
    items: [
      "Gotowe ogłoszenie rekrutacyjne plus instrukcja promocji — ustawienia reklamy, budżet dzienny, promień geograficzny.",
      "Formularz rekrutacyjny w Google Forms — z pytaniami, które faktycznie filtrują.",
      "Skrypt telefoniczny do kandydata — dosłowny, łącznie z pierwszym zdaniem ustawiającym rozmowę z pozycji lidera.",
      "Skrypt rozmowy kwalifikacyjnej — i sposób jej zamknięcia tak, żeby to Ty wybierał jego, a nie odwrotnie.",
      "Proces miesiąca próbnego — co kandydat robi przez 8–12 godzin, zanim dotknie pierwszego klienta.",
      "System sześciu leveli trenerskich — stawki, widełki, kiedy awans. Trener wie, co zrobić, żeby zarabiać więcej, i nie negocjuje co miesiąc.",
      "Premia frekwencyjna i stanowiskowa — ta sama mechanika, która wyleczyła u mnie falę nagłych chorób.",
      "Modele współpracy: UoP, zlecenie, B2B, procent od klienta — kiedy który i jak to przedstawić.",
      "Komplet dokumentów Google do zatrudniania.",
      "Biblioteka 48 szkoleń dla trenerów plus ok. 40 live'ów — gotowy system rozwoju zespołu, którego nie musisz nagrywać sam.",
      "Szkolenie wdrożeniowe zespołu, szkolenie z budowania relacji, metodyka twarda i miękka.",
    ],
    proof:
      "Boisz się, że wyszkolisz kogoś i odejdzie z klientami? U mnie to się zdarzyło, niejednokrotnie. Dlatego w Vaulcie jest też procedura zabezpieczenia klientów i danych — a jeśli ktoś w zespole przejawia przedsiębiorczość, sam proponuję mu otwarcie lokalizacji ze mną.",
  },
  {
    number: "05",
    name: "Moduł Otwarcia i Lokalu",
    context:
      "Najdroższy błąd w tym biznesie to podpisać złą umowę najmu na trzy lata. Nie da się tego cofnąć. Ten Moduł istnieje, żebyś tego nie zrobił.",
    items: [
      "Trzy gotowe budżety wyposażenia, pozycja po pozycji — START (35–45 tys.), PRO (60–70 tys.), PREMIUM (80–100 tys.). Konkretna lista sprzętu z cenami.",
      "Kryteria wyboru lokalu — z zasadą czynszu na poziomie ok. 10% przychodu, metrażem, kwestią szatni i parkingu.",
      "Tabela do porównywania ofert najmu i checklista oględzin — dwadzieścia pytań, które musisz zadać, zanim powiesz „biorę”.",
      "Wsparcie w negocjacjach — wakacje czynszowe, obniżona kaucja, udział właściciela w adaptacji, długość umowy, okres wypowiedzenia, indeksacja.",
      "Audyt biznesu — formularz startowy „gdzie jesteś dziś”, jeśli masz już studio i chcesz je poukładać, a nie otwierać nowe.",
    ],
    proof:
      "Wynegocjowane dwa miesiące bez czynszu na starcie to często więcej realnych pieniędzy niż 200 zł taniej miesięcznie przez trzy lata. Większość walczy o to drugie i przegapia pierwsze.",
  },
  {
    number: "06",
    name: "Asystent AI Dochodowego Studia",
    context:
      "Twój problem nie polega na braku informacji. Polega na tym, że kiedy o 22:00 siedzisz nad grafikiem i widzisz, że coś nie działa, nie wiesz, KTÓRY z pięćdziesięciu elementów systemu jest przyczyną — i nie masz kogo zapytać o tej porze.",
    items: [
      "Asystent AI z dostępem do wszystkich modułów programu — opisujesz sytuację w swoim studiu, on wskazuje, gdzie prawdopodobnie leży problem, i odsyła do konkretnego modułu, dokumentu i skryptu.",
      "Działa wtedy, kiedy Ty pracujesz — wieczorem, w weekend, także wtedy, gdy do środowej sesji zostały trzy dni.",
      "Piszesz normalnym zdaniem, po polsku — tak jak napisałbyś do mnie na Telegramie. Nie musisz „znać się na AI”.",
    ],
  },
];

export function BookingVaultsSection() {
  return (
    <Section width="wide">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Co dostajesz dodatkowo
      </p>
      <h2 className="mx-auto mt-5 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Sześć <span className="text-coral">Modułów</span> — Ponad 50 Gotowych
        Narzędzi
      </h2>
      <p className="mx-auto mt-5 max-w-[54ch] text-center text-body-lg text-ink-muted">
        Przez sześć lat budowałem te procesy i dokumenty w czterech własnych
        studiach.{" "}
        <strong className="font-semibold text-ink">
          Nie zamierzam kazać Ci tworzyć ich od zera.
        </strong>{" "}
        Dostajesz je gotowe — i to jest część, którą moi klienci wyceniają
        wyżej niż same spotkania.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {VAULTS.map((vault) => (
          <article
            key={vault.number}
            className="rounded-xl border border-line p-6 sm:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-sm font-bold text-coral">
                VAULT {vault.number}
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
              {vault.name}
            </h3>
            <p className="mt-3 text-body italic text-ink-muted">
              {vault.context}
            </p>

            <ul className="mt-5 space-y-2.5">
              {vault.items.map((item) => (
                <li key={item} className="flex gap-3 text-body text-ink-muted">
                  <span
                    aria-hidden
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-coral-bright"
                  />
                  <span className="min-w-0 flex-1">{item}</span>
                </li>
              ))}
            </ul>

            {vault.proof && (
              <p className="mt-5 border-l-2 border-coral-bright pl-4 text-body italic text-ink-muted">
                {vault.proof}
              </p>
            )}
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[54ch] text-center text-sm italic text-ink-subtle">
        Przytoczone wyniki to konkretne przypadki konkretnych osób, nie
        średnia wszystkich uczestników i nie gwarancja tego, co osiągniesz Ty.
      </p>
    </Section>
  );
}
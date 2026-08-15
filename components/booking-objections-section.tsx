import { Section } from "@/components/ui/section";

interface Objection {
  question: string;
  answer: string;
}

const OBJECTIONS: Objection[] = [
  // DOTYCHCZASOWE OBIEKCJE (FUNDAMENTALNE)
  {
    question: "\"Próbowałem już czegoś podobnego i nie zadziałało.\"",
    answer:
      "Masz prawo być sceptyczny. Może już skupiałeś się na jednym elemencie: reklamach, podniesieniu cen albo nowym sprzęcie. Tyle że w dobrze działającym studio te elementy muszą ze sobą współgrać. To, co odróżnia osoby, które faktycznie budują dobrze działający biznes, od tych, które ciągle próbują kolejnych rzeczy, to konsekwentne wdrażanie całego procesu. I właśnie ten proces pokazuję Ci w 6-miesięcznym programie.",
  },

  {
    question: "\"To brzmi jak kolejny kurs, po którym zostanę z niczym.\"",
    answer:
"Ten program nie opiera się wyłącznie na materiałach, których jest tak dużo, że niektórzy uczestnicy sami dziwią się, że jeszcze coś zostało. Nie dostajesz ich jednak po to, żeby obejrzeć je i samemu domyślać się, jak wszystko wdrożyć. Każdy element programu został wcześniej wdrożony i przetestowany w 40 innych studiach. Masz też bezpośredni kontakt ze mną — Bartłomiejem Sikorskim — na Telegramie od 8:00 do 20:00. Jeśli czegoś nie rozumiesz albo nie wiesz, jak zastosować konkretną rzecz u siebie, możesz po prostu zapytać. Do tego masz dwa spotkania grupowe w tygodniu, podczas których możesz konsultować swoje problemy i słuchać, jak z podobnymi sytuacjami radzą sobie inni właściciele studiów. Dostajesz więc nie tylko wiedzę, ale przede wszystkim gotowe rozwiązania, wsparcie we wdrożeniu i dostęp do ludzi, którzy są w podobnym miejscu.",
  },

  {
    question: "\"Nie jestem osobą biznesową, nie znam się na CRM-ach i tabelkach.\"",
    answer:
      "I nie musisz być. Zaczynałeś jako trener, a nie przedsiębiorca. Nauczyłeś się prowadzić treningi, pracować z klientami i osiągać wyniki. Z biznesem jest dokładnie tak samo. Nie musisz być ekspertem od CRM-ów, Excela czy zarządzania zespołem. Dostajesz gotowe systemy, szablony i pliki, które zostały przygotowane specjalnie dla Ciebie.",
  },

  {
    question: "\"Mam etat. Kiedy właściwie mam na to czas?\"",
    answer:
      "Nie musisz rzucać etatu, żeby zacząć budować swoje studio. Program jest ułożony tak, żebyś mógł pracować nad nim równolegle z obecną pracą. Realnie potrzebujesz około 5 godzin tygodniowo na udział w programie i wdrażanie kolejnych elementów. Spotkania grupowe odbywają się w środy i czwartki, a pozostałe rzeczy możesz zrobić wtedy, kiedy masz na to czas. Sam zaczynałem, łącząc pracę z budowaniem własnego biznesu, więc wiem, jak wygląda sytuacja, kiedy czasu po prostu brakuje. Chodzi o regularne robienie kolejnych kroków.",
  },

  {
    question: "\"Boję się, że otworzę studio i będę pracował jeszcze więcej niż teraz.\"",
    answer:
      "Tego chcemy uniknąć. Samo otwarcie studia nie oznacza jeszcze większej swobody. Dlatego od początku uczę Cię delegowania i budowania zespołu. Najpierw zbudujemy system, a później możesz stopniowo przekazywać kolejne obowiązki innym osobom.",
  },

  {
    question: "\"Wyszkolę trenera, a on odejdzie z moimi klientami.\"",
    answer:
      "Sam doświadczyłem takich sytuacji niejednokrotnie. Z czasem zrozumiałem jednak, że problemem jet to czy trener widzi u Ciebie, ścieżkę rozwoju. Dlatego od początku uczę, jak prowadzić treningi tak, aby klient był związany ze studiem, a nie tylko i wyłącznie z konkretnym trenerem. Masz też procedury dotyczące klientów, danych i przekazywania relacji w zespole. A jeśli trener ma ambicję i chce kiedyś prowadzić własny biznes, nie musi to od razu oznaczać konfliktu. Sam wolę wykorzystać taką sytuację jako szansę przez otwarcie kolejnej lokalizacji. Wtedy zamiast tracić dobrego człowieka, możesz zyskać partnera do dalszego rozwoju.",
  },

  {
    question: "\"Oddanie klientów zespołowi to zdrada tego, kim jestem jako trener.\"",
    answer:
      "Przez lata to Ty byłeś osobą, która prowadziła trening, znała każdego klienta i odpowiadała za jego wynik. Ale jeśli chcesz zbudować studio, a nie tylko stworzyć sobie więcej godzin pracy, w pewnym momencie musisz przestać być potrzebny przy każdej rzeczy. To nie oznacza utraty kontroli nad klientami. Wręcz przeciwnie — zaczynasz kontrolować cały system, zamiast kontrolować pojedyncze treningi. Nadal decydujesz o standardach, kierunku rozwoju i jakości pracy. Zmienia się tylko to, że nie musisz osobiście wykonywać wszystkiego.",
  },

  {
    question: "\"U mnie, w moim mieście, nikt nie zapłaci kilku tysięcy za pakiet.\"",
    answer:
      "Jeśli patrzysz na swoją usługę jak na pojedynczą godzinę treningu, kilka tysięcy rzeczywiście może wydawać się dużą kwotą. Rzecz w tym, że klient kupuje u Ciebie transformację od punktu A do Z. Dlatego uczę Cię zbudować ofertę, która jest wyrafinowana na rynku i nie da się jej porównać z sieciówką — to są dwa różne produkty. Jeśli nadal w to nie wierzysz wejdź na mój profil @sikorski.bartlomiej na Instagram, wejdź w sekcję REZULTATY i zobacz wyniki moich klientów z całej Polski.",
  },
  {
    question: "\"Mój lokal jest za mały, moje miasto za małe.\"",
    answer:
      "Źeby Twoje studio było rentowne. Potrzebujesz obłożyć 1 trenera, który zarabia na początku tysiąc, dwa, w końcu 10 (kiedy studio już prosperuje) 5 klientami do 15, trudniej znaleźć lokal, w którym czynsz to 500 zł, ale większości osób udaje się znaleźć lokal za 1500-5000 zł miesięcznie.",
  },

  {
    question: "\"Nie stać mnie — boję się zaryzykować.\"",
    answer:
      "Ile kosztuje Cię pozostanie na obecnym poziomie, jeśli jako trener masz sufit swoich godzin i zarobków? Jeśli za 3–6 miesięcy możesz mieć studio, które generuje 20–50 tys. zł miesięcznie, to większym kosztem może być właśnie brak podjęcia decyzji — pieniądze, których nigdy nie zarobisz.",
  },

  {
    question: "\"Poczekam do przyszłego roku.\"",
    answer:
      "Możesz poczekać — tylko warto odpowiedzieć sobie, co dokładnie ma się wydarzyć przez ten rok. Jeśli masz konkretny powód, np. chcesz odłożyć określoną kwotę albo zdobyć doświadczenie, to ma sens. Ale jeśli odkładasz decyzję tylko dlatego, że teraz nie czujesz się gotowy, za rok możesz być dokładnie w tym samym miejscu. Czas i tak minie. Pytanie brzmi, czy wykorzystasz ten czas na przygotowanie się do otwarcia studia, czy po prostu będziesz odkładał decyzję.",
  },

  {
    question: "\"Skąd wezmę pierwszych klientów, skoro nie mam dużej bazy kontaktów?\"",
    answer:
      "Nie potrzebujesz dużej bazy znajomych, żeby zacząć. Na start zakładamy budżet około 2–3 tys. zł na reklamy, a później maksymalnie około 7 tys. zł rocznie na pozyskiwanie klientów. Dzięki naszym skryptom i procesowi konsultacji uczysz się przeprowadzać rozmowę tak, żeby nie sprzedawać pojedynczych treningów, tylko konkretne programy transformacyjne o wartości 5–12 tys. zł, których skuteczność sprzedaży to średnio ponad 60%.",
  },

  {
    question: "\"Czy muszę mieć tysiące obserwujących na Instagramie, żeby to zadziałało?\"",
    answer:
      "Możesz mieć niewielkie konto i dobrze działające studio, jeśli trafiasz do właściwych osób i potrafisz zamienić zainteresowanie w klientów. Dlatego nie skupiamy się na robieniu z Ciebie influencera. Skupiamy się na tym, żeby Twoje działania marketingowe faktycznie prowadziły do rozmów, konsultacji i sprzedaży.",
  },

  {
    question: "\"Jak sprzedawać drogie pakiety, skoro nienawidzę wciskać usług?\"",
    answer:
      "I nie powinieneś niczego wciskać. Dobra sprzedaż nie polega na przekonywaniu klienta za wszelką cenę. Najpierw musisz zrozumieć, z czym klient przychodzi, czego próbował wcześniej i czego naprawdę potrzebuje. Dopiero wtedy możesz powiedzieć, czy jesteś w stanie mu pomóc i jak wygląda współpraca. Dlatego dostajesz konkretny schemat konsultacji i pytania, które pomagają Ci przeprowadzić taką rozmowę. Twoją rolą nie jest przekonać każdego. Twoją rolą jest dobrze zdiagnozować problem i zaproponować rozwiązanie, jeśli rzeczywiście możesz pomóc.",
  },

  // FINANSE I KWESTIE TECHNICZNE
  {
    question: "\"Jaki jest absolutnie minimalny kapitał potrzebny do wystartowania?\"",
    answer:
      "Przykładowo, przy lokalu o powierzchni 45 m² i czynszu około 5 tys. zł netto miesięcznie model może pomieścić około 45–50 aktywnych klientów, generując przy tym około 77–92 tys. zł miesięcznego przychodu. To pokazuje, że o rentowności nie decyduje wielkość lokalu, tylko to, jak dobrze wykorzystujesz jego przepustowość, ceny i model 1:1 oraz semi.",
  },

  {
    question: "\"Czy muszę od razu kupować drogi, specjalistyczny sprzęt?\"",
    answer:
      "Nie. Tak naprawdę sprzęt wcale nie musi być drogi, żeby dobrze spełniał swoją funkcję. Solidne, podstawowe wyposażenie może służyć Ci przez wiele lat i wytrzymać tysiące treningów. Kluczowe jest nie to, ile kosztuje sprzęt, tylko czy pozwala Ci skutecznie prowadzić trening i osiągać z klientem jego cel. Klient nie płaci Ci za drogą maszynę — płaci za Twoją wiedzę, prowadzenie i transformację, którą dzięki Tobie osiąga.",
  },

  {
    question: "\"Czy muszę od razu zakładać spółkę? Co z umowami i regulaminami?\"",
    answer:
      "Dostajesz gotowe wzory dokumentów i procedur, które pokazują Ci, czego potrzebujesz i jak to poukładać. Nie musisz zaczynać od wymyślania wszystkiego samemu.",
  },

  // BRAK WIARY W RYNEK / SIEBIE
  {
    question: "\"Dlaczego ktoś miałby przyjść do mnie, skoro obok jest wielka sieciówka za 100 zł?\"",
    answer:
      "Twój klient szuka czegoś innego — indywidualnej uwagi, prowadzenia, odpowiedzialności trenera i konkretnego rezultatu. Musisz dotrzeć do osoby, która chce rozwiązania swojego problemu i jest gotowa za nie zapłacić.",
  },

  {
    question: "\"Nie mam dużego doświadczenia jako trener. Czy klienci mi zaufają?\"",
    answer:
      "Jeśli chcesz sam prowadzić treningi, oczywiście możesz to robić z pasji. Za prowadzenie treningów odpowiadać będzie zatrudniony przez Ciebie trener. Ja Cię uczę, jak znaleźć i wdrożyć trenera z kwalifikacjami, aż po organizację pracy studia.",
  },

  {
    question: "\"Co w sytuacji, gdy otworzę studio, a po miesiącu nikt nie kupi u mnie pakietu?\"",
    answer:
      "Jeśli uruchomisz reklamy, zastosujesz się do procesu i będziesz konsekwentnie wykonywać kolejne kroki, nie ma szans, że zostaniesz bez klientów. Kluczowe jest to, co dzieje się później: jak odpowiadasz na zapytania, jak prowadzisz konsultację i jak przedstawiasz ofertę. W programie dostajesz gotowy proces pozyskiwania i konwersji klientów, który został wcześniej sprawdzony w innych studiach. Twoim zadaniem jest go wdrożyć i konsekwentnie wykonywać.",
  },

  // CZAS I ORGANIZACJA PRACY
  {
    question: "\"Czy nie skończę pracując od 6:00 do 22:00 bez przerw?\"",
    answer:
      "Możesz, jeśli zbudujesz studio tak, że cały przychód będzie zależał od liczby godzin, które sam przepracujesz. I właśnie tego modelu chcemy uniknąć. Uczymy Cię, jak pracować na wyższej wartości pojedynczego klienta, układać grafik, wykorzystywać treningi semi-personalne i z czasem przekazywać część pracy innym trenerom. Chodzi o to, żeby zwiększać przychód nie tylko przez dokładanie kolejnych godzin do swojego grafiku.",
  },

  {
    question: "\"Co się stanie z moim dochodem, jeśli zachoruję albo pojadę na urlop?\"",
    answer:
      "Na początku Twoja obecność może mieć wpływ na przychód, szczególnie jeśli sam prowadzisz treningi. Ale to nie jest model docelowy. Celem jest zbudowanie studia, które działa dzięki zespołowi i systemom, a nie wyłącznie dzięki Twojej obecności na sali. Z czasem powinieneś móc całkowicie wyjść z prowadzenia treningów, skupić się na zarządzaniu i rozwoju biznesu, a następnie wykorzystać ten sam model do otwierania kolejnych placówek.",
  },

  {
    question: "\"Ile godzin w tygodniu muszę poświęcić na papierologię i zarządzanie?\"",
    answer:
      "Na początku poświęcisz 5 godzin tygodniowo na poukładanie systemu — tego nie da się całkowicie ominąć. Później większość powtarzalnych rzeczy możesz oprzeć na gotowych szablonach, zespole i procedurach.",
  },
];

export function BookingObjectionsSection() {
  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        FAQ
      </p>
      <h2 className="mx-auto mt-5 max-w-[26ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Typowe{" "}
        <span className="text-coral">Pytania</span>
      </h2>
      <p className="mx-auto mt-5 max-w-[48ch] text-center text-body-lg text-ink-muted">
        Chciałbym żebyś na rozmowę przyszedł z lepszymi pytaniami. Dlatego na te typowe odpowiadam tutaj.
      </p>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {OBJECTIONS.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-body-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1">{item.question}</span>
              <span
                aria-hidden
                className="mt-1 shrink-0 text-xl font-bold leading-none text-coral transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 pr-8 text-body leading-[1.7] text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
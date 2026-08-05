import { Section } from "@/components/ui/section";

interface Objection {
  question: string;
  answer: string;
}

// Mapped to Fladlien's seven categories: Belief, Ability, Trust, Fear,
// Conflict, Confusion, Timing.
const OBJECTIONS: Objection[] = [
  {
    question: "\"Próbowałem już czegoś podobnego i nie zadziałało.\"",
    answer:
      "Masz prawo być sceptyczny — powinieneś być. Ale prawdopodobnie próbowałeś ułożyć jeden element układanki, myśląc, że rozwiąże całość: same reklamy, samo podniesienie cen, sam nowy sprzęt. Różnica polega na tym, że wcześniej robiłeś to sam. Tym razem masz mapę, którą ktoś już przeszedł, i całą układankę, a nie jeden klocek.",
  },
  {
    question: "\"To brzmi jak kolejny kurs, po którym zostanę sam z nagraniami.\"",
    answer:
      "Słyszę to regularnie i rozumiem, bo rynek jest pełen takich kursów. Dlatego powiem jasno: tu nie chodzi o nagrania. Chodzi o to, że w każdą środę i czwartek jestem na żywo po dwie godziny, a od poniedziałku do piątku odpisuję na Telegramie. Kurs nie odpisuje na Telegramie w czwartek o dwudziestej.",
  },
  {
    question: "\"Nie jestem osobą biznesową, nie znam się na CRM-ach i tabelkach.\"",
    answer:
      "Nikt się taki nie rodzi. Uczysz się tego dokładnie tak, jak nauczyłeś się robić dobry przysiad — powtarzalnością i procedurą, nie talentem. I właśnie dlatego dostajesz gotowe pliki: nie musisz projektować systemu, masz go wdrożyć raz, otwierając dokument i podmieniając nazwę studia na swoją.",
  },
  {
    question: "\"Mam etat. Kiedy właściwie mam na to czas?\"",
    answer:
      "Środy i czwartki po dwie godziny plus wdrożenie — realnie ok. 2–3 godzin tygodniowo. To nie jest program, który wymaga, żebyś jutro złożył wypowiedzenie. Sam tak zaczynałem i pokazuję dokładnie, jak wygląda pierwszy tydzień, kiedy masz jeszcze pracę.",
  },
  {
    question: "\"Boję się, że otworzę studio i zajadę się jeszcze bardziej.\"",
    answer:
      "To realne ryzyko — jeśli otworzysz studio bez systemu. Cały ten program istnieje po to, żebyś nie zbudował sobie kolejnego, droższego etatu. Dlatego Moduł Operacyjny i Moduł Zespołu masz od pierwszego dnia, a nie na końcu. Najpierw inwestujesz czas w system, później system oddaje Ci czas.",
  },
  {
    question: "\"Wyszkolę trenera, a on odejdzie z moimi klientami.\"",
    answer:
      "U mnie to się zdarzyło, niejednokrotnie. Nauczyłem się dwóch rzeczy. Pierwsza: dzieje się to prawie zawsze nieumiejętnie i nie jest realnym zagrożeniem, jeśli masz poukładany system, a nie tylko relację. Druga, ważniejsza: jeśli ktoś w zespole przejawia przedsiębiorczość, sam proponuję mu otwarcie lokalizacji ze mną. Zamiast bać się konkurencji, robię z niej partnera. W Vaulcie Zespołu jest też procedura zabezpieczenia klientów i danych.",
  },
  {
    question: "\"Oddanie klientów zespołowi to zdrada tego, kim jestem jako trener.\"",
    answer:
      "To nie jest wcale zdrada! To moment, w którym przestajesz być rzemieślnikiem, a stajesz się architektem. Odcięcie się od operacji sugeruje, że tracisz kontrolę — jest odwrotnie: skupiasz się na tym co najważniejsze. W tym modelu Ty decydujesz, gdzie jesteś potrzebny, zamiast być potrzebny wszędzie naraz.",
  },
  {
    question: "\"U mnie, w moim mieście, nikt nie zapłaci kilku tysięcy za pakiet.\"",
    answer:
      "Sam tak myślałem, kiedy brałem sto złotych za godzinę. Ale klient nie porównuje Cię do siłowni za sto pięćdziesiąt miesięcznie, bo nie sprzedajesz mu tego samego produktu — sprzedajesz rozwiązanie problemu, z którym siłownia nie ma nic wspólnego. A jeśli nadal Ci się to nie mieści w głowie, właśnie po to jest skrypt: nie musisz w to wierzyć, masz to po prostu wypowiedzieć i zobaczyć, co się stanie.",
  },
  {
    question: "\"Mój lokal jest za mały, moje miasto za małe.\"",
    answer:
      "Złe pytanie brzmi „czy moje miasto jest wystarczająco duże”. Dobre pytanie brzmi: „czy mój model potrzebuje zbyt wielu klientów, żeby się spiąć?”. Jeśli Twój model wymaga trzystu aktywnych osób — masz problem. Jeśli potrzebujesz kilkudziesięciu dobrze prowadzonych klientów, którzy płacą za program i przechodzą do semi-personalu, małe miasto przestaje być wymówką.",
  },
  {
    question: "\"Muszę porozmawiać z partnerem / z rodziną.\"",
    answer:
      "To zdrowe i nie będę Cię od tego odwodził. Powiem tylko jedno: idź do tej rozmowy z liczbami, nie z emocjami. Ile kosztuje wejście, ile realnie zarabia jeden klient w perspektywie dwóch lat, po ilu miesiącach to się spina. Ta rozmowa wygląda zupełnie inaczej, kiedy masz kartkę z liczbami, niż kiedy mówisz „znalazłem taki program w internecie”.",
  },
  {
    question: "\"Nie stać mnie.\"",
    answer:
      "To poważna inwestycja dla poważnej osoby i nie będę udawał, że jest inaczej. Powiem wprost: bardzo często „nie stać mnie” znaczy w rzeczywistości „boję się, że to nie zadziała, i wtedy strata pieniędzy będzie dowodem mojej porażki”. To uczciwsze pytanie i lepiej zadać je sobie wprost. Jeśli chodzi o sam budżet — dlatego rozmawiamy o ratach indywidualnie, nie ma jednego schematu dla wszystkich.",
  },
  {
    question: "\"Poczekam do przyszłego roku.\"",
    answer:
      "Te sześć miesięcy miną, czy zaczniesz dziś, czy za rok. Jedyne pytanie brzmi, czy za pół roku będziesz miał działający model, czy będziesz dokładnie tam, gdzie jesteś teraz, tylko starszy o pół roku. Rok bez systemu to nie jest rok bez kosztu — to rok kosztu, którego nie widzisz na wyciągu bankowym, tylko w wypaleniu i w grafiku, który i tak ma sufit.",
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
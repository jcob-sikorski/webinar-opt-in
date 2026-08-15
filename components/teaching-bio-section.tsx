"use client";

import { RegisterCtaButton } from "@/components/register-cta-button";
import { Section } from "@/components/ui/section";

interface Persona {
  number: string;
  title: string;
  content: React.ReactNode;
}

const PERSONAS: Persona[] = [
  {
    number: "01",
    title: "Jesteś trenerem z pełnym grafikiem",
    content: (
      <>
        Pracujesz od rana do wieczora. Klienci przychodzą, płacą, wracają — ale
        Twój grafik nie ma już miejsca na kolejną osobę.{" "}
        <em className="italic text-[#ef6b4a]">Urlop kosztuje Cię pieniądze, nie tylko czas.</em>{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz w końcu przestać być jedynym trybikiem własnego biznesu.
        </strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Jesteś właścicielem studio i stoisz na sali",
    content: (
      <>
        <strong className="font-bold text-gray-900">
          Prowadzisz większość treningów, Ty odpisujesz na wiadomości, Ty
          zamykasz każdą sprzedaż.
        </strong>{" "}
        Kiedy wyjeżdżasz, <em className="italic text-[#ef6b4a]">przychód leci w dół</em>.
        Marża jest cienka, a trenerzy robią wszystko po swojemu.{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz w końcu wyjść z sali i poukładać model, zanim pomyślisz o
          kolejnej placówce.
        </strong>
      </>
    ),
  },
];

// Zmieniony wygląd karty - teraz wygląda jak moduł premium
function PersonaCard({ number, title, content }: Persona) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
      <div className="mb-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef6b4a]/10 text-xl font-black text-[#ef6b4a]">
          {number}
        </span>
        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {title}
        </h3>
      </div>
      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
        {content}
      </p>
    </article>
  );
}

export function IsThisForYouSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      {/* Nagłówek */}
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        Ten warsztat jest <span className="text-[#ef6b4a]">dla Ciebie</span>, jeśli...
      </h2>

      {/* Grid z personami */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
        {PERSONAS.map((persona) => (
          <PersonaCard key={persona.number} {...persona} />
        ))}
      </div>

      {/* Zgrupowane podsumowanie w wyróżnionej ramce */}
      <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center">
        <div className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed] p-6 shadow-sm sm:p-8">
          <p className="mx-auto max-w-prose text-lg font-extrabold italic leading-snug text-gray-900 sm:text-2xl">
            To może być najważniejsza godzina w Twoim kalendarzu.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            <strong className="font-bold text-gray-900">
              Studio samo w sobie nie rozwiązuje problemów, jakie masz obecnie. 
              Ono je tylko powiększa, jeśli wejdziesz w to bez gotowego systemu.
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex w-full flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Zajmij slot bezpłatnie
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function TeachingBioSection() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf9] px-5 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Nagłówek główny w kolorach brandu */}
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold uppercase tracking-widest text-ink sm:mb-24 sm:text-5xl">
          Kim Jestem?
        </h2>

        {/* --- BLOK 1: Tekst po lewej, Zdjęcia po prawej --- */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Tekst - Lewa strona */}
          <div className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
            <h3 className="mb-6 text-xl font-bold leading-snug text-[#ef6b4a] sm:text-2xl">
              Zanim zbudowałem biznes z 4 studiami,<br />
              musiałem zbankrutować. Dwa razy.
            </h3>

            <p className="mb-6 font-bold text-gray-900">
              Poświęciłem lata, by zrozumieć jedno:<br />
              Dlaczego moja pasja i bycie cholernie dobrym trenerem nie miały żadnego znaczenia, a ja ciągle wracałem do punktu wyjścia?
            </p>

            <p className="mb-6">
              Mój brak solidnych fundamentów i zderzenie ze ścianą sprawiły, że:
            </p>

            <ol className="mb-6 list-decimal space-y-2 pl-5 font-bold text-gray-900">
              <li>
                W 2016 r. zaliczyłem pierwsze bankructwo i pracowałem za 11 zł/h.
              </li>
              <li>
                Gdy uderzył COVID, straciłem wszystko po raz drugi i trafiłem na magazyn DHL-u, pakując paczki po 10 godzin dziennie.
              </li>
              <li>
                W nocy reanimowałem biznes online, czując, że zawiodłem jako facet.
              </li>
              <li>
                Czułem się jak świetny rzemieślnik, któremu ktoś zabrał wszystkie narzędzia i zamknął warsztat.
              </li>
            </ol>

            <p className="font-bold text-gray-900">
              I każdego dnia, nawet gdy zacząłem zarabiać 15k miesięcznie, czułem się jak "ZOMBIE" — niewolnik we własnej, złotej klatce.
            </p>
          </div>

          {/* Kolaż Zdjęć - Prawa strona */}
          <div className="relative mt-8 h-[22rem] w-full max-w-md shrink-0 sm:h-[28rem] lg:mt-0 lg:w-1/2">
            {/* Zdjęcie 1 - tył lewo */}
            <img
              src="https://ucarecdn.com/42f57602-1700-4199-a61c-1deda3aab974/IMG_9119.PNG"
              alt="Historia"
              className="absolute left-0 top-4 z-10 w-3/5 -rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            {/* Zdjęcie 2 - środek (na wierzchu) */}
            <img
              src="https://ucarecdn.com/ad26fef9-43dd-4808-a347-62d79b0bc105/IMG_6812.jpg"
              alt="Historia 2"
              className="absolute left-[20%] top-0 z-30 w-3/5 rotate-2 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            {/* Zdjęcie 3 - tył prawo */}
            <img
              src="https://ucarecdn.com/b1521761-d1ce-4a93-ba76-a411434ea846/IMG_7615.PNG"
              alt="Historia 3"
              className="absolute right-0 top-8 z-20 w-3/5 rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
          </div>
        </div>

        {/* --- Sekcja CTA na dole TeachingBioSection --- */}
        <div className="mt-16 flex w-full flex-col items-center sm:mt-24">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Tak, chcę się zapisać
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali.
          </p>
        </div>

        {/* --- BLOK 2: Zdjęcia po lewej, Tekst po prawej --- */}
        <div className="mt-20 flex flex-col-reverse items-center gap-12 lg:mt-32 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Kolaż Zdjęć - Lewa strona */}
          <div className="relative mt-8 h-[20rem] w-full max-w-md shrink-0 sm:h-[26rem] lg:mt-0 lg:w-1/2">
            {/* Zdjęcie 4 - tył lewo */}
            <img
              src="https://ucarecdn.com/8468d36c-9fed-42ef-89b0-73c5f2a8ee28/IMG_6908.jpeg"
              alt="Budowa studia"
              className="absolute left-4 top-8 z-10 w-3/5 -rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            {/* Zdjęcie 5 - przód prawo */}
            <img
              src="https://ucarecdn.com/93cd06ce-4786-4952-8f94-be394dae6d0f/Screenshot20260804at92101PM.png"
              alt="Budowa studia 2"
              className="absolute right-4 top-0 z-20 w-3/5 rotate-3 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
          </div>

          {/* Tekst - Prawa strona */}
          <div className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p className="mb-6">
              Wiedziałem, że jeśli czegoś fundamentalnie nie zmienię w swoim myśleniu, zawsze będę o krok od kolejnej katastrofy. Aż przyszedł moment "AHA!".
            </p>

            <p className="mb-6 font-bold text-gray-900">
              Dopiero odkrycie, że zostanę ojcem, podniosło mnie z dna. <span className="font-normal text-gray-700">Koniec wymówek. Koniec czekania na "idealny moment". Wyrzuciłem plany B i C. Zrozumiałem, że muszę przestać być "najlepszym trenerem w mieście", a zacząć być jej prawdziwym WŁAŚCICIELEM.</span>
            </p>

            <p className="mb-6">
              Przestałem wierzyć w bzdury "guru od marketingu", którzy wmawiają, że wystarczy odpalić magiczną kampanię. Zrozumiałem, że to zaledwie 5% sukcesu, a stół chwieje się bez trzech pozostałych nóg: <strong className="text-gray-900">twardych SYSTEMÓW, skutecznego ZARZĄDZANIA i świetnego ZESPOŁU.</strong>
            </p>

            <p className="mb-6 font-bold text-[#ef6b4a]">
              W 2023 i 2024 r. zainwestowałem ponad 250 tys. zł w wiedzę.{" "}
              <span className="font-normal text-gray-700">
                Jak być przedsiębiorcą high-performance, jak sprzedawać pakiety na lata. Zmieniłem myślenie z Rzemieślnika na Architekta. Rzemieślnik wymienia czas na pieniądze, Architekt projektuje powtarzalny system.
              </span>
            </p>

            <p className="font-bold text-[#ef6b4a]">
              Okazało się, że mogę więcej niż kiedykolwiek przypuszczałem.<br />
              A system może pracować i dowozić jakość, nawet gdy ja śpię.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
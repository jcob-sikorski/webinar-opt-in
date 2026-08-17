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
        Pracujesz od świtu do nocy. Klienci płacą i wracają, ale Twój grafik pęka
        w szwach i nie wciśniesz już ani jednej osoby.{" "}
        <em className="italic text-[#ef6b4a]">Każdy dzień wolnego oznacza brak wypłaty.</em>{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz w końcu przestać być jedynym silnikiem, który napędza ten biznes.
        </strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Masz już studio, ale wciąż nie schodzisz z sali",
    content: (
      <>
        <strong className="font-bold text-gray-900">
          Prowadzisz większość treningów, sam odpisujesz na wiadomości i sam zamykasz każdą sprzedaż.
        </strong>{" "}
        Wystarczy, że wyjedziesz na weekend, a <em className="italic text-[#ef6b4a]">przychody od razu spadają</em>.
        Marża topnieje, a zatrudnieni trenerzy robią wszystko po swojemu.{" "}
        <strong className="mt-2 block font-bold text-gray-900">
          Chcesz wreszcie poukładać studio w sprawnie działający system, zanim pomyślisz o kolejnej lokalizacji.
        </strong>
      </>
    ),
  },
];

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
        To spotkanie jest <span className="text-[#ef6b4a]">dla Ciebie</span>, jeśli...
      </h2>

      {/* Grid z personami */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
        {PERSONAS.map((persona) => (
          <PersonaCard key={persona.number} {...persona} />
        ))}
      </div>

      {/* Podsumowanie */}
      <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center">
        <div className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed] p-6 shadow-sm sm:p-8">
          <p className="mx-auto max-w-prose text-lg font-extrabold italic leading-snug text-gray-900 sm:text-2xl">
            To może być najlepiej zainwestowana godzina w Twoim roku.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            <strong className="font-bold text-gray-900">
              Otwarcie studia nie rozwiąże Twoich problemów z brakiem czasu. 
              Tylko je spotęguje — chyba że od pierwszego dnia oprzesz je na powtarzalnym systemie.
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex w-full flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Zapisz się bezpłatnie
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Bezpłatny warsztat na żywo: jak zbudować studio, które zarabia bez Twojej ciągłej obecności.
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
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold uppercase tracking-widest text-ink sm:mb-24 sm:text-5xl">
          Kim jestem?
        </h2>

        {/* BLOK 1 */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
            <h3 className="mb-6 text-xl font-bold leading-snug text-[#ef6b4a] sm:text-2xl">
              Zanim zbudowałem sieć 4 rentownych studiów treningowych,<br />
              musiałem zbankrutować. Dwa razy.
            </h3>

            <p className="mb-6 font-bold text-gray-900">
              Lata zajęło mi zrozumienie bolesnej prawdy:<br />
              Sama pasja i bycie świetnym trenerem nie wystarczą, by zbudować stabilny biznes.
            </p>

            <p className="mb-6">
              Brak poukładanych procesów i zderzenie z rzeczywistością kosztowały mnie bardzo dużo:
            </p>

            <ol className="mb-6 list-decimal space-y-3 pl-5 font-medium text-gray-900">
              <li>
                <strong>2016 rok:</strong> pierwsze bankructwo i praca na etacie za 11 zł za godzinę.
              </li>
              <li>
                <strong>Lockdown podczas pandemii:</strong> tracę wszystko po raz drugi i ląduję na magazynie kurierskim, pakując paczki po 10 godzin dziennie.
              </li>
              <li>
                <strong>Po nocach:</strong> próby ratowania biznesu online z poczuciem, że całkowicie zawiodłem najbliższych.
              </li>
              <li>
                Czułem się jak wybitny rzemieślnik, któremu ktoś zamknął warsztat i zabrał narzędzia do pracy.
              </li>
            </ol>

            <p className="font-bold text-gray-900">
              Nawet gdy dochody w końcu wzrosły do kilkunastu tysięcy miesięcznie, byłem wycieńczony — stałem się niewolnikiem we własnej, złotej klatce.
            </p>
          </div>

          {/* Kolaż Zdjęć 1 */}
          <div className="relative mt-8 h-[22rem] w-full max-w-md shrink-0 sm:h-[28rem] lg:mt-0 lg:w-1/2">
            <img
              src="https://ucarecdn.com/42f57602-1700-4199-a61c-1deda3aab974/IMG_9119.PNG"
              alt="Początki drogi"
              className="absolute left-0 top-4 z-10 w-3/5 -rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            <img
              src="https://ucarecdn.com/ad26fef9-43dd-4808-a347-62d79b0bc105/IMG_6812.jpg"
              alt="Bartłomiej Sikorski na sali"
              className="absolute left-[20%] top-0 z-30 w-3/5 rotate-2 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            <img
              src="https://ucarecdn.com/b1521761-d1ce-4a93-ba76-a411434ea846/IMG_7615.PNG"
              alt="Historia rozwoju"
              className="absolute right-0 top-8 z-20 w-3/5 rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
          </div>
        </div>

        {/* Środkowe CTA */}
        <div className="mt-16 flex w-full flex-col items-center sm:mt-24">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
          >
            Dołączam do warsztatu
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
            Bezpłatny warsztat na żywo: jak poukładać studio, by pracowało na Ciebie.
          </p>
        </div>

        {/* BLOK 2 */}
        <div className="mt-20 flex flex-col-reverse items-center gap-12 lg:mt-32 lg:flex-row lg:items-start lg:gap-20">
          {/* Kolaż Zdjęć 2 */}
          <div className="relative mt-8 h-[20rem] w-full max-w-md shrink-0 sm:h-[26rem] lg:mt-0 lg:w-1/2">
            <img
              src="https://ucarecdn.com/8468d36c-9fed-42ef-89b0-73c5f2a8ee28/IMG_6908.jpeg"
              alt="Budowa studia treningowego"
              className="absolute left-4 top-8 z-10 w-3/5 -rotate-6 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
            <img
              src="https://ucarecdn.com/93cd06ce-4786-4952-8f94-be394dae6d0f/Screenshot20260804at92101PM.png"
              alt="Wyniki i rozwój sieci"
              className="absolute right-4 top-0 z-20 w-3/5 rotate-3 border-[6px] border-white object-cover shadow-xl aspect-[3/4]"
            />
          </div>

          {/* Tekst prawy */}
          <div className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p className="mb-6">
              Wiedziałem, że jeśli natychmiast nie zmienię sposobu myślenia, każda kolejna przeszkoda znów mnie zmiecie.
            </p>

            <p className="mb-6 font-bold text-gray-900">
              Przełom przyszedł, gdy dowiedziałem się, że zostanę ojcem.{" "}
              <span className="font-normal text-gray-700">
                Skończyły się wymówki i czekanie na lepszy moment. Przestałem chcieć być „najbardziej zapracowanym trenerem w mieście”, a zacząłem uczyć się, jak być prawdziwym przedsiębiorcą i liderem.
              </span>
            </p>

            <p className="mb-6">
              Odrzuciłem obietnice internetowych doradców o „magicznych kampaniach reklamowych”. Zrozumiałem, że sam marketing to zaledwie wierzchołek góry lodowej — bez <strong className="text-gray-900">powtarzalnych procesów, zgranego zespołu i przejrzystego zarządzania</strong> studio prędzej czy później utonie.
            </p>

            <p className="mb-6 font-bold text-[#ef6b4a]">
              Zainwestowałem ponad 250 tys. zł w mentoring i praktyczną wiedzę biznesową.{" "}
              <span className="font-normal text-gray-700">
                Przestawiłem myślenie z roli rzemieślnika na rolę architekta. Rzemieślnik wymienia swój czas na każdą złotówkę — architekt projektuje mechanizm, który działa i generuje zysk bez jego nieustannej kontroli.
              </span>
            </p>

            <p className="font-bold text-[#ef6b4a]">
              Dziś ten system dba o jakość treningów i wyniki finansowe codziennie — nawet wtedy, gdy odpoczywam z rodziną.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
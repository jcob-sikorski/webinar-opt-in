"use client";

import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useRegisterModal } from "@/components/register-modal-provider";

interface QuestionItem {
  title: string;
  description: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    title: "Model biznesowy",
    description:
      "Czy nadal sprzedajesz pojedyncze wejścia lub krótkie karnety bez spójnego systemu, który zatrzymuje klienta w studio na lata?",
  },
  {
    title: "Marketing",
    description:
      "Czy brakuje Ci przewidywalnego systemu, który przynosi klientów niezależnie od nastroju czy sezonu, a potencjalne leady giną w chaosie wiadomości?",
  },
  {
    title: "Zespół",
    description:
      "Czy Twoja rekrutacja to przypadek? Trenerzy szybko odchodzą, a Ty zostajesz jedyną osobą, która musi pilnować standardów na sali?",
  },
  {
    title: "Finanse",
    description:
      "Czy brakuje Ci przejrzystości w firmowych liczbach i nie wiesz dokładnie, ile możesz bezpiecznie zainwestować, a ile wypłacić dla siebie?",
  },
  {
    title: "Zarządzanie",
    description:
      "Czy Twój biznes jest zbudowany tak, że Twój własny urlop oznacza stratę, bo bez Twojej ciągłej obecności studio po prostu przestaje działać?",
  },
];

const PATRYK_TESTIMONIAL = {
  name: "Patryk Grzemski",
  figure: "84 000 zł / msc.",
  photo: (
    <img
      src="https://ucarecdn.com/81f5306f-f2a9-4960-aa9d-bc3e2e26ecd2/Screenshot20260803at11909AM.png"
      alt="Patryk Grzemski"
      className="aspect-[3/4] w-full rounded-md object-cover shadow-sm"
    />
  ),
  description:
    "„Dzięki temu mam własne studio, ogarnięty team trenerski oraz to, co najważniejsze — znacznie więcej czasu dla siebie. Zamieniłem pracę na biznes z głową i ciągłym rozwojem, który pozwala mi pracować mniej, a zarabiać więcej.”",
};

export function WebinarFailuresSection() {
  const { openRegister } = useRegisterModal();

  return (
    <Section>
      <h2 className="mx-auto max-w-4xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
        Czy ten warsztat jest <span className="text-[#ef6b4a]">dla Ciebie?</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink-muted sm:text-lg">
        Przeanalizowałem dziesiątki studiów treningowych w Polsce. Wniosek? Prawie każdy boryka się z tymi samymi problemami. <br className="hidden sm:block" />
        <strong className="mt-2 block font-semibold text-ink">
          Odpowiedz szczerze na te 5 pytań i sprawdź, czy to również Twój przypadek:
        </strong>
      </p>

      <ul className="mx-auto mt-10 max-w-3xl divide-y divide-line">
        {QUESTIONS.map((q) => (
          <CheckItem key={q.title} className="py-6 sm:py-8">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              <strong className="font-bold text-ink">
                {q.title}:
              </strong>{" "}
              {q.description}
            </p>
          </CheckItem>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-[#d6d6d6] bg-[#f4f3ed] p-6 text-center shadow-sm sm:p-8">
        <p className="text-lg font-bold italic leading-snug text-ink sm:text-xl">
          Jeżeli na chociaż jedno z powyższych pytań w Twojej głowie pojawiło się „TAK”, to z tego warsztatu wyjdziesz z <span className="text-[#ef6b4a]">gotowym modelem A-Z</span>, który to naprawi.
        </p>
      </div>

      <div className="mt-12 flex w-full flex-col items-center">
        <Button
          size="lg"
          onClick={openRegister}
          className="inline-flex w-full max-w-md items-center justify-center rounded-md border border-green-600 bg-green-600 px-8 py-5 text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 sm:text-2xl"
        >
          TAK, CHCĘ SIĘ ZAPISAĆ
        </Button>
      </div>

      {/* TESTIMONIAL KARTA - PATRYK */}
      <div className="mx-auto mt-16 w-full max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8 text-left">
          <div className="w-32 shrink-0 sm:w-40">
            {PATRYK_TESTIMONIAL.photo}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base italic leading-relaxed text-gray-700 sm:text-lg">
              {PATRYK_TESTIMONIAL.description}
            </p>
            <div className="mt-6">
              <p className="text-lg font-bold text-gray-900">
                ~ {PATRYK_TESTIMONIAL.name}
              </p>
              <p className="mt-1.5 inline-block rounded-md bg-orange-100 px-3 py-1 text-sm font-bold tracking-wide text-orange-700">
                Wynik: {PATRYK_TESTIMONIAL.figure}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
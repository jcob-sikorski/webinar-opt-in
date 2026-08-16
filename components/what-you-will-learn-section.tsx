"use client";

import { useRegisterModal } from "@/components/register-modal-provider";

export function WhatYouWillLearnSection() {
  const { openRegister } = useRegisterModal();

  return (
    <section className="relative bg-white px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Główny, czerwony nagłówek wzorowany na screenie */}
        <h2 className="mx-auto max-w-4xl text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold italic leading-snug text-red-600">
          Jak wyglądałoby Twoje życie, gdybyś zaczął zarabiać między 20 a 50 tys. miesięcznie ze studia, pracując stabilnie i bez bycia na sali od świtu do nocy?
        </h2>

        <div className="mt-14 flex flex-col items-center gap-12 md:flex-row md:items-start lg:gap-20">
          {/* Lewa kolumna: Treść */}
          <div className="flex-1 text-left">
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
              <strong>Poznaj autorski model Kameralnego Studia</strong>, który sprawia, że studio zarabia stabilnie wtedy, gdy Ciebie nie ma na sali, a osiąganie zysków jest wynikiem systemu, a nie Twojej wiecznej orki.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong className="text-gray-900">Zamiast wiecznej walki o pojedyncze wejścia</strong>, wdrożysz sprzedaż wysokomarżowych transformacji, rozwiązujących problemy klientów, które zatrzymają ich w Twoim studio na lata.
                </p>
              </li>

              <li className="flex gap-4">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong className="text-gray-900">Zbudujesz lojalny i zgrany zespół trenerów</strong> pracujących rygorystycznie według Twojej metodyki, całkowicie eliminując chaotyczny model oparty na nieprzewidywalnych freelancerach.
                </p>
              </li>

              <li className="flex gap-4">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong className="text-gray-900">Zhakujesz lokalny rynek płatnymi i darmowymi kampaniami</strong>, zdejmując z siebie bycie "wąskim gardłem" i stając się prawdziwym przedsiębiorcą, strategiem oraz wizjonerem.
                </p>
              </li>

              <li className="flex gap-4">
                <svg
                  className="mt-1 h-6 w-6 shrink-0 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong className="text-gray-900">Wyrwiesz się z ciągłej rotacji klientów</strong> dzięki profesjonalnemu onboardingowi i budowaniu silnej społeczności opartej na relacjach, która automatycznie generuje polecenia.
                </p>
              </li>
            </ul>

            <p className="mt-8 text-lg italic leading-relaxed text-gray-700">
              ...i zobaczysz jak przejść z punktu, w którym studio nie działa tak jak chcesz, do przewidywalnej maszyny generującej stabilny cash flow.
            </p>

            <div className="mt-10 flex w-full justify-center md:justify-start">
              <button
                onClick={openRegister}
                className="inline-flex items-center justify-center rounded-full border border-green-600 bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700"
              >
                Tak, chcę się zapisać &rarr;
              </button>
            </div>
          </div>

          {/* Prawa kolumna: Zdjęcie z tagiem "NA ŻYWO" */}
          <div className="relative mt-8 w-full max-w-sm shrink-0 md:mt-0 lg:max-w-md">
            <div className="absolute -left-6 top-6 z-10 rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold tracking-wider text-white shadow-md sm:-left-8 sm:top-8 sm:text-base">
              MODEL A-Z
            </div>
            <img
              src="https://ucarecdn.com/70991b49-d72c-4fd1-b3f7-fb0881dc8304/IMG_9251.JPG"
              alt="Bartłomiej Sikorski"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
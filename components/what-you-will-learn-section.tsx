"use client";

import { useRegisterModal } from "@/components/register-modal-provider";

export function WhatYouWillLearnSection() {
  const { openRegister } = useRegisterModal();

  return (
    <section className="relative bg-white px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Główny nagłówek */}
        <h2 className="mx-auto max-w-4xl text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold italic leading-snug text-red-600">
          Co zmieniłoby się w Twoim życiu, gdyby Twoje studio przynosiło 20–50 tys. zł zysku miesięcznie — bez siedzenia na sali od 6:00 do 22:00?
        </h2>

        <div className="mt-14 flex flex-col items-center gap-12 md:flex-row md:items-start lg:gap-20">
          {/* Lewa kolumna: Treść */}
          <div className="flex-1 text-left">
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
              <strong>Poznaj model Kameralnego Studia</strong> — sprawdzony schemat, dzięki któremu biznes zarabia przewidywalnie, nawet gdy odpoczywasz, a dochód wynika z poukładanego systemu, a nie Twojej wiecznej orki.
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
                  <strong className="text-gray-900">Koniec z walką o pojedyncze wejścia.</strong> Wdrożysz wysokomarżowe programy metamorfoz, które realnie rozwiązują problemy podopiecznych i zatrzymują ich u Ciebie na lata.
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
                  <strong className="text-gray-900">Zgrany, samodzielny zespół.</strong> Zbudujesz ekipę trenerów prowadzących treningi według Twoich standardów, bez chaosu i wiecznego stresu o humorzastych freelancerów.
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
                  <strong className="text-gray-900">Stały dopływ klientów premium.</strong> Nauczysz się docierać do ludzi w Twoim mieście, którzy nie szukają najtańszego karnetu, tylko jakości i są gotowi dobrze za nią zapłacić.
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
                  <strong className="text-gray-900">Rola właściciela, a nie człowieka-orkiestry.</strong> Wdrożysz proste procedury, które pozwolą Ci zejść z grafiku, odzyskać wolne weekendy i skupić się na rozwoju studia.
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
                  <strong className="text-gray-900">Stop odpływowi podopiecznych.</strong> Dzięki dopracowanemu wdrożeniu i zżytej społeczności Twoi klienci zostaną z Tobą na stałe i sami zaczną polecać studio znajomym.
                </p>
              </li>
            </ul>

            <p className="mt-8 text-lg italic leading-relaxed text-gray-700">
              ...i przekonasz się, jak krok po kroku przekształcić studio z gaszenia pożarów w poukładany, przewidywalny biznes.
            </p>

            <div className="mt-10 flex w-full justify-center md:justify-start">
              <button
                onClick={openRegister}
                className="inline-flex items-center justify-center rounded-full border border-green-600 bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700"
              >
                Dołączam do szkolenia &rarr;
              </button>
            </div>
          </div>

          {/* Prawa kolumna */}
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
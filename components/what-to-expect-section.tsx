"use client";

const RULES = [
  "Odłóż telefon – to jest czas na pełne skupienie. Szanujmy się i szanujmy swój czas, bo czas pędzi do przodu.",
  "Zrób notatki – biznes to układanie puzzli. Pisanie pomoże Ci ułożyć je w całość i ułatwi wdrożenie wiedzy po warsztacie.",
  "Zacznij działać – wiedza, którą Ci przekażę, jest bezużyteczna, jeśli nie zaaplikujesz jej co do joty. Zmiana bez determinacji jest niemożliwa.",
];

export function WhatToExpectSection() {
  return (
    <section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        {/* Nagłówek sekcji */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
            Wprowadzenie
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-gray-900 text-balance sm:text-4xl md:text-5xl">
            Czego dokładnie <span className="text-[#ef6b4a]">się dowiesz</span>
          </h2>
        </div>

        {/* Płynny tekst zamiast kart */}
        <div className="mt-10 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            W ciągu tej jednej godziny rozkładam model butikowego studia na
            czynniki pierwsze i pokazuję Ci{" "}
            <strong className="font-semibold not-italic text-gray-900">
              sześć filarów
            </strong>
            , z których ten model się składa.
          </p>

          <p className="mt-6">
            Zaczynamy od tego,{" "}
            <strong className="font-semibold not-italic text-gray-900">
              dlaczego dwie pozornie najbezpieczniejsze drogi w tej branży
            </strong>{" "}
            — sieciowa franczyza i biznes online — tak naprawdę prowadzą na
            manowce i grają w zupełnie inną grę niż Ty. Potem pokazuję, jak od
            środka wygląda{" "}
            <strong className="font-semibold not-italic text-gray-900">
              model butikowego studia
            </strong>
            : czego naprawdę potrzebujesz w lokalu 40–150 m², a czego nie, i
            dlaczego mała, kameralna sala wygrywa z drogim, prestiżowym
            lokalem.
          </p>

          <p className="mt-6">
            Zobaczysz,{" "}
            <strong className="font-semibold not-italic text-gray-900">
              skąd biorą się klienci gotowi płacić stawki premium
            </strong>{" "}
            — awatar klienta, oferta transformacyjna zamiast pojedynczych
            wejściówek i mechanizm, dzięki któremu klient płaci za rezultat,
            a nie porównuje Cię ceną za godzinę. Dowiesz się też,{" "}
            <strong className="font-semibold not-italic text-gray-900">
              jak zbudować zespół, który przejmuje salę
            </strong>
            : jak rekrutować, wdrażać i utrzymać trenerów pracujących według
            Twojej metodyki, łącznie z tym, jak zabezpieczyć się przed
            odejściem trenera z Twoimi klientami.
          </p>

          <p className="mt-6">
            Rozłożymy też model na{" "}
            <strong className="font-semibold not-italic text-gray-900">
              liczby
            </strong>
            : ile realnie kosztuje start (35–100 tys. zł), jak liczyć LTV
            klienta i po ilu miesiącach studio zaczyna spłacać samo siebie. Przede
            wszystkim zobaczysz{" "}
            <strong className="font-semibold not-italic text-gray-900">
              cały proces krok po kroku
            </strong>
            — od znalezienia lokalu, przez pozyskanie pierwszych klientów, po
            wyjście z sali jako właściciel.
          </p>
        </div>
      </div>
    </section>
  );
}
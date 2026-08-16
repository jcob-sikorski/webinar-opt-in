"use client";

const PILLARS = [
  {
    number: "01",
    title: "Mit franczyzy i biznesu online",
    body: "Dlaczego dwie pozornie najbezpieczniejsze drogi w tej branży prowadzą na manowce i grają w zupełnie inną grę niż Ty.",
  },
  {
    number: "02",
    title: "Lokal 40–150 m² od środka",
    body: "Czego naprawdę potrzebujesz na sali, a co jest tylko przepalaniem budżetu — i dlaczego kameralna przestrzeń wygrywa z prestiżowym adresem.",
  },
  {
    number: "03",
    title: "Klienci w stawkach premium",
    body: "Jak stworzyć ofertę transformacyjną, dzięki której klient płaci za realny rezultat i przestaje porównywać Cię stawką za godzinę.",
  },
  {
    number: "04",
    title: "Zespół, który przejmuje salę",
    body: "Rekrutacja i wdrożenie trenerów pracujących według Twojej metodyki oraz procedury chroniące studio przed odejściem trenera z klientami.",
  },
  {
    number: "05",
    title: "Twarde liczby i rentowność",
    body: "Ile realnie kosztuje start (35–100 tys. zł), jak liczyć LTV klienta i po ilu miesiącach studio zaczyna spłacać samo siebie.",
  },
  {
    number: "06",
    title: "Proces A–Z i wyjście z sali",
    body: "Konkretna ścieżka: od wyboru lokalu i pierwszych kampanii, po przejście w rolę właściciela zarządzającego wskaźnikami.",
  },
];

const RULES = [
  "Odłóż telefon – to jest czas na pełne skupienie.",
  "Zrób notatki – pisanie pomoże Ci ułożyć system w całość.",
  "Zacznij działać – wiedza zadziała tylko wtedy, gdy wdrożysz ją krok po kroku.",
];

export function WhatToExpectSection() {
  return (
    <section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        {/* Nagłówek sekcji */}
        <div className="text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#ef6b4a]">
            Wprowadzenie
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Czego dokładnie <span className="text-[#ef6b4a]">się dowiesz</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-display text-lg italic leading-[1.7] text-gray-700 sm:text-xl">
            W ciągu tej jednej godziny rozkładam model kameralnego studia na czynniki pierwsze.
            Zero ogólników — przechodzimy przez 6 filarów, które decydują o rentowności.
          </p>
        </div>

        {/* 6 filarów w układzie listy modułowej */}
        <div className="mt-12 space-y-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex items-start gap-4 rounded-r-xl border-l-2 border-[#ef6b4a] bg-white/50 p-5 pl-6 shadow-sm backdrop-blur-sm sm:gap-6"
            >
              <span className="font-display text-2xl font-bold italic leading-none text-[#ef6b4a] sm:text-3xl">
                {pillar.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-gray-700">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
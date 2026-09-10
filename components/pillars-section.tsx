const PILLARS = [
  {
    number: "01",
    pillarLabel: "FILAR 1: Więcej pieniędzy z tego, co już masz",
    title: "Przestań zaczynać każdy miesiąc od zera",
    description:
      "Nie chodzi o to, żeby co miesiąc gonić za kolejnymi klientami. Chodzi o to, żeby ludzie, których już masz, zostawali z Tobą na długo, a każda godzina na sali zarabiała dużo więcej.",
    bullets: [
      "Jeden nieoczywisty model prowadzenia zajęć, który pozwala wyciągnąć 300–580 zł z jednej godziny na macie — bez odstraszania klientów 'zaporową' ceną.",
      "Jak uwolnić się od wiecznego wciskania pojedynczych pakietów i zabezpieczyć stały, przewidywalny przelew na konto studia pierwszego dnia każdego miesiąca.",
    ],
  },
  {
    number: "02",
    pillarLabel: "FILAR 2: Zejdź z sali bez rozwalenia biznesu",
    title: "Przekaż klientów trenerom i nie panikuj",
    description:
      "Jeżeli dzisiaj masz w głowie „moi klienci przychodzą tylko do mnie”, to właśnie dlatego jesteś uwiązany do sali. Pokażemy Ci, jak sprawić, żeby klient dostał dobrą opiekę również od Twojego trenera, a Ty nie musiał być obok przez 30 godzin tygodniowo.",
    bullets: [
      "Dokładny schemat przekazywania podopiecznych, który sprawia, że klient czuje się równie dopieszczony, a Ty odzyskujesz nawet 20 godzin tygodniowo.",
      "Jedna zmiana w organizacji pracy, dzięki której przestajesz być darmowym 'kierownikiem sali', a zespół zaczyna dowozić wyniki bez Twojego ciągłego nadzoru.",
    ],
  },
  {
    number: "03",
    pillarLabel: "FILAR 3: Trenerzy, którym możesz zaufać",
    title: "Zbuduj zespół, zamiast hodować konkurencję",
    description:
      "Pewnie choć raz miałeś z tyłu głowy: „Wyszkolę go, a za pół roku otworzy coś obok i zabierze mi klientów”. Pokażemy Ci, jak dobierać ludzi, rozliczać ich i budować zespół tak, żeby trenerowi opłacało się rozwijać Twoje studio, a nie myśleć o własnym biznesie.",
    bullets: [
      "Test 'czerwonej flagi' na rozmowie kwalifikacyjnej: jak w 15 minut odsiać trenerów, którzy za pół roku staliby się Twoją bezpośrednią konkurencją.",
      "Nietypowy system wynagradzania, który sprawia, że trenerom zależy na zatrzymaniu klienta na lata równie mocno jak Tobie.",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[22.5rem] sm:max-w-[25.5rem] flex-col items-center">

        <div className="inline-flex items-center justify-center rounded-full border border-[#fed7aa] bg-[#fffaf5] px-3.5 py-0.5 shadow-2xs">
          <span className="text-[0.66rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#7c2d12]">
            JEDNO SZKOLENIE NA ŻYWO
          </span>
        </div>

        <h2 className="mt-3.5 text-center text-[1.42rem] min-[390px]:text-[1.6rem] sm:text-[2rem] font-bold leading-tight tracking-tight text-neutral-900">
          Tematy, <span className="text-[#ea580c]">jakie poruszymy</span>
        </h2>

        <p className="mt-2 text-center text-[0.84rem] min-[390px]:text-[0.9rem] sm:text-[0.98rem] font-normal leading-[1.38] text-neutral-600">
          Pokażemy Ci, jak zejść z sali, ogarnąć zespół trenerów i zacząć wyciągać ze studia 20–50 tys. zysku miesięcznie, zamiast dalej pracować od rana do wieczora.
        </p>

        <div className="mt-7 mb-4 flex w-full items-center gap-3">
          <span className="shrink-0 text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#ea580c]">
            DOBRA, TO CO WŁAŚCIWIE Z TEGO BĘDZIE?
          </span>

          <div className="h-[1px] flex-1 bg-neutral-200" />
        </div>

        <div className="flex w-full flex-col gap-4">

          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative overflow-hidden rounded-[1.75rem] border border-orange-950/30 bg-[#0c0a09] bg-[radial-gradient(ellipse_at_top_left,_#29180c_0%,_#140e0a_40%,_#0c0a09_100%)] p-5 sm:p-6 shadow-xl"
            >

              <div className="flex items-center gap-3.5">

                <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-[14px] bg-[#ea580c] text-[1.25rem] font-bold text-white shadow-sm">
                  {pillar.number}
                </div>

                <div className="flex flex-col justify-center">

                  <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#fb923c]">
                    {pillar.pillarLabel}
                  </span>

                  <h3 className="text-[1.28rem] sm:text-[1.4rem] font-bold leading-tight text-white tracking-tight">
                    {pillar.title}
                  </h3>

                </div>
              </div>

              <p className="mt-4 text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.46] text-stone-300">
                {pillar.description}
              </p>

              <ul className="mt-5 space-y-2.5">

                {pillar.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">

                    <svg
                      className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-emerald-400"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2.5 8.5 6 12 13.5 4" />
                    </svg>

                    <span className="text-[0.84rem] sm:text-[0.88rem] font-normal leading-[1.38] text-stone-100">
                      {bullet}
                    </span>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
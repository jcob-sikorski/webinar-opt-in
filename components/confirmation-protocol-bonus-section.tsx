import { Section } from "@/components/ui/section";

const PLAYBOOK_PILLARS = [
  {
    number: "01",
    title: "Kalkulator Błędów i Wybór Lokalu (20 Twardych Pytań)",
    description:
      "Dokładne wytyczne zabezpieczające przed podpisaniem toksycznej umowy najmu. Zasada bezpiecznego czynszu poniżej 20% docelowego przychodu (najlepiej do 15%), analiza parkingu, wentylacji i ogrzewania oraz eliminacja przepalania 30–100 tys. zł na zbędny metraż czy prestiżowy adres w centrum.",
  },
  {
    number: "02",
    title: "Kalkulator Sprzętu i Adaptacji (START / PRO / PREMIUM)",
    description:
      "Trzy gotowe budżety wyposażenia lokalu od 35–45 tys. zł (START) do 80–100 tys. zł (PREMIUM). Dokładna lista wyposażenia pod salę 40–120 m² przygotowaną pod formaty 1:1 oraz semi-personal, która spłaca się z marży w 2–3 miesiące.",
  },
  {
    number: "03",
    title: "Architektura Awatara i Podwójny Język Komunikacji",
    description:
      "20 pytań profilujących klienta przed ofertą oraz 2 odrębne języki dotarcia: Kobiety 35/40+ (powrót do siebie, brak oceniania, poczucie zaopiekowania) oraz Mężczyźni 40+ (energia życiowa dla rodziny, sprawność, brak kompromitacji na sieciówce).",
  },
  {
    number: "04",
    title: "Program 90 Dni: Sprzedaż Transformacji zamiast Wejściówek",
    description:
      "Matematyka przejścia ze stawki godzinowej na pakiety transformacyjne. Struktura oferty na 24 i 36 jednostek (2× i 3× w tygodniu) z dietą, stałym kontaktem, planem na urlop i prywatną grupą, która generuje o 24 000 zł więcej przychodu na 20 podopiecznych.",
  },
  {
    number: "05",
    title: "Model Semi-Personal (2–4 osoby) i Matematyka Retencji",
    description:
      "System kontynuacji po pierwszych 90 dniach ze stawkami 70–130 zł za slot. Zamiast odejścia po 3 miesiącach klient zostaje w klubie na 21–33 miesiące, co na 10 klientach przynosi 168 000 – 264 000 zł dodatkowego, powtarzalnego cash flow.",
  },
  {
    number: "06",
    title: "Standard Konsultacji Sprzedażowej (Rozmowa → Trening → Domknięcie)",
    description:
      "Struktura spotkania na miejscu (10–20 min wywiadu o głębokie „dlaczego”, 30–40 min dotknięcia metodyki na sali, 10–20 min podania ceny programu i zasada milczenia). Rozbrojenie 8 najczęstszych błędów i protokół zbicia obiekcji przed wejściem do studia.",
  },
  {
    number: "07",
    title: "Proces Rekrutacji i 6-Tygodniowy Onboarding Trenera",
    description:
      "Ścieżka wdrażania instruktora krok po kroku: Tydzień 1 (obserwacja), Tydzień 2 (fragmenty jednostki), Tydzień 3 (trening pod nadzorem), Tydzień 4 (osoby testowe), Tygodnie 5–6 (pierwsi klienci płacący) wraz ze spisaną Metodyką Twardą (ćwiczenia/progresja) i Metodyką Miękką (obsługa/relacja).",
  },
  {
    number: "08",
    title: "Procedura Bezpiecznego Oddawania Klientów Zespołowi",
    description:
      "Praktyczny system przekazywania podopiecznych z rąk właściciela do grafiku zatrudnionych trenerów (zastępstwa, urlopy, wspólna diagnostyka od pierwszej konsultacji) tak, by klient był przywiązany do standardu i marki studia, a nie jednej osoby.",
  },
  {
    number: "09",
    title: "Operacyjny Plan Działania: 90 Dni do Otwarcia Studia",
    description:
      "Harmonogram wdrożenia rozpisany na bloki dwutygodniowe: Dni 1–14 (fundament i awatar), Dni 15–30 (lokal i profil), Dni 31–45 (sprzęt i adaptacja), Dni 46–60 (kampanie i sprzedaż), Dni 61–75 (rekrutacja trenera), Dni 76–90 (oddanie procesów i pełny system).",
  },
  {
    number: "10",
    title: "21 Brutalnych Prawd Biznesu Fitness i Checklista Gotowości",
    description:
      "Zestawienie twardych zasad rynkowych bez owijania w bawełnę oraz 25-punktowy audyt weryfikujący, czy jesteś gotowy na podpisanie umowy najmu, czy najpierw musisz uporządkować model, ofertę i marketing.",
  },
];

const PLAYBOOK_METRICS = [
  { value: "18", label: "Rozdziałów wdrożeniowych" },
  { value: "5", label: "Kompletnych systemów" },
  { value: "21", label: "Gotowych narzędzi i checklist" },
  { value: "4+", label: "Przeanalizowane Case Studies" },
];

export function ConfirmationProtocolBonusSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl border-t border-[#d6d6d6] pt-12 text-center sm:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Bonus dla obecnych na żywo
        </p>

        {/* Główny nagłówek */}
        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Protokół Dochodowego Studia:{" "}
          <span className="text-[#ef6b4a]">Kompletny Playbook Biznesowy 2026</span>
        </h2>

        {/* Copy wprowadzające */}
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Większość osób po webinarach zostaje z chaotycznymi notatkami i nie wie, jak przełożyć wiedzę na realne działania w Piątek rano.
          </p>

          <p>
            Dlatego przygotowałem kompletny, 18-rozdziałowy Playbook operacyjny.{" "}
            <strong className="font-semibold not-italic text-gray-900">
              To nie jest teoretyczny e-book, tylko dosłowny zapis procedur, kalkulatorów i skryptów
            </strong>
            , dzięki którym 4 placówki Sportowe Przedmieście oraz ponad 40 wdrożonych studiów w Polsce generują zysk bez uwięzienia właściciela na sali.
          </p>
        </div>

        {/* Twarde liczby Playbooka w czystym stylu copy */}
        <div className="mt-12 border-t border-[#d6d6d6] pt-8">
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {PLAYBOOK_METRICS.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-3xl font-extrabold italic text-[#ef6b4a] sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lista zawartości Playbooka w stylu długiego copy */}
        <div className="mt-12 divide-y divide-[#d6d6d6] border-t border-[#d6d6d6] text-left">
          {PLAYBOOK_PILLARS.map((pillar) => (
            <article key={pillar.number} className="py-8 sm:py-9">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#ef6b4a]">
                  Moduł {pillar.number}
                </span>
              </div>

              <h3 className="mt-2 font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                {pillar.title}
              </h3>

              <p className="mt-3 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
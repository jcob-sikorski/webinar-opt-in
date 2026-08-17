import { Section } from "@/components/ui/section";

interface ProofPerson {
  name: string;
  figure: string;
  sentence: string;
  photo?: string;
}

const PROOF: ProofPerson[] = [
  {
    name: "Joanna Wójcik",
    figure: "66 000 zł / 1. msc",
    sentence:
      "Była o krok od zamknięcia lokalu — po wdrożeniu procesu sprzedaży i pakietów transformacyjnych zanotowała 66 tys. zł przychodu w pierwszym miesiącu.",
    photo:
      "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
  {
    name: "Krzysztof Mariańczyk",
    figure: "Zespół 7 trenerów",
    sentence:
      "Przeszedł z pracy od świtu do nocy jako jedyny trener do klubu z 7 instruktorami, regularnie wyjeżdżając na wakacje bez spadku obrotów.",
    photo:
      "https://ucarecdn.com/81a4ee46-e4b9-4130-b7d1-e58934606efe/marianczyk.png",
  },
  {
    name: "Piotr Smulczyk",
    figure: "20 000 zł zysku",
    sentence:
      "Prowadzi studio na pół etatu generując 20 tys. zł czystego zysku właścicielskiego, delegując prowadzenie jednostek treningowych zespołowi.",
    photo:
      "https://ucarecdn.com/c98c445b-070d-4ffe-9042-fd5f24f40e48/zmulczyk.png",
  },
  {
    name: "Karolina Owczarzak",
    figure: "Gmina 12 tys. mieszkańców",
    sentence:
      "Udowodniła, że 100-metrowe studio treningu siłowego premium działa i generuje wysokie zyski nawet w małej, lokalnej społeczności.",
    photo:
      "https://ucarecdn.com/872310b7-5693-4839-9f83-55a491f82153/owczarzak.png",
  },
];

export function ApplicationResultsSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Dowody wdrożenia modelu
        </p>

        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Oni też zaczynali od{" "}
          <span className="text-[#ef6b4a]">pracy na sali po 12 godzin</span>
        </h2>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {PROOF.map((person) => (
            <article
              key={person.name}
              className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:py-10"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-28 sm:w-28">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl font-bold italic text-gray-900 sm:text-2xl">
                    {person.name}
                  </h3>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#ef6b4a]">
                    {person.figure}
                  </span>
                </div>
                <p className="mt-2 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                  {person.sentence}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
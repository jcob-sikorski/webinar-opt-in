import { Section } from "@/components/ui/section";

interface ProofPerson {
  name: string;
  highlight: string;
  caption: string;
  photo: string;
}

const PROOF: ProofPerson[] = [
  {
    name: "Michał Mekitow-Humeńczyk",
    highlight: "Z 2 studio do 3",
    caption:
      "Dziś ma menedżera i poukładane procesy operacyjne zamiast robienia wszystkiego samemu na sali.",
    photo:
      "https://ucarecdn.com/981f513f-8226-4a54-bdc3-9512e21acea3/mekitow.png",
  },
  {
    name: "Adam Stołowski",
    highlight: "Od etatu na sieciówce do studia",
    caption:
      "Zbudował własną placówkę i zaufany zespół instruktorów zamiast pracy na cudzy rachunek.",
    photo:
      "https://ucarecdn.com/ee746ff6-20dd-4f68-9652-c01229196fee/stolowski.png",
  },
  {
    name: "Krzysztof Mariańczyk",
    highlight: "Zespół 7 trenerów",
    caption:
      "Przeszedł od bycia jedynym trenerem do klubu z 7 osobami w zespole, regularnie podróżując bez spadku przychodów.",
    photo:
      "https://ucarecdn.com/81a4ee46-e4b9-4130-b7d1-e58934606efe/marianczyk.png",
  },
  {
    name: "Karolina Owczarzak",
    highlight: "Gmina 12 tys. mieszkańców",
    caption:
      "Udowodniła, że 100-metrowe studio treningu siłowego premium generuje powtarzalny zysk w małym mieście.",
    photo:
      "https://ucarecdn.com/872310b7-5693-4839-9f83-55a491f82153/owczarzak.png",
  },
  {
    name: "Piotr Smulczyk",
    highlight: "20 tys. zł zysku na pół etatu",
    caption:
      "Przeszedł z trenera pracującego w pojedynkę do roli szefa własnego studia z dochodem pasywnym.",
    photo:
      "https://ucarecdn.com/c98c445b-070d-4ffe-9042-fd5f24f40e48/zmulczyk.png",
  },
  {
    name: "Joanna Wójcik",
    highlight: "66 000 zł w 1. miesiącu",
    caption:
      "Od sekundy przed bankructwem i lęku o koszty stałe do stabilnego studia i zysku z pakietów.",
    photo:
      "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
];

export function CallConfirmationProofSection() {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#ef6b4a]">
          Historie sukcesu
        </p>

        <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Oni też zaczynali od <span className="text-[#ef6b4a]">pracy po 12h dziennie</span>
        </h2>

        <div className="mt-14 divide-y divide-[#d6d6d6] text-left">
          {PROOF.map((person) => (
            <article
              key={person.name}
              className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:py-10"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-24 sm:w-24">
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
                    {person.highlight}
                  </span>
                </div>
                <p className="mt-2 text-pretty font-display text-base italic leading-[1.7] text-gray-700 sm:text-lg">
                  {person.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-lg italic leading-[1.6] text-gray-900 sm:text-xl">
            Do usłyszenia na rozmowie.{" "}
            <strong className="font-semibold not-italic text-[#ef6b4a]">
              Bądź punktualnie.
            </strong>
          </p>
        </div>
      </div>
    </Section>
  );
}
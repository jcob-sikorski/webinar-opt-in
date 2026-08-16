import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

interface ProofPerson {
  name: string;
  sentence: string;
  photo?: string;
}

const PROOF: ProofPerson[] = [
  {
    name: "Michał Mekitow-Humeńczyk",
    sentence:
      "przeszedł z dwóch studiów do trzech — dziś ma menedżera i poukładane procesy zamiast robienia wszystkiego samemu.",
    photo:
      "https://ucarecdn.com/981f513f-8226-4a54-bdc3-9512e21acea3/mekitow.png",
  },
  {
    name: "Adam Stołowski",
    sentence:
      "był trenerem w sieciówce, dziś ma własne studio i zespół zamiast etatu na cudzej sali.",
    photo:
      "https://ucarecdn.com/ee746ff6-20dd-4f68-9652-c01229196fee/stolowski.png",
  },
  {
    name: "Krzysztof Mariańczyk",
    sentence:
      "zbudował zespół siedmiu trenerów i przeszedł od bycia sterem i okrętem studia do ciągłych wyjazdów za granicę, gdy firma działa bez niego.",
    photo:
      "https://ucarecdn.com/81a4ee46-e4b9-4130-b7d1-e58934606efe/marianczyk.png",
  },
  {
    name: "Michał Cichy",
    sentence:
      "poszedł tą samą drogą — z dwóch studiów do trzech, podbijając okolicę poukładaną siecią placówek.",
    photo: "https://ucarecdn.com/1cf0a30c-68fe-4ade-a1d7-5bae8dd48820/cichy.png",
  },
  {
    name: "Igor Czobot",
    sentence: "otworzył 115-metrowe Studio Kobiet.",
    photo:
      "https://ucarecdn.com/77b34bd4-efef-4b70-92a6-55fe707331e4/czobot.png",
  },
  {
    name: "Karolina Owczarzak",
    sentence:
      "pokazała, że 100-metrowe studio treningu siłowego działa nawet w gminie liczącej 12 tysięcy mieszkańców.",
    photo:
      "https://ucarecdn.com/872310b7-5693-4839-9f83-55a491f82153/owczarzak.png",
  },
  {
    name: "Patryk i Paula Grzemscy",
    sentence:
      "przeszli od etatów do dwóch własnych studiów — dziś mają więcej wolnego czasu i spełniają się w zajawce zamiast pracować na etacie.",
    photo:
      "https://ucarecdn.com/37ba1195-9bad-49ed-b809-f1d06e4e3134/grzemscy.png",
  },
  {
    name: "Klaudia Ostrowska",
    sentence:
      "zbudowała zespół czterech trenerów, przechodząc od bycia najlepszym i jedynym trenerem w studio do poukładanej machiny.",
    photo:
      "https://ucarecdn.com/95c866bb-4d43-4384-b89a-b7940719392c/Screenshot20260803at93802PM.png",
  },
  {
    name: "Piotr Smulczyk",
    sentence:
      "prowadzi dziś studio na pół etatu i wypracowuje 20 tysięcy złotych zysku — od trenera pracującego w środy do szefa własnego zespołu.",
    photo:
      "https://ucarecdn.com/c98c445b-070d-4ffe-9042-fd5f24f40e48/zmulczyk.png",
  },
  {
    name: "Dawid",
    sentence:
      "myślał, że zarabia dużo na online — dziś prowadzi zespół trenerów w kameralnej siłowni i sam jest zaskoczony wynikiem.",
    photo:
      "https://ucarecdn.com/21138d3d-a120-43d0-b4d2-da1551695da8/dawid.png",
  },
  {
    name: "Alicja Wieczorek",
    sentence:
      "zamieniła 300 godzin pracy na recepcji i zajęciach grupowych na własne studio treningów personalnych.",
    photo:
      "https://ucarecdn.com/ba3ac78c-19e2-48b9-8013-94876ae2de44/wieczorek.png",
  },
  {
    name: "Joanna Wójcik",
    sentence:
      "była o krok od bankructwa — w pierwszym miesiącu wdrożonego procesu zanotowała 66 000 zł przychodu i dziś prowadzi stabilne studio.",
    photo: "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
];

export function ConfirmationProofSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mx-auto max-w-[26ch] text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="text-[#ef6b4a]">Oni też nic nie wiedzieli</span> o
          prowadzeniu studio
        </h2>

        <div className="mt-14 flex flex-col items-center">
          {PROOF.map((person, index) => (
            <div
              key={person.name}
              className={`flex w-full flex-col items-center text-center ${
                index > 0 ? "mt-16 sm:mt-20" : ""
              }`}
            >
              <div className="mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-64 sm:w-64 md:h-72 md:w-72">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder
                    aspect="aspect-square"
                    label="Zdjęcie"
                    rounded="rounded-full"
                  />
                )}
              </div>

              <p className="mx-auto mt-7 max-w-md text-lg leading-[1.75] text-gray-700 sm:text-xl">
                <strong className="font-semibold text-gray-900">
                  {person.name}
                </strong>{" "}
                {person.sentence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
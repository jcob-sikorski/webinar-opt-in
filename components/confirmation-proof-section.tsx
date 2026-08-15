"use client";

import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";

interface ProofPerson {
  name: string;
  highlight: string;
  caption: string;
  photo?: string;
}

const PROOF: ProofPerson[] = [
  {
    name: "Michał Mekitow-Humeńczyk",
    highlight: "Z 2 studio do 3",
    caption:
      "Dziś ma menedżera i poukładane procesy zamiast robienia wszystkiego samemu.",
    photo:
      "https://ucarecdn.com/981f513f-8226-4a54-bdc3-9512e21acea3/mekitow.png",
  },
  {
    name: "Adam Stołowski",
    highlight: "Od trenera z sieciówki do właściciela",
    caption: "Dziś ma własne studio i zespół zamiast etatu na cudzej sali.",
    photo:
      "https://ucarecdn.com/ee746ff6-20dd-4f68-9652-c01229196fee/stolowski.png",
  },
  {
    name: "Krzysztof Mariańczyk",
    highlight: "7 trenerów w zespole",
    caption:
      "Od bycia sterem i okrętem studia do ciągłych wyjazdów za granicę, gdy firma działa bez niego.",
    photo:
      "https://ucarecdn.com/81a4ee46-e4b9-4130-b7d1-e58934606efe/marianczyk.png",
  },
  {
    name: "Igor Czobot",
    highlight: "Studio Kobiet",
    caption: "115 m² studia treningowego dla kobiet.",
    photo:
      "https://ucarecdn.com/77b34bd4-efef-4b70-92a6-55fe707331e4/czobot.png",
  },
  {
    name: "Karolina Owczarzak",
    highlight: "100 m², gmina 12 tys. mieszkańców",
    caption: "Studio treningu siłowego, które działa nawet w niewielkiej miejscowości.",
    photo:
      "https://ucarecdn.com/872310b7-5693-4839-9f83-55a491f82153/owczarzak.png",
  },
  {
    name: "Patryk i Paula Grzemscy",
    highlight: "Od etatów do 2 studio",
    caption: "Więcej wolnego czasu i spełnianie się w zajawce zamiast pracy na etacie.",
    photo:
      "https://ucarecdn.com/37ba1195-9bad-49ed-b809-f1d06e4e3134/grzemscy.png",
  },
  {
    name: "Klaudia Ostrowska",
    highlight: "Zespół 4 trenerów",
    caption: "Od bycia najlepszym i jedynym trenerem w studio do poukładanej machiny.",
    photo:
      "https://ucarecdn.com/95c866bb-4d43-4384-b89a-b7940719392c/Screenshot20260803at93802PM.png"
  },
  {
    name: "Piotr Smulczyk",
    highlight: "20 tys. zł zysku, studio na pół etatu",
    caption: "Od trenera pracującego w środy do szefa własnego zespołu.",
    photo:
      "https://ucarecdn.com/c98c445b-070d-4ffe-9042-fd5f24f40e48/zmulczyk.png",
  },
  {
    name: "Dawid",
    highlight: "Zespół trenerów w kameral siłowni",
    caption:
      "Myślał, że zarabia dużo na online — dziś prowadzi zespół i sam jest zaskoczony wynikiem.",
    photo: "https://ucarecdn.com/21138d3d-a120-43d0-b4d2-da1551695da8/dawid.png",
  },
  {
    name: "Alicja Wieczorek",
    highlight: "300 godzin pracy → własne studio",
    caption: "Od recepcji i zajęć grupowych do własnych treningów personalnych.",
    photo:
      "https://ucarecdn.com/ba3ac78c-19e2-48b9-8013-94876ae2de44/wieczorek.png",
  },
  {
    name: "Michał Cichy",
    highlight: "Z 2 studio do 3",
    caption: "Podbija okolicę swoją poukładaną siecią placówek.",
    photo: "https://ucarecdn.com/1cf0a30c-68fe-4ade-a1d7-5bae8dd48820/cichy.png",
  },
  {
    name: "Joanna Wójcik",
    highlight: "66 000 zł w 1. miesiącu",
    caption: "Od sekundy przed bankructwem do stabilnego studia.",
    photo: "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
];

export function ConfirmationProofSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <h2 className="mx-auto max-w-4xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        <span className="text-[#ef6b4a]">Oni też nic nie wiedzieli{" "}</span>
        o prowadzeniu studio
      </h2>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {PROOF.map((person) => (
          <figure key={person.name} className="group flex flex-col items-center text-center">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <PhotoPlaceholder aspect="aspect-square" label="Zdjęcie" rounded="rounded-full" />
              )}
            </div>
            <figcaption className="mt-5 flex flex-col items-center">
              <p className="text-base font-bold text-gray-900">{person.name}</p>
              <p className="mt-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-[#ef6b4a] sm:text-xs">
                {person.highlight}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                {person.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
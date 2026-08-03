import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

interface ProofPerson {
  name: string;
  highlight: string;
  caption: string;
  /** Omit if no real photo has been supplied yet — falls back to a placeholder. */
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
    // No photo supplied yet for Klaudia — falls back to PhotoPlaceholder below.
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
    highlight: "Zespół trenerów w kameralnej siłowni",
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
    highlight: "66 000 zł w pierwszym miesiącu współpracy",
    caption: "Od sekundy przed bankructwem do stabilnego studia.",
    photo: "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
];

export function ConfirmationProofSection() {
  return (
    <Section width="wide">
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Osoby, Które Były{" "}
        <span className="text-coral">Dokładnie Tam, Gdzie Ty Teraz</span>
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
        {PROOF.map((person) => (
          <figure key={person.name} className="text-center">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <PhotoPlaceholder aspect="aspect-square" label="Zdjęcie" rounded="rounded-full" />
              )}
            </div>
            <figcaption className="mt-3.5">
              <p className="text-sm font-semibold text-ink">{person.name}</p>
              <p className="mt-1 text-body font-semibold text-coral">
                {person.highlight}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{person.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-lg rounded-xl border border-line border-t-[3px] border-t-coral-bright p-7 text-center">
        <p className="text-body-lg font-semibold text-ink">
          Jedno przypomnienie, zanim zamkniesz tę stronę:
        </p>
        <p className="mt-3 text-body text-ink-muted">
          Nagranie zostaje z Tobą{" "}
          <strong className="font-semibold text-ink">na zawsze</strong>.{" "}
          <em className="italic">
            Protokół Dochodowego Studia dostają wyłącznie osoby, które zostają
            na żywo do samego końca warsztatu
          </em>
          . Zablokuj kalendarz na{" "}
          <strong className="font-semibold text-ink">
            14 sierpnia, 19:00
          </strong>{" "}
          — nie na &bdquo;obejrzę później&rdquo;.
        </p>
      </div>
    </Section>
  );
}
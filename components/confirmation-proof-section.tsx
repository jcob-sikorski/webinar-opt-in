import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";
import { RegisterCtaButton } from "@/components/register-cta-button";
import { CalendarCheck } from "lucide-react";

interface ProofPerson {
  name: string;
  sentence: string;
  photo?: string;
}

const PROOF: ProofPerson[] = [
  {
    name: "Michał Mekitow-Humeńczyk",
    sentence:
      "przeszedł od gaszenia pożarów w dwóch lokalach do otwarcia trzeciego — dziś ma managera i poukładane procedury zamiast robienia wszystkiego w pojedynkę.",
    photo:
      "https://ucarecdn.com/981f513f-8226-4a54-bdc3-9512e21acea3/mekitow.png",
  },
  {
    name: "Adam Stołowski",
    sentence:
      "zamienił godziny wyrobione na grafiku w sieciówce na własne, rentowne studio i zgrany zespół trenerów.",
    photo:
      "https://ucarecdn.com/ee746ff6-20dd-4f68-9652-c01229196fee/stolowski.png",
  },
  {
    name: "Krzysztof Mariańczyk",
    sentence:
      "zbudował 7-osobowy zespół. Zamiast spędzać całe dnie na sali, regularnie podróżuje, a studio zarabia bez jego obecności.",
    photo:
      "https://ucarecdn.com/81a4ee46-e4b9-4130-b7d1-e58934606efe/marianczyk.png",
  },
  {
    name: "Michał Cichy",
    sentence:
      "skaluje swój sukces — otworzył już trzecią placówkę i krok po kroku dominuje lokalny rynek dzięki powtarzalnemu modelowi.",
    photo: "https://ucarecdn.com/1cf0a30c-68fe-4ade-a1d7-5bae8dd48820/cichy.png",
  },
  {
    name: "Igor Czobot",
    sentence:
      "stworzył od zera 115-metrowe Studio Kobiet, które od pierwszych miesięcy zapełniło się lojalnymi podopiecznymi.",
    photo:
      "https://ucarecdn.com/77b34bd4-efef-4b70-92a6-55fe707331e4/czobot.png",
  },
  {
    name: "Karolina Owczarzak",
    sentence:
      "udowodniła, że rentowne 100-metrowe studio treningu siłowego można z sukcesem prowadzić nawet w małej gminie na 12 tysięcy mieszkańców.",
    photo:
      "https://ucarecdn.com/872310b7-5693-4839-9f83-55a491f82153/owczarzak.png",
  },
  {
    name: "Patryk i Paula Grzemscy",
    sentence:
      "rzucili pracę na etacie i prowadzą dziś dwa własne studia — zarabiają na swojej pasji i w końcu mają czas na normalne życie.",
    photo:
      "https://ucarecdn.com/37ba1195-9bad-49ed-b809-f1d06e4e3134/grzemscy.png",
  },
  {
    name: "Klaudia Ostrowska",
    sentence:
      "przestała być jedynym i wiecznie zmęczonym trenerem na sali — zatrudniła 4 trenerów i zamieniła chaos w działający system.",
    photo:
      "https://ucarecdn.com/95c866bb-4d43-4384-b89a-b7940719392c/Screenshot20260803at93802PM.png",
  },
  {
    name: "Piotr Smulczyk",
    sentence:
      "pracuje w studio zaledwie kilkanaście godzin w tygodniu, generując ponad 20 tys. zł zysku z poukładanym zespołem.",
    photo:
      "https://ucarecdn.com/c98c445b-070d-4ffe-9042-fd5f24f40e48/zmulczyk.png",
  },
  {
    name: "Dawid",
    sentence:
      "prowadził treningi online, ale brakowało mu stabilności — dziś zarządza ekipą w kameralnym studiu i regularnie bije rekordy przychodów.",
    photo:
      "https://ucarecdn.com/21138d3d-a120-43d0-b4d2-da1551695da8/dawid.png",
  },
  {
    name: "Alicja Wieczorek",
    sentence:
      "zamieniła 300 godzin harówki w miesiącu na recepcji i maratonach fitness na własne, dochodowe studio treningu personalnego.",
    photo:
      "https://ucarecdn.com/ba3ac78c-19e2-48b9-8013-94876ae2de44/wieczorek.png",
  },
  {
    name: "Joanna Wójcik",
    sentence:
      "była o krok od zamknięcia lokalu — po wdrożeniu nowego systemu w pierwszym miesiącu wygenerowała 66 000 zł i wreszcie śpi spokojnie.",
    photo: "https://ucarecdn.com/361b43a2-4e52-4405-b8ab-c140b828b844/wojcik.png",
  },
];

export function ConfirmationProofSection() {
  return (
    <Section className="bg-[#fcfbf9] px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mx-auto max-w-[26ch] text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span className="text-[#ef6b4a]">Oni też zaczynali od zera</span> i nie
          mieli pojęcia o prowadzeniu biznesu
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
                <strong className="font-bold text-gray-900">
                  {person.name}
                </strong>{" "}
                {person.sentence}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
          <RegisterCtaButton
            size="lg"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:border-green-700 hover:bg-green-700 active:border-green-700 active:bg-green-700 active:scale-[0.99] sm:text-2xl"
          >
            <CalendarCheck className="h-6 w-6 shrink-0" />
            Tak, chcę się zapisać
          </RegisterCtaButton>
          <p className="mt-4 max-w-md text-center text-xs font-bold uppercase tracking-widest text-gray-500 sm:text-sm">
            Warsztat na żywo o tym, jak zbudować studio, które zarabia bez Ciebie na sali
          </p>
        </div>
      </div>
    </Section>
  );
}
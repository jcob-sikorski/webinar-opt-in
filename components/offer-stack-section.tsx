import { RegisterCtaButton } from "@/components/register-cta-button";
import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

interface OfferItem {
  title: string;
  description: string;
}

const OFFER_ITEMS: OfferItem[] = [
  {
    title: "Nagranie na lata",
    description:
      "pełne nagranie całego warsztatu w jakości HD, dostępne dla Ciebie na zawsze — możesz wracać do dowolnego fragmentu, kiedy zechcesz.",
  },
  {
    title: "Protokół Dochodowego Studia",
    description:
      "cały model Dochodowego Studia od A do Z — zbudowany na podstawie pracy z ponad 40 placówkami, które już go wdrożyły. Każdy etap, każdy typowy błąd i jego rozwiązanie, w formie, do której wracasz dokładnie wtedy, kiedy Ci to potrzebne, we własnym tempie.",
  },
];

export function OfferStackSection() {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Oto Wszystko, Co Dostajesz
        <br />
        <span className="text-coral">Bezpłatnie</span>
      </h2>

      {/* Offer stack card */}
      <div className="mt-9 rounded-xl border border-line border-t-[3px] border-t-coral-bright p-6 sm:p-8">
        <h3 className="text-center text-xl font-bold sm:text-2xl">
          Warsztat &bdquo;Dochodowe Studio&rdquo;
        </h3>
        <hr className="mx-auto mt-4 w-52 border-t-2 border-dashed border-coral-bright/60" />

        <ul className="mt-6 divide-y divide-line">
          {OFFER_ITEMS.map((item) => (
            <CheckItem key={item.title} shape="square" className="py-5">
              <p className="text-body text-ink-muted">
                <strong className="font-semibold text-ink">{item.title}</strong>{" "}
                — {item.description}
              </p>
            </CheckItem>
          ))}
        </ul>

        <p className="mt-7 text-center text-xl font-bold text-ink sm:text-2xl">
          Koszt udziału: 0 zł
        </p>

        <div className="mt-6">
          <RegisterCtaButton
            size="lg"
            className="w-full whitespace-normal text-center text-base sm:text-lg"
          >
            Zarezerwuj swoje miejsce
          </RegisterCtaButton>
          <p className="mt-3.5 text-center text-sm italic text-ink-subtle">
            Potwierdzenie i dane dostępu wyślemy od razu na Twój adres e-mail.
          </p>
        </div>
      </div>

      {/* Free rationale card */}
      <div className="mt-8 rounded-xl border border-line p-6 sm:p-8">
        <p className="text-center text-xl font-bold text-coral sm:text-2xl">
          ★ Szczerze — dlaczego to jest za darmo ★
        </p>

        <div className="mt-7 space-y-5 text-body text-ink-muted">
          <p>
            Mógłbym zapakować to w płatny kurs i{" "}
            <em className="italic">
              to i tak byłaby najlepsza inwestycja w Twoim biznesie w tym
              kwartale
            </em>
            . Nie robię tego.
          </p>
          <p>
            Powód jest prosty:{" "}
            <strong className="font-semibold text-ink">
              za każdym razem, kiedy prowadzę ten warsztat na żywo, część osób
              po zobaczeniu całego modelu sama prosi o rozmowę
            </strong>
            , żeby wdrożyć go u siebie razem ze mną i moim zespołem.
          </p>
          <p>
            Dlatego warsztat zostaje bezpłatny —{" "}
            <strong className="font-semibold text-ink">
              to on przynosi mi klientów
            </strong>
            . Mówię to wprost.{" "}
            <em className="italic">
              Jeśli wolisz wdrożyć to sam, bez mojej pomocy — również w
              porządku.
            </em>{" "}
            Warsztat i tak da Ci wszystko, czego potrzebujesz, żeby zacząć.
          </p>
          <p>
            <em className="italic">
              To też jedyne miejsce, w którym uczę tego publicznie i za darmo.
            </em>
          </p>
        </div>
      </div>
    </Section>
  );
}
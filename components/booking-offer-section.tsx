import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

interface CoreItem {
  title: string;
  description: string;
}

const CORE: CoreItem[] = [
  {
    title: "Środy, 12:00–14:00 — dwie godziny ze mną na żywo",
    description:
      "Zawsze. Nawet w Wigilię — w zeszłym roku też była sesja. To nie jest nagranie sprzed roku. Siadamy nad Twoim konkretnym studiem, Twoim lokalem, Twoimi liczbami.",
  },
  {
    title: "Czwartki, 12:00–14:00 — płatny marketing z Kornelią",
    description:
      "Nie teoria o reklamach. Klikamy kampanie na żywo, w Twoim koncie, na Twoim budżecie. Wychodzisz z tego umiejąc puścić reklamę sam — i nie płacisz już agencji pięciu tysięcy miesięcznie za coś, co ogarniasz w czterdzieści minut.",
  },
  {
    title: "Nielimitowane wsparcie na Telegramie, poniedziałek–piątek",
    description:
      "Utknąłeś w środę wieczorem? Piszesz. Odpowiadamy. Nie czekasz tygodnia na następną sesję.",
  },
  {
    title: "Sześć miesięcy dostępu do platformy Skool",
    description:
      "Wszystkie moduły, nagrania, dokumenty i kalendarz spotkań w jednym miejscu.",
  },
  {
    title: "Mastermind raz w roku",
    description:
      "Pełna analiza Twojego biznesu na żywo, od A do Z — plus dostęp do pokoju pełnego innych właścicieli studiów, którzy przechodzą dokładnie to samo co Ty.",
  },
];

export function BookingOfferSection() {
  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Rdzeń programu
      </p>
      <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Czym Jest <span className="text-coral">Dochodowe Studio</span>
      </h2>

      <p className="mx-auto mt-7 max-w-[52ch] text-center text-body-lg text-ink-muted">
        Sześć miesięcy pracy ze mną i moim zespołem.{" "}
        <strong className="font-semibold text-ink">
          Nie kurs, który obejrzysz i odłożysz.
        </strong>{" "}
        Sześć miesięcy, w których budujesz swoje studio krok po kroku, a ja
        jestem obok, kiedy coś się sypie.
      </p>

      <div className="mt-9 rounded-xl border border-line border-t-[3px] border-t-coral-bright p-6 sm:p-8">
        <ul className="divide-y divide-line">
          {CORE.map((item) => (
            <CheckItem key={item.title} shape="square" className="py-5">
              <p className="text-body text-ink-muted">
                <strong className="font-semibold text-ink">
                  {item.title}
                </strong>{" "}
                — {item.description}
              </p>
            </CheckItem>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-xl border border-line bg-panel p-6 sm:p-8">
        <p className="text-center font-display text-lg font-bold italic text-ink sm:text-xl">
          Jedna zasada, którą powtarzam na każdej rozmowie
        </p>
        <p className="mt-4 text-body text-ink-muted">
          <strong className="font-semibold text-ink">
            Robimy to z Tobą, a nie za Ciebie.
          </strong>{" "}
          Nie chcę, żebyś po sześciu miesiącach nadal potrzebował agencji do
          pozyskiwania klientów, handlowca do każdej sprzedaży, pośrednika do
          rekrutacji ani mnie do prowadzenia Twojej firmy.{" "}
          <em className="italic">
            Uczę Cię być kompletnym przedsiębiorcą
          </em>{" "}
          — masz sam potrafić znaleźć problem, policzyć go, wdrożyć
          rozwiązanie i zarządzić ludźmi.
        </p>
      </div>
    </Section>
  );
}
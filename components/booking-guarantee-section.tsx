import { ShieldCheck } from "lucide-react";

import { Section } from "@/components/ui/section";

/**
 * ⚠️ BLOKER PRZED PUBLIKACJĄ — DO UZUPEŁNIENIA PRZEZ BARTKA
 *
 * W materiałach źródłowych (Webinar_Dochodowe_Studio.md, CZĘŚĆ 4 — GWARANCJA)
 * wiążące warunki gwarancji są oznaczone jako [DO UZUPEŁNIENIA], z wyraźną
 * adnotacją produkcyjną: "Gwarancja to zobowiązanie finansowe, nie miejsce
 * na improwizację".
 *
 * Dlatego NIE zostały tu wymyślone. Uzupełnij trzy pola poniżej dokładnie
 * tak, jak będą brzmiały w umowie — a następnie ustaw TERMS_CONFIRMED = true,
 * żeby sekcja wyświetliła konkretne warunki zamiast informacji ogólnej.
 *
 * Do ustalenia:
 *   1. Jaki dokładnie warunek musi spełnić uczestnik (co odhaczone na Karcie Prawdy).
 *   2. Jaki wynik nie został osiągnięty (mierzalny próg).
 *   3. Co dokładnie robimy: przedłużenie / dodatkowe wsparcie / zwrot i na jakich warunkach.
 */
const TERMS_CONFIRMED = false;

const GUARANTEE_TERMS = {
  condition: "[warunek: co dokładnie musi być odhaczone na Karcie Prawdy]",
  threshold: "[mierzalny próg wyniku, którego nie osiągnięto]",
  remedy:
    "[dokładny mechanizm: przedłużenie / dodatkowe wsparcie / zwrot — na jakich warunkach]",
};

export function BookingGuaranteeSection() {
  return (
    <Section>
      <div className="rounded-xl border border-line border-t-[3px] border-t-coral-bright p-7 sm:p-9">
        <div className="flex flex-col items-center text-center">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-bright"
          >
            <ShieldCheck className="h-6 w-6 text-white" />
          </span>
          <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
            Gwarancja
          </p>
          <h2 className="mt-4 max-w-[24ch] text-[1.75rem] font-bold leading-tight sm:text-[2.125rem]">
            Program Stoi Na <span className="text-coral">Karcie Prawdy</span>
          </h2>
        </div>

        <div className="mt-8 space-y-5 text-body text-ink-muted">
          <p>
            Wiem, że część osób myśli:{" "}
            <em className="italic">
              „a co, jeśli zapłacę, przejdę przez to i nie zadziała?”
            </em>{" "}
            To uczciwe pytanie i zasługuje na uczciwą odpowiedź, nie na
            marketingowe zaklęcie.
          </p>

          <p>
            Dlatego cały program stoi na{" "}
            <strong className="font-semibold text-ink">Karcie Prawdy</strong>.
            To nie ozdobnik. To narzędzie, w którym punkt po punkcie
            odhaczasz, co faktycznie wdrożyłeś —{" "}
            <em className="italic">
              nie co obejrzałeś, tylko co zrobiłeś
            </em>
            . Pokazuje też, ile realnie kosztuje Cię niewykorzystany
            potencjał: ile godzin sali stoi pustych, ile leadów ginie w
            wiadomościach, ilu klientów odchodzi bez próby kontaktu.
          </p>

          {TERMS_CONFIRMED ? (
            <p className="rounded-lg border border-line bg-panel p-5">
              Jeżeli przez sześć miesięcy {GUARANTEE_TERMS.condition} i mimo
              to {GUARANTEE_TERMS.threshold} — {GUARANTEE_TERMS.remedy}.
            </p>
          ) : (
            <p className="rounded-lg border border-line bg-panel p-5">
              Dokładne warunki gwarancji — co musisz mieć odhaczone, jaki
              wynik obejmuje i co dokładnie wtedy robimy — omawiamy na
              rozmowie i zapisujemy w umowie, zanim cokolwiek podpiszesz.
              Chcę, żebyś miał je na piśmie, a nie jako hasło ze strony.
            </p>
          )}

          <p>
            I powiem wprost, dlaczego to robię, żebyś nie szukał haczyka.
            Robię to, bo z doświadczenia — swojego i ponad osiemdziesięciu
            przedsiębiorców, z którymi pracowałem — wiem, że ludzie, którzy
            faktycznie odhaczają Kartę Prawdy punkt po punkcie, prawie zawsze
            widzą rezultat.{" "}
            <strong className="font-semibold text-ink">
              Ta gwarancja niewiele mnie kosztuje, bo wiem, że system działa
              dla tych, którzy pracują.
            </strong>{" "}
            Nie zadziała dla kogoś, kto kupi i nic nie zrobi — ale wtedy
            problemem nie jest program.
          </p>
        </div>
      </div>
    </Section>
  );
}
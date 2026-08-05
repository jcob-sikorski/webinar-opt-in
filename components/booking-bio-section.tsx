import { CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

const CREDENTIALS = [
  "4 własne studia treningowe, prowadzone do dziś",
  "80+ przedsiębiorców, z którymi pracowałem",
  "250 000 zł zainwestowane we własną naukę — mentorzy, kursy, błędy",
  "2 bankructwa i magazyn w DHL-u po drodze",
];

export function BookingBioSection() {
  return (
    <Section width="wide">
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Kto to prowadzi
      </p>
      <h2 className="mx-auto mt-5 max-w-[24ch] text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Moja <span className="text-coral">Historia</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-11">
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-xl lg:mx-0 lg:max-w-none">
          <img
            src="https://ucarecdn.com/ba6c76cb-c90e-4605-94b8-d46909c23c8a/Screenshot20260804at90228PM.png"
            alt="Bartek Sikorski"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-ink">
            Bartek Sikorski
          </h3>
          <div className="mt-5 space-y-4 text-body leading-[1.7] text-ink-muted">
            <p>
              Zacząłem od{" "}
              <strong className="font-semibold text-ink">
                dwóch bankructw i pracy w magazynie DHL-u
              </strong>
              . W 2022 roku straciłem dziesiątki tysięcy złotych, bo nikt nie
              pokazał mi, jak dobrze zatrudniać — wyszkoliłem ludzi, ustawiłem
              złe rozliczenia, zostałem z groszami, a klienci nie zostali.
            </p>
            <p>
              Dziś prowadzę cztery własne studia treningowe. Procesy, CRM-y,
              skrypty i dokumenty, które dostajesz w programie, to nie są
              materiały napisane pod kurs —{" "}
              <em className="italic">
                to te same pliki, które działają w moich studiach codziennie,
                od lat
              </em>{" "}
              i które pozwalają mi wyjeżdżać dziesięć razy w roku.
            </p>
            <p>
              Mój przełom nie polegał na przejściu z{" "}
              <strong className="font-semibold text-ink">Rzemieślnika</strong>{" "}
              na <strong className="font-semibold text-ink">Architekta</strong>
              . Dochód Rzemieślnika ma sufit ustalony przez liczbę godzin w dobie. Architekt projektuje system,
              który zarabia także wtedy, gdy on jest na wakacjach.
            </p>
            <p>
              Uczę w tym programie tego, czego sam musiałem nauczyć się przez kilka lat metodą
              prób i błędów.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line px-4 py-3 text-sm text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-body text-ink-muted">
            Na czwartkowych sesjach marketingowych pracuje z Tobą{" "}
            <strong className="font-semibold text-ink">Kornelia</strong> czyli
            managerka kilku studio Sportowe Przedmieście — klikacie kampanie na żywo, w Twoim koncie i na Twoim budżecie.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#kalendarz"
          className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-coral bg-coral-bright px-8 py-5 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-coral-dark hover:bg-coral-dark sm:text-2xl"
        >
          <CalendarCheck className="h-6 w-6 shrink-0" />
          Wybierz termin rozmowy
        </a>
      </div>
    </Section>
  );
}
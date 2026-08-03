import { CheckItem } from "@/components/ui/check-item";
import { Section } from "@/components/ui/section";

const CONTACT_EMAIL = "bartlomiej.sikorski.96@gmail.com";

const DATA_SCOPE = [
  "imię i nazwisko",
  "adres e-mail",
  "numer telefonu",
  "NIP (w przypadku przedsiębiorców)",
  "adres zamieszkania lub siedziby",
  "dane dotyczące transakcji i płatności",
  "dane przekazane dobrowolnie w formularzach",
  "dane dotyczące korzystania ze strony (adres IP, cookies – jeśli używane)",
];

const PURPOSES = [
  {
    label: "realizacji umowy",
    basis: "art. 6 ust. 1 lit. b RODO",
  },
  {
    label: "obowiązków księgowych",
    basis: "art. 6 ust. 1 lit. c RODO",
  },
  {
    label: "działań marketingowych na podstawie zgody",
    basis: "art. 6 ust. 1 lit. a RODO",
  },
  {
    label: "analitycznych, statystycznych i remarketingowych",
    basis: "art. 6 ust. 1 lit. f RODO",
  },
  {
    label: "ustalenia lub dochodzenia roszczeń",
    basis: "art. 6 ust. 1 lit. f RODO",
  },
];

const RECIPIENTS = [
  "firmom księgowym i IT",
  "dostawcom usług mailingowych i CRM (np. GoHighLevel)",
  "operatorom płatności (np. Stripe, PayNow)",
  "narzędziom marketingowym (Meta/Facebook, Google)",
  "organom publicznym w zakresie wymaganym przez przepisy",
];

const RETENTION = [
  "zgodnie z przepisami podatkowymi i księgowymi (min. 5 lat)",
  "do czasu wycofania zgody",
  "do upływu okresu przedawnienia roszczeń",
];

const RIGHTS = [
  "dostępu do danych",
  "sprostowania",
  "usunięcia",
  "ograniczenia przetwarzania",
  "sprzeciwu",
  "przenoszenia danych",
  "wycofania zgody w dowolnym momencie",
];

export function PrivacyPolicySection() {
  return (
    <Section>
      <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
        Dokument prawny
      </p>
      <h1 className="mx-auto mt-5 text-center font-display text-[clamp(1.9rem,4.4vw,2.75rem)] font-bold leading-tight text-ink text-balance">
        Polityka Prywatności
      </h1>
      <p className="mt-4 text-center text-sm text-ink-subtle">
        Data wejścia w życie: 19 sierpnia 2025 r.
      </p>

      <div className="mt-12 space-y-12 text-body leading-[1.7] text-ink-muted">
        {/* 1. Informacje ogólne */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            1. Informacje ogólne
          </h2>
          <p className="mt-4">
            Niniejsza Polityka Prywatności określa zasady przetwarzania i
            ochrony danych osobowych w związku z działalnością gospodarczą
            prowadzoną przez{" "}
            <strong className="font-semibold text-ink">
              SPORTOWE PRZEDMIEŚCIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
            </strong>{" "}
            z siedzibą przy ul. Partyzantów 42B, 99-200 Poddębice, wpisaną do
            Krajowego Rejestru Sądowego pod numerem{" "}
            <strong className="font-semibold text-ink">
              KRS: 0001189312
            </strong>
            , <strong className="font-semibold text-ink">NIP 8281424752</strong>
            , <strong className="font-semibold text-ink">REGON 542481505</strong>
            , kapitał zakładowy{" "}
            <strong className="font-semibold text-ink">5 000,00 PLN</strong>.
          </p>
        </div>

        <hr className="border-line" />

        {/* 2. Administrator danych */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            2. Administrator danych
          </h2>
          <p className="mt-4">Administratorem danych osobowych jest:</p>

          <div className="mt-5 rounded-xl border border-line border-t-[3px] border-t-coral-bright p-6 sm:p-7">
            <p className="font-display text-lg font-bold text-ink">
              SPORTOWE PRZEDMIEŚCIE SP. Z O.O.
            </p>
            <p className="mt-1 text-body text-ink-muted">
              ul. Partyzantów 42B
              <br />
              99-200 Poddębice
            </p>
            <p className="mt-4 text-body text-ink-muted">
              Kontakt w sprawach związanych z przetwarzaniem danych
              osobowych:
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-coral underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <hr className="border-line" />

        {/* 3. Zakres przetwarzanych danych */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            3. Zakres przetwarzanych danych
          </h2>
          <p className="mt-4">
            Przetwarzane mogą być dane osobowe takie jak:
          </p>
          <ul className="mt-5 divide-y divide-line">
            {DATA_SCOPE.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 4. Cele i podstawy prawne przetwarzania */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            4. Cele i podstawy prawne przetwarzania
          </h2>
          <p className="mt-4">Dane osobowe przetwarzane są w celach:</p>
          <ul className="mt-5 divide-y divide-line">
            {PURPOSES.map((purpose) => (
              <CheckItem key={purpose.label} className="py-3">
                <p className="text-body text-ink-muted">
                  <span className="text-ink">{purpose.label}</span> —{" "}
                  <span className="italic">{purpose.basis}</span>
                </p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 5. Odbiorcy danych */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            5. Odbiorcy danych
          </h2>
          <p className="mt-4">Dane mogą być przekazywane m.in.:</p>
          <ul className="mt-5 divide-y divide-line">
            {RECIPIENTS.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 6. Okres przechowywania danych */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            6. Okres przechowywania danych
          </h2>
          <p className="mt-4">Dane są przechowywane:</p>
          <ul className="mt-5 divide-y divide-line">
            {RETENTION.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>
        </div>

        <hr className="border-line" />

        {/* 7. Prawa osób, których dane dotyczą */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            7. Prawa osób, których dane dotyczą
          </h2>
          <p className="mt-4">Osobie przysługuje prawo do:</p>
          <ul className="mt-5 divide-y divide-line">
            {RIGHTS.map((item) => (
              <CheckItem key={item} className="py-3">
                <p className="text-body text-ink-muted">{item}</p>
              </CheckItem>
            ))}
          </ul>

          <p className="mt-6">
            W celu realizacji praw należy kontaktować się pod adresem:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-coral underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>

          <p className="mt-4">
            Osoba ma również prawo złożyć skargę do Prezesa Urzędu Ochrony
            Danych Osobowych (UODO).
          </p>
        </div>

        <hr className="border-line" />

        {/* 8. Zmiany Polityki Prywatności */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            8. Zmiany Polityki Prywatności
          </h2>
          <p className="mt-4">
            Administrator zastrzega sobie prawo do wprowadzania zmian w
            niniejszej Polityce Prywatności. Zmiany obowiązują od momentu
            publikacji na stronie.
          </p>
        </div>

        <hr className="border-line" />

        {/* 9. Data wejścia w życie */}
        <div>
          <h2 className="font-display text-xl font-bold text-ink sm:text-[1.375rem]">
            9. Data wejścia w życie
          </h2>
          <p className="mt-4 font-semibold text-ink">19 sierpnia 2025 r.</p>
        </div>
      </div>
    </Section>
  );
}

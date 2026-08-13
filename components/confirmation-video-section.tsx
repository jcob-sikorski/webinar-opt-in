import { Section } from "@/components/ui/section";

interface ConfirmationVideoSectionProps {
  /** Pass a real embed (<iframe>/<video>) to replace the default Mux frame if needed. */
  videoEmbed?: React.ReactNode;
}

export function ConfirmationVideoSection({
  videoEmbed,
}: ConfirmationVideoSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        <span className="text-orange-600">Krótka Wiadomość</span> Ode Mnie
      </h2>
      <hr className="mx-auto mt-5 w-40 border-t-2 border-dashed border-orange-600/60" />

      {/* Added max-w-[260px] for mobile and sm:max-w-xs (320px) for slightly larger screens to keep the 9:16 video from becoming too tall */}
      <div className="relative mx-auto mt-9 max-w-[260px] overflow-hidden rounded-xl shadow-lg sm:max-w-xs">
        {videoEmbed ?? (
          <iframe
            src="https://player.mux.com/OM1SCoPFsNx86K4fE601c19RFqkHxu5ns38eAXEfTMsE"
            style={{ width: "100%", border: "none", aspectRatio: "9/16" }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        )}
      </div>

      <div className="mt-8 space-y-5 text-body-lg text-ink-muted">
        <p>
          Cześć, tu Bartek. Dzięki, że zarezerwowałeś miejsce —{" "}
          <strong className="font-semibold text-ink">
            naprawdę się cieszę, że tu jesteś
          </strong>
          .
        </p>
        <p>
          Jedna rzecz, o którą proszę już teraz:{" "}
          <strong className="font-semibold text-ink">
            zablokuj sobie 24 sierpnia, 20:00
          </strong>{" "}
          na żywo. Samo nagranie zostaje z Tobą na 5 dni —{" "}
          <em className="italic">
            ale Protokół Dochodowego Studia trafia tylko do osób, które
            zostaną na żywo do samego końca!
          </em>
        </p>
      </div>
    </Section>
  );
}
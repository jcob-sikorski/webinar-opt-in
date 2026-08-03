import { Play } from "lucide-react";

import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Section } from "@/components/ui/section";

interface ConfirmationVideoSectionProps {
  /** Pass a real embed (<iframe>/<video>) to replace the placeholder frame. */
  videoEmbed?: React.ReactNode;
}

export function ConfirmationVideoSection({
  videoEmbed,
}: ConfirmationVideoSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-[1.875rem] font-bold leading-tight sm:text-[2.375rem]">
        Zanim Się Rozłączysz —<br />
        <span className="text-coral">Krótka Wiadomość</span> Ode Mnie
      </h2>
      <hr className="mx-auto mt-5 w-40 border-t-2 border-dashed border-coral-bright/60" />

      <div className="relative mx-auto mt-9 overflow-hidden rounded-xl">
        {videoEmbed ?? (
          <div className="relative">
            <PhotoPlaceholder
              aspect="aspect-video"
              label="Wiadomość wideo — Bartek Sikorski"
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/80">
                <Play className="ml-0.5 h-6 w-6 text-white" fill="currentColor" />
              </span>
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-5 text-body-lg text-ink-muted">
        <p>
          Cześć, tu Bartek. Dzięki, że zarezerwowałaś/eś miejsce —{" "}
          <strong className="font-semibold text-ink">
            naprawdę się cieszę, że tu jesteś
          </strong>
          . W tym krótkim nagraniu mówię dokładnie, czego się spodziewać na
          warsztacie i jak się do niego najlepiej przygotować.
        </p>
        <p>
          Jedna rzecz, o którą proszę już teraz:{" "}
          <strong className="font-semibold text-ink">
            zablokuj sobie 14 sierpnia, 19:00
          </strong>{" "}
          na żywo, a nie na &bdquo;obejrzę nagranie później&rdquo;. Samo
          nagranie zostaje z Tobą na lata —{" "}
          <em className="italic">
            ale Protokół Dochodowego Studia trafia tylko do osób, które
            zostaną na żywo do samego końca
          </em>
          . To jedna z trzech rzeczy, o które proszę na starcie warsztatu.
        </p>
      </div>
    </Section>
  );
}

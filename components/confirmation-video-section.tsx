import { Section } from "@/components/ui/section";

interface ConfirmationVideoSectionProps {
  /** Pass a real embed (<iframe>/<video>) to replace the default Mux frame if needed. */
  videoEmbed?: React.ReactNode;
}

export function ConfirmationVideoSection({
  videoEmbed,
}: ConfirmationVideoSectionProps) {
  return (
    <Section className="bg-[#fcfbf9]">
      <div className="mx-auto max-w-3xl text-center">
        {/* Nagłówek w narracyjnym stylu strony */}
        <h2 className="mx-auto max-w-[24ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold italic leading-[1.12] tracking-[-0.02em] text-ink text-balance">
          Czego się <span className="text-[#ef6b4a]">spodziewać?</span>
        </h2>

        {/* Lead sprzedażowy przed wideo */}
        <div className="mx-auto mt-6 max-w-2xl text-pretty font-display text-lg italic leading-[1.75] text-gray-700 sm:text-xl">
          <p>
            Doceniam, że jesteś —{" "}
            <strong className="font-semibold not-italic text-gray-900">
              to pokazuje, że poważnie myślisz o przejściu z pracy na sali do budowy stabilnego biznesu.
            </strong>
          </p>
        </div>

        {/* Wideo w pionowym kadrze 9:16 */}
        <div className="relative mx-auto mt-10 max-w-[260px] overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:max-w-[300px]">
          {videoEmbed ?? (
            <iframe
              src="https://player.mux.com/OM1SCoPFsNx86K4fE601c19RFqkHxu5ns38eAXEfTMsE"
              style={{ width: "100%", border: "none", aspectRatio: "9/16" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </Section>
  );
}
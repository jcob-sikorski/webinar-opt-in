import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

export interface CaseStudy {
  name: string;
  figure: string;
  description: string;
  /** Pass an <img>/<Image> to replace the placeholder slot. */
  photo?: React.ReactNode;
}

export function CaseStudyCard({ name, figure, description, photo }: CaseStudy) {
  return (
    <article className="overflow-hidden rounded-lg border border-line border-l-[3px] border-l-coral-bright bg-panel">
      <div className="flex flex-col-reverse items-start gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="mt-1.5 text-2xl font-bold text-coral">{figure}</p>
          <p className="mt-3 text-body text-ink-muted">{description}</p>
        </div>

        {/* Photo slot */}
        <div className="w-full max-w-[10.5rem] shrink-0 self-center sm:self-start">
          {photo ?? <PhotoPlaceholder aspect="aspect-[3/4]" />}
        </div>
      </div>
    </article>
  );
}

import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  /** Aspect ratio utility, e.g. `aspect-[4/3]`. */
  aspect?: string;
  /** Shown under the icon so each slot says what belongs there. */
  label?: string;
  rounded?: string;
  className?: string;
}

/** Reserved space for artwork that hasn't been supplied yet. */
export function PhotoPlaceholder({
  aspect,
  label = "Photo",
  rounded = "rounded-lg",
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-1.5 border border-dashed border-ink/25 bg-panel text-ink-subtle",
        aspect,
        rounded,
        className
      )}
    >
      <ImageIcon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.08em]">
        {label}
      </span>
    </div>
  );
}

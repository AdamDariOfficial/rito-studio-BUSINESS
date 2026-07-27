import { cn } from "@/lib/utils";

type Tone = "canvas" | "surface" | "ink" | "accent";

interface ImagePlaceholderProps {
  ratio: string;
  tone?: Tone;
  label?: string;
  className?: string;
}

const toneClass: Record<Tone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  ink: "bg-ink text-white",
  accent: "bg-accent text-white",
};

/**
 * Editorial photo placeholder. Uses stable aspect ratio to prevent layout
 * shift while curated photography is pending review (see docs/ASSET_PLAN.md).
 * Decorative — carries empty alt semantics via role="img" + aria-label only
 * when a label is provided.
 */
export function ImagePlaceholder({
  ratio,
  tone = "surface",
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "relative w-full overflow-hidden",
        toneClass[tone],
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, currentColor 0.6px, transparent 0.7px), radial-gradient(circle at 70% 80%, currentColor 0.5px, transparent 0.6px)",
          backgroundSize: "14px 14px, 22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, transparent 55%, rgba(27,26,24,0.06) 100%)",
        }}
      />
    </div>
  );
}

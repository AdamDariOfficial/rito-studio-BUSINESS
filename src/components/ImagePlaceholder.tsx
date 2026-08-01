import { cn } from "@/lib/utils";

type Tone = "canvas" | "surface" | "ink" | "accent";
type ImageLoading = "eager" | "lazy";
type FetchPriority = "high" | "low" | "auto";

interface ImagePlaceholderProps {
  ratio: string;
  tone?: Tone;
  label?: string;
  className?: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
  loading?: ImageLoading;
  fetchPriority?: FetchPriority;
  sizes?: string;
}

const toneClass: Record<Tone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  ink: "bg-ink text-white",
  accent: "bg-accent text-white",
};

/**
 * Stable editorial media frame. It renders a local curated image when `src`
 * is provided and preserves the mineral placeholder fallback for incomplete
 * asset sets. The declared aspect ratio prevents layout shift in both modes.
 */
export function ImagePlaceholder({
  ratio,
  tone = "surface",
  label,
  className,
  src,
  alt = "",
  objectPosition = "50% 50%",
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
}: ImagePlaceholderProps) {
  const hasImage = Boolean(src);

  return (
    <div
      role={!hasImage && label ? "img" : undefined}
      aria-label={!hasImage ? label : undefined}
      aria-hidden={!hasImage && !label ? true : undefined}
      className={cn("relative w-full overflow-hidden", toneClass[tone], className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          sizes={sizes}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <>
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
              background: "linear-gradient(160deg, transparent 55%, rgba(27,26,24,0.06) 100%)",
            }}
          />
        </>
      )}
    </div>
  );
}

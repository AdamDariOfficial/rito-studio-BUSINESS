import { useRef } from "react";
import { ctaLabels, site } from "@/lib/site-config";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useReveal } from "@/hooks/use-reveal";

interface HeroProps {
  onBookClick: (trigger: HTMLElement) => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const bookRef = useRef<HTMLButtonElement>(null);
  const imageRef = useReveal<HTMLDivElement>();

  return (
    <section
      aria-label="Introduzione"
      className="relative overflow-hidden pt-[calc(var(--header-height)+40px)] pb-20 md:pt-[calc(var(--header-height)+80px)] md:pb-32"
    >
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Left column: text — 7/12 on desktop */}
          <div className="md:col-span-7 md:pr-6">
            <p className="eyebrow" data-reveal style={{ ["--reveal-delay" as string]: "0ms" }}>
              Beauty &amp; Care Atelier · Padova
            </p>

            <h1
              className="mt-6 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.98] tracking-[-0.015em] text-ink md:mt-8"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              La bellezza,
              <br />
              <span className="italic text-accent">nel suo ritmo.</span>
            </h1>

            <p
              className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              Un atelier contemporaneo dedicato a capelli, pelle e benessere. Trattamenti su misura,
              gesti precisi e il tempo necessario per ascoltarti.
            </p>

            <div
              className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-4"
              data-reveal
              style={{ ["--reveal-delay" as string]: "220ms" }}
            >
              <button
                ref={bookRef}
                type="button"
                onClick={() => onBookClick(bookRef.current!)}
                className="inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-strong hover:border-accent-strong"
              >
                {ctaLabels.bookPrimary}
              </button>
              <a
                href="#trattamenti"
                className="inline-flex min-h-12 items-center justify-center border border-ink px-6 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {ctaLabels.discoverTreatments}
              </a>
            </div>
          </div>

          {/* Right column: image — 5/12, offset down */}
          <div className="md:col-span-5 md:pt-16">
            <div
              ref={imageRef}
              data-reveal
              className="hero-image relative"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <ImagePlaceholder
                ratio="4 / 5"
                tone="surface"
                label="Gesto professionale durante un trattamento — asset in curazione"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>RITO · 2026</span>
                <span aria-hidden>—</span>
                <span>{site.contact.locationLabel.split(" · ")[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Microcopy rail */}
        <div
          className="mt-16 flex items-center gap-4 border-t border-line pt-6 md:mt-24"
          data-reveal
          style={{ ["--reveal-delay" as string]: "260ms" }}
        >
          <span aria-hidden className="h-px w-10 bg-ink" />
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Padova · Solo su appuntamento
          </p>
        </div>
      </div>
    </section>
  );
}

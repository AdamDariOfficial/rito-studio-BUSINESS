import { useRef } from "react";
import { ctaLabels } from "@/lib/site-config";

interface BookingCTAProps {
  onBookClick: (trigger: HTMLElement) => void;
}

export function BookingCTA({ onBookClick }: BookingCTAProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <section aria-labelledby="booking-cta-heading" className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="relative border border-ink bg-canvas p-8 md:p-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow">Prenota</p>
              <h2
                id="booking-cta-heading"
                className="mt-4 font-display text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.05] text-ink"
                data-reveal
              >
                Dedica tempo a ciò che ti fa <span className="italic">stare bene.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-8">
              <p
                className="text-base leading-relaxed text-muted md:text-lg"
                data-reveal
                style={{ ["--reveal-delay" as string]: "80ms" }}
              >
                Raccontaci cosa stai cercando. Ti aiutiamo a scegliere il trattamento e il momento
                più adatto.
              </p>
              <button
                ref={btnRef}
                type="button"
                onClick={() => onBookClick(btnRef.current!)}
                className="mt-8 inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong hover:border-accent-strong"
              >
                {ctaLabels.requestAppointment}
              </button>
            </div>
          </div>
          {/* Accent detail */}
          <span aria-hidden className="absolute -top-px left-8 h-2 w-16 bg-accent" />
        </div>
      </div>
    </section>
  );
}

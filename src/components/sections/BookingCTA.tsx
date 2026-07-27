import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export function BookingCTA({ onBook }: { onBook: () => void }) {
  return (
    <section id="contatti" className="border-t border-line bg-accent text-paper">
      <div className="container-rito py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <Reveal as="p" className="eyebrow text-paper/70">Prossimo passo</Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-paper"
            >
              Dedica tempo a ciò che ti fa stare bene.
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-lg text-base leading-relaxed text-paper/85 md:text-lg"
            >
              Raccontaci cosa stai cercando. Ti aiutiamo a scegliere il
              trattamento e il momento più adatto.
            </Reveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <Reveal delay={200}>
              <button
                onClick={onBook}
                className="inline-flex h-12 items-center rounded-[3px] bg-paper px-7 text-sm font-medium text-ink transition-colors hover:bg-canvas"
              >
                {siteConfig.booking.ctaFinal}
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

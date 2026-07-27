import heroImg from "@/assets/hero.jpg";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="bg-canvas">
      <div className="container-rito pt-10 pb-16 md:pt-16 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="order-1 md:col-span-7 md:pr-8">
            <Reveal as="p" className="eyebrow">
              Beauty &amp; Care Atelier · Padova
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="mt-5 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] tracking-[-0.015em]"
            >
              La bellezza,
              <br />
              <span className="italic">nel suo ritmo.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted md:text-lg"
            >
              Un atelier contemporaneo dedicato a capelli, pelle e benessere.
              Trattamenti su misura, gesti precisi e il tempo necessario per
              ascoltarti.
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onBook}
                className="inline-flex h-12 items-center rounded-[3px] bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
              >
                {siteConfig.booking.ctaPrimary}
              </button>
              <a
                href="#trattamenti"
                className="inline-flex h-12 items-center rounded-[3px] border border-ink px-6 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {siteConfig.booking.ctaSecondary}
              </a>
            </Reveal>
          </div>

          <div className="order-2 md:col-span-5">
            <Reveal variant="image" className="block">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <img
                  src={heroImg}
                  alt="Dettaglio editoriale di un gesto di cura sui capelli"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs tracking-wide text-muted">
                Padova · Solo su appuntamento
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

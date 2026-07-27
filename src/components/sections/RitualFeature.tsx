import ritualImg from "@/assets/ritual.jpg";
import { Reveal } from "@/components/motion/Reveal";

export function RitualFeature() {
  return (
    <section className="border-t border-line bg-canvas">
      <div className="container-rito py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          <div className="order-1 md:col-span-6">
            <Reveal as="p" className="eyebrow">RITO 01</Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-5 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15]"
            >
              Un trattamento non dovrebbe iniziare dalla fretta.
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Prima osserviamo, ascoltiamo e definiamo insieme il risultato.
              Poi scegliamo tecnica, prodotti e tempi con un approccio misurato
              e trasparente.
            </Reveal>
            <Reveal delay={220} className="mt-8">
              <a
                href="#metodo"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                  Scopri il metodo
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <div className="order-2 md:col-span-6">
            <Reveal variant="image">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <img
                  src={ritualImg}
                  alt="Composizione di prodotti e tessuti per un rituale di cura"
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

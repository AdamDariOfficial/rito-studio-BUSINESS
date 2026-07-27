import studioImg from "@/assets/studio.jpg";
import { Reveal } from "@/components/motion/Reveal";

export function StudioEditorial() {
  return (
    <section id="studio" className="border-t border-line bg-canvas">
      <div className="container-rito py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="order-2 md:order-1 md:col-span-7">
            <Reveal variant="image">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface">
                <img
                  src={studioImg}
                  alt="Interno dello studio con luce naturale, tende in lino e postazione essenziale"
                  width={1600}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 md:col-span-5 md:pt-6">
            <Reveal as="p" className="eyebrow">Lo spazio</Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-5 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15]"
            >
              Un ambiente quieto,
              <br />
              <span className="italic">costruito intorno al gesto.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Luce morbida, materiali naturali e postazioni essenziali. Lo
              studio lascia spazio alla relazione, al lavoro e al tempo
              personale.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  { src: g1, alt: "Dettaglio di una manicure essenziale", ratio: "aspect-[4/5]", w: 1000, h: 1250 },
  { src: g2, alt: "Forbici e pettine su superficie in lino", ratio: "aspect-[4/3]", w: 1200, h: 900 },
  { src: g3, alt: "Disegno delle sopracciglia in luce naturale", ratio: "aspect-[4/5]", w: 1000, h: 1250 },
  { src: g4, alt: "Asciugamani in lino piegati su una mensola", ratio: "aspect-[4/3]", w: 1200, h: 900 },
];

export function GalleryRail() {
  return (
    <section className="border-t border-line bg-canvas">
      <div className="container-rito py-16 md:py-24">
        <Reveal as="p" className="eyebrow">Frammenti</Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-xl font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2]"
        >
          Dettagli, materia, tempo.
        </Reveal>
      </div>

      <div className="overflow-x-auto pb-16 md:pb-24">
        <ul
          className="container-rito flex gap-4 md:gap-6"
          style={{ minWidth: "100%" }}
        >
          {items.map((it, i) => (
            <li
              key={i}
              className="flex-none basis-[78%] sm:basis-[46%] md:basis-[32%] lg:basis-[26%]"
            >
              <Reveal variant="image" delay={i * 60}>
                <div className={`relative w-full overflow-hidden bg-surface ${it.ratio}`}>
                  <img
                    src={it.src}
                    alt={it.alt}
                    width={it.w}
                    height={it.h}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { methodPrinciples } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";

export function MethodStrip() {
  return (
    <section id="metodo" className="border-t border-line bg-ink text-paper">
      <div className="container-rito py-20 md:py-28">
        <Reveal as="p" className="eyebrow text-paper/70">
          Tre principi
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] text-paper"
        >
          Un metodo semplice, tenuto con costanza.
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-16">
          {methodPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <p className="font-display text-sm text-paper/50">{p.index}</p>
              <h3 className="mt-3 font-display text-2xl text-paper md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/75 md:text-base">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

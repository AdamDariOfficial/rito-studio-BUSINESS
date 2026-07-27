import { Reveal } from "@/components/motion/Reveal";

export function IntroStatement() {
  return (
    <section className="border-t border-line bg-canvas">
      <div className="container-rito py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">Il nostro modo</Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal
              as="h2"
              className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.15]"
            >
              La cura comincia dall’ascolto.
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            >
              Ogni appuntamento parte da ciò che cerchi, dal tempo che hai e da
              come vuoi sentirti. Costruiamo il trattamento insieme, con
              attenzione alla persona e senza gesti automatici.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

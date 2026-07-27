export function IntroStatement() {
  return (
    <section aria-labelledby="intro-heading" className="py-24 md:py-36">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow" data-reveal>
              Il nostro modo
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2
              id="intro-heading"
              className="font-display text-[clamp(1.9rem,4.6vw,3.75rem)] leading-[1.05] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              La cura comincia <span className="italic">dall&apos;ascolto.</span>
            </h2>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              Ogni appuntamento parte da ciò che cerchi, dal tempo che hai e da
              come vuoi sentirti. Costruiamo il trattamento insieme, con
              attenzione alla persona e senza gesti automatici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

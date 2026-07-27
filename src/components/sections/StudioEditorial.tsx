import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function StudioEditorial() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] py-24 md:py-36"
    >
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow" data-reveal>
              Lo spazio
            </p>
            <h2
              id="studio-heading"
              className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.05] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Un ambiente quieto,
              <br />
              costruito <span className="italic">intorno al gesto.</span>
            </h2>
            <p
              className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              Luce morbida, materiali naturali e postazioni essenziali. Lo
              studio lascia spazio alla relazione, al lavoro e al tempo
              personale.
            </p>
          </div>
          <div className="md:col-span-7" data-reveal>
            <ImagePlaceholder
              ratio="16 / 10"
              tone="canvas"
              className="border border-line"
              label="Interno dello studio — asset in curazione"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

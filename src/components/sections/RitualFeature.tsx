import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function RitualFeature() {
  return (
    <section aria-labelledby="ritual-heading" className="py-24 md:py-40">
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Text — mobile first per editorial rule */}
          <div className="md:col-span-6 md:col-start-7 md:pt-16">
            <p className="eyebrow" data-reveal>
              RITO 01
            </p>
            <h2
              id="ritual-heading"
              className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.05] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Un trattamento non dovrebbe iniziare{" "}
              <span className="italic">dalla fretta.</span>
            </h2>
            <p
              className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              Prima osserviamo, ascoltiamo e definiamo insieme il risultato.
              Poi scegliamo tecnica, prodotti e tempi con un approccio misurato
              e trasparente.
            </p>
            <div
              className="mt-8"
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
            >
              <a href="#metodo" className="link-underline text-sm">
                Scopri il metodo
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className="row-start-1 md:col-span-5 md:col-start-1 md:row-start-auto"
            data-reveal
          >
            <ImagePlaceholder
              ratio="3 / 4"
              tone="ink"
              label="Mani e strumento durante il rituale — asset in curazione"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

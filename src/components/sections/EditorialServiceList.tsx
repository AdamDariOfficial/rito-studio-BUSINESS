import { Link } from "@tanstack/react-router";
import { servicesNote, treatmentCategories, treatments } from "@/data/treatments";

export function EditorialServiceList() {
  return (
    <section
      id="trattamenti"
      aria-labelledby="trattamenti-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] bg-surface py-20 md:py-28"
    >
      <div className="container-editorial">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow" data-reveal>
              Trattamenti
            </p>
            <h2
              id="trattamenti-heading"
              className="mt-4 font-display text-[clamp(2rem,4vw,3.35rem)] leading-[1.02] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Rituali essenziali,
              <br />
              <span className="italic">pensati per te.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p
              className="max-w-xl text-base leading-relaxed text-muted-on-surface md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              Una selezione di servizi per capelli, viso, mani e benessere. Durata e percorso
              vengono definiti durante la consulenza.
            </p>
          </div>
        </div>

        <ol className="mt-12 border-t border-line md:mt-16">
          {treatmentCategories.map((category) => (
            <li
              key={category.name}
              className="grid gap-5 border-b border-line py-7 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="flex items-baseline gap-4 md:col-span-4" data-reveal>
                <span className="font-display text-2xl text-accent">{category.index}</span>
                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  {category.name}
                </h3>
              </div>
              <ul className="grid text-sm text-ink md:col-span-8 md:col-start-5 md:grid-cols-2 md:gap-x-8 md:text-base">
                {treatments
                  .filter((item) => item.category === category.id)
                  .map((item, index) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-t border-line/70 py-3 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${index * 45}ms` }}
                    >
                      <Link
                        to="/trattamenti/$slug"
                        params={{ slug: item.slug }}
                        className="min-w-0 underline-offset-4 hover:text-accent hover:underline"
                      >
                        {item.name}
                      </Link>
                      <span className="shrink-0 whitespace-nowrap font-medium tabular-nums text-accent-strong">
                        {item.priceLabel}
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-xs italic leading-relaxed text-muted-on-surface">
          {servicesNote}
        </p>
        <Link
          to="/trattamenti"
          className="mt-8 inline-flex min-h-11 items-center border-b border-ink text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Esplora il catalogo completo
        </Link>
      </div>
    </section>
  );
}

import { serviceCategories, servicesNote } from "@/lib/site-config";

export function EditorialServiceList() {
  return (
    <section
      id="trattamenti"
      aria-labelledby="trattamenti-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] bg-surface py-24 md:py-36"
    >
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow" data-reveal>
              Trattamenti
            </p>
            <h2
              id="trattamenti-heading"
              className="mt-4 font-display text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.02] text-ink"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Rituali essenziali,
              <br />
              <span className="italic">pensati per te.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p
              className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              Una selezione di servizi per capelli, viso, mani e benessere. Durata e percorso
              vengono definiti durante la consulenza.
            </p>
          </div>
        </div>

        <ol className="mt-16 border-t border-line md:mt-24">
          {serviceCategories.map((cat) => (
            <li
              key={cat.name}
              className="grid gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
              data-reveal
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-display text-2xl text-accent">{cat.index}</span>
                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  {cat.name}
                </h3>
              </div>
              <ul className="md:col-span-8 md:col-start-5">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink md:text-base">
                  {cat.items.map((item, i) => (
                    <li key={item} className="flex items-center gap-3">
                      {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-line" />}
                      <span>{item}</span>
                    </li>
                  ))}
                </div>
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-xs italic leading-relaxed text-muted">{servicesNote}</p>
      </div>
    </section>
  );
}

import { serviceCategories } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";

export function EditorialServiceList() {
  return (
    <section id="trattamenti" className="border-t border-line bg-surface/60">
      <div className="container-rito py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal as="p" className="eyebrow">Trattamenti</Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1]"
            >
              Rituali essenziali,
              <br />
              <span className="italic">pensati per te.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Una selezione di servizi per capelli, viso, mani e benessere.
              Durata e percorso vengono definiti durante la consulenza.
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-line border-t border-line">
              {serviceCategories.map((cat) => (
                <li key={cat.name}>
                  <Reveal className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-8 md:grid-cols-[64px_1fr_auto] md:py-10">
                    <span className="font-display text-sm text-accent md:text-base">
                      {cat.index}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">
                        {cat.name}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted md:text-base">
                        {cat.intro}
                      </p>
                    </div>
                    <ul className="col-span-2 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted md:col-span-1 md:mt-0 md:max-w-[220px] md:flex-col md:items-end md:text-right">
                      {cat.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal as="p" delay={80} className="mt-8 text-xs text-muted">
              Servizi e prezzi presenti nel concept sono dimostrativi e vanno
              configurati per il cliente reale.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    index: "I",
    name: "Ascolto",
    body:
      "Una consulenza breve e concreta per capire esigenze, abitudini e aspettative.",
  },
  {
    index: "II",
    name: "Precisione",
    body:
      "Tecniche, prodotti e tempi scelti in base al servizio, non a un protocollo indistinto.",
  },
  {
    index: "III",
    name: "Continuità",
    body:
      "Indicazioni semplici per mantenere il risultato e pianificare il prossimo appuntamento.",
  },
] as const;

export function MethodStrip() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] border-y border-line bg-canvas py-20 md:py-28"
    >
      <div className="container-editorial">
        <p id="metodo-heading" className="eyebrow" data-reveal>
          Tre principi
        </p>
        <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
          {principles.map((p, i) => (
            <li
              key={p.name}
              className="border-t border-ink pt-6"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm italic text-accent">
                  {p.index}
                </span>
                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  {p.name}
                </h3>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

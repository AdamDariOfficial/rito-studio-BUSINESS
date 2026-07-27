import { site } from "@/lib/site-config";

export function PracticalInfo() {
  return (
    <section
      id="contatti"
      aria-labelledby="contatti-heading"
      className="scroll-mt-[calc(var(--header-height)+24px)] border-t border-line py-20 md:py-28"
    >
      <div className="container-editorial">
        <p id="contatti-heading" className="eyebrow">
          Informazioni pratiche
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <p className="font-display text-3xl text-ink">{site.contact.city}</p>
          </div>
          <div>
            <dl className="space-y-2 text-sm text-ink">
              {site.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-6 border-b border-line pb-2">
                  <dt className="text-muted">{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-ink">
              <li>
                <a href={site.contact.phoneHref} className="text-ink">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="text-ink">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

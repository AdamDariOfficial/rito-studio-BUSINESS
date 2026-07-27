import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export function PracticalInfo() {
  return (
    <section className="border-t border-line bg-canvas">
      <div className="container-rito py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal as="p" className="eyebrow">Informazioni pratiche</Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2]"
            >
              Trovaci a Padova, su appuntamento.
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Orari</p>
              <ul className="mt-4 space-y-2 text-sm md:text-base">
                {siteConfig.hours.map((r) => (
                  <li key={r.days} className="flex justify-between gap-6 border-b border-line py-2">
                    <span>{r.days}</span>
                    <span className="text-muted">{r.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Contatti</p>
              <ul className="mt-4 space-y-3 text-sm md:text-base">
                <li>{siteConfig.contact.city}</li>
                <li>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

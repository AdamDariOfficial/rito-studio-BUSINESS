import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { SiteShell } from "@/components/SiteShell";
import { buildHead, routeSeo } from "@/lib/seo";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/studio")({
  head: () => buildHead(routeSeo.studio),
  component: StudioPage,
});

const studioSections = [
  {
    title: "Filosofia",
    body: "Ogni appuntamento parte da ciò che cerchi, dal tempo che hai e da come vuoi sentirti. Il percorso viene costruito insieme, senza gesti automatici.",
  },
  {
    title: "Metodo",
    body: "Ascolto, precisione e continuità orientano la consulenza, la scelta del servizio e le indicazioni successive.",
  },
  {
    title: "Prodotti e materiali",
    body: "La selezione definitiva di prodotti e materiali deve essere documentata dal cliente reale. Il concept non attribuisce marchi o qualità non verificate.",
  },
  {
    title: "Igiene e cura",
    body: "Procedure, frequenze e responsabilità devono essere confermate per lo spazio reale. La demo comunica attenzione senza inventare protocolli o certificazioni.",
  },
] as const;

function StudioPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Lo studio"
        title={
          <>
            Uno spazio pensato per lavorare bene e farti sentire{" "}
            <span className="italic text-accent">a tuo agio.</span>
          </>
        }
        intro="Luce morbida, materiali naturali e postazioni essenziali. Lo spazio lascia posto alla relazione, al lavoro e al tempo personale."
      />
      <section className="py-16 md:py-24" aria-label="Ambiente dello studio">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8" data-reveal>
            <ImagePlaceholder
              ratio="16 / 10"
              src="/images/rito/rito-studio-wide.webp"
              alt="Interno luminoso di uno studio beauty con postazioni e specchi"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>
          <div className="md:col-span-4 md:pt-12" data-reveal>
            <ImagePlaceholder
              ratio="3 / 4"
              src="/images/rito/rito-ritual-feature.webp"
              alt="Mani di una professionista durante una manicure di precisione"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section
        className="border-y border-line bg-surface py-16 md:py-24"
        aria-labelledby="studio-details-heading"
      >
        <div className="container-editorial">
          <h2 id="studio-details-heading" className="sr-only">
            Filosofia e metodo dello studio
          </h2>
          <ol className="border-t border-line">
            {studioSections.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8"
                data-reveal
              >
                <span className="font-display text-xl text-accent md:col-span-1">0{index + 1}</span>
                <h3 className="font-display text-3xl text-ink md:col-span-4">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted md:col-span-6 md:col-start-7">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 md:py-24" aria-labelledby="studio-access-heading">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Accessibilità</p>
            <h2
              id="studio-access-heading"
              className="mt-4 font-display text-3xl text-ink md:text-4xl"
            >
              Informazioni da confermare, prima della visita.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="leading-relaxed text-muted">{site.contact.accessibility}</p>
            <p className="mt-4 leading-relaxed text-muted">{site.contact.directions}</p>
            <Link
              to="/contatti"
              className="mt-7 inline-flex min-h-11 items-center border-b border-ink text-sm font-medium text-ink"
            >
              Vedi le informazioni pratiche
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

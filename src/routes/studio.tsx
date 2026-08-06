import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { EditorialArrow } from "@/components/EditorialArrow";
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
    body: "Ogni appuntamento parte dall’ascolto: ciò che cerchi, il tempo che hai e il modo in cui vuoi sentirti.",
  },
  {
    title: "Metodo",
    body: "Consulenza, precisione e continuità guidano ogni scelta, dall’inizio alle indicazioni successive.",
  },
  {
    title: "Prodotti e materiali",
    body: "Ogni elemento accompagna il servizio con misura, coerenza e attenzione al risultato desiderato.",
  },
  {
    title: "Igiene e cura",
    body: "Ordine, preparazione e attenzione allo spazio fanno parte dell’esperienza, prima ancora del gesto.",
  },
] as const;

function StudioPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Lo studio"
        title={
          <>
            Uno spazio <span className="italic text-accent">per te.</span>
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
        className="relative overflow-hidden bg-ink py-20 md:py-32"
        aria-labelledby="studio-details-heading"
      >
        <span aria-hidden className="absolute left-0 top-0 h-px w-1/3 bg-accent" />
        <div className="container-editorial grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-[calc(var(--header-height)+3rem)]">
              <p className="eyebrow text-surface" data-reveal>
                La nostra direzione
              </p>
              <h2
                id="studio-details-heading"
                className="mt-5 max-w-sm font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.02em] text-white"
                data-reveal
                style={{ ["--reveal-delay" as string]: "60ms" }}
              >
                Il modo <span className="italic">RITO.</span>
              </h2>
              <p
                className="mt-7 max-w-sm text-base leading-relaxed text-surface md:text-lg"
                data-reveal
                style={{ ["--reveal-delay" as string]: "120ms" }}
              >
                La cura prende forma nell’incontro tra ascolto, precisione e un tempo scelto con
                intenzione.
              </p>
            </div>
          </div>

          <ol className="border-t border-white/20 md:col-span-7 md:col-start-6">
            {studioSections.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-4 border-b border-white/20 py-8 md:grid-cols-[4rem_1fr] md:gap-x-8 md:py-10"
                data-reveal
              >
                <span className="font-display text-xl text-surface">0{index + 1}</span>
                <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-surface md:col-start-2 md:mt-2 md:text-base">
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
              Prima della visita.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="leading-relaxed text-muted">{site.contact.accessibility}</p>
            <p className="mt-4 leading-relaxed text-muted">{site.contact.directions}</p>
            <Link to="/contatti" className="editorial-link group mt-7 min-h-11 text-sm font-medium">
              Vedi le informazioni pratiche
              <EditorialArrow />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

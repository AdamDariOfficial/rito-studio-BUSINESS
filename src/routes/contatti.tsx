import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/PageIntro";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { SiteShell } from "@/components/SiteShell";
import { buildHead, routeSeo } from "@/lib/seo";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/contatti")({
  head: () => buildHead(routeSeo.contacts),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contatti"
        title={
          <>
            Informazioni pratiche, <span className="italic text-accent">senza fretta.</span>
          </>
        }
        intro="Orari, telefono e indicazioni essenziali per organizzare la visita con semplicità."
      />
      <PracticalInfo />
      <section
        className="border-t border-line bg-surface py-16 md:py-24"
        aria-labelledby="contact-policies-heading"
      >
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Prima di arrivare</p>
            <h2
              id="contact-policies-heading"
              className="mt-4 font-display text-3xl text-ink md:text-4xl"
            >
              Accesso e appuntamenti.
            </h2>
          </div>
          <dl className="space-y-8 md:col-span-7 md:col-start-6">
            <div className="border-t border-line pt-5">
              <dt className="font-medium text-ink">Indicazioni</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{site.contact.directions}</dd>
            </div>
            <div className="border-t border-line pt-5">
              <dt className="font-medium text-ink">Accessibilità</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">
                {site.contact.accessibility}
              </dd>
            </div>
            <div className="border-t border-line pt-5">
              <dt className="font-medium text-ink">Policy appuntamenti</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">
                {site.contact.appointmentPolicy}
              </dd>
            </div>
          </dl>
          <div className="md:col-span-7 md:col-start-6">
            <a
              href={site.contact.phoneHref}
              aria-label={`Chiama lo studio: ${site.contact.phone}`}
              className="action-primary inline-flex min-h-12 items-center border border-ink bg-ink px-6 text-sm font-medium text-white hover:border-accent-strong hover:bg-accent-strong"
            >
              Chiama lo studio
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

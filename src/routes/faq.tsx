import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageIntro } from "@/components/PageIntro";
import { SiteShell } from "@/components/SiteShell";
import { buildHead, routeSeo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => buildHead(routeSeo.faq),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="FAQ"
        title={
          <>
            Prima di iniziare, le risposte <span className="italic text-accent">essenziali.</span>
          </>
        }
        intro="Un pannello alla volta, senza auto-scroll. Le policy definitive devono essere configurate per il cliente reale."
      />
      <section className="py-16 md:py-24" aria-label="Domande frequenti">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <FaqAccordion />
          </div>
          <aside className="md:col-span-3 md:col-start-10">
            <div className="border border-line bg-surface p-6 md:sticky md:top-[calc(var(--header-height)+2rem)]">
              <p className="font-display text-2xl text-ink">Non trovi la risposta?</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Consulta le informazioni pratiche oppure prova il percorso dimostrativo.
              </p>
              <Link
                to="/contatti"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-ink underline underline-offset-4"
              >
                Vai ai contatti
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

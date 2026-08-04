import { createFileRoute } from "@tanstack/react-router";
import { BookingDemoForm } from "@/components/BookingDemoForm";
import { PageIntro } from "@/components/PageIntro";
import { SiteShell } from "@/components/SiteShell";
import { buildHead, routeSeo } from "@/lib/seo";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/prenota")({
  validateSearch: (search: Record<string, unknown>) => ({
    trattamento: typeof search.trattamento === "string" ? search.trattamento : undefined,
  }),
  head: () => buildHead(routeSeo.booking),
  component: BookingPage,
});

function BookingPage() {
  const { trattamento } = Route.useSearch();

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Prenota · modalità demo"
        title={
          <>
            Troviamo insieme il <span className="italic text-accent">momento giusto.</span>
          </>
        }
        intro="Esplora un flusso dimostrativo privo di contatti personali, backend e disponibilità reale."
        aside={
          <p className="mt-5 border-l border-accent pl-4 text-sm leading-relaxed text-ink">
            {site.booking.demoFeedback}
          </p>
        }
      />
      <section className="py-16 md:py-24" aria-labelledby="booking-form-heading">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="booking-form-heading" className="font-display text-3xl text-ink md:text-4xl">
              Una simulazione, non una prenotazione.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Le modalità supportate dall'architettura sono external, whatsapp, request e demo.
              Questo portfolio usa soltanto demo.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <BookingDemoForm initialTreatment={trattamento} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

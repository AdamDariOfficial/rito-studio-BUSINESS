import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { getCategory, getRelatedTreatments, getTreatment } from "@/data/treatments";
import { buildHead, routeSeo, treatmentSeo } from "@/lib/seo";

export const Route = createFileRoute("/trattamenti/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatment(params.slug);
    if (!treatment) throw notFound({ routeId: "__root__" });
    return treatment;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return buildHead(routeSeo.notFound);
    return buildHead(
      treatmentSeo(`/trattamenti/${params.slug}`, loaderData.seoTitle, loaderData.seoDescription),
    );
  },
  component: TreatmentDetailPage,
});

function TreatmentDetailPage() {
  const treatment = Route.useLoaderData();
  const category = getCategory(treatment.category);
  const related = getRelatedTreatments(treatment);

  return (
    <SiteShell>
      <article>
        <header className="border-b border-line pb-14 pt-[calc(var(--header-height)+3rem)] md:pb-20 md:pt-[calc(var(--header-height)+5rem)]">
          <div className="container-editorial">
            <Link
              to="/trattamenti"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"
            >
              <ArrowLeft aria-hidden size={17} />
              Tutti i trattamenti
            </Link>
            <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="eyebrow text-accent">{category?.name}</p>
                <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-ink">
                  {treatment.name}
                </h1>
              </div>
              <dl className="grid grid-cols-2 gap-5 border-t border-line pt-5 md:col-span-4">
                <div>
                  <dt className="eyebrow">Durata</dt>
                  <dd className="mt-2 text-sm text-ink">{treatment.duration}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Prezzo demo</dt>
                  <dd className="mt-2 text-sm font-medium text-accent-strong">
                    {treatment.priceLabel}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className="container-editorial grid gap-14 py-16 md:grid-cols-12 md:gap-16 md:py-24">
          <div className="md:col-span-7">
            <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl" data-reveal>
              {treatment.fullDescription}
            </p>
            <section
              className="mt-14 border-t border-line pt-8"
              aria-labelledby="ideal-for-heading"
            >
              <h2 id="ideal-for-heading" className="font-display text-3xl text-ink">
                Ideale per
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{treatment.idealFor}</p>
            </section>
            <section className="mt-12 border-t border-line pt-8" aria-labelledby="includes-heading">
              <h2 id="includes-heading" className="font-display text-3xl text-ink">
                Cosa include
              </h2>
              <ul className="mt-5 border-t border-line">
                {treatment.includes.map((item) => (
                  <li key={item} className="border-b border-line py-4 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="border border-line bg-surface p-6 md:sticky md:top-[calc(var(--header-height)+2rem)]">
              <h2 className="font-display text-2xl text-ink">Prima e dopo</h2>
              <dl className="mt-6 space-y-7 text-sm leading-relaxed">
                <div>
                  <dt className="font-medium text-ink">Preparazione</dt>
                  <dd className="mt-2 text-muted">{treatment.beforeAppointment}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Aftercare</dt>
                  <dd className="mt-2 text-muted">{treatment.afterAppointment}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Note</dt>
                  <dd className="mt-2 text-muted">{treatment.notes}</dd>
                </div>
              </dl>
              <Link
                to="/prenota"
                search={{ trattamento: treatment.slug }}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white hover:bg-accent-strong"
              >
                Prenota il tuo rituale
              </Link>
            </div>
          </aside>
        </div>

        <section
          className="border-t border-line bg-surface py-16 md:py-24"
          aria-labelledby="related-heading"
        >
          <div className="container-editorial">
            <p className="eyebrow">Continua a esplorare</p>
            <h2 id="related-heading" className="mt-4 font-display text-3xl text-ink md:text-4xl">
              Trattamenti correlati
            </h2>
            <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/trattamenti/$slug"
                  params={{ slug: item.slug }}
                  className="bg-canvas p-6 hover:bg-white"
                >
                  <span className="font-display text-2xl text-ink">{item.name}</span>
                  <span className="mt-2 block text-sm text-muted">{item.priceLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

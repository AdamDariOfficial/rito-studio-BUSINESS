import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/PageIntro";
import { SiteShell } from "@/components/SiteShell";
import { TreatmentRows } from "@/components/TreatmentRows";
import {
  servicesNote,
  treatmentCategories,
  treatments,
  type TreatmentCategoryId,
} from "@/data/treatments";
import { buildHead, routeSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

const validCategories = new Set(treatmentCategories.map((category) => category.id));

export const Route = createFileRoute("/trattamenti/")({
  validateSearch: (search: Record<string, unknown>) => ({
    categoria: typeof search.categoria === "string" ? search.categoria : undefined,
  }),
  head: () => buildHead(routeSeo.treatments),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  const { categoria } = Route.useSearch();
  const invalidFilter = Boolean(
    categoria && !validCategories.has(categoria as TreatmentCategoryId),
  );
  const selected = invalidFilter ? undefined : (categoria as TreatmentCategoryId | undefined);
  const visible = selected ? treatments.filter((item) => item.category === selected) : treatments;

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Catalogo"
        title={
          <>
            Trattamenti costruiti <span className="italic text-accent">intorno alla persona.</span>
          </>
        }
        intro="Esplora i rituali per area, prezzo dimostrativo ed esigenza. Ogni scheda chiarisce cosa aspettarsi e come prepararsi."
      />

      <section className="py-16 md:py-24" aria-labelledby="catalogo-heading">
        <div className="container-editorial">
          <h2 id="catalogo-heading" className="sr-only">
            Catalogo dei trattamenti
          </h2>
          <nav
            aria-label="Filtra per categoria"
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line"
          >
            <Link
              to="/trattamenti"
              search={{}}
              className={cn(
                "min-h-12 border-b-2 px-1 py-3 text-sm",
                !selected && !invalidFilter
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-ink",
              )}
            >
              Tutti
            </Link>
            {treatmentCategories.map((category) => (
              <Link
                key={category.id}
                to="/trattamenti"
                search={{ categoria: category.id }}
                className={cn(
                  "min-h-12 border-b-2 px-1 py-3 text-sm",
                  selected === category.id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:text-ink",
                )}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {invalidFilter ? (
            <div className="my-8 border border-line bg-surface p-5" role="status">
              <p className="font-medium text-ink">Il filtro “{categoria}” non è disponibile.</p>
              <Link
                to="/trattamenti"
                search={{}}
                className="mt-3 inline-flex min-h-11 items-center text-sm text-ink underline underline-offset-4"
              >
                Mostra tutti i trattamenti
              </Link>
            </div>
          ) : null}

          <div className="mt-10">
            <TreatmentRows
              items={invalidFilter ? [] : visible}
              emptyMessage="Scegli una categoria disponibile oppure torna al catalogo completo."
            />
          </div>
          <p className="mt-8 max-w-2xl text-xs italic leading-relaxed text-muted">{servicesNote}</p>
        </div>
      </section>
    </SiteShell>
  );
}

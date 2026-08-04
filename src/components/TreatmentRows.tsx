import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getCategory, type Treatment } from "@/data/treatments";

interface TreatmentRowsProps {
  items: readonly Treatment[];
  emptyMessage?: string;
}

export function TreatmentRows({
  items,
  emptyMessage = "Nessun trattamento disponibile per questo filtro.",
}: TreatmentRowsProps) {
  if (items.length === 0) {
    return (
      <div className="border-y border-line py-14 text-center" role="status">
        <p className="font-display text-2xl text-ink">Nessun risultato</p>
        <p className="mt-3 text-sm text-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ol className="border-t border-line">
      {items.map((treatment, index) => (
        <li key={treatment.slug} className="border-b border-line" data-reveal>
          <Link
            to="/trattamenti/$slug"
            params={{ slug: treatment.slug }}
            className="group grid min-h-32 gap-5 py-7 md:grid-cols-12 md:items-center md:gap-8 md:py-9"
          >
            <span className="eyebrow text-accent md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="md:col-span-4">
              <span className="block font-display text-2xl leading-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                {treatment.name}
              </span>
              <span className="mt-2 block text-xs text-muted">
                {getCategory(treatment.category)?.name}
              </span>
            </span>
            <span className="text-sm leading-relaxed text-muted md:col-span-4">
              {treatment.shortDescription}
            </span>
            <span className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
              <span className="text-sm font-medium tabular-nums text-accent-strong">
                {treatment.priceLabel}
              </span>
              <ArrowUpRight
                aria-hidden
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

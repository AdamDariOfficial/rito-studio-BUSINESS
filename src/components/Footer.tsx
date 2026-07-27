import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-ink">
            {site.brand.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.brand.descriptor}</p>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">
            Concept dimostrativo Tretnix — nessun servizio reale.
          </p>
        </div>

        <div>
          <p className="eyebrow">Contatti</p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>{site.contact.city}</li>
            <li>
              <a href={site.contact.phoneHref} className="hover:text-accent">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={site.contact.emailHref} className="hover:text-accent">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Info</p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <Link to="/privacy" className="hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/cookie" className="hover:text-accent">
                Cookie
              </Link>
            </li>
            <li>
              <span
                aria-label="Instagram — placeholder demo"
                className="cursor-default text-muted"
                title="Instagram — placeholder demo"
              >
                Instagram
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-editorial flex flex-col-reverse items-start justify-between gap-3 py-6 text-xs text-muted md:flex-row md:items-center">
          <p>© {year} {site.brand.name}. Concept dimostrativo.</p>
          <p>
            {site.attribution.text}{" "}
            <a
              href={site.attribution.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:underline focus-visible:underline"
              aria-label={`${site.attribution.linkLabel} — apre in una nuova scheda`}
            >
              {site.attribution.linkLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

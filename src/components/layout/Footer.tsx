import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-rito py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">{siteConfig.brand.name}</p>
            <p className="mt-2 text-sm text-muted">{siteConfig.brand.descriptor}</p>
            <p className="mt-6 max-w-xs text-sm text-muted">
              {siteConfig.brand.disclaimer}
            </p>
          </div>
          <div>
            <p className="eyebrow">Contatti</p>
            <ul className="mt-4 space-y-1 text-sm">
              <li>{siteConfig.contact.city}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.phone}</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Info</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-accent">Privacy</Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-accent">Cookie</Link>
              </li>
              <li>
                <span aria-disabled className="text-muted">Instagram · placeholder</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name}. Tutti i diritti riservati.</p>
          <p>
            {siteConfig.attribution.text}{" "}
            <a
              href={siteConfig.attribution.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:text-accent hover:underline"
            >
              {siteConfig.attribution.linkLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

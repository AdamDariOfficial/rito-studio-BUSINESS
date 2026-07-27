import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie — RITO Studio" },
      {
        name: "description",
        content:
          "Informativa cookie placeholder per il concept dimostrativo RITO Studio.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Cookie — RITO Studio" },
      {
        property: "og:description",
        content: "Concept dimostrativo Tretnix — nessun servizio reale.",
      },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-line">
        <div className="container-rito flex h-[var(--header-height)] items-center justify-between">
          <Link to="/" className="font-display text-lg">
            RITO<span className="text-accent"> ·</span> Studio
          </Link>
          <Link to="/" className="text-sm text-muted hover:text-accent">
            ← Torna alla home
          </Link>
        </div>
      </header>
      <main className="container-rito max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Placeholder legale</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Cookie</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Questa pagina è un segnaposto all’interno del concept dimostrativo{" "}
            <strong className="text-ink">{siteConfig.brand.name}</strong>. La
            versione definitiva dovrà elencare i cookie tecnici e, se
            introdotti, quelli analitici o di terze parti utilizzati dal sito
            del cliente.
          </p>
          <p>
            La demo non installa cookie di profilazione e non integra strumenti
            di analytics. Eventuali script di terze parti andranno documentati e
            gestiti tramite un meccanismo di consenso conforme.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — RITO Studio" },
      {
        name: "description",
        content:
          "Informativa privacy placeholder per il concept dimostrativo RITO Studio.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Privacy — RITO Studio" },
      {
        property: "og:description",
        content: "Concept dimostrativo Tretnix — nessun servizio reale.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Privacy</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Questa pagina è un segnaposto all’interno del concept dimostrativo{" "}
            <strong className="text-ink">{siteConfig.brand.name}</strong>. Nel
            passaggio a un cliente reale, l’informativa deve essere redatta e
            validata sulla base dei trattamenti dati effettivamente svolti.
          </p>
          <p>
            La demo non raccoglie dati personali, non invia moduli e non profila
            i visitatori. Le azioni di prenotazione mostrano solo un messaggio
            informativo.
          </p>
          <p>
            Per il progetto finale del cliente andranno definiti titolare del
            trattamento, base giuridica, finalità, tempi di conservazione,
            diritti dell’interessato, eventuali responsabili esterni e canali di
            contatto.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

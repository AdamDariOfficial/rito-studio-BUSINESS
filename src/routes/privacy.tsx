import { createFileRoute, Link } from "@tanstack/react-router";
import { canonicalUrl } from "@/lib/site-config";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const canonical = canonicalUrl("/privacy");

    return {
      meta: [
        { title: "Privacy — RITO Studio" },
        {
          name: "description",
          content:
            "Informativa privacy — placeholder dimostrativo. La versione definitiva richiede una revisione legale specifica.",
        },
        { name: "robots", content: "noindex, follow" },
        { property: "og:title", content: "Privacy — RITO Studio" },
        {
          property: "og:description",
          content: "Placeholder privacy per il concept dimostrativo Tretnix.",
        },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SkipLink />
      <header className="border-b border-line">
        <div className="container-editorial flex h-[var(--header-height)] items-center justify-between">
          <Link to="/" className="font-display text-lg text-ink">
            RITO<span className="text-accent">.</span>
          </Link>
          <Link to="/" className="text-sm text-ink hover:text-accent">
            Torna alla home
          </Link>
        </div>
      </header>
      <main id="contenuto" className="container-editorial max-w-2xl py-20">
        <p className="eyebrow">Informativa</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-ink">
          Privacy
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted md:text-base">
          <p className="border-l-2 border-accent pl-4 italic text-ink">
            Questa pagina è un placeholder dimostrativo. La versione definitiva richiede una
            revisione legale specifica in base alle finalità di trattamento, ai canali utilizzati
            dallo studio reale e alla base giuridica applicabile.
          </p>
          <p>
            RITO Studio è un concept dimostrativo creato da Tretnix. Nessun dato personale viene
            raccolto, trasmesso o conservato durante la navigazione di questo sito demo.
          </p>
          <p>
            In un progetto reale, questa sezione descrive titolare del trattamento, tipologie di
            dati raccolti, finalità, base giuridica, destinatari, tempi di conservazione e diritti
            dell&apos;interessato.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

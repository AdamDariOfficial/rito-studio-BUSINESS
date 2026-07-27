import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie — RITO Studio" },
      {
        name: "description",
        content:
          "Cookie policy — placeholder dimostrativo. La versione definitiva richiede una revisione legale specifica.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Cookie — RITO Studio" },
      {
        property: "og:description",
        content: "Placeholder cookie per il concept dimostrativo Tretnix.",
      },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
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
          Cookie
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted md:text-base">
          <p className="border-l-2 border-accent pl-4 italic text-ink">
            Questa pagina è un placeholder dimostrativo. La versione definitiva richiede una
            revisione legale specifica in base alle tecnologie effettivamente attivate dal cliente
            reale.
          </p>
          <p>
            Il concept dimostrativo di RITO Studio non installa cookie di profilazione, non attiva
            strumenti di analytics e non integra servizi di terze parti che raccolgono dati
            personali.
          </p>
          <p>
            In un progetto reale, questa sezione elenca le categorie di cookie utilizzate, la loro
            finalità, la durata, i fornitori coinvolti e le modalità con cui l&apos;utente può
            prestare o revocare il consenso.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

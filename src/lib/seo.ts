import { canonicalUrl, site } from "@/lib/site-config";

export interface RouteSeo {
  title: string;
  description: string;
  path: string;
  indexability: "noindex, follow";
  socialImage: typeof site.seo.defaultSocialImage;
  structuredDataMode: "disabled";
}

function defineSeo(path: string, title: string, description: string): RouteSeo {
  return {
    path,
    title,
    description,
    indexability: "noindex, follow",
    socialImage: site.seo.defaultSocialImage,
    structuredDataMode: "disabled",
  };
}

export const routeSeo = {
  home: defineSeo(
    "/",
    "RITO Studio — Beauty & Care Atelier · Padova",
    "Un atelier contemporaneo dedicato a capelli, pelle e benessere. Trattamenti su misura, gesti precisi e il tempo necessario per ascoltarti.",
  ),
  treatments: defineSeo(
    "/trattamenti",
    "Trattamenti — RITO Studio",
    "Esplora i rituali RITO Studio per area, prezzo dimostrativo ed esigenza.",
  ),
  studio: defineSeo(
    "/studio",
    "Studio — RITO Studio",
    "Filosofia, metodo, ambiente e informazioni sullo spazio dimostrativo RITO Studio.",
  ),
  team: defineSeo(
    "/team",
    "Team — RITO Studio",
    "Profili professionali dimostrativi e aree di competenza del concept RITO Studio.",
  ),
  gallery: defineSeo(
    "/galleria",
    "Galleria — RITO Studio",
    "Una selezione editoriale di gesti, dettagli e spazi del concept RITO Studio.",
  ),
  booking: defineSeo(
    "/prenota",
    "Prenota — RITO Studio",
    "Prova il percorso di prenotazione dimostrativo RITO Studio. Nessun dato viene inviato.",
  ),
  faq: defineSeo(
    "/faq",
    "FAQ — RITO Studio",
    "Risposte essenziali su trattamenti, preparazione, prezzi e appuntamenti.",
  ),
  contacts: defineSeo(
    "/contatti",
    "Contatti — RITO Studio",
    "Informazioni pratiche dimostrative, orari, accessibilità e policy appuntamenti.",
  ),
  privacy: defineSeo(
    "/privacy",
    "Privacy — RITO Studio",
    "Informativa privacy dimostrativa da completare e revisionare per il cliente reale.",
  ),
  cookie: defineSeo(
    "/cookie",
    "Cookie — RITO Studio",
    "Informativa cookie dimostrativa e configurazione privacy del concept RITO Studio.",
  ),
  notFound: defineSeo(
    "/404",
    "Pagina non trovata — RITO Studio",
    "La pagina richiesta non è disponibile.",
  ),
} as const;

export function buildHead(seo: RouteSeo) {
  const canonical = canonicalUrl(seo.path);
  const imageUrl = canonicalUrl(seo.socialImage.src);
  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "robots", content: seo.indexability },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: site.seo.locale },
      { property: "og:url", content: canonical },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: String(seo.socialImage.width) },
      { property: "og:image:height", content: String(seo.socialImage.height) },
      { property: "og:image:alt", content: seo.socialImage.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function treatmentSeo(path: string, title: string, description: string) {
  return defineSeo(path, title, description);
}

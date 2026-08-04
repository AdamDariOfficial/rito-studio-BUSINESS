export type BookingMode = "external" | "whatsapp" | "request" | "demo";

const mapQuery = "Prato della Valle, Padova";
const encodedMapQuery = encodeURIComponent(mapQuery);

export const site = {
  brand: {
    name: "RITO Studio",
    descriptor: "Beauty & Care Atelier",
    tagline: "La bellezza, nel suo ritmo.",
  },
  contact: {
    city: "Padova centro",
    area: "Zona Prato della Valle",
    locationLabel: "Padova centro · zona Prato della Valle",
    locationDetail:
      "Una zona centrale e facilmente raggiungibile. L'indirizzo esatto viene confermato al momento della prenotazione.",
    email: "info@ritostudio.example",
    phone: "+39 049 000 0000",
    phoneHref: "tel:+390490000000",
    emailHref: "mailto:info@ritostudio.example",
    mapQuery,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`,
    mapExternalUrl: `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`,
    accessibility:
      "Le informazioni definitive sull'accessibilità dello spazio devono essere confermate dal cliente reale prima della pubblicazione.",
    directions:
      "La zona è servita dal trasporto pubblico. L'indirizzo esatto e le indicazioni di accesso vengono condivisi alla conferma.",
    appointmentPolicy:
      "Gli appuntamenti e le eventuali variazioni sono confermati direttamente dallo studio. Questa demo non registra richieste.",
  },
  hours: [
    { label: "Martedì–venerdì", value: "09:00–19:00" },
    { label: "Sabato", value: "09:00–17:00" },
    { label: "Domenica e lunedì", value: "chiuso" },
  ],
  booking: {
    mode: "demo" as BookingMode,
    demoFeedback: "Questa è una demo Tretnix. Nessun dato è stato inviato.",
  },
  legal: {
    lastUpdated: "4 agosto 2026",
  },
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
  seo: {
    siteUrl: "https://rito-studio.tretnix.com",
    locale: "it_IT",
    defaultSocialImage: {
      src: "/images/rito/rito-studio-wide.webp",
      width: 1600,
      height: 1000,
      alt: "Interno luminoso e materico di RITO Studio",
    },
    sitemapEnabled: false,
    structuredDataMode: "disabled" as const,
  },
  tracking: {
    enabled: false,
    consentRequired: true,
    provider: "none" as const,
  },
} as const;

export const nav = [
  { label: "Trattamenti", to: "/trattamenti" },
  { label: "Studio", to: "/studio" },
  { label: "Team", to: "/team" },
  { label: "Galleria", to: "/galleria" },
  { label: "FAQ", to: "/faq" },
  { label: "Contatti", to: "/contatti" },
] as const;

export const ctaLabels = {
  bookPrimary: "Prenota il tuo rituale",
  discoverTreatments: "Scopri i trattamenti",
  requestAppointment: "Richiedi un appuntamento",
  book: "Prenota",
} as const;

export function canonicalUrl(pathname: string) {
  return new URL(pathname, site.seo.siteUrl).toString();
}

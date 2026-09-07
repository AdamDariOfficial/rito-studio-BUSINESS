export type ContactIntent = "booking" | "contact";

export type ContactChannelKind = "phone" | "whatsapp" | "email" | "external";

export type ContactChannel = {
  kind: ContactChannelKind;
  label: string;
  detail: string;
  href: string;
  external?: boolean;
};

const phone = "+39 049 000 0000";
const phoneHref = "tel:+390490000000";
const email = "info@ritostudio.example";
const emailHref = `mailto:${email}`;
const whatsappNumber = "390490000000";
const whatsappBookingMessage = "Ciao! Vorrei prenotare un appuntamento da RITO Studio.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappBookingMessage)}`;

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
    email,
    phone,
    phoneHref,
    emailHref,
    whatsappHref,
    mapQuery,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`,
    mapExternalUrl: `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`,
    accessibility:
      "Per esigenze di accesso specifiche, contatta lo studio prima della visita: potremo condividere le indicazioni più utili.",
    directions:
      "La zona è servita dal trasporto pubblico. L'indirizzo esatto e le indicazioni di accesso vengono condivisi alla conferma.",
    appointmentPolicy:
      "Gli appuntamenti e le eventuali variazioni vengono concordati tramite WhatsApp o telefono con lo studio.",
  },
  contactActions: {
    booking: {
      dialogTitle: "Come preferisci prenotare?",
      dialogDescription: "Scegli WhatsApp o telefono.",
      channels: [
        {
          kind: "whatsapp",
          label: "WhatsApp",
          detail: "Scrivi ora",
          href: whatsappHref,
          external: true,
        },
        {
          kind: "phone",
          label: "Telefono",
          detail: "Chiama ora",
          href: phoneHref,
        },
      ] satisfies readonly ContactChannel[],
    },
    contact: {
      dialogTitle: "Come preferisci contattarci?",
      dialogDescription: "Scegli email o telefono.",
      channels: [
        {
          kind: "email",
          label: "Email",
          detail: "Scrivi ora",
          href: emailHref,
        },
        {
          kind: "phone",
          label: "Telefono",
          detail: "Chiama ora",
          href: phoneHref,
        },
      ] satisfies readonly ContactChannel[],
    },
  } satisfies Record<
    ContactIntent,
    {
      dialogTitle: string;
      dialogDescription: string;
      channels: readonly ContactChannel[];
    }
  >,
  hours: [
    { label: "Martedì–venerdì", value: "09:00–19:00" },
    { label: "Sabato", value: "09:00–17:00" },
    { label: "Domenica e lunedì", value: "chiuso" },
  ],
  legal: {
    lastUpdated: "4 agosto 2026",
  },
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
  seo: {
    siteUrl: "https://rito-studio-business.tretnix.com",
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
  { label: "Home", to: "/" },
  { label: "Trattamenti", to: "/trattamenti" },
  { label: "Studio", to: "/studio" },
  { label: "Galleria", to: "/galleria" },
  { label: "FAQ", to: "/faq" },
  { label: "Contatti", to: "/contatti" },
] as const;

export const ctaLabels = {
  navBook: "Prenota",
  bookPrimary: "Prenota un appuntamento",
  requestAppointment: "Prenota un appuntamento",
  contact: "Contattaci",
  callToBook: "Chiama per prenotare",
  callStudio: "Chiama lo studio",
  discoverTreatments: "Scopri i trattamenti",
} as const;

export function canonicalUrl(pathname: string) {
  return new URL(pathname, site.seo.siteUrl).toString();
}

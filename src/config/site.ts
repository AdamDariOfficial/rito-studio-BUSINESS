export type BookingMode = "external" | "whatsapp" | "request" | "demo";

export interface NavLink {
  label: string;
  href: string;
}

export interface HoursRow {
  days: string;
  hours: string;
}

export const siteConfig = {
  brand: {
    name: "RITO Studio",
    descriptor: "Beauty & Care Atelier",
    tagline: "La bellezza, nel suo ritmo.",
    disclaimer: "Concept dimostrativo Tretnix — nessun servizio reale.",
  },
  contact: {
    city: "Padova",
    locationLabel: "Padova · su appuntamento",
    email: "ciao@ritostudio.example",
    phone: "+39 049 000 0000",
  },
  hours: [
    { days: "Martedì–venerdì", hours: "09:00–19:00" },
    { days: "Sabato", hours: "09:00–17:00" },
    { days: "Domenica e lunedì", hours: "chiuso" },
  ] satisfies HoursRow[],
  booking: {
    mode: "demo" as BookingMode,
    demoMessage: "Questa è una demo Tretnix. Nessun dato è stato inviato.",
    ctaPrimary: "Prenota il tuo rituale",
    ctaSecondary: "Scopri i trattamenti",
    ctaFinal: "Richiedi un appuntamento",
  },
  nav: [
    { label: "Trattamenti", href: "#trattamenti" },
    { label: "Metodo", href: "#metodo" },
    { label: "Studio", href: "#studio" },
    { label: "Contatti", href: "#contatti" },
  ] satisfies NavLink[],
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

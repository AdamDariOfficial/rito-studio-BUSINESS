/**
 * Centralized configuration for RITO Studio START.
 * All copy is transcribed verbatim from docs/CONTENT.md. Do not edit here to
 * change wording — update the doc and mirror it.
 */

export type BookingMode = "demo" | "external" | "contact";

export const site = {
  brand: {
    name: "RITO Studio",
    descriptor: "Beauty & Care Atelier",
    tagline: "La bellezza, nel suo ritmo.",
  },
  contact: {
    city: "Padova",
    locationLabel: "Padova · su appuntamento",
    email: "ciao@ritostudio.example",
    phone: "+39 049 000 0000",
    phoneHref: "tel:+390490000000",
    emailHref: "mailto:ciao@ritostudio.example",
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
  attribution: {
    text: "Progettato e sviluppato da",
    linkLabel: "Tretnix",
    href: "https://tretnix.com",
  },
} as const;

export const nav = [
  { label: "Trattamenti", hash: "#trattamenti" },
  { label: "Metodo", hash: "#metodo" },
  { label: "Studio", hash: "#studio" },
  { label: "Contatti", hash: "#contatti" },
] as const;

export const ctaLabels = {
  bookPrimary: "Prenota il tuo rituale",
  discoverTreatments: "Scopri i trattamenti",
  discoverMethod: "Scopri il metodo",
  requestAppointment: "Richiedi un appuntamento",
  book: "Prenota",
} as const;

export const serviceCategories = [
  {
    index: "01",
    name: "Hair Rituals",
    items: ["Taglio essenziale", "Colore su misura", "Trattamento texture", "Piega e styling"],
  },
  {
    index: "02",
    name: "Skin & Brow",
    items: ["Rituale viso", "Brow design", "Lash lift", "Trattamento illuminante"],
  },
  {
    index: "03",
    name: "Hands & Nails",
    items: ["Manicure essenziale", "Semipermanente", "Nail care", "Rituale mani"],
  },
  {
    index: "04",
    name: "Wellness",
    items: ["Massaggio distensivo", "Rituale schiena", "Trattamento relax", "Percorso corpo"],
  },
] as const;

export const servicesNote =
  "Servizi e prezzi presenti nel concept sono dimostrativi e vanno configurati per il cliente reale.";

/**
 * Gallery slots follow docs/ASSET_PLAN.md aspect ratios. Since curated
 * photography is pending review, each slot renders a mineral placeholder
 * with the correct ratio. Do not invent captions or headings.
 */
export const gallerySlots = [
  { id: "gallery-01", ratio: "4 / 5", tone: "canvas" },
  { id: "gallery-02", ratio: "1 / 1", tone: "surface" },
  { id: "gallery-03", ratio: "3 / 2", tone: "ink" },
  { id: "gallery-04", ratio: "3 / 4", tone: "canvas" },
] as const;

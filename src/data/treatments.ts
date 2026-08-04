import type { BookingMode } from "@/lib/site-config";

export type TreatmentCategoryId = "hair" | "skin" | "hands" | "wellness";

export interface TreatmentCategory {
  id: TreatmentCategoryId;
  index: string;
  name: string;
  introduction: string;
}

export interface Treatment {
  name: string;
  slug: string;
  category: TreatmentCategoryId;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  priceLabel: string;
  idealFor: string;
  includes: readonly string[];
  beforeAppointment: string;
  afterAppointment: string;
  notes: string;
  bookingMode: BookingMode;
  relatedServices: readonly string[];
  seoTitle: string;
  seoDescription: string;
}

export const treatmentCategories: readonly TreatmentCategory[] = [
  {
    id: "hair",
    index: "01",
    name: "Hair Rituals",
    introduction: "Taglio, colore, texture e styling definiti attraverso una consulenza iniziale.",
  },
  {
    id: "skin",
    index: "02",
    name: "Skin & Brow",
    introduction: "Rituali viso, brow e lash con indicazioni calibrate sull'esigenza espressa.",
  },
  {
    id: "hands",
    index: "03",
    name: "Hands & Nails",
    introduction: "Cura essenziale di mani e unghie, con tecniche concordate prima del servizio.",
  },
  {
    id: "wellness",
    index: "04",
    name: "Wellness",
    introduction:
      "Percorsi distensivi e di benessere non medicali, costruiti senza promesse cliniche.",
  },
] as const;

const categoryGuidance: Record<
  TreatmentCategoryId,
  Pick<Treatment, "idealFor" | "includes" | "beforeAppointment" | "afterAppointment" | "notes">
> = {
  hair: {
    idealFor: "Chi desidera definire forma, colore o texture attraverso un confronto iniziale.",
    includes: ["Consulenza iniziale", "Servizio concordato", "Indicazioni di mantenimento"],
    beforeAppointment:
      "Segnala in anticipo eventuali esigenze specifiche. Le indicazioni definitive vengono concordate con lo studio.",
    afterAppointment:
      "Le indicazioni di mantenimento dipendono dal servizio scelto e vengono condivise al termine.",
    notes: "Durata e percorso vengono definiti durante la consulenza.",
  },
  skin: {
    idealFor: "Chi cerca un rituale viso, brow o lash definito a partire dalle proprie esigenze.",
    includes: ["Ascolto dell'esigenza", "Rituale concordato", "Indicazioni essenziali successive"],
    beforeAppointment:
      "Comunica allo studio eventuali sensibilità o indicazioni rilevanti prima del trattamento.",
    afterAppointment:
      "Segui soltanto le indicazioni condivise durante l'appuntamento e contatta lo studio in caso di dubbi.",
    notes:
      "Il contenuto è informativo e non sostituisce una valutazione professionale o sanitaria.",
  },
  hands: {
    idealFor: "Chi desidera una cura ordinata di mani e unghie con un risultato concordato.",
    includes: ["Valutazione iniziale", "Servizio concordato", "Indicazioni di cura quotidiana"],
    beforeAppointment:
      "Condividi eventuali esigenze specifiche prima dell'inizio; lo studio confermerà la preparazione necessaria.",
    afterAppointment:
      "Le indicazioni dipendono dalla tecnica scelta e vengono fornite al termine del servizio.",
    notes: "Tecnica e durata vengono confermate prima del trattamento.",
  },
  wellness: {
    idealFor: "Chi desidera dedicare un tempo definito a un rituale di benessere non medicale.",
    includes: [
      "Breve confronto iniziale",
      "Rituale concordato",
      "Tempo conclusivo di orientamento",
    ],
    beforeAppointment:
      "Comunica allo studio eventuali condizioni o esigenze che possano richiedere una verifica preventiva.",
    afterAppointment:
      "Prenditi il tempo necessario e segui le sole indicazioni condivise durante l'appuntamento.",
    notes:
      "Il servizio non ha finalità mediche o terapeutiche. In caso di dubbi, chiedi un parere qualificato.",
  },
};

interface TreatmentSeed {
  name: string;
  slug: string;
  category: TreatmentCategoryId;
  priceLabel: string;
  shortDescription: string;
  fullDescription?: string;
  relatedServices: readonly string[];
}

function defineTreatment(seed: TreatmentSeed): Treatment {
  const guidance = categoryGuidance[seed.category];
  return {
    ...seed,
    fullDescription:
      seed.fullDescription ??
      `${seed.shortDescription} Il percorso viene definito insieme, con tecnica, prodotti e tempi chiariti prima di iniziare.`,
    duration: "Da definire in consulenza",
    ...guidance,
    bookingMode: "demo",
    seoTitle: `${seed.name} — RITO Studio`,
    seoDescription: `${seed.shortDescription} Scopri il rituale dimostrativo RITO Studio a Padova.`,
  };
}

export const treatments: readonly Treatment[] = [
  defineTreatment({
    name: "Taglio essenziale",
    slug: "taglio-essenziale",
    category: "hair",
    priceLabel: "€45",
    shortDescription: "Un taglio costruito su proporzioni, abitudini e texture.",
    relatedServices: ["piega-e-styling", "trattamento-texture"],
  }),
  defineTreatment({
    name: "Colore su misura",
    slug: "colore-su-misura",
    category: "hair",
    priceLabel: "da €80",
    shortDescription: "Un percorso colore definito dopo un confronto su tono e mantenimento.",
    relatedServices: ["trattamento-texture", "piega-e-styling"],
  }),
  defineTreatment({
    name: "Trattamento texture",
    slug: "trattamento-texture",
    category: "hair",
    priceLabel: "da €65",
    shortDescription: "Un rituale dedicato alla gestione e alla presenza naturale della texture.",
    relatedServices: ["taglio-essenziale", "piega-e-styling"],
  }),
  defineTreatment({
    name: "Piega e styling",
    slug: "piega-e-styling",
    category: "hair",
    priceLabel: "da €35",
    shortDescription: "Forma e styling concordati in base al risultato desiderato.",
    relatedServices: ["taglio-essenziale", "colore-su-misura"],
  }),
  defineTreatment({
    name: "Rituale viso",
    slug: "rituale-viso",
    category: "skin",
    priceLabel: "€70",
    shortDescription:
      "Un trattamento personalizzato che combina detersione, manualità e prodotti selezionati in base alle esigenze della pelle.",
    relatedServices: ["trattamento-illuminante", "brow-design"],
  }),
  defineTreatment({
    name: "Brow design",
    slug: "brow-design",
    category: "skin",
    priceLabel: "€25",
    shortDescription: "Definizione delle sopracciglia concordata a partire da forma ed equilibrio.",
    relatedServices: ["lash-lift", "rituale-viso"],
  }),
  defineTreatment({
    name: "Lash lift",
    slug: "lash-lift",
    category: "skin",
    priceLabel: "€55",
    shortDescription:
      "Un servizio dedicato alla curvatura delle ciglia, preceduto da una verifica dell'esigenza.",
    relatedServices: ["brow-design", "rituale-viso"],
  }),
  defineTreatment({
    name: "Trattamento illuminante",
    slug: "trattamento-illuminante",
    category: "skin",
    priceLabel: "€80",
    shortDescription:
      "Un rituale viso dimostrativo orientato a una sensazione di freschezza e cura.",
    relatedServices: ["rituale-viso", "brow-design"],
  }),
  defineTreatment({
    name: "Manicure essenziale",
    slug: "manicure-essenziale",
    category: "hands",
    priceLabel: "€30",
    shortDescription: "Cura ordinata di mani e unghie con finitura essenziale.",
    relatedServices: ["semipermanente", "rituale-mani"],
  }),
  defineTreatment({
    name: "Semipermanente",
    slug: "semipermanente",
    category: "hands",
    priceLabel: "€40",
    shortDescription: "Applicazione concordata per una finitura uniforme e controllata.",
    relatedServices: ["manicure-essenziale", "nail-care"],
  }),
  defineTreatment({
    name: "Nail care",
    slug: "nail-care",
    category: "hands",
    priceLabel: "€35",
    shortDescription:
      "Un servizio di cura essenziale costruito sulle condizioni osservabili delle unghie.",
    relatedServices: ["manicure-essenziale", "rituale-mani"],
  }),
  defineTreatment({
    name: "Rituale mani",
    slug: "rituale-mani",
    category: "hands",
    priceLabel: "€45",
    shortDescription:
      "Un tempo dedicato alla cura delle mani, con passaggi chiariti prima di iniziare.",
    relatedServices: ["manicure-essenziale", "nail-care"],
  }),
  defineTreatment({
    name: "Massaggio distensivo",
    slug: "massaggio-distensivo",
    category: "wellness",
    priceLabel: "€70",
    shortDescription: "Un rituale di benessere non medicale dal ritmo lento e concordato.",
    relatedServices: ["trattamento-relax", "rituale-schiena"],
  }),
  defineTreatment({
    name: "Rituale schiena",
    slug: "rituale-schiena",
    category: "wellness",
    priceLabel: "€55",
    shortDescription:
      "Un percorso dimostrativo dedicato alla zona della schiena, senza finalità terapeutiche.",
    relatedServices: ["massaggio-distensivo", "trattamento-relax"],
  }),
  defineTreatment({
    name: "Trattamento relax",
    slug: "trattamento-relax",
    category: "wellness",
    priceLabel: "€85",
    shortDescription:
      "Un tempo di cura non medicale, costruito per rallentare il ritmo dell'appuntamento.",
    relatedServices: ["massaggio-distensivo", "percorso-corpo"],
  }),
  defineTreatment({
    name: "Percorso corpo",
    slug: "percorso-corpo",
    category: "wellness",
    priceLabel: "da €95",
    shortDescription:
      "Un percorso corpo dimostrativo definito in consulenza, senza promesse cliniche.",
    relatedServices: ["trattamento-relax", "rituale-schiena"],
  }),
] as const;

export const servicesNote =
  "I prezzi indicati si intendono a partire da dove specificato. Eventuali variazioni vengono concordate durante la consulenza.";

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getCategory(id: TreatmentCategoryId) {
  return treatmentCategories.find((category) => category.id === id);
}

export function getRelatedTreatments(treatment: Treatment) {
  return treatment.relatedServices
    .map((slug) => getTreatment(slug))
    .filter((item): item is Treatment => Boolean(item));
}

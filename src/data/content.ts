export interface TeamProfile {
  id: string;
  name: string;
  role: string;
  competencies: readonly string[];
  approach: string;
  serviceSlugs: readonly string[];
  image?: string;
}

export interface GalleryItem {
  id: string;
  category: "Studio" | "Hair" | "Skin" | "Hands" | "Rituals";
  src?: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const teamProfiles: readonly TeamProfile[] = [
  {
    id: "hair-profile",
    name: "Profilo demo — Hair",
    role: "Hair rituals",
    competencies: ["Taglio", "Colore", "Texture", "Styling"],
    approach: "Un profilo editoriale dimostrativo centrato su ascolto, proporzioni e mantenimento.",
    serviceSlugs: ["taglio-essenziale", "colore-su-misura", "trattamento-texture"],
    image: "/images/rito/rito-gallery-professional-01.webp",
  },
  {
    id: "skin-profile",
    name: "Profilo demo — Skin & Brow",
    role: "Skin, brow & lash rituals",
    competencies: ["Rituali viso", "Brow", "Lash"],
    approach:
      "Un profilo fittizio senza credenziali dichiarate, dedicato a gesti misurati e indicazioni chiare.",
    serviceSlugs: ["rituale-viso", "brow-design", "lash-lift"],
    image: "/images/rito/rito-gallery-skin-01.webp",
  },
  {
    id: "hands-profile",
    name: "Profilo demo — Hands & Rituals",
    role: "Hands & wellness rituals",
    competencies: ["Mani", "Unghie", "Rituali di benessere"],
    approach: "Un profilo dimostrativo orientato a precisione, igiene e ritmo dell'appuntamento.",
    serviceSlugs: ["manicure-essenziale", "rituale-mani", "massaggio-distensivo"],
    image: "/images/rito/rito-ritual-feature.webp",
  },
] as const;

export const galleryItems: readonly GalleryItem[] = [
  {
    id: "studio-wide",
    category: "Studio",
    src: "/images/rito/rito-studio-wide.webp",
    alt: "Interno luminoso di uno studio beauty con postazioni e specchi",
    width: 1600,
    height: 1000,
  },
  {
    id: "studio-detail",
    category: "Studio",
    src: "/images/rito/rito-gallery-space-01.webp",
    alt: "Postazione professionale in un ambiente beauty essenziale",
    width: 1500,
    height: 1000,
  },
  {
    id: "hair-texture",
    category: "Hair",
    src: "/images/rito/rito-gallery-hair-01.webp",
    alt: "Dettaglio di capelli biondi mossi durante lo styling",
    width: 1200,
    height: 1500,
  },
  {
    id: "hair-professional",
    category: "Hair",
    src: "/images/rito/rito-gallery-professional-01.webp",
    alt: "Applicazione professionale del colore sui capelli",
    width: 1200,
    height: 1600,
  },
  {
    id: "skin-gesture",
    category: "Skin",
    src: "/images/rito/rito-gallery-skin-01.webp",
    alt: "Trattamento viso eseguito con un gesto delicato",
    width: 1200,
    height: 1200,
  },
  {
    id: "hands-detail",
    category: "Hands",
    src: "/images/rito/rito-ritual-feature.webp",
    alt: "Mani di una professionista durante una manicure di precisione",
    width: 1200,
    height: 1600,
  },
  {
    id: "ritual-gesture",
    category: "Rituals",
    src: "/images/rito/rito-hero-main.webp",
    alt: "Professionista durante un trattamento viso in atelier",
    width: 1200,
    height: 1500,
    objectPosition: "57% 45%",
  },
] as const;

export const galleryCategories = ["Tutte", "Studio", "Hair", "Skin", "Hands", "Rituals"] as const;

export const faqItems: readonly FaqItem[] = [
  {
    id: "scegliere",
    question: "Come scelgo il trattamento giusto?",
    answer:
      "Raccontaci l'esigenza principale. Ti aiuteremo a scegliere durante la consulenza iniziale.",
  },
  {
    id: "arrivo",
    question: "Quanto prima devo arrivare?",
    answer: "Cinque minuti sono sufficienti, salvo indicazioni diverse ricevute dallo studio.",
  },
  {
    id: "modifica",
    question: "Posso modificare o annullare l'appuntamento?",
    answer:
      "Sì, usando il canale indicato nella conferma e rispettando la policy configurata dal cliente.",
  },
  {
    id: "prezzi",
    question: "I prezzi sono definitivi?",
    answer:
      "I prezzi “da” indicano una base. Eventuali variazioni devono essere chiarite prima del trattamento.",
  },
  {
    id: "preparazione",
    question: "Come devo prepararmi?",
    answer:
      "Ogni scheda trattamento contiene le indicazioni essenziali. In caso di dubbi, contatta lo studio.",
  },
  {
    id: "regalo",
    question: "Posso regalare un trattamento?",
    answer: "Disponibile soltanto quando gift card o voucher sono attivati dal cliente.",
  },
] as const;

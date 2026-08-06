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
      "Sì, chiamando lo studio e rispettando le condizioni concordate al momento della prenotazione.",
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
    answer: "Chiama lo studio per sapere se sono disponibili gift card o voucher.",
  },
] as const;

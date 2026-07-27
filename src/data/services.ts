export interface ServiceCategory {
  index: string;
  name: string;
  intro: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    index: "01",
    name: "Hair Rituals",
    intro: "Taglio, colore e cura del capello con un approccio misurato.",
    items: [
      "Taglio essenziale",
      "Colore su misura",
      "Trattamento texture",
      "Piega e styling",
    ],
  },
  {
    index: "02",
    name: "Skin & Brow",
    intro: "Trattamenti viso e disegno dello sguardo, senza claim clinici.",
    items: [
      "Rituale viso",
      "Brow design",
      "Lash lift",
      "Trattamento illuminante",
    ],
  },
  {
    index: "03",
    name: "Hands & Nails",
    intro: "Cura delle mani e delle unghie, tra gesto tecnico e attenzione.",
    items: [
      "Manicure essenziale",
      "Semipermanente",
      "Nail care",
      "Rituale mani",
    ],
  },
  {
    index: "04",
    name: "Wellness",
    intro: "Massaggi e percorsi corpo pensati per il ritmo della persona.",
    items: [
      "Massaggio distensivo",
      "Rituale schiena",
      "Trattamento relax",
      "Percorso corpo",
    ],
  },
];

export const methodPrinciples = [
  {
    index: "01",
    title: "Ascolto",
    text: "Una consulenza breve e concreta per capire esigenze, abitudini e aspettative.",
  },
  {
    index: "02",
    title: "Precisione",
    text: "Tecniche, prodotti e tempi scelti in base al servizio, non a un protocollo indistinto.",
  },
  {
    index: "03",
    title: "Continuità",
    text: "Indicazioni semplici per mantenere il risultato e pianificare il prossimo appuntamento.",
  },
];

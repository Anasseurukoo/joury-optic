export type IndoTechnology = {
  id: string;
  name: string;
  family: string;
  short: string;
  description: string;
  features: string[];
  tone: "clear" | "blue" | "sun" | "polar";
};

export const indoSources = {
  infrared: "https://maroc.indo.ma/fr/optics/infrared",
  freemax: "https://maroc.indo.ma/fr/optics/freemax",
  progressive: "https://maroc.indo.ma/fr/optics/lenses/progressive",
  treatments: "https://maroc.indo.ma/fr/optics/lenses/treatments",
};

export const infraredTechnologies: IndoTechnology[] = [
  {
    id: "natural-clear",
    name: "Natural Clear",
    family: "Traitement premium transparent",
    short: "Transparence, antireflet et protection solaire dans un traitement multicouche.",
    description:
      "INDO présente Natural Clear comme un traitement antireflet moléculairement avancé pour verres transparents, intégrant notamment une protection UV, une couche réfléchissante de l’infrarouge, une couche anti-rayures et une finition facile à nettoyer.",
    features: ["Antireflet premium", "Filtre UV", "Réflexion de l’infrarouge", "Anti-rayures", "Entretien facilité"],
    tone: "clear",
  },
  {
    id: "energy-blue",
    name: "Energy Blue",
    family: "Protection lumière bleue",
    short: "Une solution transparente pensée pour l’exposition aux écrans et aux rayonnements solaires.",
    description:
      "La gamme Energy Blue est présentée par INDO pour la protection contre la lumière bleue excessive et certains rayonnements nocifs, avec des propriétés antireflet, anti-rayures, hydrophobes, antisalissures et antistatiques.",
    features: ["Filtration lumière bleue", "Antireflet", "Anti-rayures", "Hydrophobe", "Antistatique"],
    tone: "blue",
  },
  {
    id: "sunmax",
    name: "SunMax",
    family: "Protection solaire",
    short: "Une technologie destinée aux verres solaires gradués et à la protection contre l’IR-A.",
    description:
      "SunMax appartient aux solutions solaires INDO. Le fabricant la présente comme une protection renforcée contre les rayonnements solaires, notamment l’infrarouge, disponible sur plusieurs solutions de verres solaires.",
    features: ["Verres solaires", "Protection IR-A", "Protection UV", "Teintes solaires", "Compatible avec certaines gammes FreeMax"],
    tone: "sun",
  },
  {
    id: "polarmax",
    name: "PolarMax",
    family: "Solaire polarisé",
    short: "Protection solaire et filtre polarisant pour limiter les reflets gênants.",
    description:
      "PolarMax complète la gamme solaire avec un filtre polarisant. INDO met en avant la réduction des reflets gênants du soleil ainsi qu’une protection solaire renforcée sur les verres polarisés.",
    features: ["Filtre polarisant", "Réduction des reflets", "Protection solaire", "Protection IR", "Vision plus détendue"],
    tone: "polar",
  },
];

export const progressiveLenses = [
  { name: "EyeMax", note: "Progressif personnalisé selon la stratégie visuelle de l’utilisateur." },
  { name: "MaxVita", note: "Personnalisation fondée sur les habitudes et les besoins visuels." },
  { name: "MaxView", note: "Conception orientée vers un champ de vision de près plus étendu." },
  { name: "Maxima", note: "Optimisation de la surface et de la géométrie du verre progressif." },
  { name: "Maxima Sport", note: "Progressif solaire conçu pour les montures très galbées." },
  { name: "EasyMax", note: "Une porte d’entrée vers la technologie FreeMax progressive." },
];

export const singleVisionLenses = [
  { name: "UNImax", note: "Verre unifocal avancé fabriqué avec la technologie FreeMax." },
  { name: "UNImax Sport", note: "Unifocal solaire pour montures très galbées et vision dynamique." },
];

/** Contrat partagé Grille de Tarifs — effet de leurre (Desktop / Mobile). */
export type TarifCard = {
  id: string;
  name: string;
  description: string;
  price: string;
  delay?: string;
  badge?: string;
  cta?: string;
  variant: "muted" | "target" | "anchor";
};

export const TARIFS: TarifCard[] = [
  {
    id: "remodeling-partiel",
    name: "Remodeling Virtuel Partiel",
    description:
      "Idéal pour meubler virtuellement une pièce simple ou changer une cuisine.",
    price: "Sur devis uniquement",
    variant: "muted",
  },
  {
    id: "cinematic-tour",
    name: "Le Cinematic Tour (60s)",
    description:
      "60 secondes de vidéo d'ambiance digne d'un film hollywoodien basé sur vos photos existantes. Idéal pour capter l'exclusivité d'un mandat.",
    price: "5'000 CHF",
    delay: "Livré sous 10 jours garanti.",
    badge: "L'offre incontournable",
    cta: "Choisir ce format",
    variant: "target",
  },
  {
    id: "off-plan",
    name: "Pack Création Off-Plan Intégrale",
    description:
      "Modélisation complète d'un projet non bâti (sur plans), création d'une identité visuelle et d'un site vitrine dédié pour le bien.",
    price: "À partir de 15'000 CHF",
    variant: "anchor",
  },
];

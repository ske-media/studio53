/** Contrat partagé Symbiose — fondateurs (Desktop / Mobile). */
export type Founder = {
  id: string;
  name: string;
  role: string;
  image: string;
  effect: "tech" | "art";
};

export const FOUNDERS: Founder[] = [
  {
    id: "steven",
    name: "Steven C. K. Eldring",
    role: "Ingénierie technologique & architecture de données",
    image: "/about/steven-eldring.webp",
    effect: "tech",
  },
  {
    id: "jonathan",
    name: "Jonathan Bralha",
    role: "Direction artistique & exigence esthétique",
    image: "/about/jonathan-bralha.webp",
    effect: "art",
  },
];

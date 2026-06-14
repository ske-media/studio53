/** Données mockées multi-tenant — teasers privés courtiers. */
export type Teaser = {
  id: string;
  agency: string;
  property: string;
  videoSrc: string;
};

const MOCK_TEASERS: Record<string, Omit<Teaser, "id" | "videoSrc">> = {
  "barnes-geneve": { agency: "Barnes Genève", property: "Villa du Lac, Cologny" },
  "sothebys-zurich": {
    agency: "Sotheby's Zürich",
    property: "Penthouse Bahnhofstrasse",
  },
};

export function getTeaser(id: string): Teaser {
  const match = MOCK_TEASERS[id];
  return {
    id,
    agency: match?.agency ?? "Votre Agence",
    property: match?.property ?? `Mandat ${id}`,
    videoSrc: "/portfolio/teaser-demo-8s.mp4",
  };
}

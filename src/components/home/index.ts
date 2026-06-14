/**
 * Contrats et constantes partagés entre implémentations Desktop / Mobile.
 * Chaque section Home aura son fichier ici (types, IDs, contenu SEO).
 *
 * Implémentations visuelles :
 *   - src/components/desktop/home/
 *   - src/components/mobile/home/
 */

export const HOME_SECTIONS = [
  "hero",
  "expertise",
  "process",
  "contact",
] as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[number];

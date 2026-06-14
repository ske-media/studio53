/**
 * OSIRIS-53 — Design tokens
 * Noir absolu · Orange cuivré · Minimalisme radical
 */
export const osiris53 = {
  colors: {
    black: "#000000",
    copper: "#E65C00",
    white: "#FFFFFF",
  },
  fonts: {
    sans: "var(--font-osiris-sans)",
  },
  maxComponentLines: 150,
} as const;

export type DeviceType = "desktop" | "mobile";

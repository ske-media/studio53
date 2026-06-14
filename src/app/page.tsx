import dynamic from "next/dynamic";
import { getDeviceType } from "@/lib/device";

const DesktopShell = dynamic(
  () => import("@/components/desktop/layout/DesktopShell").then((m) => m.DesktopShell),
  { ssr: true },
);
const HeroScroll = dynamic(
  () => import("@/components/desktop/HeroScroll").then((m) => m.HeroScroll),
  { ssr: true },
);
const Showreel = dynamic(
  () => import("@/components/desktop/Showreel").then((m) => m.Showreel),
  { ssr: true },
);
const GrilleTarifs = dynamic(
  () => import("@/components/desktop/GrilleTarifs").then((m) => m.GrilleTarifs),
  { ssr: true },
);
const Symbiose = dynamic(
  () => import("@/components/desktop/Symbiose").then((m) => m.Symbiose),
  { ssr: true },
);
const FormulaireTeaser = dynamic(
  () => import("@/components/desktop/FormulaireTeaser").then((m) => m.FormulaireTeaser),
  { ssr: true },
);
const LeadMagnet = dynamic(
  () => import("@/components/desktop/LeadMagnet").then((m) => m.LeadMagnet),
  { ssr: true },
);
const Footer = dynamic(
  () => import("@/components/desktop/Footer").then((m) => m.Footer),
  { ssr: true },
);

const MobileShell = dynamic(
  () => import("@/components/mobile/layout/MobileShell").then((m) => m.MobileShell),
  { ssr: true },
);
const HeroMobile = dynamic(
  () => import("@/components/mobile/HeroMobile").then((m) => m.HeroMobile),
  { ssr: true },
);
const ShowreelMobile = dynamic(
  () => import("@/components/mobile/ShowreelMobile").then((m) => m.ShowreelMobile),
  { ssr: true },
);
const GrilleTarifsMobile = dynamic(
  () => import("@/components/mobile/GrilleTarifsMobile").then((m) => m.GrilleTarifsMobile),
  { ssr: true },
);
const SymbioseMobile = dynamic(
  () => import("@/components/mobile/SymbioseMobile").then((m) => m.SymbioseMobile),
  { ssr: true },
);
const FormulaireMobile = dynamic(
  () => import("@/components/mobile/FormulaireMobile").then((m) => m.FormulaireMobile),
  { ssr: true },
);
const LeadMagnetMobile = dynamic(
  () => import("@/components/mobile/LeadMagnetMobile").then((m) => m.LeadMagnetMobile),
  { ssr: true },
);
const FooterMobile = dynamic(
  () => import("@/components/mobile/FooterMobile").then((m) => m.FooterMobile),
  { ssr: true },
);

/**
 * One-Pager Home — orchestrateur Dual Site.
 * Imports dynamiques : seul le bundle du device détecté est envoyé au client.
 */
export default async function HomePage() {
  const device = await getDeviceType();

  if (device === "mobile") {
    return (
      <MobileShell footer={<FooterMobile />}>
        <HeroMobile />
        <ShowreelMobile />
        <GrilleTarifsMobile />
        <SymbioseMobile />
        <FormulaireMobile />
        <LeadMagnetMobile />
      </MobileShell>
    );
  }

  return (
    <DesktopShell footer={<Footer />}>
      <HeroScroll />
      <Showreel />
      <GrilleTarifs />
      <Symbiose />
      <FormulaireTeaser />
      <LeadMagnet />
    </DesktopShell>
  );
}

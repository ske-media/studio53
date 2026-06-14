import { getDeviceType } from "@/lib/device";
import { DesktopShell } from "@/components/desktop/layout/DesktopShell";
import { HeroScroll } from "@/components/desktop/HeroScroll";
import { Showreel } from "@/components/desktop/Showreel";
import { GrilleTarifs } from "@/components/desktop/GrilleTarifs";
import { Symbiose } from "@/components/desktop/Symbiose";
import { FormulaireTeaser } from "@/components/desktop/FormulaireTeaser";
import { LeadMagnet } from "@/components/desktop/LeadMagnet";
import { Footer } from "@/components/desktop/Footer";
import { MobileShell } from "@/components/mobile/layout/MobileShell";
import { HeroMobile } from "@/components/mobile/HeroMobile";
import { ShowreelMobile } from "@/components/mobile/ShowreelMobile";
import { GrilleTarifsMobile } from "@/components/mobile/GrilleTarifsMobile";
import { SymbioseMobile } from "@/components/mobile/SymbioseMobile";
import { FormulaireMobile } from "@/components/mobile/FormulaireMobile";
import { LeadMagnetMobile } from "@/components/mobile/LeadMagnetMobile";
import { FooterMobile } from "@/components/mobile/FooterMobile";

/**
 * One-Pager Home — orchestrateur Dual Site.
 * Le shell (navbar) est appliqué ici, uniquement sur la Home.
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

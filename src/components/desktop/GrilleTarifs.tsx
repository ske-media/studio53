import { PricingGrid } from "@/components/desktop/PricingGrid";
import { BeforeAfter } from "@/components/desktop/BeforeAfter";

export function GrilleTarifs() {
  return (
    <section
      id="expertise"
      aria-label="Nos Expertises & Tarifs"
      className="bg-osiris-black px-6 py-24 md:px-12 lg:px-20"
    >
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.4em] text-osiris-copper uppercase">
          Nos Expertises
        </p>
        <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
          Un format pour chaque ambition.
        </h2>
      </header>

      <PricingGrid />
      <BeforeAfter />
    </section>
  );
}

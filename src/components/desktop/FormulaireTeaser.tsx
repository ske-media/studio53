import { TeaserForm } from "@/components/desktop/TeaserForm";
import { PhoneMockup } from "@/components/desktop/PhoneMockup";

export function FormulaireTeaser() {
  return (
    <section
      id="contact"
      aria-label="Évaluer mon mandat"
      className="bg-osiris-black px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-5 items-center gap-16">
        <div className="col-span-3">
          <TeaserForm />
        </div>
        <div className="col-span-2">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

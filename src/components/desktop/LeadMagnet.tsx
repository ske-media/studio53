import { LeadMagnetForm } from "@/components/shared/LeadMagnetForm";

export function LeadMagnet() {
  return (
    <section
      id="guide"
      aria-label="Le Manuel du Mandat Exclusif"
      className="bg-osiris-black px-6 pb-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-12 rounded-2xl border border-brand-darkGrey p-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/guide-mockup.webp"
          alt="Le Manuel du Mandat Exclusif"
          className="w-44 shrink-0 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-light tracking-tight">
            Le Manuel du Mandat Exclusif
          </h2>
          <p className="mt-3 max-w-lg text-sm text-white/60">
            La fin des rendus 3D froids dans l&apos;immobilier de prestige.
          </p>
          <div className="mt-6 max-w-lg">
            <LeadMagnetForm />
          </div>
        </div>
      </div>
    </section>
  );
}

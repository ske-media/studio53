import { LeadMagnetForm } from "@/components/shared/LeadMagnetForm";

export function LeadMagnetMobile() {
  return (
    <section
      id="guide"
      aria-label="Le Manuel du Mandat Exclusif"
      className="bg-osiris-black px-5 pb-14"
    >
      <div className="rounded-2xl border border-brand-darkGrey p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/guide-mockup.webp"
          alt="Le Manuel du Mandat Exclusif"
          className="mx-auto w-32 rounded-lg object-cover"
        />
        <h2 className="mt-5 text-center text-xl font-light tracking-tight">
          Le Manuel du Mandat Exclusif
        </h2>
        <p className="mt-2 text-center text-sm text-white/60">
          La fin des rendus 3D froids dans l&apos;immobilier de prestige.
        </p>
        <div className="mt-6">
          <LeadMagnetForm compact />
        </div>
      </div>
    </section>
  );
}

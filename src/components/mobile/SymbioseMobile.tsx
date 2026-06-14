import { FOUNDERS } from "@/components/home/founders";

export function SymbioseMobile() {
  return (
    <section
      id="symbiose"
      aria-label="Les Fondateurs & La Philosophie"
      className="bg-osiris-black px-5 py-14"
    >
      <p className="text-[10px] font-medium tracking-[0.3em] text-osiris-copper uppercase">
        L&apos;alliance de deux mondes
      </p>
      <h2 className="mt-4 text-2xl font-light tracking-tight">
        L&apos;IA n&apos;est qu&apos;un marteau. Nous sommes les artisans.
      </h2>
      <p className="mt-5 text-sm leading-relaxed text-white/60">
        L&apos;IA sans l&apos;œil humain ne produit que du bruit visuel. Nous
        fusionnons architecture système et sensibilité artistique pour des images
        indétectables.
      </p>

      <div className="mt-8 flex justify-between gap-[4%]">
        {FOUNDERS.map((founder) => (
          <article
            key={founder.id}
            className="w-[48%] overflow-hidden rounded-xl border border-brand-darkGrey"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={founder.image}
              alt={founder.name}
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-osiris-white">
                {founder.name}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-white/55">
                {founder.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

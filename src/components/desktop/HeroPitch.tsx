import { GlowCta } from "@/components/shared/GlowCta";

/** Bloc de conversion Hero (étape 3). */
export function HeroPitch() {
  return (
    <>
      <h2 className="max-w-4xl text-4xl font-light tracking-tight md:text-6xl">
        Vos mandats exclusifs méritent le grand écran.
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
        Nous transformons vos simples photos en productions hollywoodiennes grâce
        à l&apos;intelligence artificielle. Une qualité studio indétectable,
        livrée en 10 jours.
      </p>
      <div className="mt-10">
        <GlowCta className="py-4">Mettre mon mandat à l&apos;épreuve</GlowCta>
      </div>
      <p className="mt-4 text-xs tracking-wide text-white/40">
        Teaser de 8 secondes offert
      </p>
    </>
  );
}

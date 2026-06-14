import { FOUNDERS } from "@/components/home/founders";
import { FounderCard } from "@/components/desktop/FounderCard";

export function Symbiose() {
  return (
    <section
      id="symbiose"
      aria-label="Les Fondateurs & La Philosophie"
      className="bg-osiris-black px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-16">
        <div className="relative">
          <div className="sticky top-28">
            <p className="text-xs font-medium tracking-[0.4em] text-osiris-copper uppercase">
              L&apos;alliance de deux mondes
            </p>
            <h2 className="mt-6 text-4xl font-light tracking-tight md:text-5xl">
              L&apos;intelligence artificielle n&apos;est qu&apos;un marteau.
              Nous sommes les artisans.
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              L&apos;IA sans l&apos;œil humain ne produit que du bruit visuel.
              Notre force réside dans la rencontre de deux expertises
              complémentaires, fusionnant l&apos;architecture système et la
              sensibilité artistique pour créer des images indétectables.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Steven C. K. Eldring apporte plus de 10 ans d&apos;ingénierie
              technologique et d&apos;architecture de données. Jonathan Bralha
              insuffle plus de 15 ans de direction artistique et d&apos;exigence
              esthétique.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}

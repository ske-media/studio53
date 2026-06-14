import type { Metadata } from "next";
import { CinematicPlayer } from "@/components/shared/CinematicPlayer";
import { buildTeaserMetadata } from "@/lib/metadata";
import { getTeaser } from "@/lib/teasers";

type TeaserPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: TeaserPageProps): Promise<Metadata> {
  const { id } = await params;
  const teaser = getTeaser(id);

  return buildTeaserMetadata({
    id: teaser.id,
    title: `Teaser privé — ${teaser.agency}`,
    description: `Film d'ambiance généré pour ${teaser.agency} · ${teaser.property}.`,
  });
}

export default async function LandingPriveePage({ params }: TeaserPageProps) {
  const { id } = await params;
  const teaser = getTeaser(id);

  return (
    <main className="min-h-dvh bg-osiris-black px-6 py-12 md:px-12">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="text-sm font-medium tracking-[0.2em] uppercase">
          Studio <span className="text-osiris-copper">53</span>
        </span>
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
          Salle de projection privée
        </span>
      </header>

      <section
        aria-labelledby="teaser-title"
        className="mx-auto mt-16 max-w-5xl text-center"
      >
        <h1 id="teaser-title" className="text-4xl font-light tracking-tight md:text-5xl">
          Votre mandat exclusif sous un nouvel angle.
        </h1>
        <p className="mt-4 text-sm text-white/55">
          Film d&apos;ambiance généré pour{" "}
          <span className="text-osiris-copper">{teaser.agency}</span> — Propriété{" "}
          {teaser.property}.
        </p>

        <div className="mt-12">
          <CinematicPlayer src={teaser.videoSrc} />
        </div>
      </section>

      <section
        aria-label="Débloquer le film complet"
        className="mx-auto mt-16 max-w-2xl text-center"
      >
        <p className="text-base leading-relaxed text-white/70">
          Ce teaser de 8 secondes n&apos;est qu&apos;un aperçu. Débloquez le
          Cinematic Tour complet de 60 secondes pour foudroyer la concurrence et
          vendre ce bien en exclusivité.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="/#contact"
            className="orange-glow inline-flex min-h-12 items-center justify-center rounded-full bg-osiris-copper px-8 text-sm font-medium text-osiris-black"
          >
            Commander le film complet (60s — 5&apos;000 CHF)
          </a>
          <a
            href="mailto:studio@studio53.com?subject=Discussion projet"
            className="text-xs tracking-wide text-white/55 underline-offset-4 hover:text-osiris-copper hover:underline"
          >
            Discuter du projet avec Steven &amp; Jonathan
          </a>
        </div>
      </section>
    </main>
  );
}

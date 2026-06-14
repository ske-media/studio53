import type { Founder } from "@/components/home/founders";

const BLUEPRINT =
  "linear-gradient(rgba(230,92,0,0.45) 1px, transparent 1px)," +
  "linear-gradient(90deg, rgba(230,92,0,0.45) 1px, transparent 1px)";

export function FounderCard({ founder }: { founder: Founder }) {
  const isArt = founder.effect === "art";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-brand-darkGrey">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={founder.image}
        alt={founder.name}
        className={`aspect-[3/4] w-full object-cover transition duration-700 ${
          isArt ? "group-hover:scale-[1.02] group-hover:blur-[1px]" : ""
        }`}
      />

      {founder.effect === "tech" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundImage: BLUEPRINT, backgroundSize: "32px 32px" }}
        />
      )}

      {isArt && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-osiris-copper/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
        <h3 className="text-lg font-medium text-osiris-white">{founder.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{founder.role}</p>
      </div>
    </article>
  );
}

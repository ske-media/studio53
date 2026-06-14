import { TARIFS } from "@/components/home/tarifs";
import { GlowCta } from "@/components/shared/GlowCta";

const VARIANT_STYLES = {
  muted: "border-brand-darkGrey opacity-60",
  target: "border-osiris-copper orange-glow",
  anchor: "border-brand-darkGrey",
} as const;

export function PricingGrid() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6">
      {TARIFS.map((card) => (
        <article
          key={card.id}
          className={`relative flex flex-col rounded-2xl border bg-osiris-black p-8 ${VARIANT_STYLES[card.variant]}`}
        >
          {card.badge && (
            <span className="absolute -top-3 left-8 rounded-full bg-osiris-copper px-3 py-1 text-[10px] font-medium tracking-wide text-osiris-black uppercase">
              {card.badge}
            </span>
          )}
          <h3 className="text-lg font-medium text-osiris-white">{card.name}</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
            {card.description}
          </p>
          <p
            className={`mt-6 text-2xl font-light ${card.variant === "target" ? "text-osiris-copper" : "text-osiris-white"}`}
          >
            {card.price}
          </p>
          {card.delay && (
            <p className="mt-2 text-xs tracking-wide text-white/45">{card.delay}</p>
          )}
          {card.cta && (
            <div className="mt-8">
              <GlowCta className="w-full py-3.5">{card.cta}</GlowCta>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

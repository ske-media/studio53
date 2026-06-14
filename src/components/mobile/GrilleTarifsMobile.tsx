"use client";

import { useEffect, useState } from "react";
import { TARIFS } from "@/components/home/tarifs";
import { GlowCta } from "@/components/shared/GlowCta";

export function GrilleTarifsMobile() {
  const [after, setAfter] = useState(false);
  const [frozen, setFrozen] = useState(false);

  useEffect(() => {
    if (frozen) return;
    const id = setInterval(() => setAfter((v) => !v), 3000);
    return () => clearInterval(id);
  }, [frozen]);

  return (
    <section
      id="expertise"
      aria-label="Nos Expertises & Tarifs"
      className="bg-osiris-black px-5 py-14"
    >
      <h2 className="text-center text-3xl font-light tracking-tight">
        Un format pour chaque ambition.
      </h2>

      <div className="mt-8 space-y-5">
        {TARIFS.map((card) => (
          <article
            key={card.id}
            className={`relative rounded-2xl border bg-osiris-black p-6 ${
              card.variant === "target"
                ? "border-osiris-copper orange-glow"
                : "border-brand-darkGrey"
            } ${card.variant === "muted" ? "opacity-70" : ""}`}
          >
            {card.badge && (
              <span className="absolute -top-3 left-6 rounded-full bg-osiris-copper px-3 py-1 text-[10px] font-medium tracking-wide text-osiris-black uppercase">
                {card.badge}
              </span>
            )}
            <h3 className="text-base font-medium">{card.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {card.description}
            </p>
            <p
              className={`mt-4 text-xl font-light ${card.variant === "target" ? "text-osiris-copper" : ""}`}
            >
              {card.price}
            </p>
            {card.delay && (
              <p className="mt-1 text-xs text-white/45">{card.delay}</p>
            )}
            {card.cta && (
              <div className="mt-5">
                <GlowCta className="w-full py-3.5">{card.cta}</GlowCta>
              </div>
            )}
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setFrozen((v) => !v)}
        aria-label="Figer la comparaison avant / après"
        className="relative mt-10 block aspect-video w-full overflow-hidden rounded-2xl border border-brand-darkGrey"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio/before-remodeling.webp"
          alt="Avant remodeling"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${after ? "opacity-0" : "opacity-100"}`}
        />
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${after ? "opacity-100" : "opacity-0"}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/portfolio/after-remodeling-loop.webm" type="video/webm" />
        </video>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[10px] tracking-widest text-white/80 uppercase">
          {frozen ? "Figé — touchez pour reprendre" : "Touchez pour figer"}
        </span>
      </button>
    </section>
  );
}

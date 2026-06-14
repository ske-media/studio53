"use client";

import { useEffect, useState } from "react";
import { GlowCta } from "@/components/shared/GlowCta";

/**
 * Hero Mobile — affichage immédiat, LCP < 1.5s.
 * Vidéo de fond + CTA sticky au pouce dès le premier scroll.
 */
export function HeroMobile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero — STUDIO 53"
      className="relative min-h-dvh overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero/hero-bg-mobile.jpg"
      >
        <source src="/hero/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <p className="text-[10px] font-medium tracking-[0.3em] text-osiris-copper uppercase">
          Disruptive by Nature
        </p>
        <h1 className="mt-4 text-3xl font-light tracking-tight">
          Vos mandats méritent le grand écran.
        </h1>
        <div className="mt-8">
          <GlowCta className="py-3.5">
            Mettre mon mandat à l&apos;épreuve
          </GlowCta>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-osiris-black/90 p-4 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <GlowCta className="w-full py-3.5">
          Mettre mon mandat à l&apos;épreuve
        </GlowCta>
      </div>
    </section>
  );
}

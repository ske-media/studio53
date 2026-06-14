"use client";

import { useEffect, useRef, useState } from "react";
import { GlowCta } from "@/components/shared/GlowCta";

const FALLBACK_IMG = "/hero/hero-bg-mobile.jpg";

/**
 * Hero Mobile — affichage immédiat, LCP < 1.5s.
 * Résilient au blocage d'autoplay (mode Économie d'énergie iOS/Android).
 */
export function HeroMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt) attempt.catch(() => setAutoplayFailed(true));
  }, []);

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
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${autoplayFailed ? "opacity-0" : "opacity-100"}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={FALLBACK_IMG}
      >
        <source src="/hero/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      {autoplayFailed && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={FALLBACK_IMG}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700"
        />
      )}

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

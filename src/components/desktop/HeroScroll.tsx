"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlowCta } from "@/components/shared/GlowCta";

/**
 * Hero Desktop — scrolltelling cinématique OSIRIS-53.
 * 3 étapes pilotées par la progression de scroll sur 300vh.
 */
export function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const mistOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5], [1, 1, 0]);
  const mistY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-12%"]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-70%"]);

  const videoOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.2, 0.6], [1.1, 1]);
  const videoBlur = useTransform(scrollYProgress, [0.2, 0.6], [20, 0]);
  const videoFilter = useTransform(videoBlur, (b) => `blur(${b}px)`);

  const pitchOpacity = useTransform(scrollYProgress, [0.6, 0.82], [0, 1]);
  const pitchY = useTransform(scrollYProgress, [0.6, 0.82], ["48px", "0px"]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero — STUDIO 53"
      className="relative h-[300vh] bg-osiris-black"
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <motion.div
          style={{ opacity: videoOpacity, scale: videoScale, filter: videoFilter }}
          className="absolute inset-0"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero/hero-bg-desktop.webm" type="video/webm" />
            <source src="/hero/hero-bg-desktop.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          aria-hidden
          style={{ opacity: mistOpacity, y: mistY }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/clouds-overlay.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="text-xs font-medium tracking-[0.4em] text-osiris-copper uppercase">
            Disruptive by Nature
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-light tracking-tight md:text-7xl">
            La photo immobilière ne suffit plus.
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: pitchOpacity, y: pitchY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="max-w-4xl text-4xl font-light tracking-tight md:text-6xl">
            Vos mandats exclusifs méritent le grand écran.
          </h2>
          <p className="mt-6 max-w-xl text-base text-white/60">
            Nous transformons vos simples photos en productions hollywoodiennes
            grâce à l&apos;intelligence artificielle. Une qualité studio
            indétectable, livrée en 10 jours.
          </p>
          <div className="mt-10">
            <GlowCta className="py-4">Mettre mon mandat à l&apos;épreuve</GlowCta>
          </div>
          <p className="mt-4 text-xs tracking-wide text-white/40">
            Teaser de 8 secondes offert
          </p>
        </motion.div>
      </div>
    </section>
  );
}

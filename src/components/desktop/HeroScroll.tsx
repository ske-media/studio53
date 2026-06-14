"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroIntro } from "@/components/desktop/HeroIntro";
import { HeroPitch } from "@/components/desktop/HeroPitch";

/**
 * Hero Desktop — scrolltelling cinématique OSIRIS-53.
 * Brume atmosphérique transparente (mix-blend-screen), 3 étapes sur 300vh.
 */
export function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const mistOpacity = useTransform(scrollYProgress, [0, 0.12, 0.5], [0.4, 0.34, 0]);
  const mistY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-18%"]);
  const mistFarOpacity = useTransform(scrollYProgress, [0, 0.5], [0.18, 0]);
  const mistFarY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-34%"]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-70%"]);
  const introScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.06]);

  const videoOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.2, 0.6], [1.12, 1]);
  const videoFilter = useTransform(
    useTransform(scrollYProgress, [0.2, 0.6], [22, 0]),
    (b) => `blur(${b}px)`,
  );
  const scrimOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 0.6]);

  const pitchOpacity = useTransform(scrollYProgress, [0.62, 0.84], [0, 1]);
  const pitchY = useTransform(scrollYProgress, [0.62, 0.84], ["56px", "0px"]);

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

        <motion.img
          aria-hidden
          src="/hero/clouds-overlay.webp"
          alt=""
          style={{ opacity: mistFarOpacity, y: mistFarY }}
          animate={{ x: ["-3%", "3%", "-3%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 h-full w-full scale-125 object-cover mix-blend-screen blur-md"
        />
        <motion.img
          aria-hidden
          src="/hero/clouds-overlay.webp"
          alt=""
          style={{ opacity: mistOpacity, y: mistY }}
          animate={{ x: ["2%", "-2%", "2%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 h-full w-full scale-110 object-cover mix-blend-screen"
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        <motion.div
          aria-hidden
          style={{ opacity: scrimOpacity }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          style={{ opacity: introOpacity, y: introY, scale: introScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <HeroIntro />
        </motion.div>

        <motion.div
          style={{ opacity: pitchOpacity, y: pitchY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <HeroPitch />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Bloc d'accroche Hero (étape 1) — entrée animée au montage. */
export function HeroIntro() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className="text-xs font-medium tracking-[0.5em] text-osiris-copper uppercase"
      >
        Disruptive by Nature
      </motion.p>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease, delay: 0.35 }}
        className="mt-6 block h-px w-16 origin-center bg-osiris-copper/70"
      />
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.3 }}
        className="mt-8 max-w-4xl text-5xl leading-[1.05] font-extralight tracking-tight md:text-7xl"
      >
        La photo immobilière
        <span className="block text-white/50">ne suffit plus.</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/40 uppercase"
      >
        Défiler
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-osiris-copper to-transparent"
        />
      </motion.div>
    </>
  );
}

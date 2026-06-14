"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INPUT =
  "w-full min-h-12 rounded-xl border border-brand-darkGrey bg-black/40 px-4 text-sm text-osiris-white outline-none transition-colors placeholder:text-white/40 focus:border-osiris-copper";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
};

export function FormulaireMobile() {
  const [step, setStep] = useState<1 | 2>(1);
  const [done, setDone] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Évaluer mon mandat"
      className="bg-osiris-black px-5 py-14"
    >
      <div className="overflow-hidden rounded-2xl border border-brand-darkGrey">
        <video
          className="aspect-[9/16] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/about/teaser-demo-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative mt-8 overflow-hidden">
        {done ? (
          <div className="rounded-2xl border border-osiris-copper p-6">
            <h3 className="text-xl font-light">Dossier reçu.</h3>
            <p className="mt-2 text-sm text-white/60">
              Votre teaser privé est en production. Réponse sous 48h.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait" custom={1}>
            {step === 1 ? (
              <motion.form
                key="step1"
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                <h2 className="text-2xl font-light tracking-tight">
                  Mettez-nous à l&apos;épreuve.
                </h2>
                <p className="mt-3 text-sm text-white/60">
                  Envoyez le lien d&apos;un mandat actif. Teaser de 8s offert.
                </p>
                <input
                  type="url"
                  required
                  className={`${INPUT} mt-6`}
                  placeholder="Lien de votre annonce"
                />
                <button
                  type="submit"
                  className="mt-5 min-h-12 w-full rounded-full bg-osiris-copper text-sm font-medium text-osiris-black"
                >
                  Évaluer mon mandat
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="step2"
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <h2 className="text-2xl font-light tracking-tight">
                  Dossier sécurisé.
                </h2>
                <p className="mt-3 text-sm text-white/60">
                  Où envoyer votre teaser privé ?
                </p>
                <input
                  type="text"
                  required
                  className={`${INPUT} mt-6`}
                  placeholder="Nom de l'agence"
                />
                <input
                  type="email"
                  required
                  className={`${INPUT} mt-3`}
                  placeholder="Email professionnel"
                />
                <button
                  type="submit"
                  className="orange-glow mt-5 min-h-12 w-full rounded-full bg-osiris-copper text-sm font-medium text-osiris-black"
                >
                  Recevoir mon film gratuit
                </button>
                <p className="mt-3 text-center text-[11px] text-white/40">
                  Zéro engagement. NDA automatique dès soumission.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

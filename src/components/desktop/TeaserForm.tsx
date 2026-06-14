"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTeaserForm } from "@/lib/useTeaserForm";

const INPUT =
  "w-full rounded-xl border border-brand-darkGrey bg-black/40 px-5 py-4 text-sm text-osiris-white outline-none transition-colors placeholder:text-white/40 focus:border-osiris-copper";

const variants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export function TeaserForm() {
  const { step, listingUrl, isSubmitting, error, done, goStep2, submit } =
    useTeaserForm();

  if (done) {
    return (
      <div className="rounded-2xl border border-osiris-copper p-10">
        <h3 className="text-2xl font-light">Dossier reçu.</h3>
        <p className="mt-3 text-sm text-white/60">
          Votre teaser privé est en production. Réponse sous 48h.
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {step === 1 ? (
        <motion.form
          key="step1"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeOut" }}
          onSubmit={goStep2}
        >
          <h2 className="text-4xl font-light tracking-tight">
            Mettez-nous à l&apos;épreuve.
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/60">
            Envoyez-nous le lien d&apos;un mandat actif. Nous générons un teaser
            vidéo de 8 secondes gratuitement.
          </p>
          <input
            type="url"
            name="listing-url"
            required
            defaultValue={listingUrl}
            className={`${INPUT} mt-8`}
            placeholder="Collez le lien de votre annonce (Sotheby's, Barnes, SeLoger…)"
          />
          <div className="mt-4 rounded-xl border border-dashed border-brand-darkGrey px-5 py-6 text-center text-xs text-white/40">
            Ou glissez vos photos HD ici
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-osiris-copper py-4 text-sm font-medium text-osiris-black transition-transform hover:scale-[1.02]"
          >
            Évaluer mon mandat
          </button>
        </motion.form>
      ) : (
        <motion.form
          key="step2"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeOut" }}
          onSubmit={submit}
        >
          <h2 className="text-4xl font-light tracking-tight">Dossier sécurisé.</h2>
          <p className="mt-4 text-sm text-white/60">
            Où devons-nous envoyer votre teaser privé ?
          </p>
          <input
            type="text"
            name="agency"
            required
            className={`${INPUT} mt-8`}
            placeholder="Nom de l'agence"
          />
          <input
            type="email"
            name="email"
            required
            className={`${INPUT} mt-4`}
            placeholder="Votre Email professionnel"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="orange-glow mt-8 w-full rounded-full bg-osiris-copper py-4 text-sm font-medium text-osiris-black disabled:opacity-60"
          >
            {isSubmitting ? "Envoi en cours…" : "Recevoir mon film gratuit"}
          </button>
          {error && (
            <p className="mt-3 text-center text-[11px] text-red-400">
              Une erreur est survenue. Merci de réessayer.
            </p>
          )}
          <p className="mt-4 text-center text-[11px] text-white/40">
            Zéro engagement. Signature de NDA automatique dès soumission.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

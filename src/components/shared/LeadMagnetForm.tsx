"use client";

import { useState } from "react";

/** Lead magnet — capture email + simulation de téléchargement (Desktop/Mobile). */
export function LeadMagnetForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-sm text-osiris-copper">
        Merci — votre manuel est en cours de téléchargement.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className={compact ? "flex flex-col gap-3" : "flex gap-3"}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre Email professionnel"
        className="min-h-12 flex-1 rounded-full border border-brand-darkGrey bg-black/40 px-5 text-sm text-osiris-white outline-none transition-colors placeholder:text-white/40 focus:border-osiris-copper"
      />
      <button
        type="submit"
        className="min-h-12 rounded-full bg-osiris-copper px-6 text-sm font-medium whitespace-nowrap text-osiris-black transition-transform hover:scale-[1.02]"
      >
        Télécharger le manuel
      </button>
    </form>
  );
}

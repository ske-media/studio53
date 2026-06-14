"use client";

import { useState } from "react";
import { submitNetlifyForm } from "@/lib/netlify";

/** Lead magnet — capture email via Netlify Forms (Desktop/Mobile). */
export function LeadMagnetForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-sm text-osiris-copper">
        Merci — votre manuel est en cours de téléchargement.
      </p>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);
    try {
      await submitNetlifyForm("lead-magnet", { email });
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "flex flex-col gap-3" : "flex gap-3"}
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre Email professionnel"
        className="min-h-12 flex-1 rounded-full border border-brand-darkGrey bg-black/40 px-5 text-sm text-osiris-white outline-none transition-colors placeholder:text-white/40 focus:border-osiris-copper"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-12 rounded-full bg-osiris-copper px-6 text-sm font-medium whitespace-nowrap text-osiris-black transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours…" : "Télécharger le manuel"}
      </button>
      {error && (
        <p className="text-[11px] text-red-400">
          Une erreur est survenue. Merci de réessayer.
        </p>
      )}
    </form>
  );
}

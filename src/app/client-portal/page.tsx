import type { Metadata } from "next";
import { Logo } from "@/components/shared/Logo";

export const metadata: Metadata = {
  title: "Espace Client",
  robots: { index: false, follow: false },
};

export default function ClientPortalPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-osiris-black px-6">
      <section
        aria-labelledby="portal-title"
        className="w-full max-w-sm text-center"
      >
        <Logo className="mx-auto h-7 w-auto" />

        <h1 id="portal-title" className="mt-10 text-2xl font-light tracking-tight">
          Espace de livraison sécurisé
        </h1>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            disabled
            placeholder="Identifiant"
            className="min-h-12 w-full rounded-xl border border-brand-darkGrey bg-black/40 px-5 text-sm text-osiris-white placeholder:text-white/35"
          />
          <input
            type="password"
            disabled
            placeholder="Mot de passe"
            className="min-h-12 w-full rounded-xl border border-brand-darkGrey bg-black/40 px-5 text-sm text-osiris-white placeholder:text-white/35"
          />
          <button
            type="button"
            disabled
            className="min-h-12 w-full cursor-not-allowed rounded-full border border-brand-darkGrey text-sm tracking-wide text-white/40"
          >
            Accès verrouillé
          </button>
        </form>

        <p className="mt-8 text-[11px] leading-relaxed text-white/40">
          Accès restreint aux partenaires Studio 53.
        </p>
      </section>
    </main>
  );
}

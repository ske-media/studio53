import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-darkGrey bg-osiris-black px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-6">
        <a href="#hero" aria-label="STUDIO 53 — Accueil">
          <Logo className="h-6 w-auto" />
        </a>

        <p className="text-center text-xs tracking-wide text-white/50">
          Disruptive by nature.
        </p>

        <div className="flex items-center justify-end gap-6">
          <span className="text-[11px] text-white/35">
            © {new Date().getFullYear()} Studio 53 · Mentions légales
          </span>
          <a
            href="/client-portal"
            className="rounded-full border border-brand-darkGrey px-4 py-2 text-[11px] tracking-wide text-white/70 transition-colors hover:border-osiris-copper hover:text-osiris-copper"
          >
            Espace Client
          </a>
        </div>
      </div>
    </footer>
  );
}

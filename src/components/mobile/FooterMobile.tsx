import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export function FooterMobile() {
  return (
    <footer className="border-t border-brand-darkGrey bg-osiris-black px-5 py-8 text-center">
      <a href="#hero" aria-label="STUDIO 53 — Accueil" className="inline-block">
        <Logo className="mx-auto h-9 w-auto" />
      </a>
      <p className="mt-3 text-xs tracking-wide text-white/50">
        Disruptive by nature.
      </p>
      <Link
        href="/client-portal"
        className="mt-5 inline-block rounded-full border border-brand-darkGrey px-4 py-2 text-[11px] tracking-wide text-white/70"
      >
        Espace Client
      </Link>
      <p className="mt-5 text-[11px] text-white/35">
        © {new Date().getFullYear()} Studio 53 · Mentions légales
      </p>
    </footer>
  );
}

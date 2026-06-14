export function Footer() {
  return (
    <footer className="border-t border-brand-darkGrey bg-osiris-black px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-6">
        <a href="#hero" className="text-sm font-medium tracking-[0.2em] uppercase">
          Studio <span className="text-osiris-copper">53</span>
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

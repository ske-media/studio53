export function FooterMobile() {
  return (
    <footer className="border-t border-brand-darkGrey bg-osiris-black px-5 py-8 text-center">
      <a href="#hero" className="text-sm font-medium tracking-[0.2em] uppercase">
        Studio <span className="text-osiris-copper">53</span>
      </a>
      <p className="mt-3 text-xs tracking-wide text-white/50">
        Disruptive by nature.
      </p>
      <a
        href="/client-portal"
        className="mt-5 inline-block rounded-full border border-brand-darkGrey px-4 py-2 text-[11px] tracking-wide text-white/70"
      >
        Espace Client
      </a>
      <p className="mt-5 text-[11px] text-white/35">
        © {new Date().getFullYear()} Studio 53 · Mentions légales
      </p>
    </footer>
  );
}

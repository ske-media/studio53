const NAV_ANCHORS = [
  { href: "#hero", label: "Accueil" },
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export function DesktopNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-osiris-black/80 backdrop-blur-md">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8"
      >
        <a href="#hero" className="text-sm font-medium tracking-[0.2em] uppercase">
          Studio <span className="text-osiris-copper">53</span>
        </a>
        <ul className="flex items-center gap-10">
          {NAV_ANCHORS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs tracking-widest uppercase text-white/70 transition-colors hover:text-osiris-copper"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

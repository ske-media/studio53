import { Logo } from "@/components/shared/Logo";

const NAV_ANCHORS = [
  { href: "#hero", label: "Accueil" },
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export function MobileNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-osiris-black/90">
      <nav
        aria-label="Navigation principale"
        className="flex h-16 items-center justify-between px-5"
      >
        <a href="#hero" aria-label="STUDIO 53 — Accueil">
          <Logo className="h-9 w-auto" />
        </a>
        <ul className="flex gap-4 overflow-x-auto">
          {NAV_ANCHORS.map(({ href, label }) => (
            <li key={href} className="shrink-0">
              <a
                href={href}
                className="text-[10px] tracking-wider uppercase text-white/70"
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

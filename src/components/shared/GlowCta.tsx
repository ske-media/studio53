type GlowCtaProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * CTA principal OSIRIS-53 — cuivré, rétroéclairé (.orange-glow).
 * Zone de clic minimale 48px (min-h-12), partagé Desktop / Mobile.
 */
export function GlowCta({
  href = "#contact",
  children,
  className = "",
}: GlowCtaProps) {
  return (
    <a
      href={href}
      className={`orange-glow inline-flex min-h-12 items-center justify-center rounded-full bg-osiris-copper px-8 text-sm font-medium tracking-wide text-osiris-black transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      {children}
    </a>
  );
}

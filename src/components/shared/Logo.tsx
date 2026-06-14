/** Logo officiel STUDIO 53 (SVG 600×180). */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/logo-studio53.svg" alt="STUDIO 53" className={className} />
  );
}

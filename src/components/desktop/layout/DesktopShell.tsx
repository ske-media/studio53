import { DesktopNavbar } from "@/components/desktop/layout/DesktopNavbar";

type DesktopShellProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function DesktopShell({ children, footer }: DesktopShellProps) {
  return (
    <div data-device="desktop" className="min-h-dvh">
      <DesktopNavbar />
      <main>{children}</main>
      {footer}
    </div>
  );
}

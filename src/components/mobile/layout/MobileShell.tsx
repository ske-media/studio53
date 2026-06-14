import { MobileNavbar } from "@/components/mobile/layout/MobileNavbar";

type MobileShellProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function MobileShell({ children, footer }: MobileShellProps) {
  return (
    <div data-device="mobile" className="min-h-dvh">
      <MobileNavbar />
      <main>{children}</main>
      {footer}
    </div>
  );
}

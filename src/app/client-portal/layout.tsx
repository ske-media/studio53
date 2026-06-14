import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Client",
  robots: { index: false, follow: false },
};

export default function ClientPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

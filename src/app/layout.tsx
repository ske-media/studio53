import "@/app/globals.css";

import { Inter } from "next/font/google";
import { baseMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-osiris-sans",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-osiris-black font-sans text-osiris-white antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio53.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "STUDIO 53 — Immobilier de luxe",
    template: "%s | STUDIO 53",
  },
  description:
    "STUDIO 53 conçoit des expériences digitales premium pour les courtiers en immobilier de luxe.",
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "STUDIO 53",
    images: [
      {
        url: "/seo/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "STUDIO 53",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@studio53",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type TeaserMetadataInput = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export function buildTeaserMetadata({
  id,
  title,
  description,
  imageUrl,
}: TeaserMetadataInput): Metadata {
  const ogImage = imageUrl ?? `/seo/og-preview.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/landing-privee/${id}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

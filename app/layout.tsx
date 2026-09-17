import type { Metadata } from "next";
import { business } from "../lib/config";
import { defaultOgImage, siteUrl } from "../lib/seo";
import { siteBasePath, withBasePath } from "../lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joury Optic | Opticien à Casablanca",
    template: "%s | Joury Optic",
  },
  description: "Joury Optic à Casablanca : montures optiques et solaires, conseil personnalisé, essayage virtuel et ajustement en boutique.",
  keywords: [
    "Opticien Casablanca",
    "lunettes Casablanca",
    "montures optiques Casablanca",
    "lunettes de soleil Casablanca",
    "Joury Optic",
    "Errahma Casablanca",
  ],
  applicationName: business.name,
  category: "optique",
  alternates: { canonical: "/" },
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: [
      { url: withBasePath("/brand/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: withBasePath("/brand/icon-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: withBasePath("/brand/apple-touch-icon.png") }],
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: business.name,
    title: "Joury Optic | Opticien à Casablanca",
    description: "Montures choisies, conseil personnalisé, essayage virtuel et ajustement précis à Casablanca.",
    url: "/",
    images: [{ url: defaultOgImage, width: 1672, height: 941, alt: "Joury Optic à Casablanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joury Optic | Opticien à Casablanca",
    description: "Montures choisies, conseil personnalisé et ajustement précis à Casablanca.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness"],
  "@id": `${siteUrl}/#business`,
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}${defaultOgImage}`,
  telephone: business.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: "Errahma",
    addressCountry: "MA",
  },
  areaServed: { "@type": "City", name: business.city },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const heroImageUrl = withBasePath("/images/hero/joury-hero.png");

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--joury-base-path:${siteBasePath}}
              .original-home-hero .hero-background{
                background-image:
                  linear-gradient(90deg, rgba(0,0,0,.97) 0%, rgba(0,0,0,.90) 28%, rgba(0,0,0,.46) 58%, rgba(0,0,0,.10) 100%),
                  linear-gradient(0deg, rgba(0,0,0,.42), rgba(0,0,0,.04) 56%, rgba(0,0,0,.30) 100%),
                  url("${heroImageUrl}") !important;
                background-size: cover !important;
                background-position: center center !important;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

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
  description: "Opticien à Casablanca depuis 1989 : montures optiques et solaires, conseil personnalisé, technologies verrières INDO, essayage et ajustement en boutique.",
  keywords: [
    "Opticien Casablanca",
    "lunettes Casablanca",
    "montures optiques Casablanca",
    "lunettes de soleil Casablanca",
    "Joury Optic",
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
    description: "Montures choisies, conseil personnalisé, technologies verrières et ajustement précis au cœur de Casablanca.",
    url: "/",
    images: [{ url: defaultOgImage, width: 1672, height: 941, alt: "Joury Optic à Casablanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joury Optic | Opticien à Casablanca",
    description: "Montures choisies, conseil personnalisé et ajustement précis au cœur de Casablanca.",
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
  email: business.email,
  foundingDate: String(business.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 Souk Korea, Bloc EF",
    addressLocality: business.city,
    addressCountry: "MA",
  },
  areaServed: { "@type": "City", name: business.city },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <style dangerouslySetInnerHTML={{ __html: `:root{--joury-base-path:${siteBasePath}}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

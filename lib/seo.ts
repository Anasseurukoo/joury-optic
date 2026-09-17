import type { Metadata } from "next";
import { business } from "./config";
import { withBasePath } from "./paths";

export const siteUrl = business.website.replace(/\/$/, "");
export const defaultOgImage = withBasePath("/images/hero/hero-casablanca.png");

export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      siteName: business.name,
      title,
      description,
      url: canonical,
      images: [{ url: image, width: 1672, height: 941, alt: `${business.name} à ${business.city}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

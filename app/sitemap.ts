import type { MetadataRoute } from "next";
import { products } from "../lib/products";
import { siteUrl } from "../lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/collections", "/collections/solaire", "/collections/vue", "/technologies-indo",
    "/essayage", "/services", "/a-propos", "/contact", "/rendez-vous", "/confidentialite",
  ];
  const pages: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${siteUrl}${path}${path ? "/" : "/"}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/collections" ? 0.9 : 0.7,
  }));
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/produits/${product.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...productPages];
}

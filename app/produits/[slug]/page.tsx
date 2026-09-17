import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "../../../components/ProductPage";
import { getProductBySlug, products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Monture" };
  const canonical = `/produits/${product.slug}/`;
  return {
    title: `${product.name} · ${product.reference}`,
    description: `${product.description} Découvrez cette monture chez Joury Optic à Casablanca.`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      title: `${product.name} · ${product.reference} | Joury Optic`,
      description: product.description,
      url: canonical,
      images: [{ url: product.images[0], alt: `${product.name}, ${product.reference}` }],
    },
    twitter: { card: "summary_large_image", title: `${product.name} · ${product.reference}`, description: product.description, images: [product.images[0]] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}

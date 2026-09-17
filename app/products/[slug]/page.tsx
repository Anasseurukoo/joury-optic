import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyProductRedirect from "../../../components/LegacyProductRedirect";
import { getProductBySlug, products } from "../../../lib/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { robots: { index: false, follow: true } };
  return {
    title: `Redirection · ${product.name}`,
    alternates: { canonical: `/produits/${product.slug}/` },
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <LegacyProductRedirect href={`/produits/${product.slug}/`} />;
}

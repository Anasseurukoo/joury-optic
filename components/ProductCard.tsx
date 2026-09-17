import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../lib/products";
import ImageWithFallback from "./ImageWithFallback";

export default function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <article className={`product-card ${large ? "product-card-large" : ""}`}>
      <Link href={`/produits/${product.slug}`} className="product-card-image" aria-label={`Voir ${product.name}`}>
        <ImageWithFallback src={product.images[0]} alt={`${product.name}, ${product.reference}`} />
        <span className="product-card-arrow"><ArrowUpRight size={20} /></span>
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </Link>
      <div className="product-card-info">
        <div>
          <p className="product-brand">{product.brand} · {product.category === "soleil" ? "Solaire" : "Optique"}</p>
          <h3><Link href={`/produits/${product.slug}`}>{product.name}</Link></h3>
        </div>
        <p>{product.reference}<br />{product.color}</p>
      </div>
    </article>
  );
}

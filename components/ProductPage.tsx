"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Ruler, Sparkles } from "lucide-react";
import type { Product } from "../lib/products";
import { products } from "../lib/products";
import Header from "./Header";
import Footer from "./Footer";
import TryOnLauncher from "./TryOnLauncher";
import ProductCard from "./ProductCard";
import ImageWithFallback from "./ImageWithFallback";

export default function ProductPage({ product }: { product: Product }) {
  const [image, setImage] = useState(product.images[0]);
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main id="main" className="page-main product-page">
        <section className="product-detail">
          <div className="product-gallery">
            <div className="product-gallery-main">
              <ImageWithFallback src={image} alt={`${product.name}, ${product.reference}`} loading="eager" />
              {product.badge && <span className="product-detail-badge">{product.badge}</span>}
            </div>
            {product.images.length > 1 && (
              <div className="product-thumbs" aria-label="Autres vues">
                {product.images.map((source, index) => (
                  <button key={source} className={image === source ? "active" : ""} onClick={() => setImage(source)} aria-label={`Afficher la vue ${index + 1}`}>
                    <ImageWithFallback src={source} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-detail-copy">
            <Link href="/collections" className="back-link"><ArrowLeft size={16} /> Retour aux collections</Link>
            <p className="eyebrow"><span /> {product.brand} · {product.category === "soleil" ? "Solaire" : "Optique"}</p>
            <h1>{product.name}</h1>
            <p className="product-reference">{product.reference}</p>
            <p className="product-description">{product.description}</p>

            <div className="product-specs">
              <div><span>Couleur</span><strong>{product.color}</strong></div>
              <div><span>Matière</span><strong>{product.frameMaterial}</strong></div>
              <div><span>Fabrication</span><strong>{product.madeIn}</strong></div>
              <div><span>Catégorie</span><strong>{product.category === "soleil" ? "Solaire" : "Optique"}</strong></div>
            </div>

            <div className="product-features">
              {product.features.map((feature) => <span key={feature}><Check size={15} /> {feature}</span>)}
            </div>

            <div className="product-actions">
              <Link href={`/rendez-vous?frame=${encodeURIComponent(product.reference)}`} className="button button-dark">Essayer en boutique <ArrowRight size={17} /></Link>
              <TryOnLauncher frame={product.reference} label="Essayage virtuel" className="button button-outline-dark" />
            </div>
            <p className="product-availability">La disponibilité est confirmée directement par Joury Optic.</p>
          </div>
        </section>

        <section className="product-measure-section">
          <div className="shell product-measure-grid">
            <div>
              <p className="eyebrow light"><span /> Proportions</p>
              <h2>Une question<br /><em>d’équilibre.</em></h2>
              <p>Les dimensions donnent un premier repère. L’ajustement final se fait en boutique, selon le visage et le confort recherché.</p>
            </div>
            <div className="measure-card">
              <Ruler size={27} />
              <div><span>Largeur verre</span><strong>{product.measurements.lensWidth} mm</strong></div>
              <div><span>Pont</span><strong>{product.measurements.bridgeWidth} mm</strong></div>
              <div><span>Branche</span><strong>{product.measurements.templeLength} mm</strong></div>
              <div><span>Couverture</span><strong>{product.measurements.faceCoverage}</strong></div>
            </div>
            <div className="measure-visual">
              <ImageWithFallback src={product.images[0]} alt={`Proportions de ${product.name}`} />
              <span className="measure-line measure-line-top" />
              <span className="measure-line measure-line-side" />
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="shell">
            <div className="section-heading split-heading compact-heading">
              <div><p className="eyebrow"><span /> Même univers</p><h2>Continuer<br /><em>la sélection.</em></h2></div>
              <p className="heading-side"><Sparkles size={18} /> D’autres références de la même catégorie.</p>
            </div>
            <div className="product-grid product-grid-three">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

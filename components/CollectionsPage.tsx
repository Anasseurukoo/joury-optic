"use client";

import { withBasePath } from "../lib/paths";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Glasses } from "lucide-react";
import { products } from "../lib/products";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import ProductCard from "./ProductCard";

export default function CollectionsPage({ initialCategory = "all" }: { initialCategory?: "all" | "soleil" | "vue" }) {
  const [category, setCategory] = useState<"all" | "soleil" | "vue">(initialCategory);
  const list = useMemo(() => category === "all" ? products : products.filter((product) => product.category === category), [category]);

  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Collections"
          title={<>Choisir une monture.<br /><em>Affirmer un regard.</em></>}
          description="Une sélection solaire et optique à explorer par forme, caractère et usage. Les disponibilités sont confirmées directement en boutique."
          image={withBasePath("/images/hero-transitions.webp")}
          imageAlt="Monture solaire posée dans un paysage lumineux"
        >
          <div className="page-hero-actions">
            <Link href="/rendez-vous" className="button button-dark">Préparer un essayage <ArrowRight size={17} /></Link>
          </div>
        </PageHero>

        <section className="section section-ivory collection-section">
          <div className="shell">
            <div className="collection-toolbar">
              <div className="collection-tabs" role="tablist" aria-label="Filtrer les collections">
                <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")} role="tab" aria-selected={category === "all"}>Toutes <span>{products.length}</span></button>
                <button className={category === "soleil" ? "active" : ""} onClick={() => setCategory("soleil")} role="tab" aria-selected={category === "soleil"}><Sun size={16} /> Solaires <span>{products.filter((product) => product.category === "soleil").length}</span></button>
                <button className={category === "vue" ? "active" : ""} onClick={() => setCategory("vue")} role="tab" aria-selected={category === "vue"}><Glasses size={17} /> Optiques <span>{products.filter((product) => product.category === "vue").length}</span></button>
              </div>
              <p>{list.length} références présentées</p>
            </div>

            <div className="product-grid">
              {list.map((product, index) => <ProductCard key={product.slug} product={product} large={index === 0 && category === "all"} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

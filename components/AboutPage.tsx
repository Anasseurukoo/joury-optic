import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import ImageWithFallback from "./ImageWithFallback";
import { withBasePath } from "../lib/paths";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="La maison"
          title={<>Une optique locale.<br /><em>Un regard exigeant.</em></>}
          description="Joury Optic accompagne chaque client dans le choix d’une monture adaptée au style, au confort et aux besoins du quotidien."
          image={withBasePath("/images/hero/hero-casablanca.png")}
          imageAlt="Monture dans une boutique à Casablanca"
        />

        <section className="about-manifesto">
          <div className="shell about-manifesto-grid">
            <p className="about-number">01</p>
            <h2>Une monture n’est pas seulement un objet. Elle entre dans votre visage, votre expression et votre quotidien.</h2>
            <p>C’est pour cela que la sélection ne s’arrête pas à une tendance. Elle doit tenir compte de la ligne, des proportions, du confort et de la manière dont vous vous reconnaissez dans le miroir.</p>
          </div>
        </section>

        <section className="about-collage">
          <div className="about-collage-a"><ImageWithFallback src={withBasePath("/images/lifestyle/persol-women-round.webp")} alt="Femme portant une monture ronde" /></div>
          <div className="about-collage-copy">
            <p className="eyebrow light"><span /> Proche de ses clients</p>
            <h2>Conseiller sans imposer.<br /><em>Ajuster sans compromis.</em></h2>
            <div className="about-values">
              <div><HeartHandshake size={21} /><span><strong>Écoute</strong> Comprendre les usages avant de proposer.</span></div>
              <div><Sparkles size={21} /><span><strong>Sélection</strong> Présenter des montures avec une identité claire.</span></div>
              <div><MapPin size={21} /><span><strong>Proximité</strong> Une rencontre réelle au cœur de Casablanca.</span></div>
            </div>
            <Link href="/contact" className="button button-gold">Visiter Joury <ArrowRight size={17} /></Link>
          </div>
          <div className="about-collage-b"><ImageWithFallback src={withBasePath("/images/lifestyle/persol-men-black-square.webp")} alt="Homme portant une monture noire" /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

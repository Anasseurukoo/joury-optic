"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Eye,
  Gem,
  Glasses,
  Heart,
  MapPin,
  ScanFace,
  Sparkles,
  Wrench,
} from "lucide-react";
import { products } from "../lib/products";
import { business } from "../lib/config";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ImageWithFallback from "./ImageWithFallback";
import { withBasePath } from "../lib/paths";
import AppointmentForm from "./AppointmentForm";
import SupplierSection from "./SupplierSection";
import IndoTechnologiesSection from "./IndoTechnologiesSection";

const services = [
  { icon: Eye, number: "01", title: "Examen visuel", text: "Un bilan précis et un accompagnement clair en boutique." },
  { icon: ScanFace, number: "02", title: "Conseil morphologique", text: "Une monture choisie selon le visage, le style et les usages." },
  { icon: Glasses, number: "03", title: "Montage & ajustement", text: "Des réglages soignés pour un confort naturel au quotidien." },
  { icon: Wrench, number: "04", title: "Entretien & réparation", text: "Nettoyage, réglages et petites réparations pour prolonger la durée de vie." },
];

const originalHeroStyles = `
  .original-home-hero { position: relative; min-height: 100svh; }
  .original-home-hero .hero-background {
    background-image:
      linear-gradient(90deg, rgba(0,0,0,.97) 0%, rgba(0,0,0,.90) 28%, rgba(0,0,0,.46) 58%, rgba(0,0,0,.10) 100%),
      linear-gradient(0deg, rgba(0,0,0,.42), rgba(0,0,0,.04) 56%, rgba(0,0,0,.30) 100%),
      url("/images/hero/joury-hero.png");
    background-size: cover;
    background-position: center center;
  }
  .original-home-hero .hero-content {
    width: calc(100% - 160px);
    max-width: none;
    margin: 0 80px;
    padding-top: 162px;
    padding-bottom: 100px;
    align-items: center;
  }
  .original-home-hero .hero-main { max-width: 860px; }
  .original-home-hero .hero-kicker {
    margin: 0 0 26px;
    color: rgba(255,255,255,.86);
    font-size: 14px;
    line-height: 1.8;
    font-weight: 550;
    letter-spacing: .34em;
    text-transform: uppercase;
  }
  .original-home-hero .hero-main h1 {
    max-width: none;
    margin: 0;
    font: 400 clamp(72px, 6.6vw, 128px)/.83 var(--serif);
    letter-spacing: -.04em;
    text-transform: uppercase;
  }
  .original-home-hero .hero-main h1 em {
    display: block;
    font-style: normal;
    color: #f4d58d;
    text-shadow: 0 3px 22px rgba(0,0,0,.18);
  }
  .original-home-hero .hero-lead {
    max-width: 720px;
    margin: 34px 0 0;
    color: rgba(255,255,255,.87);
    font-size: clamp(18px, 1.5vw, 24px);
    line-height: 1.55;
  }
  .original-home-hero .hero-buttons { gap: 16px; margin-top: 38px; }
  .original-home-hero .original-primary,
  .original-home-hero .original-secondary {
    min-height: 64px;
    border-radius: 0;
    padding: 17px 30px;
    font-size: 15px;
    font-weight: 760;
    letter-spacing: .01em;
  }
  .original-home-hero .original-primary {
    background: linear-gradient(90deg, #f9e1a6, #efcf7f);
    color: #090c0b;
    box-shadow: 0 14px 35px rgba(0,0,0,.18);
  }
  .original-home-hero .original-primary:hover { background: linear-gradient(90deg, #ffe8b4, #f4d88e); }
  .original-home-hero .original-secondary {
    border-color: rgba(255,255,255,.82);
    background: rgba(0,0,0,.12);
    color: white;
    backdrop-filter: blur(8px);
  }
  .original-home-hero .original-secondary:hover {
    background: rgba(255,255,255,.10);
    border-color: white;
  }
  .original-home-hero .hero-features {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 42px;
    max-width: 840px;
    border-top: 1px solid rgba(255,255,255,.14);
    border-bottom: 1px solid rgba(255,255,255,.14);
  }
  .original-home-hero .hero-feature {
    min-height: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 18px;
    color: rgba(255,255,255,.92);
    text-align: center;
  }
  .original-home-hero .hero-feature + .hero-feature { border-left: 1px solid rgba(255,255,255,.18); }
  .original-home-hero .hero-feature svg { color: #f0cc75; }
  .original-home-hero .hero-feature span {
    max-width: 150px;
    font-size: 13px;
    font-weight: 650;
    line-height: 1.35;
    letter-spacing: .05em;
    text-transform: uppercase;
  }
  @media (max-width: 1180px) {
    .original-home-hero .hero-content { width: calc(100% - 100px); margin: 0 50px; }
    .original-home-hero .hero-main h1 { font-size: clamp(64px, 8vw, 100px); }
  }
  @media (max-width: 900px) {
    .original-home-hero .hero-content { width: calc(100% - 48px); margin: 0 24px; padding-top: 128px; padding-bottom: 64px; }
    .original-home-hero .hero-main { max-width: 760px; }
    .original-home-hero .hero-kicker { font-size: 11px; letter-spacing: .24em; }
    .original-home-hero .hero-main h1 { font-size: clamp(58px, 12vw, 88px); }
    .original-home-hero .hero-lead { margin-top: 24px; font-size: 17px; }
    .original-home-hero .hero-buttons { display: grid; }
    .original-home-hero .original-primary, .original-home-hero .original-secondary { width: 100%; }
    .original-home-hero .hero-features { grid-template-columns: repeat(2, 1fr); }
    .original-home-hero .hero-feature:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.18); }
    .original-home-hero .hero-feature:nth-child(4) { border-top: 1px solid rgba(255,255,255,.18); }
  }
  @media (max-width: 560px) {
    .original-home-hero .hero-content { padding-top: 108px; }
    .original-home-hero .hero-main h1 { font-size: clamp(47px, 14vw, 68px); line-height: .88; }
    .original-home-hero .hero-lead { font-size: 15px; }
    .original-home-hero .hero-feature { min-height: 96px; padding: 12px 8px; }
    .original-home-hero .hero-feature span { font-size: 10px; }
  }
`;

export default function HomePage() {
  return (
    <>
      <style>{originalHeroStyles}</style>
      <Header overlay />
      <main id="main">
        <section className="home-hero original-home-hero">
          <div className="hero-background" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="shell hero-content">
            <motion.div
              className="hero-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="hero-kicker">Regardez le monde<br />autrement</p>
              <h1>Votre vision<br /><em>notre passion</em></h1>
              <p className="hero-lead">Des lunettes, des lentilles et un accompagnement expert pour une vision plus claire et un style unique.</p>

              <div className="hero-buttons">
                <Link href="/collections" className="button original-primary">Découvrir nos collections <ArrowRight size={21} /></Link>
                <Link href="/rendez-vous" className="button original-secondary"><CalendarDays size={21} /> Prendre rendez-vous</Link>
              </div>

              <div className="hero-features" aria-label="Nos engagements">
                <div className="hero-feature"><Gem size={31} strokeWidth={1.6} /><span>Expertise<br />professionnelle</span></div>
                <div className="hero-feature"><Eye size={31} strokeWidth={1.6} /><span>Examen<br />de vue</span></div>
                <div className="hero-feature"><Glasses size={31} strokeWidth={1.6} /><span>Marques<br />premium</span></div>
                <div className="hero-feature"><Heart size={31} strokeWidth={1.6} /><span>Accompagnement<br />personnalisé</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="selection" className="section section-ivory">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span /> La sélection</p>
                <h2>Des montures avec<br /><em>une vraie présence.</em></h2>
              </div>
              <div className="heading-side">
                <p>Solaires ou optiques, chaque référence est présentée pour sa ligne, son équilibre et sa personnalité.</p>
                <Link href="/collections" className="text-link">Voir toute la collection <ArrowRight size={17} /></Link>
              </div>
            </div>

            <div className="featured-products">
              <ProductCard product={products[0]} large />
              <div className="featured-products-stack">
                <ProductCard product={products[1]} />
                <ProductCard product={products[5]} />
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-story">
          <div className="editorial-image editorial-image-main">
            <ImageWithFallback src={withBasePath("/images/lifestyle/persol-men-square.webp")} alt="Homme portant une monture Persol noire" />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow light"><span /> Une question d’équilibre</p>
            <h2>La monture ne doit pas prendre votre place.</h2>
            <p>Elle doit souligner un regard, accompagner un visage et rester juste toute la journée. C’est là que commence le conseil Joury.</p>
            <Link href="/a-propos" className="text-link text-link-light">Découvrir la maison <ArrowRight size={17} /></Link>
          </div>
          <div className="editorial-image editorial-image-small">
            <ImageWithFallback src={withBasePath("/images/lifestyle/persol-women-square.webp")} alt="Femme portant une monture Persol noire" />
          </div>
          <p className="editorial-vertical">JOURY OPTIC · CASABLANCA</p>
        </section>

        <section className="section tryon-section">
          <div className="shell tryon-grid">
            <div className="tryon-copy">
              <p className="eyebrow light"><span /> Essayage virtuel</p>
              <h2>Votre prochain regard,<br /><em>avant même la visite.</em></h2>
              <p>Sur les montures compatibles, l’application mobile permet de visualiser la forme sur votre visage. La caméra reste facultative et n’est sollicitée qu’après votre accord.</p>
              <div className="tryon-points">
                <span><Camera size={18} /> Autorisation claire</span>
                <span><ScanFace size={18} /> Montures compatibles</span>
                <span><CalendarDays size={18} /> Référence conservée pour la visite</span>
              </div>
              <div className="tryon-cta-group">
                <Link href="/essayage" className="button button-outline-light">Découvrir l’expérience <ArrowRight size={18} /></Link>
                <p className="tryon-status"><span aria-hidden="true" /> Sous test · bientôt disponible sur Play Store</p>
              </div>
            </div>

            <div className="tryon-stage">
              <div className="tryon-orbit orbit-one" />
              <div className="tryon-orbit orbit-two" />
              <div className="phone-mockup">
                <div className="phone-top"><span /><span /></div>
                <div className="phone-screen">
                  <ImageWithFallback src={withBasePath("/images/lifestyle/persol-alpine-women.webp")} alt="Aperçu d’une monture sur un visage" />
                  <div className="face-scan" aria-hidden="true"><i /><i /><i /><i /></div>
                  <div className="phone-label"><span>Alpine Signature</span><strong>PO2496SZ</strong></div>
                </div>
              </div>
              <div className="floating-frame">
                <ImageWithFallback src={withBasePath("/images/products/persol/po2496sz-front.webp")} alt="Monture Alpine Signature" />
              </div>
              <div className="tryon-tag"><span>AR</span> Compatible</div>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span /> Le savoir-faire</p>
                <h2>Une belle monture.<br /><em>Un réglage parfait.</em></h2>
              </div>
              <p className="heading-side">Le service ne s’arrête pas au choix. Mesure, montage, ajustement et entretien font partie de l’expérience.</p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className={`service-card service-card-${index + 1}`}
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="service-card-top"><span>{service.number}</span><Icon size={23} /></div>
                    <div><h3>{service.title}</h3><p>{service.text}</p></div>
                  </motion.article>
                );
              })}
              <Link href="/services" className="service-more">
                <span>Voir tous les services</span>
                <ArrowUpRight size={28} />
              </Link>
            </div>
          </div>
        </section>

        <SupplierSection />
        <IndoTechnologiesSection />

        <section className="visit-section">
          <div className="visit-image">
            <ImageWithFallback src={withBasePath("/images/hero/hero-casablanca.png")} alt="Monture dans une boutique avec vue sur Casablanca" />
          </div>
          <div className="visit-copy">
            <p className="eyebrow light"><span /> Visiter Joury</p>
            <h2>Le digital inspire.<br />La rencontre décide.</h2>
            <p>Venez comparer les lignes, essayer les proportions et ajuster la monture avec un conseil personnel.</p>
            <div className="visit-address">
              <MapPin size={21} />
              <div><strong>{business.address}</strong><span>Ouvert toute la semaine</span></div>
            </div>
            <Link href="/contact" className="button button-gold">Préparer la visite <ArrowRight size={18} /></Link>
          </div>
        </section>

        <section className="section appointment-section">
          <div className="shell appointment-layout">
            <div className="appointment-intro">
              <p className="eyebrow light"><span /> Rendez-vous</p>
              <h2>Un moment pour<br /><em>trouver la bonne.</em></h2>
              <p>Préparez votre demande en quelques secondes. Joury vous contacte ensuite pour confirmer personnellement le créneau.</p>
              <div className="appointment-contact">
                <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
                <a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
                {business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}
              </div>
            </div>
            <div className="appointment-panel">
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

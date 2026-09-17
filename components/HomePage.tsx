"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Eye,
  Glasses,
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

export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main id="main">
        <section className="home-hero">
          <div className="hero-background" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="shell hero-content">
            <motion.div
              className="hero-main"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow light"><span /> Opticien · Casablanca</p>
              <h1>Le bon cadre<br /><em>change tout.</em></h1>
              <p className="hero-lead">Des montures choisies avec exigence, un conseil humain et un ajustement précis — pour que vos lunettes ressemblent vraiment à votre regard.</p>
              <div className="hero-buttons">
                <Link href="/collections" className="button button-gold">Découvrir les collections <ArrowRight size={18} /></Link>
                <Link href="/rendez-vous" className="button button-glass"><CalendarDays size={18} /> Préparer une visite</Link>
              </div>
              <div className="hero-exclusive-demo-row">
                <Link href="/essayage#demo" className="hero-exclusive-demo" aria-label="Ouvrir la démo Try On Lunettes">
                  <Camera size={17} aria-hidden="true" />
                  <span>Try On Lunettes</span>
                  <strong>Essai en direct</strong>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/try-lens#demo" className="hero-exclusive-demo" aria-label="Ouvrir la démo Try Lens">
                  <Camera size={17} aria-hidden="true" />
                  <span>Try Lens</span>
                  <strong>Essai en direct</strong>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="shell hero-bottom">
            <a href="#selection" className="hero-scroll">Explorer <ArrowDown size={16} /></a>
            <div className="hero-proof">
              <span><Sparkles size={15} /> Sélection choisie</span>
              <span><ScanFace size={15} /> Conseil personnalisé</span>
              <span><Glasses size={15} /> Ajustement en boutique</span>
            </div>
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

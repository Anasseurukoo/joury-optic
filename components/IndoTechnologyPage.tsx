"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink, Eye, Glasses, Layers3, Ruler, Shield, Sparkles, Sun } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { business } from "../lib/config";
import { indoSources, infraredTechnologies, progressiveLenses, singleVisionLenses } from "../lib/indo-technologies";

const technologyIcons = {
  "natural-clear": Layers3,
  "energy-blue": Eye,
  sunmax: Sun,
  polarmax: Shield,
};

export default function IndoTechnologyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="indo-page-hero">
          <div className="indo-page-hero-grid shell">
            <motion.div
              className="indo-page-hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow light"><span /> INDO × Joury Optic</p>
              <h1>La technologie<br />derrière <em>votre vision.</em></h1>
              <p>Une monture donne la ligne. Le verre apporte la précision. Joury vous accompagne dans le choix d’une solution adaptée à votre correction, vos usages et votre style de vie.</p>
              <div className="indo-page-hero-actions">
                <a href="#infrared" className="button button-gold">Découvrir les traitements <ArrowRight size={18} /></a>
                <Link href="/rendez-vous" className="button button-glass">Demander conseil</Link>
              </div>
              <div className="indo-verified-note">
                <Check size={17} />
                <span>Informations vérifiées et synthétisées à partir des pages officielles INDO Maroc.</span>
              </div>
            </motion.div>

            <motion.div
              className="indo-lens-sculpture"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <div className="lens-disc lens-disc-a" />
              <div className="lens-disc lens-disc-b" />
              <div className="lens-disc lens-disc-c" />
              <div className="lens-disc lens-disc-d" />
              <div className="lens-core"><span>INDO</span><small>OPTICAL</small></div>
              <div className="lens-axis lens-axis-x" />
              <div className="lens-axis lens-axis-y" />
              <span className="lens-coordinate lens-coordinate-a">IR-A</span>
              <span className="lens-coordinate lens-coordinate-b">UV</span>
              <span className="lens-coordinate lens-coordinate-c">BLUE</span>
            </motion.div>
          </div>
        </section>

        <section className="indo-page-intro section section-ivory">
          <div className="shell indo-page-intro-grid">
            <div>
              <p className="eyebrow"><span /> FreeMax</p>
              <h2>Une surface calculée<br /><em>avec précision.</em></h2>
            </div>
            <div className="indo-page-intro-copy">
              <p>INDO explique que la technologie FreeMax travaille la surface du verre avec une grande précision afin d’optimiser sa qualité optique, son profil et son épaisseur. Selon la gamme, elle tient compte de paramètres comme la position de la pupille, la hauteur de montage, la forme de la monture ou les habitudes visuelles.</p>
              <div className="indo-page-keywords"><span>Surface numérique</span><span>Personnalisation</span><span>Montage précis</span><span>Confort d’adaptation</span></div>
            </div>
          </div>
        </section>

        <section className="indo-freemax-section">
          <div className="shell">
            <div className="indo-freemax-heading">
              <div>
                <p className="eyebrow light"><span /> Gammes FreeMax</p>
                <h2>De près, de loin,<br /><em>et dans le mouvement.</em></h2>
              </div>
              <p>Chaque nom correspond à une approche différente. Le choix dépend de la prescription, de la monture et des habitudes de la personne.</p>
            </div>

            <div className="indo-lens-family-grid">
              <article className="indo-lens-family-card indo-lens-family-progressive">
                <div className="indo-family-card-head"><span>01</span><Glasses size={24} /></div>
                <p>Verres progressifs</p>
                <h3>Une vision continue, pensée selon le quotidien.</h3>
                <div className="indo-lens-list">
                  {progressiveLenses.map((lens) => (
                    <div key={lens.name}><strong>{lens.name}</strong><span>{lens.note}</span></div>
                  ))}
                </div>
              </article>

              <article className="indo-lens-family-card indo-lens-family-single">
                <div className="indo-family-card-head"><span>02</span><Eye size={24} /></div>
                <p>Verres unifocaux</p>
                <h3>Une correction précise sur toute la surface utile.</h3>
                <div className="indo-lens-list">
                  {singleVisionLenses.map((lens) => (
                    <div key={lens.name}><strong>{lens.name}</strong><span>{lens.note}</span></div>
                  ))}
                </div>
                <div className="indo-single-graphic" aria-hidden="true"><i /><i /><i /></div>
              </article>
            </div>
          </div>
        </section>

        <section id="infrared" className="indo-infrared-section section">
          <div className="shell">
            <div className="section-heading split-heading indo-infrared-heading">
              <div>
                <p className="eyebrow"><span /> Infrared Technology</p>
                <h2>Un traitement pour<br /><em>chaque usage.</em></h2>
              </div>
              <p className="heading-side">Quatre familles mises en avant par INDO pour répondre à des besoins différents : transparence, écrans, solaire et solaire polarisé.</p>
            </div>

            <div className="indo-treatment-grid">
              {infraredTechnologies.map((technology, index) => {
                const Icon = technologyIcons[technology.id as keyof typeof technologyIcons];
                return (
                  <motion.article
                    key={technology.id}
                    className={`indo-treatment-card indo-treatment-${technology.tone}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <div className="indo-treatment-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={23} /></div>
                    <div className="indo-treatment-symbol" aria-hidden="true"><i /><i /><i /></div>
                    <p>{technology.family}</p>
                    <h3>{technology.name}</h3>
                    <strong>{technology.short}</strong>
                    <ul>{technology.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="indo-joury-role">
          <div className="shell indo-joury-role-grid">
            <div className="indo-joury-role-copy">
              <p className="eyebrow light"><span /> Le rôle de Joury</p>
              <h2>La technologie ne remplace pas<br /><em>le bon conseil.</em></h2>
              <p>La disponibilité et la pertinence d’un verre dépendent de la prescription, de la monture et de l’usage. En boutique, Joury vous aide à comparer les solutions, prend les mesures nécessaires et assure le montage puis l’ajustement.</p>
              <Link href="/rendez-vous" className="button button-gold">Préparer une visite <ArrowRight size={18} /></Link>
            </div>
            <div className="indo-joury-role-steps">
              <div><Ruler size={22} /><span>01</span><strong>Mesurer</strong><p>Prendre en compte la correction, la hauteur et la géométrie de la monture.</p></div>
              <div><Sparkles size={22} /><span>02</span><strong>Choisir</strong><p>Identifier une gamme cohérente avec les habitudes visuelles et le budget.</p></div>
              <div><Glasses size={22} /><span>03</span><strong>Ajuster</strong><p>Finaliser le montage et le confort de port en boutique.</p></div>
            </div>
          </div>
        </section>

        <section className="indo-sources-section section section-ivory">
          <div className="shell indo-sources-grid">
            <div>
              <p className="eyebrow"><span /> Sources officielles</p>
              <h2>Des informations<br /><em>traçables.</em></h2>
              <p>Les descriptions ont été reformulées pour rester claires et adaptées au site Joury. Elles ne remplacent ni une prescription ni le conseil en boutique.</p>
            </div>
            <div className="indo-source-links">
              <a href={indoSources.infrared} target="_blank" rel="noreferrer">Infrared Technology <ExternalLink size={17} /></a>
              <a href={indoSources.freemax} target="_blank" rel="noreferrer">Technologie FreeMax <ExternalLink size={17} /></a>
              <a href={indoSources.progressive} target="_blank" rel="noreferrer">Verres progressifs <ExternalLink size={17} /></a>
              <a href={indoSources.treatments} target="_blank" rel="noreferrer">Traitements INDO <ExternalLink size={17} /></a>
              <a href={business.website} target="_blank" rel="noreferrer">Site officiel Joury Optic <ExternalLink size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

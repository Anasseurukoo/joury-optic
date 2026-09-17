import { withBasePath } from "../lib/paths";
import { ArrowRight, Camera, CheckCircle2, Droplets, ScanFace, Sparkles } from "lucide-react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import TryLensLauncher from "./TryLensLauncher";

export default function TryLensPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Try Lens"
          title={<>Changez de regard.<br /><em>En un instant.</em></>}
          description="Essayez virtuellement une teinte de lentilles de couleur, en direct depuis votre caméra. Le calcul se fait entièrement sur votre appareil, aucune image n'est envoyée."
          image={withBasePath("/images/hero/hero-casablanca.png")}
          imageAlt="Essayage virtuel de lentilles de couleur"
        />

        <section className="tryon-steps-section">
          <div className="shell tryon-steps-grid">
            <div className="tryon-steps-intro">
              <p className="eyebrow light"><span /> Comment ça marche</p>
              <h2>Trois étapes.<br /><em>Aucune pression.</em></h2>
              <p>La caméra n'est jamais activée sans votre accord, et l'image ne quitte jamais votre appareil. Vous pouvez continuer sans l'utiliser à tout moment.</p>
            </div>
            <div className="tryon-steps">
              <article><span>01</span><Camera size={24} /><h3>Autoriser la caméra</h3><p>L'aperçu ne démarre qu'après votre accord explicite.</p></article>
              <article><span>02</span><Droplets size={24} /><h3>Choisir une teinte</h3><p>Noisette, bleu, vert, miel, gris ou noir — ou une couleur personnalisée.</p></article>
              <article><span>03</span><Sparkles size={24} /><h3>Ajuster l'intensité</h3><p>Réglez l'intensité de la couleur pour un rendu naturel.</p></article>
            </div>
          </div>
        </section>

        <section id="demo" className="tryon-demo-section">
          <div className="shell tryon-live">
            <div className="tryon-live-head">
              <div>
                <p className="eyebrow"><span /> Démonstration en direct</p>
                <h2>Six teintes.<br /><em>Votre regard.</em></h2>
              </div>
              <div className="tryon-live-actions">
                <TryLensLauncher label="Lancer l'essayage" />
                <Link href="/rendez-vous" className="button button-outline-dark"><ScanFace size={17} /> Préparer une visite</Link>
              </div>
            </div>

            <div className="tryon-live-stage">
              <iframe
                src={withBasePath("/tryon-lens/index.html")}
                title="Essayage virtuel de lentilles Joury Optic"
                allow="camera; fullscreen"
                loading="lazy"
              />
            </div>

            <ul className="tryon-live-points">
              <li><CheckCircle2 size={18} /> Suivi de l&rsquo;iris en temps réel</li>
              <li><CheckCircle2 size={18} /> Six teintes + couleur personnalisée</li>
              <li><CheckCircle2 size={18} /> Calcul sur votre appareil, aucun envoi d&rsquo;image</li>
              <li><CheckCircle2 size={18} /> Adaptation finale en boutique</li>
            </ul>

            <p className="tryon-status tryon-status-dark"><span aria-hidden="true" /> Try Lens · Exclusif Joury Optic</p>
          </div>
        </section>

        <section className="tryon-demo-section" style={{ background: "var(--ivory)" }}>
          <div className="shell tryon-demo-grid">
            <div className="tryon-demo-copy">
              <p className="eyebrow"><span /> Une aide au choix</p>
              <h2>Le virtuel donne une première impression. Votre contactologue donne la réponse.</h2>
              <ul>
                <li><CheckCircle2 size={18} /> Usage facultatif</li>
                <li><CheckCircle2 size={18} /> Accès caméra après consentement</li>
                <li><CheckCircle2 size={18} /> Adaptation lentilles sur mesure en boutique</li>
              </ul>
              <div className="tryon-demo-actions">
                <Link href="/collections" className="button button-dark">Voir les lentilles <ArrowRight size={17} /></Link>
                <Link href="/rendez-vous" className="button button-outline-dark"><ScanFace size={17} /> Prendre rendez-vous</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

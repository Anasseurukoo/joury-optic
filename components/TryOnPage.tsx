import { withBasePath } from "../lib/paths";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Glasses, ScanFace, Smartphone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import ImageWithFallback from "./ImageWithFallback";
import TryOnLauncher from "./TryOnLauncher";

export default function TryOnPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Essayage virtuel"
          title={<>Voir la forme.<br /><em>Garder le choix.</em></>}
          description="L’essayage virtuel Joury affiche la monture en trois dimensions sur votre visage, directement dans le navigateur, sans remplacer le conseil et l’ajustement en boutique."
          image={withBasePath("/images/lifestyle/persol-alpine-women.webp")}
          imageAlt="Femme portant la monture Alpine Signature"
        />

        <section className="tryon-steps-section">
          <div className="shell tryon-steps-grid">
            <div className="tryon-steps-intro">
              <p className="eyebrow light"><span /> Comment ça marche</p>
              <h2>Trois étapes.<br /><em>Aucune pression.</em></h2>
              <p>La caméra n’est jamais activée sans votre accord, et l’image ne quitte jamais votre appareil. Vous pouvez continuer sans l’utiliser à tout moment.</p>
            </div>
            <div className="tryon-steps">
              <article><span>01</span><Smartphone size={24} /><h3>Choisir une monture</h3><p>Sélectionnez une référence dans la liste : ses dimensions réelles sont chargées avec elle.</p></article>
              <article><span>02</span><Camera size={24} /><h3>Autoriser la caméra</h3><p>L’aperçu ne démarre qu’après votre accord explicite, puis se cale seul sur votre visage.</p></article>
              <article><span>03</span><Glasses size={24} /><h3>Conserver la référence</h3><p>Enregistrez la photo, gardez la référence, puis confirmez le choix et l’ajustement en boutique.</p></article>
            </div>
          </div>
        </section>

        <section id="demo" className="tryon-demo-section">
          <div className="shell tryon-live">
            <div className="tryon-live-head">
              <div>
                <p className="eyebrow"><span /> Démonstration en direct</p>
                <h2>Dix montures.<br /><em>Votre visage.</em></h2>
              </div>
              <div className="tryon-live-actions">
                <TryOnLauncher label="Lancer l'essayage" />
                <Link href="/rendez-vous" className="button button-outline-dark"><ScanFace size={17} /> Préparer une visite</Link>
              </div>
            </div>

            <div className="tryon-live-stage">
              <iframe
                src={withBasePath("/tryon/index.html")}
                title="Essayage virtuel Joury Optic"
                allow="camera; fullscreen"
                loading="lazy"
              />
            </div>

            <ul className="tryon-live-points">
              <li><CheckCircle2 size={18} /> Suivi 3D du visage, en temps réel</li>
              <li><CheckCircle2 size={18} /> Dimensions réelles de chaque monture</li>
              <li><CheckCircle2 size={18} /> Calcul sur votre appareil, aucun envoi d&rsquo;image</li>
              <li><CheckCircle2 size={18} /> Ajustement final en boutique</li>
            </ul>

            <p className="tryon-status tryon-status-dark"><span aria-hidden="true" /> Try-on Demo · Exclusif au Maroc</p>
          </div>
        </section>

        <section className="tryon-demo-section" style={{ background: "var(--ivory)" }}>
          <div className="shell tryon-demo-grid">
            <div className="tryon-demo-visual">
              <div className="phone-mockup phone-mockup-large">
                <div className="phone-top"><span /><span /></div>
                <div className="phone-screen">
                  <ImageWithFallback src={withBasePath("/images/lifestyle/persol-alpine-men.webp")} alt="Aperçu d’une monture sur un visage" />
                  <div className="face-scan" aria-hidden="true"><i /><i /><i /><i /></div>
                  <div className="phone-label"><span>Alpine Signature</span><strong>PO2496SZ</strong></div>
                </div>
              </div>
              <div className="tryon-demo-frame"><ImageWithFallback src={withBasePath("/images/products/persol/po2496sz-front.webp")} alt="Monture Alpine Signature" /></div>
            </div>
            <div className="tryon-demo-copy">
              <p className="eyebrow"><span /> Une aide au choix</p>
              <h2>Le virtuel donne une première impression. Le miroir donne la réponse.</h2>
              <ul>
                <li><CheckCircle2 size={18} /> Usage facultatif</li>
                <li><CheckCircle2 size={18} /> Accès caméra après consentement</li>
                <li><CheckCircle2 size={18} /> Alternative disponible sans caméra</li>
                <li><CheckCircle2 size={18} /> Ajustement final en boutique</li>
              </ul>
              <div className="tryon-demo-actions">
                <Link href="/collections" className="button button-dark">Voir les montures <ArrowRight size={17} /></Link>
                <Link href="/rendez-vous" className="button button-outline-dark"><ScanFace size={17} /> Préparer un essayage</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

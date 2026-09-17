/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero eyebrow="Confidentialité" title={<>Une expérience claire.<br /><em>Un choix libre.</em></>} description="Informations sur l'usage du site, la prise de contact et l'essayage virtuel Joury Optic." />
        <section className="section section-ivory legal-section">
          <div className="shell legal-grid">
            <article><span>01</span><h2>Site vitrine</h2><p>Le site présente les collections, les services et les moyens de contacter Joury Optic. Les disponibilités des montures sont confirmées directement en boutique.</p></article>
            <article><span>02</span><h2>Demandes de visite</h2><p>Le formulaire prépare votre demande et peut l'ouvrir dans WhatsApp. Le contenu n'est envoyé qu'au moment où vous choisissez de l'envoyer. Aucun créneau n'est réservé automatiquement.</p></article>
            <article><span>03</span><h2>Caméra</h2><p>L'utilisation de la caméra est facultative et nécessite l'autorisation du navigateur. Le flux vidéo est utilisé localement dans votre navigateur pour superposer la monture et n'est pas envoyé à Joury Optic.</p></article>
            <article><span>04</span><h2>Technologie d'essayage</h2><p>Le module utilise MediaPipe et WebGL dans le navigateur. Des fichiers techniques nécessaires au fonctionnement peuvent être chargés depuis des services de diffusion tiers, notamment jsDelivr et Google, sans que Joury Optic n'y envoie votre flux caméra.</p></article>
            <article><span>05</span><h2>Photos enregistrées</h2><p>Si vous utilisez le bouton de capture, l'image est générée dans votre navigateur puis téléchargée sur votre appareil. Le site ne l'enregistre pas sur un serveur Joury Optic.</p></article>
            <article><span>06</span><h2>Données de contact</h2><p>Les informations que vous choisissez d'envoyer servent uniquement à répondre à votre demande et à préparer votre visite. Pour toute question, vous pouvez contacter directement la boutique via les coordonnées affichées sur le site.</p></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

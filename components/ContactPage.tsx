import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import AppointmentForm from "./AppointmentForm";
import { business } from "../lib/config";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Visiter"
          title={<>Le choix commence en ligne.<br /><em>Il se confirme en boutique.</em></>}
          description="Venez comparer les formes, essayer les proportions et ajuster la monture avec un conseil personnalisé."
        />

        <section className="contact-section">
          <div className="shell contact-grid">
            <div className="contact-details">
              <p className="eyebrow light"><span /> Joury Optic · Casablanca</p>
              <h2>Nous trouver.</h2>
              <div className="contact-list">
                <div><MapPin size={21} /><p><span>Adresse</span><strong>{business.address}</strong></p></div>
                <div><Phone size={21} /><p><span>Téléphone</span><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></p></div>
                <div><Mail size={21} /><p><span>E-mail</span><a href={`mailto:${business.email}`}>{business.email}</a></p></div>
                <div><Clock3 size={21} /><p><span>Horaires</span><strong>Vendredi : fermé</strong><small>Contactez la boutique pour confirmer les horaires des autres jours.</small></p></div>
              </div>
              <a className="button button-gold" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer">Ouvrir l’itinéraire</a>
            </div>
            <div className="contact-form-panel">
              <p className="eyebrow"><span /> Demande de rendez-vous</p>
              <h2>Préparer votre visite.</h2>
              <p>Choisissez la date et l’heure souhaitées. Joury vous contacte ensuite pour confirmer le créneau.</p>
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Eye, Glasses, ScanFace, Wrench, Sparkles, ShieldCheck } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import ImageWithFallback from "./ImageWithFallback";
import { withBasePath } from "../lib/paths";

const services = [
  { icon: Eye, number: "01", title: "Examen visuel", text: "Un bilan visuel précis et un accompagnement clair, réalisé en boutique." },
  { icon: ScanFace, number: "02", title: "Conseil morphologique", text: "Une sélection pensée selon la forme du visage, le style et les besoins du quotidien." },
  { icon: Glasses, number: "03", title: "Montage & ajustement", text: "Montage soigné et réglage personnalisé pour une tenue naturelle et confortable." },
  { icon: Wrench, number: "04", title: "Entretien & réparation", text: "Nettoyage, resserrage, réglage et petites réparations pour prolonger la vie des lunettes." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Services"
          title={<>Le détail qui change<br /><em>tout le confort.</em></>}
          description="Choisir la bonne monture est une étape. La mesurer, la monter et l’ajuster avec précision fait toute la différence."
          image={withBasePath("/images/lifestyle/persol-men-round.webp")}
          imageAlt="Homme portant une monture ronde"
        />

        <section className="section section-ivory">
          <div className="shell service-page-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-page-row">
                  <span className="service-page-number">{service.number}</span>
                  <div className="service-page-icon"><Icon size={25} /></div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="service-philosophy">
          <div className="service-philosophy-image"><ImageWithFallback src={withBasePath("/images/products/persol-green-optical.webp")} alt="Monture optique verte" /></div>
          <div className="service-philosophy-copy">
            <p className="eyebrow light"><span /> Notre approche</p>
            <h2>Moins de hasard.<br /><em>Plus de justesse.</em></h2>
            <div className="philosophy-points">
              <div><Sparkles size={20} /><p><strong>Une sélection lisible</strong><span>Des montures présentées sans pression commerciale ni fausse urgence.</span></p></div>
              <div><ShieldCheck size={20} /><p><strong>Une information honnête</strong><span>Les disponibilités et les détails sont confirmés directement en boutique.</span></p></div>
              <div><Glasses size={20} /><p><strong>Un ajustement réel</strong><span>Le confort final se vérifie sur le visage, avec un réglage précis.</span></p></div>
            </div>
            <Link href="/rendez-vous" className="button button-gold">Préparer une visite <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

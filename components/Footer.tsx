import { withBasePath } from "../lib/paths";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { business, navigation } from "../lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">

        <div className="footer-brand">
          <Link
            href="/"
            className="footer-brand-link"
            aria-label="Joury Optic - Accueil"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/brand/logo-navbar-v3-tight.png")}
              alt="Joury Optic"
              width={640}
              height={184}
            />
          </Link>

          <p>
            Montures, technologies verrières et accompagnement attentif
            au cœur de Casablanca.
          </p>
        </div>

        <div>
          <p className="footer-title">Explorer</p>

          <nav
            className="footer-links"
            aria-label="Navigation de pied de page"
          >
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}

            <Link href="/confidentialite">
              Confidentialité
            </Link>
          </nav>
        </div>

        <div>
          <p className="footer-title">Visiter</p>

          <address className="footer-address">
            <span>{business.address}</span>
            <span>Ouvert toute la semaine</span>

            <a href={`tel:${business.phoneHref}`}>
              {business.phoneDisplay}
            </a>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir l’itinéraire
            </a>

            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>

            {business.email && (
              <a href={`mailto:${business.email}`}>
                {business.email}
              </a>
            )}
          </address>
        </div>

        <div className="footer-cta">
          <p className="footer-title">
            Un conseil personnalisé
          </p>

          <Link
            href="/rendez-vous"
            className="footer-big-link"
          >
            <span>
              Préparer votre visite
            </span>

            <ArrowUpRight size={24} />
          </Link>
        </div>

      </div>

      <div className="shell footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Joury Optic
        </span>

        <a
          href="https://builtbyanas.com"
          target="_blank"
          rel="noreferrer"
        >
          Site conçu par BuiltByAnas.com
        </a>
      </div>
    </footer>
  );
}
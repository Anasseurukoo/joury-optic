import { withBasePath } from "../lib/paths";
﻿import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
            Montures, technologies verri&egrave;res et accompagnement attentif
            au c&oelig;ur de Casablanca depuis {business.founded}.
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
              Confidentialit&eacute;
            </Link>
          </nav>
        </div>

        <div>
          <p className="footer-title">Visiter</p>

          <address className="footer-address">
            <span>{business.address}</span>

            <span>
              Vendredi : ferm&eacute;
            </span>

            <a href={`tel:${business.phoneHref}`}>
              {business.phoneDisplay}
            </a>

            <span>
              {business.contactName}
            </span>

            <a href={`mailto:${business.email}`}>
              {business.email}
            </a>
          </address>
        </div>

        <div className="footer-cta">
          <p className="footer-title">
            Un conseil personnalis&eacute;
          </p>

          <Link
            href="/rendez-vous"
            className="footer-big-link"
          >
            <span>
              Pr&eacute;parer votre visite
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
          Site con&ccedil;u par BuiltByAnas.com
        </a>
      </div>
    </footer>
  );
}
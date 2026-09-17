"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, business } from "../lib/config";
import { withBasePath } from "../lib/paths";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className={`header ${overlay ? "header-overlay" : ""} ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-inner header-inner-clean">
          <Link href="/" className="header-brand" aria-label="Joury Optic, accueil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath("/brand/logo-navbar-v3-tight.png")} alt="Joury Optic" width={640} height={184} />
          </Link>

          <nav className="header-nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>

          <div className="header-actions header-actions-clean">
            <button
              className="header-menu-button"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
              <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-navigation" className={`mobile-menu ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p className="eyebrow light">Joury Optic · Casablanca</p>
          <nav aria-label="Navigation mobile">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <Link href="/rendez-vous" className="button button-gold" onClick={() => setOpen(false)}>
              Demander un rendez-vous
            </Link>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay} · {business.contactName}</a>
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            {business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}
          </div>
        </div>
      </div>
    </>
  );
}

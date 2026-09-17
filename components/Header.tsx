"use client";

import Link from "next/link";
import { CalendarDays, ChevronDown, Gem, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "../lib/config";
import { withBasePath } from "../lib/paths";

const desktopNavigation = [
  { label: "Accueil", href: "/" },
  { label: "Lunettes", href: "/collections/vue" },
  { label: "Lentilles", href: "/try-lens" },
  { label: "Nos services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <style>{`
        .joury-header-original { height: 102px; background: rgba(0,0,0,.86); border-bottom: 1px solid rgba(255,255,255,.10); }
        .joury-header-original.header-overlay { background: linear-gradient(to bottom, rgba(0,0,0,.93), rgba(0,0,0,.56)); }
        .joury-header-original.header-scrolled { background: rgba(4,12,12,.95); box-shadow: 0 12px 40px rgba(0,0,0,.28); backdrop-filter: blur(16px); }
        .joury-header-inner { width: calc(100% - 140px); max-width: none; margin: 0 70px; grid-template-columns: 330px 1fr auto; gap: 28px; }
        .joury-header-brand img { width: 250px; height: auto; }
        .joury-header-nav { gap: clamp(28px, 3vw, 52px); }
        .joury-header-nav a { font-size: 14px; font-weight: 520; letter-spacing: .02em; }
        .joury-header-nav a:first-child { color: #f0d38b; }
        .joury-header-nav a:first-child::after { right: 0; height: 2px; bottom: 1px; }
        .joury-header-actions { display: flex; align-items: center; justify-content: flex-end; gap: 18px; }
        .joury-header-icon { position: relative; display: inline-grid; place-items: center; color: white; opacity: .92; }
        .joury-header-icon svg { width: 30px; height: 30px; stroke-width: 1.55; }
        .joury-header-cart-count { position: absolute; top: -7px; right: -8px; min-width: 22px; height: 22px; padding: 0 6px; display: grid; place-items: center; border-radius: 50%; background: #f4d38b; color: #15110a; font-size: 10px; font-weight: 800; }
        .joury-header-book { display: inline-flex; align-items: center; gap: 10px; min-height: 54px; padding: 0 30px; border: 1px solid #e4c67e; border-radius: 0; color: #f0d38b; font-size: 14px; font-weight: 700; letter-spacing: .01em; }
        .joury-header-book:hover { background: #f0d38b; border-color: #f0d38b; color: #0c1110; }
        .joury-header-language { display: inline-flex; align-items: center; gap: 7px; color: white; font-size: 14px; font-weight: 650; }
        @media (max-width: 1280px) {
          .joury-header-inner { width: calc(100% - 64px); margin: 0 32px; grid-template-columns: 240px 1fr auto; }
          .joury-header-brand img { width: 205px; }
          .joury-header-nav { gap: 22px; }
          .joury-header-nav a { font-size: 12px; }
          .joury-header-book { padding: 0 18px; font-size: 12px; }
        }
        @media (max-width: 980px) {
          .joury-header-original { height: 70px; }
          .joury-header-inner { width: calc(100% - 32px); margin: 0 16px; grid-template-columns: 1fr auto; }
          .joury-header-brand img { width: 160px; }
          .joury-header-nav, .joury-header-actions .joury-header-desktop-only { display: none; }
          .joury-header-actions { gap: 10px; }
          .joury-header-book, .joury-header-icon, .joury-header-language { display: none; }
        }
      `}</style>

      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className={`header journey-ignore ${overlay ? "header-overlay" : ""} ${scrolled ? "header-scrolled" : ""} joury-header-original`}>
        <div className="header-inner joury-header-inner">
          <Link href="/" className="header-brand joury-header-brand" aria-label="Joury Optic, accueil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath("/brand/logo-navbar-v3-tight.png")} alt="Joury Optic" width={640} height={184} />
          </Link>

          <nav className="header-nav joury-header-nav" aria-label="Navigation principale">
            {desktopNavigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>

          <div className="header-actions joury-header-actions">
            <span className="joury-header-icon joury-header-desktop-only" aria-hidden="true"><Search /></span>
            <span className="joury-header-icon joury-header-desktop-only" aria-hidden="true"><ShoppingBag /><span className="joury-header-cart-count">0</span></span>
            <Link href="/rendez-vous" className="header-book joury-header-book joury-header-desktop-only">
              <CalendarDays size={20} />
              Prendre rendez-vous
            </Link>
            <span className="joury-header-language joury-header-desktop-only" aria-hidden="true">FR <ChevronDown size={15} /></span>

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
          <p className="eyebrow light"><Gem size={15} /> Joury Optic · Casablanca</p>
          <nav aria-label="Navigation mobile">
            {desktopNavigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <Link href="/rendez-vous" className="button button-gold" onClick={() => setOpen(false)}>
              Prendre rendez-vous
            </Link>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            {business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}
          </div>
        </div>
      </div>
    </>
  );
}

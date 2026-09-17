"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CircleDot, Eye, Glasses } from "lucide-react";
import { supplier } from "../lib/config";

const supplierPillars = [
  { icon: Eye, label: "Expertise", value: "Solutions verrières" },
  { icon: Glasses, label: "Technologies", value: "FreeMax & Infrared" },
  { icon: CircleDot, label: "Accompagnement", value: "Joury Optic · Casablanca" },
];

export default function SupplierSection() {
  return (
    <section className="supplier-section" aria-labelledby="supplier-title">
      <div className="supplier-marquee" aria-hidden="true">
        <span>JOURY OPTIC</span>
        <i>×</i>
        <strong>{supplier.name}</strong>
        <span>TECHNOLOGIES VERRIÈRES</span>
      </div>

      <div className="shell supplier-layout">
        <motion.div
          className="supplier-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow light"><span /> Le fournisseur</p>
          <h2 id="supplier-title">
            Une sélection forte commence<br />
            <em>bien avant la vitrine.</em>
          </h2>
          <p className="supplier-lead">
            Joury Optic travaille avec <strong>{supplier.name}</strong>, fournisseur optique, pour proposer des solutions verrières et des technologies adaptées aux besoins visuels en boutique.
          </p>
          <p className="supplier-note">
            Le rôle de Joury reste essentiel&nbsp;: conseiller la solution, prendre les mesures utiles et ajuster l’ensemble monture-verres selon la prescription, l’usage et le style de la personne.
          </p>
          <Link href="/technologies-indo" className="button button-outline-light">
            Découvrir les technologies INDO <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="supplier-monument"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="supplier-monument-grid" aria-hidden="true" />
          <div className="supplier-index supplier-index-top"><span>01</span><i /></div>
          <div className="supplier-wordmark" aria-label={`${supplier.name}, fournisseur optique`}>
            <span>I</span><span>N</span><span>D</span><span>O</span>
          </div>
          <div className="supplier-monument-caption">
            <span>{supplier.relationship}</span>
            <strong>FreeMax · Infrared · Traitements</strong>
          </div>
          <div className="supplier-index supplier-index-bottom"><i /><span>CASABLANCA</span></div>
        </motion.div>
      </div>

      <div className="shell supplier-pillars" aria-label="Informations sur le fournisseur">
        {supplierPillars.map(({ icon: Icon, label, value }, index) => (
          <motion.div
            key={label}
            className="supplier-pillar"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.12 + index * 0.08 }}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

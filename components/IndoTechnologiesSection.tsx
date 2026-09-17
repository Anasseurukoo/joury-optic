"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Layers3, Shield, Sun } from "lucide-react";
import { useState } from "react";
import { infraredTechnologies } from "../lib/indo-technologies";

const icons = {
  "natural-clear": Layers3,
  "energy-blue": Eye,
  sunmax: Sun,
  polarmax: Shield,
};

export default function IndoTechnologiesSection() {
  const [activeId, setActiveId] = useState(infraredTechnologies[0].id);
  const active = infraredTechnologies.find((technology) => technology.id === activeId) ?? infraredTechnologies[0];
  const ActiveIcon = icons[active.id as keyof typeof icons];

  return (
    <section className="indo-tech-section" aria-labelledby="indo-tech-title">
      <div className="shell indo-tech-heading">
        <div>
          <p className="eyebrow"><span /> Technologies verrières INDO</p>
          <h2 id="indo-tech-title">La précision continue<br /><em>à l’intérieur du verre.</em></h2>
        </div>
        <div className="indo-tech-heading-side">
          <p>Joury associe le choix de la monture à des solutions verrières adaptées à l’usage, à la correction et au quotidien de chaque personne.</p>
          <span>Informations techniques synthétisées depuis le site officiel INDO Maroc.</span>
        </div>
      </div>

      <div className="shell indo-tech-console">
        <div className="indo-tech-nav" role="tablist" aria-label="Technologies INDO">
          {infraredTechnologies.map((technology, index) => {
            const Icon = icons[technology.id as keyof typeof icons];
            const selected = active.id === technology.id;
            return (
              <button
                key={technology.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="indo-tech-panel"
                className={selected ? "active" : ""}
                onClick={() => setActiveId(technology.id)}
              >
                <span className="indo-tech-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={19} aria-hidden="true" />
                <strong>{technology.name}</strong>
                <small>{technology.family}</small>
              </button>
            );
          })}
        </div>

        <motion.article
          key={active.id}
          id="indo-tech-panel"
          role="tabpanel"
          className={`indo-tech-panel indo-tech-tone-${active.tone}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="indo-tech-orbit" aria-hidden="true">
            <i /><i /><i /><i />
            <ActiveIcon size={42} />
          </div>
          <div className="indo-tech-panel-copy">
            <p>{active.family}</p>
            <h3>{active.name}</h3>
            <strong>{active.short}</strong>
            <span>{active.description}</span>
          </div>
          <ul className="indo-tech-features">
            {active.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </motion.article>
      </div>

      <div className="shell indo-tech-footer">
        <div className="indo-tech-freemax-mark">
          <span>FREEMAX</span>
          <p>Progressifs et unifocaux conçus par calcul précis de la surface du verre.</p>
        </div>
        <div className="indo-tech-families" aria-label="Familles de verres FreeMax">
          <span>EyeMax</span><span>MaxVita</span><span>Maxima</span><span>Maxima Sport</span><span>EasyMax</span><span>UNImax</span>
        </div>
        <Link href="/technologies-indo" className="button button-dark">
          Explorer toutes les technologies <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

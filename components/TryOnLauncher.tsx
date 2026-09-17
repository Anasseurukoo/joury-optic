"use client";

import { useCallback, useEffect, useState } from "react";
import { Camera, X } from "lucide-react";
import { withBasePath } from "../lib/paths";

type Props = {
  /** Référence Persol à charger au démarrage, ex. "PO2496SZ". */
  frame?: string;
  label?: string;
  className?: string;
};

/**
 * Ouvre la fenêtre d'essayage (public/tryon/index.html) en surcouche.
 * L'iframe reçoit `allow="camera"` : sans cet attribut, le navigateur refuse
 * l'accès caméra à un document embarqué.
 */
export default function TryOnLauncher({
  frame,
  label = "Lancer l'essayage",
  className = "button button-gold",
}: Props) {
  const [open, setOpen] = useState(false);
  const src = frame
    ? withBasePath(`/tryon/index.html?frame=${encodeURIComponent(frame)}`)
    : withBasePath("/tryon/index.html");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    const onMessage = (e: MessageEvent) => {
      if (e.origin === window.location.origin && e.data?.type === "joury-tryon:close") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
    };
  }, [open, close]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <Camera size={17} /> {label}
      </button>

      {open && (
        <div className="tryon-overlay" role="dialog" aria-modal="true" aria-label="Essayage virtuel">
          <button type="button" className="tryon-overlay-close" onClick={close} aria-label="Fermer l'essayage">
            <X size={20} />
          </button>
          <iframe src={src} title="Essayage virtuel Joury Optic" allow="camera; fullscreen" />
        </div>
      )}
    </>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { Camera, X } from "lucide-react";
import { withBasePath } from "../lib/paths";

type Props = {
  label?: string;
  className?: string;
};

/**
 * Ouvre l'essayage virtuel de lentilles (public/tryon-lens/index.html) en surcouche,
 * même mécanisme que TryOnLauncher pour les lunettes.
 */
export default function TryLensLauncher({
  label = "Essayer les lentilles",
  className = "button button-gold",
}: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <Camera size={17} /> {label}
      </button>

      {open && (
        <div className="tryon-overlay" role="dialog" aria-modal="true" aria-label="Essayage virtuel de lentilles">
          <button type="button" className="tryon-overlay-close" onClick={close} aria-label="Fermer l'essayage">
            <X size={20} />
          </button>
          <iframe src={withBasePath("/tryon-lens/index.html")} title="Essayage virtuel de lentilles Joury Optic" allow="camera; fullscreen" />
        </div>
      )}
    </>
  );
}

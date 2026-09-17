"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={alt}>Image indisponible</div>;
  }

  // Assets are pre-compressed for the static GitHub Pages export.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading={loading} decoding="async" fetchPriority={loading === "eager" ? "high" : "auto"} onError={() => setFailed(true)} />;
}

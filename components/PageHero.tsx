import type { ReactNode } from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-with-image" : ""}`}>
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children}
        </div>
        {image && (
          <div className="page-hero-image">
            <ImageWithFallback src={image} alt={imageAlt || "Joury Optic"} loading="eager" />
          </div>
        )}
      </div>
    </section>
  );
}

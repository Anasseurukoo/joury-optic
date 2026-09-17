"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LegacyProductRedirect({ href }: { href: string }) {
  useEffect(() => { window.location.replace(href); }, [href]);
  return (
    <main className="legacy-redirect">
      <p>Cette adresse a changé.</p>
      <Link href={href} className="button button-gold">Voir la monture</Link>
    </main>
  );
}

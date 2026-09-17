import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <><Header /><main id="main" className="not-found"><p className="eyebrow light"><span /> Erreur 404</p><h1>Cette monture<br /><em>n’est pas ici.</em></h1><p>La page recherchée a changé ou n’existe plus.</p><Link href="/" className="button button-gold"><ArrowLeft size={17} /> Revenir à l’accueil</Link></main><Footer /></>
  );
}

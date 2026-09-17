import HomePage from "../components/HomePage";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Opticien à Casablanca",
  description: "Joury Optic accompagne votre choix de lunettes à Casablanca : montures optiques et solaires, conseil personnalisé, technologies verrières et ajustement en boutique.",
  path: "/",
});

export default function Page() { return <HomePage />; }

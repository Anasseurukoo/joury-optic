import CollectionsPage from "../../../components/CollectionsPage";
import { pageMetadata } from "../../../lib/seo";
export const metadata = pageMetadata({ title: "Lunettes de soleil à Casablanca", description: "Explorez la sélection de lunettes de soleil Joury Optic à Casablanca et préparez votre essayage en boutique.", path: "/collections/solaire" });
export default function Page() { return <CollectionsPage initialCategory="soleil" />; }

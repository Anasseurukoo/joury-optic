import TryLensPage from "../../components/TryLensPage";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata({ title: "Try Lens — Essayage virtuel de lentilles", description: "Essayez virtuellement une teinte de lentilles de couleur en direct avec Try Lens, sans envoi d'image.", path: "/try-lens" });
export default function Page() { return <TryLensPage />; }

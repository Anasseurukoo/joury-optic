import TryOnPage from "../../components/TryOnPage";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata({ title: "Essayage virtuel de lunettes", description: "Testez les montures compatibles avec l'essayage virtuel Joury Optic. La caméra reste facultative et n'est activée qu'avec votre accord.", path: "/essayage" });
export default function Page() { return <TryOnPage />; }

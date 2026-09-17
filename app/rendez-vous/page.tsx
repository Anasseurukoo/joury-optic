import { Suspense } from "react";
import AppointmentPage from "../../components/AppointmentPage";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata({ title: "Préparer un rendez-vous", description: "Préparez votre visite chez Joury Optic à Casablanca et envoyez votre demande de créneau directement via WhatsApp.", path: "/rendez-vous" });
export default function Page() { return <Suspense fallback={<div className="page-loading">Chargement…</div>}><AppointmentPage /></Suspense>; }

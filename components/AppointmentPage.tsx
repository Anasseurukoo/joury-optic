"use client";

import { useSearchParams } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentPage() {
  const params = useSearchParams();
  const frame = params.get("frame") || "";

  return (
    <>
      <Header />
      <main id="main" className="page-main appointment-page">
        <section className="appointment-page-hero">
          <div className="shell appointment-page-grid">
            <div>
              <p className="eyebrow light"><span /> Rendez-vous · Casablanca</p>
              <h1>Un temps pour<br /><em>bien choisir.</em></h1>
              <p>Préparez votre demande. Joury confirme le créneau avant votre visite. La boutique est fermée le vendredi.</p>
              <div className="appointment-page-facts">
                <span>Conseil personnalisé</span>
                <span>Essayage en boutique</span>
                <span>Ajustement précis</span>
              </div>
            </div>
            <div className="appointment-page-panel">
              {frame && <p className="selected-frame">Monture sélectionnée : <strong>{frame}</strong></p>}
              <AppointmentForm frameReference={frame} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

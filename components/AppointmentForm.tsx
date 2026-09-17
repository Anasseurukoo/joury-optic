"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { business } from "../lib/config";

type Errors = Partial<Record<"name" | "phone" | "date" | "time", string>>;

export default function AppointmentForm({ frameReference = "" }: { frameReference?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setStatus("");
    setSelectedDate(value);
    setErrors((current) => {
      if (!current.date) return current;
      const next = { ...current };
      delete next.date;
      return next;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");

    if (name.length < 2) nextErrors.name = "Indiquez votre nom.";
    if (phone.replace(/\D/g, "").length < 8) nextErrors.phone = "Indiquez un numéro de téléphone valide.";
    if (!date) nextErrors.date = "Choisissez une date.";
    if (date && date < today) nextErrors.date = "Choisissez une date à venir.";
    if (!time) nextErrors.time = "Choisissez une heure.";

    setErrors(nextErrors);
    setStatus("");

    const firstError = Object.keys(nextErrors)[0] as keyof Errors | undefined;
    if (firstError) {
      form.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      return;
    }

    const message = String(data.get("message") || "").trim();
    const body = [
      "Bonjour Joury Optic, je souhaite préparer une visite.",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Date souhaitée : ${date}`,
      `Heure souhaitée : ${time}`,
      frameReference ? `Monture : ${frameReference}` : "",
      message ? `Message : ${message}` : "",
      "",
      "Je comprends que le créneau reste à confirmer par Joury Optic.",
    ].filter(Boolean).join("\n");

    try {
      await navigator.clipboard.writeText(body);
    } catch {
      // Clipboard can be unavailable in some browsers; WhatsApp still opens.
    }

    setStatus("WhatsApp va s’ouvrir. Le message de demande est copié pour être envoyé.");
    window.open(business.whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="appointment-form" onSubmit={submit} noValidate>
      <div className="form-field">
        <label htmlFor="appointment-name">Nom</label>
        <input id="appointment-name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="appointment-phone">Téléphone</label>
        <input id="appointment-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
        {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="appointment-date">Date souhaitée</label>
        <input
          id="appointment-date"
          name="date"
          type="date"
          min={today}
          value={selectedDate}
          onChange={handleDateChange}
          autoComplete="off"
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : "date-hint"}
        />
        <span id="date-hint" className="field-hint">Ouvert toute la semaine — choisissez le jour qui vous convient.</span>
        {errors.date && <span id="date-error" className="field-error">{errors.date}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="appointment-time">Heure souhaitée</label>
        <select id="appointment-time" name="time" defaultValue="" aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined}>
          <option value="" disabled>Choisir une heure</option>
          {["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"].map((time) => <option key={time} value={time}>{time}</option>)}
        </select>
        {errors.time && <span id="time-error" className="field-error">{errors.time}</span>}
      </div>
      <div className="form-field form-field-full">
        <label htmlFor="appointment-message">Message <span>(facultatif)</span></label>
        <textarea id="appointment-message" name="message" rows={4} defaultValue={frameReference ? `Je souhaite découvrir la monture ${frameReference}.` : ""} />
      </div>
      <button className="button button-gold form-submit" type="submit">
        Ouvrir WhatsApp <MessageCircle size={17} />
      </button>
      <div className="form-alternatives" aria-label="Autres moyens de contact">
        <a href={`tel:${business.phoneHref}`}><Phone size={15} /> Appeler</a>
        {business.email && <a href={`mailto:${business.email}`}><Mail size={15} /> E-mail</a>}
      </div>
      <p className="form-note">La demande n’est pas une confirmation : Joury vous contacte pour valider le créneau.</p>
      {status && <p className="form-status" aria-live="polite"><CheckCircle2 size={18} /> {status}</p>}
    </form>
  );
}

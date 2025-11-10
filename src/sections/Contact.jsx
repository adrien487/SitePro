// src/sections/Contact.jsx
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaEnvelopeOpenText, FaClipboardList } from "react-icons/fa";
import "../Styles/Contact.css";

export default function Contact({ selectedOffer }) {
  const [offer, setOffer] = useState("");
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }
  const form = useRef();

  useEffect(() => {
    if (selectedOffer) {
      setOffer(selectedOffer);
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedOffer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5n1dnqt",
        "template_eqj3uct",
        form.current,
        "Ee75tTcBU5fjkHD9O"
      )
      .then(
        () => {
          showToast("success", "Message envoyé avec succès !");
          form.current.reset();
          setOffer("");
        },
        (error) => {
          console.error(error.text);
          showToast("error", "Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000); // disparaît après 4s
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contactez-nous</h2>

      {/* ✅ Toast notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="icon" />
          <input type="text" name="from_name" placeholder="Nom complet" required />
          <label>Nom complet</label>
        </div>

        <div className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" name="from_email" placeholder="Email" required />
          <label>Email</label>
        </div>

        <div className="form-group">
          <FaClipboardList className="icon" />
          <select name="offer" value={offer} onChange={(e) => setOffer(e.target.value)} required>
            <option value="">Choisissez une offre</option>
            <option value="Essential">Essential - 400€</option>
            <option value="Basic">Basic - 600€</option>
            <option value="Premium">Premium - 800€</option>
            <option value="Devis">Simple devis / discussion</option>
          </select>
          <label>Type d’offre</label>
        </div>

        <div className="form-group">
          <FaEnvelopeOpenText className="icon" />
          <textarea name="message" placeholder="Décrivez votre projet..." rows="5" required></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

// src/sections/Contact.jsx
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import "../Styles/Contact.css";

export default function Contact({ selectedOffer }) {
  const [offer, setOffer] = useState("");
  const [toast, setToast] = useState(null);
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
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - AA Développement</title>
        <meta
          name="description"
          content="Contactez AA Développement pour créer votre site web sur mesure. Obtenez un devis ou posez vos questions."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Contact - AA Développement" />
        <meta property="og:description" content="Contactez AA Développement pour votre projet web personnalisé." />
        <meta property="og:image" content="https://aadeveloppement.com/assets/contact-preview.png" />
        <meta property="og:url" content="https://aadeveloppement.com/#contact" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - AA Développement" />
        <meta name="twitter:description" content="Contactez AA Développement pour votre projet web personnalisé." />
        <meta name="twitter:image" content="https://aadeveloppement.com/assets/contact-preview.png" />
      </Helmet>

      <section className="contact" id="contact" data-aos="fade-up">
        <div className="contact-form-container">
          <h2>Contactez-nous</h2>

          {toast && (
            <div className={`status-message ${toast.type}`}>
              {toast.message}
            </div>
          )}

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {/* Nom complet */}
            <div className="form-group">
              <label htmlFor="from_name">Nom complet</label>
              <input id="from_name" type="text" name="from_name" placeholder="Nom complet" required />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input id="from_email" type="email" name="from_email" placeholder="Email" required />
            </div>

            {/* Offre */}
            <div className="form-group">
              <label htmlFor="offer">Type d’offre</label>
              <select id="offer" name="offer" value={offer} onChange={(e) => setOffer(e.target.value)} required>
                <option value="">Choisissez une offre</option>
                <option value="Essential">Essential - 400€</option>
                <option value="Basic">Basic - 600€</option>
                <option value="Premium">Premium - 800€</option>
                <option value="Devis">Simple devis / discussion</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Décrivez votre projet..." rows="5" required></textarea>
            </div>

            <button type="submit" aria-label="Envoyer le formulaire de contact">Envoyer</button>
          </form>
        </div>
      </section>
    </>
  );
}

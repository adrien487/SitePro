import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaEnvelopeOpenText, FaClipboardList } from "react-icons/fa";
import "../Styles/Contact.css";

export default function Contact({ selectedOffer }) {
  const [offer, setOffer] = useState("");

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
    alert("Message envoyé !");
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contactez-nous</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Nom complet" required />
          <label>Nom complet</label>
        </div>

        <div className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" required />
          <label>Email</label>
        </div>

        <div className="form-group">
          <FaClipboardList className="icon" />
          <select value={offer} onChange={(e) => setOffer(e.target.value)} required>
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
          <textarea placeholder="Décrivez votre projet..." rows="5" required></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

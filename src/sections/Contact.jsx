import React, { useState, useEffect } from "react";
import "../Styles/Contact.css";

export default function Contact({ selectedOffer }) {
  const [offer, setOffer] = useState("");

  // ✅ Quand une offre est sélectionnée depuis Services.jsx
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
    // Ici, tu pourras ensuite brancher ton envoi d’email (EmailJS ou autre)
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contactez-nous</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom complet</label>
          <input type="text" placeholder="Votre nom" required />
        </div>

        <div className="form-group">
          <label>Adresse email</label>
          <input type="email" placeholder="votremail@exemple.com" required />
        </div>

        <div className="form-group">
          <label>Type d’offre</label>
          <select
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            required
          >
            <option value="">Choisissez une offre</option>
            <option value="Essential">Essential - 400€</option>
            <option value="Basic">Basic - 600€</option>
            <option value="Premium">Premium - 800€</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Décrivez votre projet..."
            required
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

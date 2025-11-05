import React from "react";
import "../Styles/Contact.css";
export default function Contact({ selectedPlan, setSelectedPlan }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ! Vous avez choisi l'offre : ${selectedPlan}`);
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p className="intro">
          Vous avez un projet ou des questions ? Envoyez-nous un message et nous vous répondrons rapidement.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <select
            name="plan"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            required
          >
            <option value="">Sélectionnez une offre</option>
            <option value="Essential - 400€">Essential - 400€</option>
            <option value="Basic - 600€">Basic - 600€</option>
            <option value="Premium - 800€">Premium - 800€</option>
          </select>
          <textarea name="message" rows="5" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

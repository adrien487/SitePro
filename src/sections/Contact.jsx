import React from "react";
import "../Styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact"dataaos ="fade-up">
      <h2>Contactez-nous</h2>
      <p>Pour toute question ou devis, remplissez le formulaire ci-dessous :</p>

      <form className="contact-form">
        <input type="text" placeholder="Votre Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="btn-primary">Envoyer</button>
      </form>
    </section>
  );
}

import React from "react";
import "../Styles/About.css";
import WebIllustration from "../assets/web-illustration.png"; // Exemple d'image à droite

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        {/* Partie texte */}
        <div className="about-text">
          <h2>À propos de A.A. Développement</h2>
          <p>
            Chez <strong>A.A. Développement</strong>, nous créons des sites vitrines sur mesure qui reflètent
            l’identité et les valeurs de chaque client. Notre mission : transformer votre présence en ligne
            en un véritable levier de croissance, fidèle à votre image et pensé pour durer.
          </p>
          
          <div className="skills-container">
            <div className="skill-card">React.js</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">HTML / CSS / Tailwind</div>
            <div className="skill-card">SEO & Performance</div>
            <div className="skill-card">Sécurité & Maintenance</div>
          </div>
        </div>

        {/* Partie illustration / visuel */}
        <div className="about-illustration">
          <img src={WebIllustration} alt="Illustration développement web" />
        </div>
      </div>
    </section>
  );
}


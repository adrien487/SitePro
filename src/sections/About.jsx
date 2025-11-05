import React from "react";
import "../Styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>À propos de A.A. Développement</h2>

        <p className="intro">
          Chez <strong>A.A. Développement</strong>, nous accompagnons chaque client de manière personnalisée.
          Votre site web devient une vitrine fidèle à votre identité, pensée pour mettre en valeur votre entreprise
          et favoriser sa croissance.
        </p>

        <p className="approach">
          Nous croyons en une collaboration à taille humaine : vous échangez directement avec le développeur,
          du premier rendez-vous à la mise en ligne. Chaque détail est étudié pour que votre site soit performant,
          esthétique et en accord avec votre image.
        </p>

        <h3>Nos technologies et compétences</h3>
        <p className="tech-list">
          ⚛️ React.js &nbsp; | &nbsp; 💻 Node.js &nbsp; | &nbsp; 🎨 HTML / CSS / Tailwind <br />
          🚀 SEO & Performance &nbsp; | &nbsp; 🔒 Sécurité & Maintenance <br />
          📝 WordPress &nbsp; | &nbsp; 🗄️ Git
        </p>
      </div>
    </section>
  );
}

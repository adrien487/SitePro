import React from "react";
import "../Styles/About.css";
import WebIllustration from "../assets/web-illustration.png";

// Import des icônes depuis react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSearch, FaShieldAlt, FaWordpress } from "react-icons/fa";


export default function About() {

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML / CSS / Tailwind", icon: <><FaHtml5 /> / <FaCss3Alt /></> },
  { name: "SEO & Performance", icon: <FaSearch /> },
  { name: "Sécurité & Maintenance", icon: <FaShieldAlt /> },
  { name: "WordPress", icon: <FaWordpress /> },  
];


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
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
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

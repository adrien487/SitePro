import React from "react";
import "../Styles/About.css";
import WebIllustration from "../assets/web-illustration.png";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>À propos - AA Développement</title>
        <meta
          name="description"
          content="Découvrez AA Développement, créateur de sites vitrines sur mesure. Nos compétences : React, Node.js, WordPress, SEO, sécurité et performance."
        />

        {/* Open Graph */}
        <meta property="og:title" content="À propos - AA Développement" />
        <meta property="og:description" content="Découvrez AA Développement, créateur de sites vitrines sur mesure." />
        <meta property="og:image" content="https://aadeveloppement.com/assets/web-illustration.png" />
        <meta property="og:url" content="https://aadeveloppement.com/#about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos - AA Développement" />
        <meta name="twitter:description" content="Découvrez AA Développement, créateur de sites vitrines sur mesure." />
        <meta name="twitter:image" content="https://aadeveloppement.com/assets/web-illustration.png" />
      </Helmet>

      <section className="about" id="about">
        <div className="about-grid">
          {/* Partie texte */}
          <div className="about-text">
            <h2>À propos de AA Développement</h2>
            <p>
              Chez <strong>AA Développement</strong>, nous créons des sites vitrines sur mesure qui reflètent
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
            <img 
              src={WebIllustration} 
              alt="Illustration développement web - compétences et technologies" 
            />
          </div>
        </div>
      </section>
    </>
  );
}

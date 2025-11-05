import React from "react";
import "../Styles/Home.css";

export default function Home() {
  return (
    <section className="hero" id="home">
      {/* Blobs animés en arrière-plan */}
      <div className="hero-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
      </div>

      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">A.A.Développement</h1>
        <h2 className="hero-subtitle">
          Des sites web <span className="highlight">modernes</span> et <span className="highlight">performants</span>
        </h2>
        <p className="hero-text">
          Concevoir des sites web sur mesure adaptés à vos besoins :
          design élégant, performance, sécurité et référencement.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">Voir nos offres</a>
          <a href="#contact" className="btn-secondary">Nous contacter</a>
        </div>
      </div>
    </section>
  );
}

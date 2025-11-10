import React from "react";
import "../Styles/Home.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil - AA Développement</title>
        <meta
          name="description"
          content="AA Développement : création de sites web modernes, performants et sur mesure. Design élégant, sécurité et SEO inclus."
        />

        {/* Open Graph pour partage social */}
        <meta property="og:title" content="Accueil - AA Développement" />
        <meta property="og:description" content="Création de sites web modernes, performants et sur mesure par AA Développement." />
        <meta property="og:image" content="https://aadeveloppement.com/assets/home-preview.png" />
        <meta property="og:url" content="https://aadeveloppement.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accueil - AA Développement" />
        <meta name="twitter:description" content="Création de sites web modernes, performants et sur mesure par AA Développement." />
        <meta name="twitter:image" content="https://aadeveloppement.com/assets/home-preview.png" />
      </Helmet>

      <section className="hero" id="home" role="banner">
        {/* Blobs animés en arrière-plan */}
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob1"></span>
          <span className="blob blob2"></span>
          <span className="blob blob3"></span>
        </div>

        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">AA Développement</h1>
          <h2 className="hero-subtitle">
            Des sites web <span className="highlight">modernes</span> et <span className="highlight">performants</span>
          </h2>
          <p className="hero-text">
            Nous créons des sites web sur mesure adaptés à vos besoins :
            design élégant, performance, sécurité et référencement SEO inclus.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn-primary" aria-label="Voir nos offres">Voir nos offres</a>
            <a href="#contact" className="btn-secondary" aria-label="Nous contacter">Nous contacter</a>
          </div>
        </div>
      </section>
    </>
  );
}

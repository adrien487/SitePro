import React from "react";
import "../Styles/Services.css";
import { Helmet } from "react-helmet";

const Services = ({ onSelectOffer }) => {
  const plans = [
    {
      name: "Essential",
      description: "Une présence simple mais professionnelle sur le web.",
      features: [
        "3 à 5 pages personnalisées",
        "Référencement SEO basique",
        "Design responsive",
        "Intégration de vos contenus",
        "Configuration des pages légales (mentions, contact…)",
        "Forfait de support maintenance et hébergement 1 mois à 30€/mois"
      ]
    },
    {
      name: "Basic",
      description: "Idéal pour les entreprises souhaitant se démarquer.",
      features: [
        "5 à 7 pages personnalisées",
        "Référencement SEO et gestion des statistiques",
        "Sécurité renforcée",
        "Design moderne et optimisé",
        "Optimisation des performances",
        "Forfait de support maintenance et hébergement 1 mois à 35€/mois"
      ]
    },
    {
      name: "Premium",
      description: "Solution complète et optimisée pour une présence forte.",
      features: [
        "7 à 10 pages dynamiques",
        "Optimisation SEO avancée",
        "Performances premium (vitesse + UX)",
        "Sécurité premium (pare-feu, monitoring…)",
        "Intégrations avancées (formulaires, modules, automatisations…)",
        "Forfait de support maintenance et hébergement 1 mois à 35€/mois"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Formules - AA Développement</title>
        <meta
          name="description"
          content="Découvrez les formules Essential, Basic et Premium de AA Développement pour la création de sites web sur mesure, performants et sécurisés."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Nos Formules - AA Développement" />
        <meta property="og:description" content="Formules Essential, Basic et Premium pour sites web sur mesure et optimisés SEO." />
        <meta property="og:image" content="https://aadeveloppement.com/assets/services-preview.png" />
        <meta property="og:url" content="https://aadeveloppement.com/#services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nos Formules - AA Développement" />
        <meta name="twitter:description" content="Formules Essential, Basic et Premium pour sites web performants et sécurisés." />
        <meta name="twitter:image" content="https://aadeveloppement.com/assets/services-preview.png" />
      </Helmet>

      <section id="services" className="services" data-aos="fade-up">
        <h2>Nos Formules</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <article
              className="plan-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="desc">{plan.description}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => onSelectOffer(plan.name)}
                aria-label={`Choisir l'offre ${plan.name}`}
              >
                Choisir cette offre
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

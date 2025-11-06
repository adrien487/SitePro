// src/sections/Services.jsx
import React from "react";
import "../Styles/Services.css";

const Services = ({ onSelectOffer }) => {
  const plans = [
    {
      name: "Essential",
      price: "400€",
      description: "Une présence simple mais professionnelle sur le web.",
      features: [
        "3 à 5 pages personnalisées",
        "Référencement SEO basique",
        "Design responsive",
        "Forfait de support maintenance et hébergement 1 mois à 30€/mois"
      ]
    },
    {
      name: "Basic",
      price: "600€",
      description: "Idéal pour les entreprises souhaitant se démarquer.",
      features: [
        "5 à 7 pages personnalisées",
        "Référencement SEO et gestion des statistiques",
        "Sécurité renforcée",
        "Forfait de support maintenance et hébergement 1 mois à 35€/mois"
      ]
    },
    {
      name: "Premium",
      price: "800€",
      description: "Solution complète et optimisée pour une présence forte.",
      features: [
        "7 à 10 pages dynamiques",
        "Optimisation SEO avancée",
        "Performances et sécurité premium",
        "Forfait de support maintenance et hébergement 1 mois à 35€/mois"
      ]
    }
  ];

  return (
    <section id="services" className="services" data-aos="fade-up">
      <h2>Nos Formules</h2>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div
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
            >
              Choisir cette offre
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

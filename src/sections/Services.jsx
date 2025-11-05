// src/sections/Services.jsx
import React from "react";

const Services = () => {
  const plans = [
    {
      name: "Essential",
      price: "400€",
      description: "Une présence simple mais professionnelle sur le web.",
      features: [
        "3 pages (Accueil, Services, Contact)",
        "Référencement SEO basique",
        "Design responsive",
        "Forfait de support maintenance et hebergement 1 mois à 30 euro par mois"
      ]
    },
    {
      name: "Basic",
      price: "600€",
      description: "Idéal pour les entreprises souhaitant se démarquer.",
      features: [
        "5 pages personnalisées",
        "Référencement SEO et gestion des statistiques",
        "Sécurité renforcée",
        "Forfait de support maintenance et hebergement 1 mois à 35 euro par mois"
      ]
    },
    {
      name: "Premium",
      price: "800€",
      description: "Solution complète et optimisée pour une présence forte.",
      features: [
        "10 pages dynamiques",
        "Optimisation SEO avancée",
        "Performances et sécurité premium",
        "Forfait de support maintenance et hebergement 1 mois à 35 euro par mois"
      ]
    }
  ]
// On renvoi les cartes avec leurs attributs et on à Animation au scroll avec AOS
  return (
    <section id="services" className="services" dataaos="fade-up">
      <h2>Nos Formules</h2>
      <div className="plans-grid"> 
  {plans.map((plan, index) => (    
    <div className="plan-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}> 
      <h3>{plan.name}</h3>
      <p className="price">{plan.price}</p>
      <p className="desc">{plan.description}</p>
      <ul>
        {plan.features.map((feature, i) => ( // Liste des fonctionnalités
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button>Choisir cette offre</button>
    </div>
  ))}
</div>
    </section>
  )
}

export default Services

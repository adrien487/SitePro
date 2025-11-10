import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedOffer, setSelectedOffer] = useState("");

  return (
    <div>
      <Helmet>
        {/* Meta global */}
        <title>A.A. Développement - Création de sites web modernes et performants</title>
        <meta
          name="description"
          content="A.A. Développement crée des sites web sur mesure : design moderne, performance, sécurité et SEO optimisé pour votre entreprise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="A.A. Développement - Création de sites web" />
        <meta property="og:description" content="Sites web modernes, performants et sur mesure pour entreprises et professionnels." />
        <meta property="og:image" content="https://www.monsite.com/assets/home-preview.png" />
        <meta property="og:url" content="https://www.monsite.com/" />
        <meta property="og:type" content="website" />


        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "A.A. Développement",
            "url": "https://www.monsite.com",
            "logo": "https://www.monsite.com/assets/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/votreprofil",
              "https://www.facebook.com/votreprofil",
              "https://www.instagram.com/votreprofil"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-6-XX-XX-XX-XX",
              "contactType": "Customer Service",
              "email": "contact@monsite.com"
            }
          }
          `}
        </script>
      </Helmet>

      <main>
        <Home />
        <About />
        <Services onSelectOffer={setSelectedOffer} />
        <Contact selectedOffer={selectedOffer} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

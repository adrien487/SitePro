import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(""); // State partagé

  return (
    <div>
      <main>
        <Home />
        <About />
        <Services setSelectedPlan={setSelectedPlan} /> {/* passer la fonction */}
        <Contact selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /> {/* passer state et setter */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

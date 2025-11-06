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

  const [selectedOffer, setSelectedOffer] = useState("");


  return (
    <div>
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

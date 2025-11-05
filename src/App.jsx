import React, { useEffect } from "react"; // ✅ importer useEffect
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./sections/Home";
import Services from "./sections/services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  // ✅ useEffect utilisé **à l’intérieur du composant**
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <main>
        <Home />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


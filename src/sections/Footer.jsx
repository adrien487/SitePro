import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Mentions légales / copyright */}
        <p>
          &copy; {new Date().getFullYear()} A.A. Développement. Tous droits réservés.
        </p>
        <p>
          <a href="/mentions-legales" target="_blank" rel="noopener noreferrer">
            Mentions légales
          </a>{" "}
          |{" "}
          <a href="/politique-confidentialite" target="_blank" rel="noopener noreferrer">
            Politique de confidentialité
          </a>
        </p>
        <p>
          Développé avec  par A.A. Développement
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Mentions légales / copyright */}
        <p>
          &copy; {new Date().getFullYear()} <strong>A.A. Développement</strong>. Tous droits réservés.
        </p>

        <p>
          <a
            href="/mentions-legales"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mentions légales"
          >
            Mentions légales
          </a>{" "}
          |{" "}
          <a
            href="/politique-confidentialite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Politique de confidentialité"
          >
            Politique de confidentialité
          </a>
        </p>

        <p>
          Développé avec  par <strong>A.A. Développement</strong>
        </p>
      </div>
    </footer>
  );
}

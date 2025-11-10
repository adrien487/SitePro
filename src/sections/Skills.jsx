import React from 'react';
import SkillBadge from '../components/SkillBadge';
import { Helmet } from 'react-helmet';

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      <Helmet>
        <title>Compétences - A.A. Développement</title>
        <meta
          name="description"
          content="Découvrez les compétences de A.A. Développement : HTML, CSS, JavaScript et React pour créer des sites web performants et modernes."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Compétences - A.A. Développement" />
        <meta property="og:description" content="HTML, CSS, JavaScript et React pour créer des sites web modernes et performants." />
        <meta property="og:image" content="https://www.monsite.com/assets/skills-preview.png" />
        <meta property="og:url" content="https://www.monsite.com/#skills" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="skills">
        <h2>Compétences</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillBadge name={skill} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

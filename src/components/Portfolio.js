import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Compilateur du langage Tiger en C++",
      description: "Création d'un compilateur pour le langage Tiger, démontrant des compétences en analyse lexicale et syntaxique ainsi qu'en optimisation de code.",
    },
    {
      title: "Réalisation d'un IDE en Java pour le back et JavaScript pour le front",
      description: "Développement complet d'un IDE avec une interface utilisateur en JavaScript et un backend solide en Java pour faciliter le développement de programmes.",
    },
    {
      title: "Réalisation d'un jeu d'énigmes en réseau avec C#",
      description: "Développement d'un jeu multijoueur en C#, mettant en œuvre des mécanismes réseau pour la communication entre les joueurs.",
    },
    {
      title: "OCR de Sudoku en C",
      description: "Conception et développement d'un OCR pour résoudre des grilles de Sudoku, utilisant des réseaux de neurones pour la reconnaissance optique de caractères.",
    },
    {
      title: "Reconnaissance d'émotions en C (apprentissage automatique)",
      description: "Projet utilisant des techniques de machine learning pour identifier et classer les émotions humaines via des réseaux de neurones.",
    },
    {
      title: "Reproduction de malloc en C",
      description: "Implémentation personnalisée de la fonction malloc en langage C, démontrant une compréhension avancée de la gestion dynamique de la mémoire.",
    },
    {
      title: "Shell personnalisé en C",
      description: "Développement d'un interpréteur de commandes (shell) en C, mettant en avant des compétences en systèmes d'exploitation.",
    }
  ];

  const toggleProject = (index) => {
    if (selectedProject === index) {
      setSelectedProject(null);
    } else {
      setSelectedProject(index);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Mes Projets</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item" onClick={() => toggleProject(index)}>
            <h3>{project.title}</h3>
            {selectedProject === index && (
              <p>{project.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

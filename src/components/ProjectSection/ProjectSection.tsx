import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useInView } from 'react-intersection-observer';

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "FoodPath",
      description: "FoodPath é uma plataforma que conscientiza e facilita doações para combater a fome no Brasil. Através de estatísticas e parcerias com ONGs, o site conecta usuários a oportunidades de doação, promovendo uma distribuição justa de recursos para apoiar a erradicação da fome no país.",
      tecnologies: "React - JavaScript - HTML5 - CSS3 - Node.js - SQL",
      image: "https://placehold.co/600x400",
      githubLink: "https://github.com/saulosw/foodpath-FECAP"
    },
  ];

  return (
    <section 
      id="projetos" 
      className={`projects-section ${inView ? 'reveal' : ''}`} 
      ref={ref}
    >
      <h2 className="section-title">Projetos</h2>
      <p className="section-description">
      Confira alguns dos projetos que desenvolvi :)
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            tecnologies={project.tecnologies}
            image={project.image} 
            githubLink={project.githubLink} 
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

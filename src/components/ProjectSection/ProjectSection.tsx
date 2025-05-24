import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useInView } from 'react-intersection-observer';

import FoodPathPrev from '../../assets/videos/FoodPathPrev.mp4';
import AccountManagementPrev from '../../assets/videos/AccountManagementPrev.mp4';
import UnderOceanPrev from '../../assets/videos/UnderOceanPrev.mp4';
import CuteCatPrev from '../../assets/videos/CuteCatPrev.mp4';
import UberSafeStartPrev from '../../assets/videos/UberSafeStartPrev.mp4';

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "UberSafeStart",
      description: "Aplicativo desenvolvido para o desafio da Uber focado em aumentar a segurança no transporte. O UberSafeStart implementa gamificação com 'SafeScore', proteção em três fases (antes, durante e após viagens), e recursos como Código de Respeito e gravação opcional de áudio. Criado em Java com expansão planejada para Android, oferece proteção tanto para passageiros quanto motoristas, reduzindo incidentes e promovendo respeito mútuo. Projeto com interface intuitiva e UX/UI moderno apresentado diretamente aos representantes da Uber.",
      tecnologies: " Java - XML - SQL - Node.js - Android Studio",
      video: UberSafeStartPrev,
      githubLink: "https://github.com/saulosw/uber-safestart",
      isMobileApp: true
    },
    {
      title: "FoodPath",
      description: "FoodPath é uma plataforma desenvolvida como projeto da faculdade para conscientizar e facilitar doações no combate à fome no Brasil. Com dados estatísticos e acesso a ONGs, o site conecta usuários a oportunidades de doação, promovendo uma distribuição de recursos para apoiar a erradicação da fome no país.",
      tecnologies: "React - JavaScript - HTML5 - CSS3 - Node.js - SQL",
      video: FoodPathPrev,
      githubLink: "https://github.com/saulosw/foodpath-FECAP",
      isMobileApp: false
    },
    {
      title: "UnderOcean",
      description: "UnderOcean é um jogo educacional desenvolvido em Unity proposto pela faculdade, para conscientizar sobre a preservação dos oceanos e da vida marinha. Nele, os jogadores têm a missão de remover poluentes do ambiente marinho, aprendendo sobre a preservação dos ecossistemas aquáticos.",
      tecnologies: "C# - Unity",
      video: UnderOceanPrev,
      githubLink: "https://github.com/saulosw/underocean_-main-game",
      isMobileApp: false
    },
    {
      title: "CuteCat",
      description: "CuteCat é um jogo desenvolvido em C# com a Unity. No jogo, você é responsável por cuidar de um gato virtual, monitorando suas necessidades de fome, higiene, sono e felicidade. O objetivo é mantê-lo saudável e feliz, interagindo com botões que permitem satisfazer suas necessidades e equilibrar suas barras de status.",
      tecnologies: "C# - Unity",
      video: CuteCatPrev,
      githubLink: "https://github.com/saulosw/cute-cat-game",
      isMobileApp: false
    },
    {
      title: "Bank Account Management",
      description: "Sistema de gerenciamento de contas bancárias desenvolvido em Python. Permite operações essenciais como criar clientes e contas, realizar depósitos, saques e monitorar o histórico de transações. O sistema também envia e-mails de boas-vindas aos novos clientes com um código de validação.",
      tecnologies: "Python - HTML5 - SQL",
      video: AccountManagementPrev,
      githubLink: "https://github.com/saulosw/account-management",
      isMobileApp: false
    }
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
            video={project.video} 
            githubLink={project.githubLink}
            isMobileApp={project.isMobileApp}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
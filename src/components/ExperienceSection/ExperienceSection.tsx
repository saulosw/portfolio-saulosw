import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ExperienceSection.css';
import GetnetLogo from '../../assets/images/getnet-logo.png';

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experiencia" 
      className={`experience-section ${inView ? 'reveal' : ''}`} 
      ref={ref}
    >
      <h2 className="section-title">Experiência Profissional</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="company-logo-container">
            <img src={GetnetLogo} alt="Getnet" className="company-logo" />
          </div>
          <div className="experience-header">
            <h3>Estagiário em Dados</h3>
            <span className="company">Getnet Brasil</span>
            <span className="period">Janeiro 2025 - Presente</span>
          </div>
          <div className="experience-content">
            <ul>
              <li>Desenvolvimento de automações em Python para otimização de fluxos de trabalho</li>
              <li>Realização de consultas SQL para análise e manipulação de dados</li>
              <li>Criação e manutenção de dashboards em Tableau, Power BI e Excel</li>
              <li>Utilização de Databricks para engenharia e análise de dados</li>
              <li>Colaboração com equipes multifuncionais para implementação de soluções de dados</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
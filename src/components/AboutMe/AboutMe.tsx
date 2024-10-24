import React from 'react';
import './AboutMe.css';
import AboutMeIcon from '../../../public/images/aboutme-icon.jpeg'

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mim" className="about-me-section">
      <div className="about-me-container">
        <h1>Olá! Meu nome é <span className="highlight">Saulo Pereira</span></h1>
        <p>Sou um <span className="highlight">desenvolvedor full-stack</span> apaixonado por resolver problemas com código e construir interfaces eficientes e funcionais.</p>
        <p>Com experiência em <span className="highlight">maratonas de programação</span> e <span className="highlight">Game Jams</span>, aprendi a trabalhar em equipe, lidar com desafios complexos e entregar resultados com qualidade.</p>
        <p>Estou sempre <span className="highlight">buscando novas oportunidades</span> para crescer e contribuir com soluções em projetos reais.</p>
      </div>
      <div className="about-me-image-container">
        <img src={AboutMeIcon} alt="Saulo Pereira" className="about-me-image" />
      </div>
    </section>
  );
};

export default AboutMe;
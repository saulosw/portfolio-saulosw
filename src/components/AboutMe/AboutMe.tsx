import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';
import AboutMeIcon from '../../assets/images/aboutme-icon.jpeg';

const AboutMe: React.FC = () => {
  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="sobre-mim" 
      className={`about-me-section ${aboutMeInView ? 'reveal' : ''}`} 
      ref={aboutMeRef}
    >
      <div className="about-me-container">
        <h1>Olá! Meu nome é <span className="highlight">Saulo Pereira</span></h1>
        <p>Sou um <span className="highlight">desenvolvedor e entusiasta de dados</span> apaixonado por resolver problemas com código e construir soluções eficientes e escaláveis.</p>
        <p>Atualmente trabalho como <span className="highlight">Estagiário de Dados na Getnet Brasil</span>, onde desenvolvo automações em Python, crio dashboards e realizo análises de dados. Tenho como objetivo me especializar em <span className="highlight">desenvolvimento backend</span>.</p>
        <p>Com experiência em <span className="highlight">maratonas de programação</span> e <span className="highlight">projetos acadêmicos</span>, desenvolvi habilidades para trabalhar em equipe, enfrentar desafios complexos e entregar resultados com qualidade.</p>
        <p>Estou sempre <span className="highlight">buscando novas oportunidades</span> para crescer e contribuir com soluções em projetos reais.</p>
      </div>
      <div className="about-me-image-container">
        <img src={AboutMeIcon} alt="Saulo Pereira" className="about-me-image" />
      </div>
    </section>
  );
};

export default AboutMe;
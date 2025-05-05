import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">Saulo Pereira</h1>
        <nav className="footer-nav">
          <ul className="nav-links">
            <li><a href="#sobre-mim" className="footer-link">Sobre mim</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#experiencia" className="footer-link">Experiência</a></li>
            <li><a href="#timeline" className="footer-link">Trajetória</a></li>
            <li><a href="#projetos" className="footer-link">Projetos</a></li>
            <li><a href="#eventos" className="footer-link">Eventos</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/saulo-pereira-jesus/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://github.com/saulosw" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
        <a href="mailto:saulopereiradejesus@gmail.com" className="footer-link footer-email">
          saulopereiradejesus@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
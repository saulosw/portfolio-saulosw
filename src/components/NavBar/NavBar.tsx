import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="nav-icon" />
          </a>
          <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="nav-icon" />
          </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav navbar-links ms-auto">
            <li>
              <a className="nav-link" href="#sobre-mim">Sobre mim</a>
            </li>
            <li>
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li>
              <a className="nav-link" href="#projetos">Projetos</a>
            </li>
            <li>
              <a className="nav-link" href="#eventos">Eventos</a>
            </li>
            <li>
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

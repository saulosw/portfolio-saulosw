import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#sobre-mim" className="nav-link">Sobre mim</a>
        </li>
        <li>
          <a href="#skills" className="nav-link">Skills</a>
        </li>
        <li>
          <a href="#projetos" className="nav-link">Projetos</a>
        </li>
        <li>
          <a href="#eventos" className="nav-link">Eventos</a>
        </li>
        <li>
          <a href="#contato" className="nav-link">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

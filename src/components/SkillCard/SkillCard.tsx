import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './SkillCard.css';

interface SkillCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  technologiesTitle: string;
  technologies: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, technologiesTitle, technologies }) => {
  return (
    <div className="skill-card">
      <FontAwesomeIcon icon={icon} size="2x" className="skill-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{technologiesTitle}</h4>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
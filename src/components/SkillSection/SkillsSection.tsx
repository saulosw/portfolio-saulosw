import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillCard from '../SkillCard/SkillCard';
import { faCode, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className={`skills-section ${skillsInView ? 'reveal' : ''}`}
      ref={skillsRef}
    >
      <h2>Skills</h2>
      <div className="skills-container">
        <SkillCard
          icon={faCode}
          title="Front-end"
          description="Crio interfaces modernas e responsivas, sempre focando na usabilidade e na performance."
          technologiesTitle="Tecnologias:"
          technologies={['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React']}
        />
        <SkillCard
          icon={faDatabase}
          title="Back-end"
          description="Desenvolvo APIs eficientes e arquiteturas escaláveis, garantindo a segurança e o desempenho necessário para sistemas robustos."
          technologiesTitle="Tecnologias:"
          technologies={['Python', 'Java', 'C#', 'Node.js', 'Django', 'SQL']}
        />
        <SkillCard
          icon={faTools}
          title="Ferramentas"
          description="Utilizo uma variedade de ferramentas para otimizar meu fluxo de trabalho e colaborar de maneira eficiente em projetos."
          technologiesTitle="Ferramentas:"
          technologies={['Git', 'GitHub', 'Figma', 'VSCode', 'Unity', 'Blender']}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
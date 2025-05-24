import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillCard from '../SkillCard/SkillCard';
import { faCode, faDatabase, faTools, faChartBar } from '@fortawesome/free-solid-svg-icons';
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
          technologies={['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3']}
        />
        <SkillCard
          icon={faDatabase}
          title="Back-end"
          description="Desenvolvo APIs eficientes e arquiteturas escaláveis, garantindo a segurança e o desempenho necessário para sistemas robustos."
          technologiesTitle="Tecnologias:"
          technologies={['Python', 'Java', 'C#', 'Node.js']}
        />
        <SkillCard
          icon={faChartBar}
          title="Dados e Analytics"
          description="Transformo dados em insights acionáveis, criando visualizações impactantes e automações que otimizam fluxos de trabalho."
          technologiesTitle="Ferramentas:"
          technologies={['SQL', 'Excel', 'Power BI', 'Tableau']}
        />
        <SkillCard
          icon={faTools}
          title="Ferramentas"
          description="Utilizo uma variedade de ferramentas para otimizar meu fluxo de trabalho e colaborar de maneira eficiente em projetos."
          technologiesTitle="Ferramentas:"
          technologies={['Git/Github', 'SAS Enterprise Guide', 'VSCode', 'Unity', 'Android Studio']}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
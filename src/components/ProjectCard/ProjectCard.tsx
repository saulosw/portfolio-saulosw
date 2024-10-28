import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tecnologies: string;
  video: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tecnologies, video, githubLink }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div 
      ref={ref} 
      className={`project-card ${inView ? 'reveal' : ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video}
        className="project-video"
        muted
        loop
        preload="metadata"
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{tecnologies}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
          Visite o GitHub <FontAwesomeIcon icon={faExternalLinkAlt} className="redirect-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
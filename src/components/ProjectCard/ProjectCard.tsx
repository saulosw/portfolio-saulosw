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
  isMobileApp?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tecnologies, 
  video, 
  githubLink,
  isMobileApp = false
}) => {
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
      className={`project-card ${inView ? 'reveal' : ''} ${isMobileApp ? 'mobile-app' : ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`video-container ${isMobileApp ? 'mobile-app-container' : ''}`}>
        <video
          ref={videoRef}
          src={video}
          className={`project-video ${isMobileApp ? 'mobile-app-video' : ''}`}
          muted
          loop
          preload="metadata"
        />
      </div>
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
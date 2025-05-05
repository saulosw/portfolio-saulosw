import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const Timeline: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: "2023",
      title: "Ensino Médio",
      description: "Conclusão do Ensino Médio no SESI",
      position: "top"
    },
    {
      year: "2024 (Fev)",
      title: "Início da Faculdade",
      description: "Início do Bacharelado em Ciência da Computação na FECAP",
      position: "bottom"
    },
    {
      year: "2024 (Mai)",
      title: "Maratona SBC",
      description: "Participação na Maratona SBC de Programação na FECAP",
      position: "top"
    },
    {
      year: "2024 (Ago)",
      title: "ICPC",
      description: "Participação na primeira fase do ICPC América do Sul na FECAP",
      position: "bottom"
    },
    {
      year: "2025 (Jan)",
      title: "Estágio Getnet",
      description: "Início do estágio em Dados na Getnet Brasil",
      position: "top"
    }
  ];

  return (
    <section 
      id="timeline" 
      className={`timeline-section ${inView ? 'reveal' : ''}`} 
      ref={ref}
    >
      <h2 className="section-title">Minha Trajetória</h2>
      
      <div className="timeline-container">
        <div className="timeline-track">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => {
            const percentage = `${(index / (timelineEvents.length - 1)) * 100}%`;
            
            return (
              <div 
                key={index} 
                className={`timeline-item ${event.position}`}
                style={{ left: percentage }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-title">{event.title}</div>
                  <div className="timeline-description">{event.description}</div>
                </div>
                <div className="timeline-point"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
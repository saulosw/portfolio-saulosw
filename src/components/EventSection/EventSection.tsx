import React from 'react';
import './EventSection.css';
import EventCard from '../EventCard/EventCard';
import { useInView } from 'react-intersection-observer';

import BTPIcon from '../../assets/images/btp-icon.png';
import SBCIcon from '../../assets/images/sbc-icon.png';
import ICPCIcon from '../../assets/images/icpc-icon.png';

const EventSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "BTP Game Jam 1#",
      description: "Participei da primeira edição da Blackthornprod Game Jam, realizada em outubro de 2018, onde desenvolvi sozinho um jogo de puzzle em pixel art. A experiência me ajudou a aprimorar habilidades técnicas e a explorar soluções inovadoras em design, tudo em um curto prazo.",
      image: BTPIcon
    },
    {
      title: "Maratona SBC de Programação",
      description: "Participei da Maratona SBC de Programação na FECAP, em São Paulo. Essa experiência foi fundamental para aprimorar minhas habilidades em trabalho em equipe e aplicar técnicas de desenvolvimento ágil, sempre focado em cumprir prazos curtos e rigorosos, o que contribuiu muito para meu desenvolvimento profissional.",
      image: SBCIcon
    },
    {
      title: "ICPC América do Sul",
      description: "Em agosto de 2024, participei da primeira fase do ICPC na FECAP, onde pude desenvolver habilidades avançadas de resolução de problemas e melhorar minha capacidade de gestão de tempo e trabalho sob pressão. O evento me proporcionou um conhecimento prático em programação e soluções criativas, essenciais para desafios de alto nível.",
      image: ICPCIcon
    },
  ];

  return (
    <section 
      id="eventos" 
      className={`events-section ${inView ? 'reveal' : ''}`} 
      ref={ref}
    >
      <h2 className="section-title">Eventos</h2>
      <p className="section-description">
        Confira alguns dos eventos que eu tive o prazer de participar :)
      </p>
      <div className="events-container">
        {events.map((event, index) => (
          <EventCard 
            key={index} 
            title={event.title} 
            description={event.description} 
            image={event.image} 
          />
        ))}
      </div>
    </section>
  );
}

export default EventSection;

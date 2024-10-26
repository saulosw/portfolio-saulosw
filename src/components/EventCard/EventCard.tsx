import React from 'react';
import { useInView } from 'react-intersection-observer';
import './EventCard.css';

interface EventCardProps {
  image: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`event-card ${inView ? 'reveal' : ''}`}>
      <img src={image} alt={title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
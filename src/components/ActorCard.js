import React from 'react';
import './ActorList.css';

const ActorCard = ({ actor , onSelect}) => {
  return (
    <div className="actor-card">
      <div className="actor-info">
        <img
          src={`https://ui-avatars.com/api/?name=${actor.name}&background=random`}
          alt={actor.name}
          className="actor-image"
        />
        <div className="actor-details">
          <p className="actor-name">{actor.name}</p>
          <p className="actor-role">DOB:{actor.birth_year}</p>
          <p className="actor-role">Height: {actor.height}</p>

        </div>
      </div>
      <button className="actor-button" onClick={onSelect}>
        Details
      </button>
    </div>
  );
};

export default ActorCard;

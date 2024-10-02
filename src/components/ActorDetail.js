import React from 'react';
import './ActorDetail.css';

const ActorDetail = ({ actor, onClose }) => {
  return (
    <div className="actor-detail">
      <button className="close-button" onClick={onClose}>Close</button>
      <img
          src={`https://ui-avatars.com/api/?name=${actor.name}&background=random`}
          alt={actor.name}
          className="actor-image"
        />
      <h2>{actor.name}</h2>
  
      <p><strong>Height:</strong> {actor.height} cm</p> 
      <p><strong>Mass:</strong> {actor.mass} kg</p>
      <p><strong>Hair Color:</strong> {actor.hair_color}</p>
      <p><strong>Skin Color:</strong> {actor.skin_color}</p>
      <p><strong>Eye Color:</strong> {actor.eye_color}</p>
      <p><strong>Birth Year:</strong> {actor.birth_year}</p>
      <p><strong>Gender:</strong> {actor.gender}</p>
      <p><strong>Homeworld:</strong> <a href={actor.homeworld} target="_blank" rel="noopener noreferrer">View Homeworld</a></p>
      <p><strong>Films:</strong> {actor.films.length} films</p>
      <p><strong>Vehicles:</strong> {actor.vehicles.length > 0 ? actor.vehicles.length : 'None'}</p>
      <p><strong>Starships:</strong> {actor.starships.length > 0 ? actor.starships.length : 'None'}</p>
    </div>
  );
};

export default ActorDetail;

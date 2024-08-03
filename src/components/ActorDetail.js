import React, { useEffect, useState } from "react";
import "./ActorDetail.css";
const ActorDetail = ({ actor, onClose }) => {
  const [homeworldName, setHomeworldName] = useState("");
  const [filmTitles, setFilmTitles] = useState([]);
  const [speciesNames, setSpeciesNames] = useState([]);

  useEffect(() => {
    fetch(actor.homeworld)
      .then((response) => response.json())
      .then((data) => setHomeworldName(data.name));

    Promise.all(
      actor.films.map((url) => fetch(url).then((response) => response.json()))
    ).then((films) => setFilmTitles(films.map((film) => film.title)));

    Promise.all(
      actor.species.map((url) => fetch(url).then((response) => response.json()))
    ).then((species) =>
      setSpeciesNames(species.map((species) => species.name))
    );
  });

  return (
    <div className="actor-detail">
      <h3>{actor.name}</h3>
      <div className="basic-detail">
        <div>
          <p>Height: {actor.height}</p>
          <p>Mass: {actor.mass}</p>
          <p>Hair Color: {actor.hair_color}</p>
        </div>
        <div>
          <p>Skin Color: {actor.skin_color}</p>
          <p>Eye Color: {actor.eye_color}</p>
          <p>Birth Year: {actor.birth_year}</p>
        </div>
        <div>
          <p>Gender: {actor.gender}</p>
          <p>Homeworld: {homeworldName}</p>
        </div>
      </div>
      <h4>Films:</h4>
      <ul className="films">
        {filmTitles.map((title, index) => (
          <li key={index} className="add">
            {title}
          </li>
        ))}
      </ul>
      <div className="one-line">
        <h4>Species:</h4>
        <ul>
          {speciesNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ActorDetail;

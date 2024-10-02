import React from 'react';

const ActorCard = ({ actor, onSelectActor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center w-96">
      <h2 className="text-lg font-semibold mb-2">{actor.name}</h2>
      <p className="text-gray-600">Height: {actor.height} cm</p>
      <p className="text-gray-600">Birth Year: {actor.birth_year}</p>
      <button
        onClick={() => onSelectActor(actor)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Details
      </button>
    </div>
  );
};

export default ActorCard;

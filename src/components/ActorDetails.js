import React from 'react';

const ActorDetails = ({ actor, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">{actor.name}</h2>
        <p><strong>Height:</strong> {actor.height} cm</p>
        <p><strong>Mass:</strong> {actor.mass} kg</p>
        <p><strong>Hair Color:</strong> {actor.hair_color}</p>
        <p><strong>Skin Color:</strong> {actor.skin_color}</p>
        <p><strong>Eye Color:</strong> {actor.eye_color}</p>
        <p><strong>Birth Year:</strong> {actor.birth_year}</p>
        <p><strong>Gender:</strong> {actor.gender}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ActorDetails;

import React from "react";

const ActorCards = ({ actor, setActor, showDetail }) => {
  return (
    <div class="duration-500  min-h-72 px-6 py-4 border-2 opacity-45 hover:opacity-100 relative text-white border-solid border-purple-500 hover:shadow-purple-500/50 shadow-lg rounded-2xl">
      <div className="absolute p-10 inset-0 w-full h-full opacity-0  hover:opacity-100 flex justify-center items-end">
        <button
          onClick={() => {
            setActor(actor);
            showDetail(true);
          }}
          className="duration-500 border px-4 py-2 rounded-lg border-green-500 hover:shadow-green-500/50 shadow-md"
        >
          More Details
        </button>
      </div>
      <div className="text-3xl font-bold pb-10 text-center">
        {actor.name.toUpperCase()}
      </div>
      <div className="flex justify-between">
        <div>Birth Year</div>
        <div> {actor.birth_year}</div>
      </div>
      <div className="flex justify-between">
        <div>Height</div>
        <div>{actor.height} CM</div>
      </div>
    </div>
  );
};

export default ActorCards;

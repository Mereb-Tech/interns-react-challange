import React from "react";
import { Link } from "react-router-dom";

const ActorCard = ({ name, height, birth_year, url }) => {
  console.log(url);
  const id = url.split("/").slice(-2, -1)[0];
  console.log(id);
  return (
    <div className="h-[200px] w-[200px] flex flex-col shadow-md justify-center items-center">
      <div>{name}</div> 
      <div>{height}</div>
      <div>{birth_year} </div>
      <Link to={`/actors/${id}`}>
        <button className="bg-blue-500 ml-auto mt-auto p-2 rounded-md">
          Details
        </button>
      </Link>
    </div>
  );
};

export default ActorCard;

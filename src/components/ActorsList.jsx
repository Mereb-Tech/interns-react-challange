import React, { useEffect, useState } from "react";
import axios from "axios";

import ActorCard from "./ActorCard";
import Loading from "./commons/Loading";
// import err  from "../assets/error.jpeg";

const ActorsList = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people");
        setActors(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching actors:", error);
        setError("Error fetching actors. Please try again.");
        setIsLoading(false);
      }
    };
    fetchActors();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center max-w-6xl p-5">
        {actors.map((actor) => (
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
            key={actor.url}
          >
            <ActorCard
              name={actor.name}
              height={actor.height}
              birth_year={actor.birth_year}
              url={actor.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsList;

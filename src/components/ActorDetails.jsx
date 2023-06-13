import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

import Loading from "./commons/Loading";
// import err from "/../assets/error.jpeg";

const ActorDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [actor, setActor] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/${path}`
        );
        setActor(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching actor:", error);
        setError("Error fetching actor details. Please try again.");
        setIsLoading(false);
      }
    };
    fetchActor();
  }, [path]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Actor Details</h1>
      <h2 className="text-2xl font-semibold mb-2">{actor.name}</h2>
      <p className="mb-1">Height: {actor.height}</p>
      <p className="mb-1">Mass: {actor.mass}</p>
      <p className="mb-1">Hair Color: {actor.hair_color}</p>
      <p className="mb-1">Skin Color: {actor.skin_color}</p>
      <p className="mb-1">Eye Color: {actor.eye_color}</p>
      <p className="mb-1">Birth Year: {actor.birth_year}</p>
    </div>
  );
};

export default ActorDetails;

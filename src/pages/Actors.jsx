import React, { useState, useEffect } from "react";
import { fetchData, options } from "../utils/fetchData";
import { ActorCard, Header } from "../components";
import loader from "../assets/loader.svg";
import spinner from "../assets/spinner.svg";  

const Actors = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchActors = async () => { // Fetching the actors from the API
    try {
      const res = await fetchData("https://swapi.dev/api/people/", options); 
      if (res) {
        setResponse(res);
      }
    } catch (error) {
      console.error("Error fetching actors:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching the actors
    }
  };
  useEffect(() => {
    fetchActors();
  }, []);
  if (loading) { // Displaying the loader while fetching the actors
    return (
      <div className="flex-center wrapper">
        <img src={loader} alt="loading"/>
      </div>
    );
  }

  
  return response ? (
    <div>
      <Header title="List"/>
      <section className="wrapper my-6 flex flex-row flex-wrap gap-6 md:gap-2">
        {response?.results?.map((actor) => (
          <ActorCard key={actor.url} url={actor.url} actor={actor} />
        ))}
      </section>
    </div>
  ) : (
    <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px]py-28 text-center">
      <h3 className="p-bold-20 md:h5-bold">Not Actors Yet</h3>
    </div>
  );
};

export default Actors;

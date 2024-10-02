import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loader from "../assets/loader.svg";
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";
import { fetchData, options } from "../utils/fetchData";
import { Header, LinkSection } from "../components";

const ActorDetails = () => {
  const params = useParams();
  const { id } = params;

  const [actor, setActor] = useState({});
  const [homeworld, setHomeworld] = useState({});
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActorDetails = async () => {
    try {
      const actor = await fetchData(
        `https://swapi.dev/api/people/${id}`,
        options
      );
      if (actor) {
        setActor(actor);

        // Fetch and set homeworld
        if (actor.homeworld) {
          const homeworld = await fetchData(actor.homeworld, options);
          if (homeworld) setHomeworld(homeworld);
        }

        // Fetch and append films
        actor.films?.map(async (url) => {
          const film = await fetchData(url, options);
          if (film) setFilms((prevFilms) => [...prevFilms, film]); // Append new film to the existing list
        });

        // Fetch and append species
        actor.species?.map(async (url) => {
          const species = await fetchData(url, options);
          if (species) setSpecies((prevSpecies) => [...prevSpecies, species]); // Append new species
        });

        // Fetch and append vehicles
        actor.vehicles?.map(async (url) => {
          const vehicle = await fetchData(url, options);
          if (vehicle)
            setVehicles((prevVehicles) => [...prevVehicles, vehicle]); // Append new vehicle
        });

        // Fetch and append starships
        actor.starships?.map(async (url) => {
          const starship = await fetchData(url, options);
          if (starship)
            setStarships((prevStarships) => [...prevStarships, starship]); // Append new starship
        });
      }
    } catch (error) {
      console.error("Error fetching actor details:", error);
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  useEffect(() => {
    fetchActorDetails();
  }, [id]); // Re-fetch when the `id` changes

  if (loading) {
    return (
      <div className="flex-center wrapper">
        <img src={loader} alt="loading" />
      </div>
    );
  }

  console.log(homeworld);

  return (
    <div className="bg-primary-50 bg-dotted-pattern bg-contain">
      <Header title="Information" />
      <section className="flex justify-cente wrapper">
        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">{actor?.name}</h2>

            <div className="flex flex-col gap-5 ">
              <div className="p-regular-20 flex items-center gap-3">
                <img src={location} alt="location" className="w-7 h-7" />
                <p className="p-medium-16 lg:p-regular-20">{homeworld?.name}</p>
              </div>
              <div className="flex gap-2 md:gap-3">
                <img src={calendar} alt="calendar" className="w-7 h-7" />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap">
                  <p className="">
                    Birth Date:{" "}
                    <span className="p-bold-20">{actor?.birth_year}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center ">
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                Is a{" "}
                <span className="text-primary-500 ">
                  {species[0]?.name || "Human"}
                </span>
              </p>
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0 capitalize">
                Gender:{" "}
                <span className="text-primary-500 ">{actor.gender}</span>
              </p>
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0 capitalize">
                Mass:{" "}
                <span className="text-primary-500 ">{actor.mass} Kg</span>
              </p>
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0 capitalize">
                Eye Color:{" "}
                <span className="text-primary-500 ">{actor.eye_color}</span>
              </p>
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0 capitalize">
                Height:{" "}
                <span className="text-primary-500 ">{actor.height} cm</span>
              </p>
            </div>
            
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            {!films.length == 0 && <LinkSection lable={"Films"} data={films} />}
            {!starships.length == 0 && (
              <LinkSection lable={"Starships"} data={starships} />
            )}
            {!vehicles.length == 0 && (
              <LinkSection lable={"Vehicles"} data={vehicles} />
            )}
          </div>
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12"></section>
    </div>
  );
};

export default ActorDetails;

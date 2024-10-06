import React, { useEffect, useState } from "react";
import { getActorFilms } from "../services/actorServices";
import { BiCameraMovie } from "react-icons/bi";

const ActorFilms = ({ urls, name }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //   useEffect : get all the films of a specific actor by iteratin on all the urls
  // Note: not best for performance but the way the data is built it's the only option
  useEffect(() => {
    async function fetchData() {
      setError("");
      setLoading(true);
      try {
        urls.forEach(async (url) => {
          const data = await getActorFilms(url);
          setFilms((prevState) => [...prevState, data]);
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [urls]);

  return (
    <>
      <h1 className="font-bold mb-8 text-white text-2xl px-12 py-4 shadow-lg">
        {name}'s movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4 gap-y-12 my-12 mx-auto container">
        {films &&
          !isLoading &&
          !error &&
          films.slice(0, 5).map((film) => (
            <div
              key={film.title}
              className="shadow-md shadow-black/50 w-[18rem] rounded-lg flex flex-col"
            >
              <div className=" py-2">
                <BiCameraMovie
                  color="#8e96b3"
                  className="h-[12rem] rounded-lg bg-slate-700 w-full"
                />
              </div>
              <div className=" px-2 py-2 flex flex-col gap-1 bg-muted-foreground rounded-b-lg flex-1">
                <span className="text-lg font-bold">{film.title}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{film.release_date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Directed by :</span>
                  <span className="font-medium">{film.director}</span>
                </div>
                <div className="flex gap-2">
                  <span>Producers:</span>
                  <span className="font-medium">{film.producer}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ActorFilms;

import React, { useEffect, useState } from "react";
import { getActors } from "../services/actorServices";
import ActorCard from "../components/actor_card";
import Loading from "../components/loading";
import Error from "../components/error";
import Paginator from "../components/paginator";

const Actors = () => {
  const [actors, setActors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setError("");
      setLoading(true);
      try {
        const data = await getActors(page);

        setActors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center xl:grid-cols-4 gap-y-12 my-12 mx-auto container">
        {!isLoading &&
          !error &&
          actors &&
          actors.results.map((actor) => (
            <ActorCard key={actor.url} actor={actor} />
          ))}

        {isLoading && <Loading />}
        {error && <Error error={error} />}
      </div>
      {actors && !error && (
        <Paginator
          next={actors.next}
          prev={actors.previous}
          totalPages={Math.ceil(actors.count / 10)}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Actors;

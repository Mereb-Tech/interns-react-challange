import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getActor } from "../services/actorServices";

import DetailPageLoading from "../components/detail_page-loading";
import ActorFilms from "../components/actor_films";

import { FaRegEye } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import Avatar from "../components/avatar";
import Error from "../components/error";

const ActorDetail = () => {
  const [actor, setActor] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { state } = useLocation();
  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setError("");
      setLoading(true);
      try {
        const data = await getActor(state);
        setActor(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [state]);

  return (
    <>
      <button
        className="self-start px-32 pt-12 text-white flex items-center gap-2"
        onClick={() => history(-1)}
      >
        <IoIosReturnLeft />
        back
      </button>
      <div className=" text-white container mx-auto py-12 ">
        {actor && !isLoading && !error && (
          <div className="flex items-center gap-12">
            <Avatar actor={actor} />

            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">{actor.name}</span>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <LiaBirthdayCakeSolid />
                  <span className="text-lg font-medium ">
                    {actor.birth_year}
                  </span>
                </div>
                <div>
                  <span>Gender: </span> <span>{actor.gender}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <GiBodyHeight size={"1.5rem"} />
                <span>{actor.height}cm</span>
              </div>
              <div className="flex items-center gap-2 ">
                <FaRegEye color={actor.eye_color} size={"1.5rem"} />
                <span>{actor.eye_color}</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span>Hair Color:</span>
                <span>{actor.hair_color}</span>
              </div>
            </div>
          </div>
        )}
        {isLoading && <DetailPageLoading />}
        {error && <Error error={error} />}
      </div>
      <div className="w-full h-[1px] bg-slate-600"></div>
      {actor && !error && <ActorFilms urls={actor.films} name={actor.name} />}
    </>
  );
};

export default ActorDetail;

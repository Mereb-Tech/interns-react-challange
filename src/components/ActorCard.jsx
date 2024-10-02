import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import calendar from "../assets/calendar.svg";

const ActorCard = ({ actor,url }) => {
  const id = url.split("/").filter(Boolean).pop(); // Getting the id of the actor from the url
  return (
    <div className="group relative flex min-h-[280px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[338px] m-5">
      <div
        // style={{ backgroundImage: `url(${actor?.imageUrl})` }} // This can be used if there was an imageUrl in the actor object
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      ></div>

      <div className="flex min-h-[130px] flex-col gap-3 p-5 md:gap-4">
        <div className="flex gap-2 flex-between">
          <span className="text-[14px] font-semibold leading-[20px] w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {`${actor?.height}CM`}
          </span>

          <div className="flex w-max rounded-full bg-grey-500/10 px-1 py-1">
            <img src={calendar} alt="calendar" className="w-4 h-4" />
            <p className="text-[14px] font-semibold leading-[20px] text-grey-500 px-1 line-clamp-1 capitalize">
              {actor?.birth_year}
            </p>
          </div>
        </div>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {actor?.name}
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600 line-clamp-1 capitalize">
            {actor?.gender}
          </p>

          <Link to={`/actor/${id}`} className="flex gap-2 ">   {/* Link to the ActorDetails page */}
            <p className="text-primary-500 text-nowrap ">Actor's Details</p>
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;

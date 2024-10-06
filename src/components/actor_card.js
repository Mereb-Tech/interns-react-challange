import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./avatar";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";

const ActorCard = ({ actor }) => {
  return (
    <div className="border-2 border-slate-800 shadow-md shadow-black/50 w-[15rem] rounded-lg">
      <div className=" py-2">
        <Avatar actor={actor} />
      </div>
      <div className=" px-2 py-2 flex flex-col gap-1 bg-muted-foreground rounded-b-lg">
        <span className="text-lg font-bold">{actor.name}</span>
        <div className="flex items-center gap-2">
          <LiaBirthdayCakeSolid />
          <span className="font-medium">{actor.birth_year}</span>
        </div>
        <div className="flex gap-4 justify-between ">
          <div className="flex items-center gap-2">
            <GiBodyHeight size={"1.5rem"} />
            <span>{actor.height}cm</span>
          </div>
          <Link to={`/actor`} state={actor.url}>
            <button className="bg-primary px-4 text-white rounded-lg py-1">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;

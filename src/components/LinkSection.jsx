import React from "react";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const LinkSection = ({ lable, data }) => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <p className="p-bold-20 text-grey-600">{lable}: </p>
        {/* <p className="p-medium-26 lg-p-regular-18">{edir?.description}</p> */}
      </div>

      <div className="flex flex-wrap gap-6">
        {data.map((data) => (
          <Link to={`/${lable.toLowerCase()}/${data.title | data.name}}`} className="flex gap-2">
            <p className="text-primary-500 text-nowrap ">{data.title || data.name}</p>
            <img src={arrow} alt="arrow" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;

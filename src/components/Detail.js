import React from "react";

const Detail = ({ data, showDetail, setShowDetail }) => {
  console.log(data);
  return (
    <div
      className={`inset-0 z-20 fixed w-full h-full ${
        showDetail ? "" : "hidden"
      } bg-black bg-opacity-90 justify-center items-center flex `}
    >
      <button
        onClick={() => {
          setShowDetail(false);
        }}
        className="w-10 absolute right-4 top-4 h-10 rounded-full border text-white flex justify-center items-center cursor-pointer"
      >
        X
      </button>
      <div className=" max-w-screen-sm flex flex-col gap-1 py-4 text-white  w-full px-4 border-cyan-500 border-2 mx-2 shadow-lg shadow-cyan-500/50 rounded-2xl ">
        <div className=" text-2xl font-bold text-center">{data.name}</div>
        <div className=" flex justify-between">
          <div>Birth Year</div>
          <div>{data.birth_year}</div>
        </div>
        <div className=" flex justify-between">
          <div>Eye Color</div>
          <div>{data.eye_color}</div>
        </div>
        <div className=" flex justify-between">
          <div>Height</div>
          <div>{data.height}</div>
        </div>{" "}
        <div className=" flex justify-between">
          <div>Hair Color</div>
          <div>{data.hair_color}</div>
        </div>{" "}
        <div className=" flex justify-between">
          <div>Skin Color</div>
          <div>{data.skin_color}</div>
        </div>{" "}
        <div className=" flex justify-between">
          <div>Weight</div>
          <div>{data.mass} KG</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

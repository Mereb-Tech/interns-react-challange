import React from "react";
import CardSkeleton from "./card_skeleton";

const Loading = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className=" shadow-md shadow-black/50 w-[15rem] rounded-lg"
        >
          <div className=" py-2">
            <CardSkeleton className={"h-[12rem]  w-full"} />
          </div>
          <div className=" px-2 py-2 flex flex-col gap-1 rounded-b-lg">
            <CardSkeleton className={"h-[1rem]  w-12"} />
            <CardSkeleton className={"h-[1rem]  w-24"} />
            <div className="flex gap-4 justify-between ">
              <CardSkeleton className={"h-[1.5rem]  w-24"} />
              <CardSkeleton className={"h-[1.5rem]  w-24"} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;

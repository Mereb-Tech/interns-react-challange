import React from "react";
import CardSkeleton from "./card_skeleton";

const DetailPageLoading = () => {
  return (
    <div>
      <div className="flex items-center gap-12">
        <CardSkeleton className={"h-[25rem]  w-[20rem]"} />
        <div className="flex flex-col gap-4">
          <CardSkeleton className={"h-[3rem]  w-64"} />
          <div className="flex gap-4">
            <CardSkeleton className={"h-[1.5rem]  w-6"} />
            <CardSkeleton className={"h-[1.5rem]  w-24"} />
          </div>

          <div className="flex items-center gap-2 ">
            <CardSkeleton className={"h-[1.5rem]  w-6"} />
            <CardSkeleton className={"h-[1.5rem]  w-24"} />
          </div>
          <div className="flex items-center gap-2 ">
            <CardSkeleton className={"h-[1.5rem]  w-6"} />
            <CardSkeleton className={"h-[1.5rem]  w-24"} />
          </div>
          <CardSkeleton className={"h-[1.5rem]  w-6"} />
          <CardSkeleton className={"h-[1.5rem]  w-24"} />
        </div>
      </div>
    </div>
  );
};

export default DetailPageLoading;

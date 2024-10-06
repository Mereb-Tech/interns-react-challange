import React from "react";

const CardSkeleton = ({ className }) => {
  return (
    <div className={`animate-pulse rounded-md bg-muted ${className}`}></div>
  );
};

export default CardSkeleton;

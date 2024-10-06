import React from "react";

const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] uppercase text-xl flex flex-col items-center justify-center gap-5">
          <p className="text-center sm:text-start text-sm sm:text-base text-[#87b1d1] font-bold">
            {error}: Please Retry
          </p>
          {/* button to retry fetching data */}
          <button
            className="bg-[#004477] px-6 py-1 rounded-xl text-white font-medium text-sm sm:text-base"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default Error;

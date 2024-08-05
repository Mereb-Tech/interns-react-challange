import { useEffect, useState } from "react";
import { actorsEndpoint } from "./util/constants";
import useFetch from "./util/useFetch";
import ActorCard from "./components/ActorCard";
import Detail from "./components/Detail";
import { ScaleLoader } from "react-spinners";
function App() {
  const url = actorsEndpoint;
  const [showDetail, setShowDetail] = useState(false);
  const [actor, setActor] = useState(0);
  const { data, loading, error } = useFetch(url);

  return (
    <div className="bg-black  w-full min-h-screen">
      <Detail
        data={actor}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      />

      <div className="inset-0 fixed">
        <img
          className=" opacity-30  object-cover w-full h-full"
          src="/peakpx.jpg"
        />
      </div>
      <div className="text-center text-5xl text-white font-bold pt-10">
        ACTORS OF THE STAR WARS SAGA
      </div>
      {loading ? (
        <div className="w-full flex justify-center items-center p-10">
          <ScaleLoader
            color="#00ff00"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : error ? (
        <div className="text-white text-2xl text-center p-10">
          Something went wrong. Please try again later.
        </div>
      ) : (
        data && (
          <div className="grid grid-cols-1 gap-10 max-w-screen-2xl m-auto py-20 px-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {data.map((actor, index) => (
              <ActorCard
                key={index}
                setActor={setActor}
                actor={actor}
                showDetail={setShowDetail}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;

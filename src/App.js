import { useEffect, useState } from "react";
import ActorCard from "./components/ActorCard";
import ActorDetail from "./components/ActorDetail";
import Loading from "./components/Loading";
import Error from "./components/Error";
import starwarsImage from "./images/starwars.png";
import "./App.css";

const App = () => {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people/");
        const data = await response.json();
        setActors(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="app">
      <img src={starwarsImage} alt="Starwars" loading="lazy" className="img" />
      <div className={`actor-list ${selectedActor ? "blur-background" : ""}`}>
        {actors.map((actor) => (
          <ActorCard
            key={actor.name}
            actor={actor}
            onDetailClick={() => setSelectedActor(actor)}
          />
        ))}
      </div>
      {selectedActor && (
        <div className="detail-wrapper">
          <ActorDetail
            actor={selectedActor}
            onClose={() => setSelectedActor(null)}
          />
        </div>
      )}
    </div>
  );
};

export default App;

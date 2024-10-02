import React, { useEffect, useState } from 'react';
import ActorCard from './components/ActorCard';
import ActorDetails from './components/ActorDetails';

function App() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/people/');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setActors(data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchActors();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading actors...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10 text-xl">{error}</div>;
  }

  const handleSelectActor = (actor) => {
    setSelectedActor(actor);
  };

  return (
    <div className="App">
      <header className="text-3xl font-bold py-6 text-center">
        Star Wars Actors
      </header>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {actors.map((actor) => (
          <ActorCard key={actor.name} actor={actor} onSelectActor={handleSelectActor} />
        ))}
      </div>

      {selectedActor && (
        <ActorDetails actor={selectedActor} onClose={() => setSelectedActor(null)} />
      )}
    </div>
  );
}

export default App;

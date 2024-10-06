import { Route, Routes } from "react-router-dom";
import Actors from "./pages/actors";
import ActorDetail from "./pages/actor_detail";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col">
      <header className="bg-primary text-white font-bold text-4xl text-center py-12">
        Popular Actors
      </header>
      {/* routes */}
      <Routes>
        {/* list of actors page */}
        <Route path="/" element={<Actors />} />

        {/* detail page of an actor */}
        <Route path="/actor" element={<ActorDetail />} />
      </Routes>
    </div>
  );
}

export default App;

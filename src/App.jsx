import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActorsList from "./components/ActorsList";
import ActorDetails from "./components/ActorDetails";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center font-bold text-2xl p-3">Actors Informations</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<ActorsList />} />
        <Route path="/actors/:id" element={<ActorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

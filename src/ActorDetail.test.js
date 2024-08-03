import { render, screen } from "@testing-library/react";
import ActorDetail from "./components/ActorDetail.js";

const actor = {
  name: "Luke Skywalker",
  height: "172",
  birth_year: "19BBY",
  films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/"],
  species: [],
};

test("renders actor detail", async () => {
  render(<ActorDetail actor={actor} />);
  const nameElement = await screen.findByText(/Luke Skywalker/i);
  expect(nameElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import ActorCard from "./components/ActorCard.js";

const actor = {
  name: "Luke Skywalker",
  height: "172",
  birth_year: "19BBY",
};

test("renders actor card", () => {
  render(<ActorCard actor={actor} onDetailClick={() => {}} />);
  const nameElement = screen.getByText(/Luke Skywalker/i);
  expect(nameElement).toBeInTheDocument();
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchData } from "../utils/fetchData";
import Actors from "../pages/Actors";

// Mock the fetchData function
jest.mock("../utils/fetchData");

describe("Actors Component", () => {
  const mockActorsData = {
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        url: "https://swapi.dev/api/people/1/",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        url: "https://swapi.dev/api/people/4/",
      },
    ],
  };

  beforeEach(() => {
    fetchData.mockClear();
  });

  test("should render the loader initially", () => {
    render(<Actors />);
    expect(screen.getByAltText("loading")).toBeInTheDocument();
  });

});

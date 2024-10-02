import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ActorCard from "../components/ActorCard";

describe("ActorCard Component", () => {
  const actor = {
    name: "Luke Skywalker",
    height: "172",
    birth_year: "19BBY",
    gender: "male",
  };
  const url = "https://swapi.dev/api/people/1/";

  test("renders actor information correctly", () => {
    render(
      <MemoryRouter>
        <ActorCard actor={actor} url={url} />
      </MemoryRouter>
    );

    // Check if the actor's name is displayed
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    
    // Check if the actor's height is displayed
    expect(screen.getByText("172CM")).toBeInTheDocument();

    expect(screen.getByText("19BBY")).toBeInTheDocument();

    expect(screen.getByText("male")).toBeInTheDocument();

    expect(screen.getByText("Actor's Details")).toBeInTheDocument();
  });
});

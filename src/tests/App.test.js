// import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { Actors, ActorDetails, Films, Starships } from "../pages";
import { Footer } from "../components";

// Mock components that are used in the routing
jest.mock("../pages/Actors", () => () => <div>Actors Component</div>);
jest.mock("../pages/ActorDetails", () => () => <div>ActorDetails Component</div>);
jest.mock("../pages/Films", () => () => <div>Films Component</div>);
jest.mock("../pages/Starships", () => () => <div>Starships Component</div>);
jest.mock("../components/Footer", () => () => <div>Footer Component</div>);

describe("App Component", () => {
  test("should render Actors page at '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Actors Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("should render ActorDetails page at '/actor/:id' route", () => {
    render(
      <MemoryRouter initialEntries={["/actor/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("ActorDetails Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("should render Films page at '/films/:id' route", () => {
    render(
      <MemoryRouter initialEntries={["/films/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Films Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("should render Starships page at '/starships/:id' route", () => {
    render(
      <MemoryRouter initialEntries={["/starships/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Starships Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("should render the Footer on all pages", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });
});

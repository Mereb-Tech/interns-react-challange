import React from "react";

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import ActorsList from "../components/ActorsList";

jest.mock("axios");

describe("ActorsList", () => {
  test("renders loading state initially", () => {
    axios.get.mockResolvedValueOnce({ data: { results: [] } });
    const { getByTestId } = render(<ActorsList />);
    expect(getByTestId("loading")).toBeInTheDocument();
  });

  test("renders error state when fetching actors fails", async () => {
    const errorMessage = "Error fetching actors. Please try again.";
    axios.get.mockRejectedValueOnce(new Error("Fetch error"));
    const { getByAltText } = render(<ActorsList />);
    await waitFor(() => {
      expect(getByAltText("Error")).toBeInTheDocument();
    });
  });

  test("renders actor cards when actors are fetched successfully", async () => {
    const actorsData = {
      data: {
        results: [
          {
            name: "Actor 1",
            height: "180",
            birth_year: "1990",
            url: "https://swapi.dev/api/people/1",
          },
          {
            name: "Actor 2",
            height: "170",
            birth_year: "1985",
            url: "https://swapi.dev/api/people/2",
          },
        ],
      },
    };
    axios.get.mockResolvedValueOnce(actorsData);
    const { getByText } = render(<ActorsList />);
    await waitFor(() => {
      expect(getByText("Actor 1")).toBeInTheDocument();
      expect(getByText("Actor 2")).toBeInTheDocument();
    });
  });
});

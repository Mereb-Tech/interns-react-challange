import React from "react";

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import ActorDetails from "../components/ActorDetails";

jest.mock("axios");

describe("ActorDetails", () => {
  test("renders loading state initially", () => {
    axios.get.mockResolvedValueOnce({ data: {} });
    const { getByTestId } = render(<ActorDetails />);
    expect(getByTestId("loading")).toBeInTheDocument();
  });

  test("renders error state when fetching actor fails", async () => {
    const errorMessage = "Error fetching actor details. Please try again.";
    axios.get.mockRejectedValueOnce(new Error("Fetch error"));
    const { getByAltText } = render(<ActorDetails />);
    await waitFor(() => {
      expect(getByAltText("Error")).toBeInTheDocument();
    });
  });

  test("renders actor details when actor is fetched successfully", async () => {
    const actorData = {
      data: {
        name: "Actor 1",
        height: "180",
        mass: "75",
        hair_color: "Brown",
        skin_color: "Fair",
        eye_color: "Blue",
        birth_year: "1990",
      },
    };
    axios.get.mockResolvedValueOnce(actorData);
    const { getByText } = render(<ActorDetails />);
    await waitFor(() => {
      expect(getByText("Actor Details")).toBeInTheDocument();
      expect(getByText("Actor 1")).toBeInTheDocument();
      expect(getByText("Height: 180")).toBeInTheDocument();
      expect(getByText("Mass: 75")).toBeInTheDocument();
      expect(getByText("Hair Color: Brown")).toBeInTheDocument();
      expect(getByText("Skin Color: Fair")).toBeInTheDocument();
      expect(getByText("Eye Color: Blue")).toBeInTheDocument();
      expect(getByText("Birth Year: 1990")).toBeInTheDocument();
    });
  });
});

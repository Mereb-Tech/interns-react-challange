import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders actor list", async () => {
  render(<App />);

  await waitFor(() => {
    const spinner = screen.queryByRole("progressbar");
    expect(spinner).not.toBeInTheDocument();
  });
  const headingElement = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "h1" && /Starwars Actors/i.test(content)
    );
  });
  expect(headingElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Designed for the modern workplace/i);
  expect(linkElement).toBeInTheDocument();
});

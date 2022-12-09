import { render, screen } from "@testing-library/react";
import Shop from "./Shop";

describe("Shop component", () => {
  test("renders the Shop component", () => {
    render(<Shop />);
    const headerElement = screen.getByText(/Products Available/);
    expect(headerElement).toBeInTheDocument();
  });
});

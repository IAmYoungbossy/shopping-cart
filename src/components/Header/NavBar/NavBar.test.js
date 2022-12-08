import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Nav bar component", () => {
  test("Nav bar list should contain 3 nav links", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navElement = screen.getByRole("navigation");
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(navElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
    expect(listItems.length).toBe(3);
  });
});

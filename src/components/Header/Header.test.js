import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  it("Checks if header contains the right title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: "FakeKedu" });
    const listElement = screen.getByRole("list");

    expect(title).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});

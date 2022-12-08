import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("Tests for input field and number of headings", () => {
    render(<Footer />);

    const titles = screen.getAllByRole("heading", { level: 4 });
    const input = screen.getByPlaceholderText("Enter your email");

    expect(titles.length).toBe(4);
    expect(input).toBeInTheDocument();
  });

  it("Check number of unordered list and its items", () => {
    render(<Footer />);

    const listElement = screen.getAllByRole("list");

    expect(listElement.length).toBe(3);
  });
});

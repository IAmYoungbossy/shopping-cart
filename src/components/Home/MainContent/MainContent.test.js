import { render, screen } from "@testing-library/react";
import MainContent from "./MainContent";

describe("MainContent component", () => {
  test("If main element is present", () => {
    render(<MainContent />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});

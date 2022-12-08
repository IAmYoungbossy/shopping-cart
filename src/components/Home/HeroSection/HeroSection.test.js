import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection component", () => {
  it("Test for pragraphs, button, heading and image", () => {
    render(<HeroSection />);

    const image = screen.getByRole("img");
    const button = screen.getByRole("button");
    const paragraph2 = screen.getByText(/lifestyle/i);
    const paragraph3 = screen.getByText(/assistance/i);
    const paragraph1 = screen.getByText(/promotional/i);
    const title = screen.getByRole("heading", { level: 1 });

    expect(image).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph3).toBeInTheDocument();
    expect(button).toHaveTextContent("Browse Product");
    expect(title).toHaveTextContent("All you need for your glamour.");
  });
});

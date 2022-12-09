import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("Image component", () => {
  it("Renders image element", () => {
    render(
      <Image
        src="goldStar"
        alt="star"
      />
    );
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});

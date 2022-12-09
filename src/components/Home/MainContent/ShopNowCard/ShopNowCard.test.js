import { render, screen } from "@testing-library/react";
import { ShopCard } from "./ShopNowCard";

describe("ShopNowCard component", () => {
  it("test for some text", () => {
    const title = "Samsung";
    const desc = "Samsung A20";
    const alt = "A phone";
    const src = "phoneImage";

    render(
      <ShopCard
        title={title}
        desc={desc}
        alt={alt}
        src={src}
      />
    );

    const image = screen.getByRole("img");
    const button = screen.getByRole("button");
    const titleCheck = screen.getByText("Samsung");

    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(titleCheck).toBeInTheDocument();
  });
});

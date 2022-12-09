import { render, screen } from "@testing-library/react";
import PromotionSection, { PromoCards } from "./PromotionSection";

describe("PromoCard component", () => {
  it("tests if components returns an image and some texts", () => {
    const src = "imagePath";
    const alt = "Image";

    render(
      <PromoCards
        src={src}
        alt={alt}
      />
    );

    const image = screen.getByRole("button", { name: "Browse Products" });
    const text = screen.getByText("Upto 25% off all casual wears");

    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});

describe("PromotionSection component", () => {
  it("checks for presence of some texts", () => {
    render(<PromotionSection />);

    const textRendered = screen.getByText("Active Promotions");

    expect(textRendered).toBeInTheDocument();
  });
});

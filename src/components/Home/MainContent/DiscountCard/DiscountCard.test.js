import { render, screen } from "@testing-library/react";
import { StarRating } from "./DiscountCard";

describe("Card Component", () => {
  const renderStarRating = (rating) => {
    render(<StarRating rating={rating} />);
  };

  test("StarRating component has the correct number of gold stars", () => {
    renderStarRating(3.5);
    const goldStars = screen.getAllByAltText("gold-star");
    expect(goldStars).toHaveLength(3);
  });

  test("StarRating component has the correct number of grey stars", () => {
    renderStarRating(3.5);
    const greyStars = screen.getAllByAltText("grey-star");
    expect(greyStars).toHaveLength(2);
  });
});

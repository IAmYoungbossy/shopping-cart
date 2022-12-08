import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddToCartButton, StarRating } from "./DiscountCard";

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

  test("AddToCartButton Component to increase Product item number by 1 and disappear", () => {
    const item = { id: 1, product: {}, itemNum: 0 };
    const handler = jest.fn();

    render(
      <AddToCartButton
        item={item}
        handleManipulateCartItem={handler}
      />
    );

    const button = screen.getByText("Add to cart");
    userEvent.click(button);

    expect(handler).toHaveBeenCalledWith(item, "increase");
  });
});

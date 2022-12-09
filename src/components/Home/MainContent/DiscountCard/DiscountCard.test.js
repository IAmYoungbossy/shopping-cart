import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  AddToCartButton,
  ControlItemQuantityButtons,
  Image,
  Price,
  StarRating,
} from "./DiscountCard";

describe("Card Component", () => {
  describe("StarRating component", () => {
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

  describe("AddtoCartButtons component", () => {
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

  describe("ControlItemQuantityButtons component", () => {
    test("renders control buttons and displays item quantity", () => {
      const item = { id: 1, product: {}, itemNum: 5 };
      const handleManipulateCartItem = jest.fn();
      const shoppingProducts = {
        1: { product: {}, itemNum: 5 },
        2: { product: {}, itemNum: 0 },
      };

      render(
        <ControlItemQuantityButtons
          item={item}
          shoppingProducts={shoppingProducts}
          handleManipulateCartItem={handleManipulateCartItem}
        />
      );

      expect(screen.getByText("+")).toBeInTheDocument();
      expect(screen.getByText("5")).toBeInTheDocument();
      expect(screen.getByText("-")).toBeInTheDocument();
    });

    test("increase button increases item quantity and decrease button decreases item quantity", () => {
      const item = { id: 1, product: {}, itemNum: 5 };
      const handleManipulateCartItem = jest.fn();
      const shoppingProducts = {
        1: { product: {}, itemNum: 5 },
        2: { product: {}, itemNum: 0 },
      };

      render(
        <ControlItemQuantityButtons
          item={item}
          shoppingProducts={shoppingProducts}
          handleManipulateCartItem={handleManipulateCartItem}
        />
      );

      const increaseButton = screen.getByText("+");
      const decreaseButton = screen.getByText("-");
      userEvent.click(increaseButton);
      userEvent.click(decreaseButton);

      expect(handleManipulateCartItem).toHaveBeenCalledWith(item, "increase");
      expect(handleManipulateCartItem).toHaveBeenCalledWith(item);
    });
  });

  describe("Price component", () => {
    it("renders the current price", () => {
      render(<Price currentPrice={9.99} />);
      expect(screen.getByText("$9.99")).toBeInTheDocument();
    });

    it("renders the previous price if it is available", () => {
      render(
        <Price
          currentPrice={9.99}
          proviousPrice={14.99}
        />
      );
      expect(screen.getByText("$9.99")).toBeInTheDocument();
      expect(screen.getByText("$9.99")).toBeInTheDocument();
    });

    it("does not render the previous price if it is not available", () => {
      render(<Price currentPrice={9.99} />);
      expect(screen.queryByText("$14.99")).not.toBeInTheDocument();
    });
  });

  describe("Image component", () => {
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

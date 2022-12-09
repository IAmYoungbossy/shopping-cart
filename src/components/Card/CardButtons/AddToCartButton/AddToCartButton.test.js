import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddToCartButton } from "./AddToCartButton";

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
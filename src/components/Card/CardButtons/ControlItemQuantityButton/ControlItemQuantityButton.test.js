import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ControlItemQuantityButtons } from "./ControlItemQuantityButton";

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

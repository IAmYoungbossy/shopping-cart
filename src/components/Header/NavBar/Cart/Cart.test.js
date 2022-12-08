import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  it("Test the number of items in a cart based on itemNum property of products in the shoppingProduct object", () => {
    const shoppingProduct = {
      1: {
        item: {},
        itemNum: 3,
      },
      2: {
        item: {},
        itemNum: 2,
      },
    };

    render(<Cart shoppingProducts={shoppingProduct} />);

    const img = screen.getByRole("img");
    const span = screen.getByText("5");
    const linkText = screen.getByText("Cart");

    expect(img).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(linkText).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import DiscountCard from "./DiscountCard";

describe("DiscountCard component", () => {
  it("tests if the elements are rendered properly", () => {
    render(<DiscountCard />);

    const title = screen.getByText("Recent Discount");
    const view = screen.getByText("View All Products");

    expect(title).toBeInTheDocument();
    expect(view).toBeInTheDocument();
  });
});

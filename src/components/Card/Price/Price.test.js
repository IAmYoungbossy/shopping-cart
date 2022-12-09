import { render, screen } from "@testing-library/react";
import { Price } from "./Price";

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

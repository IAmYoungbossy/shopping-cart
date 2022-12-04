import CartIcon from "../../../assets/cart.png";
import "./Cart.css";

export default function Cart({ cart }) {
  // Gets total number of items in cart obj.
  const getTotalNumOfItems = () =>
    Object.values(cart)
      .flat()
      .reduce((total, product) => product.itemNum + total, 0);

  return (
    <div>
      <div className="cart-icon">
        <img
          src={CartIcon}
          alt="cart icon"
        />
        <div className="cart-length">
          <span>{getTotalNumOfItems()}</span>
        </div>
      </div>{" "}
      Cart
    </div>
  );
}

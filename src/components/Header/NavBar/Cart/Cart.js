import CartIcon from "../../../assets/cart.png";
import "./Cart.css";

export default function Cart({ cart }) {
  return (
    <div>
      <div className="cart-icon">
        {" "}
        <img
          src={CartIcon}
          alt="cart icon"
        />
        <div className="cart-length">
          <span>{cart.length}</span>
        </div>
      </div>{" "}
      Cart
    </div>
  );
}

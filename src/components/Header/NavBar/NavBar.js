import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import "./NavBar.css";

export default function NavBar({ ...props }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <Cart {...props} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

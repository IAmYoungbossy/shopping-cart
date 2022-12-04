import Cart from "./Cart/Cart";
import "./NavBar.css";

export default function NavBar({ ...props }) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>
          <Cart {...props} />
        </li>
      </ul>
    </nav>
  );
}

import Cart from "./Cart/Cart";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
}

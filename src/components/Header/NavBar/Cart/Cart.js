import CartIcon from "../../../assets/cart.png";
import { Card } from "../../../Home/MainContent/DiscountCard/DiscountCard";
import "./Cart.css";

export default function Cart({ shoppingProducts }) {
  // Gets number of added items to cart array
  const { cartArray } = productToDisplayOnCartPage(shoppingProducts);

  // Gets total number of all items in cart array
  const { sumNumberOfItems } = getTotalNumOfItems(cartArray);

  return (
    <div className="cart-link">
      <div className="cart-icon">
        <img
          src={CartIcon}
          alt="cart icon"
        />
        <div className="cart-length">
          <span>{sumNumberOfItems}</span>
        </div>
      </div>{" "}
      Cart
    </div>
  );
}

// Gets total number of items in cart obj.
function getTotalNumOfItems(cartArray) {
  const sumNumberOfItems = Object.values(cartArray)
    .flat()
    .reduce((total, product) => product.itemNum + total, 0);
  return { sumNumberOfItems };
}

// Function checks the shoppingProducts object for shoppingProductArray to be added to cart
function productToDisplayOnCartPage(shoppingProducts) {
  const cartArray = [];

  // Checks if the number of item is greater then zero to add to cart array
  for (const item in shoppingProducts) {
    if (shoppingProducts[item].itemNum > 0)
      cartArray.push(shoppingProducts[item]);
  }

  return { cartArray };
}

export function CartPage({
  shoppingProducts,
  shoppingProductArray,
  handleManipulateCartItem,
}) {
  // Destructure to make cartArray available outside its scope
  const { cartArray } = productToDisplayOnCartPage(shoppingProducts);

  // Gets total price of all items on cart page
  const sumPriceOfItems = getTotalPrice(cartArray);

  // Maps Card component to each product in cart array
  const cartItems = cartArray.map((item) => (
    <Card
      shoppingProductArray={shoppingProductArray}
      item={item.product}
      key={item.product.id}
      src={item.product.image}
      model={item.product.title}
      alt={item.product.category}
      brandName={item.product.category}
      currentPrice={item.product.price}
      shoppingProducts={shoppingProducts}
      handleManipulateCartItem={handleManipulateCartItem}
    >
      <SubTotal
        totalPrice={item.totalPrice}
        itemNum={item.itemNum}
      />{" "}
    </Card>
  ));

  return (
    <div className="display-cart">
      {" "}
      <h2>Items In Cart</h2>
      <h3>Sum Total: ${sumPriceOfItems}</h3> {cartItems}
    </div>
  );
}

// Gets overall price of all items
function getTotalPrice(cartArray) {
  const sumPriceOfItems = (total, item) => item.totalPrice + total;
  return cartArray.reduce(sumPriceOfItems, 0);
}

// Displays sub total price for each item
function SubTotal({ totalPrice, itemNum }) {
  return (
    <p>
      <em>
        Total of ${totalPrice} for {itemNum} {itemNum > 1 ? "items" : "item"}
      </em>
    </p>
  );
}

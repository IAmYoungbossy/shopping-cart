import CartIcon from "../../../assets/cart.png";
import { Card } from "../../../Card/Card";
import Delete from "../../../assets/delete.png";
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

// Function checks the shoppingProducts object
// if a arpoduct meets a condition then it's added to cartArray
function productToDisplayOnCartPage(shoppingProducts) {
  const cartArray = [];

  // Checks if the number of item is greater then zero to add to cart array
  for (const item in shoppingProducts) {
    if (shoppingProducts[item].itemNum > 0)
      cartArray.push(shoppingProducts[item]);
  }

  return { cartArray };
}

// Gets total number of items in cart obj.
function getTotalNumOfItems(cartArray) {
  const sumNumberOfItems = Object.values(cartArray)
    .flat()
    .reduce((total, product) => product.itemNum + total, 0);
  return { sumNumberOfItems };
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
        totalPrice={Math.round(item.totalPrice * 100) / 100}
        itemNum={item.itemNum}
      />{" "}
      <DeleteItemFromCart
        handleManipulateCartItem={() =>
          handleManipulateCartItem(item.product, "delete")
        }
        item={item.product}
      />
    </Card>
  ));

  return (
    <div className="display-cart">
      {" "}
      <h2>Items In Cart</h2>
      <h3>Sum Total: ${Math.round(sumPriceOfItems * 100) / 100}</h3> {cartItems}{" "}
      {cartArray.length < 1 && (
        <p className="no-item">Oops, no item in cart.</p>
      )}
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

function DeleteItemFromCart({
  handleManipulateCartItem,
  item,
  quantityChange,
}) {
  return (
    <button
      onClick={() => handleManipulateCartItem(item.product, quantityChange)}
      className="delete"
    >
      <img
        src={Delete}
        alt="Delete button"
      />
    </button>
  );
}

import CartIcon from "../../../assets/cart.png";
import { Card } from "../../../Home/MainContent/DiscountCard/DiscountCard";
import "./Cart.css";

export default function Cart({ handleCartDisplay, shoppingProducts }) {
  // Gets total number of items in cart obj.
  const getTotalNumOfItems = () => {
    let cartArray = [];
    for (const item in shoppingProducts) {
      if (shoppingProducts[item].itemNum > 0)
        cartArray.push(shoppingProducts[item]);
    }
    return Object.values(cartArray)
      .flat()
      .reduce((total, product) => product.itemNum + total, 0);
  };

  return (
    <div
      className="cart-link"
      onClick={handleCartDisplay}
    >
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

export function CartPage({
  shoppingProducts,
  items,
  handleManipulateCartItem,
}) {
  let cartArray = [];
  for (const item in shoppingProducts) {
    if (shoppingProducts[item].itemNum > 0)
      cartArray.push(shoppingProducts[item]);
  }

  const cartItems = cartArray.map((item) => (
    <Card
      items={items}
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
      <h3>
        Sum Total: $
        {cartArray.reduce((total, item) => item.totalPrice + total, 0)}
      </h3>{" "}
      {cartItems}
    </div>
  );
}

function SubTotal({ totalPrice, itemNum }) {
  return (
    <p>
      <em>
        Total of ${totalPrice} for {itemNum} {itemNum > 1 ? "items" : "item"}
      </em>
    </p>
  );
}

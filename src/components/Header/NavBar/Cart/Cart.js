import CartIcon from "../../../assets/cart.png";
import { Card } from "../../../Home/MainContent/DiscountCard/DiscountCard";
import "./Cart.css";

export default function Cart({ handleCartDisplay, test }) {
  // Gets total number of items in cart obj.
  const getTotalNumOfItems = () => {
    let cartArray = [];
    for (const item in test) {
      if (test[item].itemNum > 0) cartArray.push(test[item]);
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

export function CartPage({ test, items, handleTest }) {
  let cartArray = [];
  for (const item in test) {
    if (test[item].itemNum > 0) cartArray.push(test[item]);
  }

  const cartItems = cartArray.map((item) => (
    <Card
      test={test}
      items={items}
      item={item.product}
      key={item.product.id}
      handleTest={handleTest}
      src={item.product.image}
      model={item.product.title}
      alt={item.product.category}
      brandName={item.product.category}
      currentPrice={item.product.price}
    >
      <SubTotal
        totalPrice={item.totalPrice}
        itemNum={item.itemNum}
      />{" "}
    </Card>
  ));
  return <div>{cartItems}</div>;
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

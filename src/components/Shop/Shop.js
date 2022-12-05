import {
  Card,
  StarRating,
} from "../Home/MainContent/DiscountCard/DiscountCard";
import "./Shop.css";

export default function Shop({ ...props }) {
  const { isLoaded, items, cart, isCartActive, handleManipulateItem } = props;

  const cartItems = cart.map((item) => (
    <Card
      item={item.item}
      key={item.item.id}
      src={item.item.image}
      model={item.item.title}
      alt={item.item.category}
      brandName={item.item.category}
      currentPrice={item.item.price}
      // numberInStock={item.item.rating.count}
      handleManipulateItem={handleManipulateItem}
    ></Card>
  ));

  const productsCards = items.map((item) => (
    <Card
      {...props}
      item={item}
      key={item.id}
      src={item.image}
      model={item.title}
      alt={item.category}
      brandName={item.category}
      currentPrice={item.price}
      numberInStock={item.rating.count}
    >
      <StarRating rating={item.rating.rate} />
    </Card>
  ));

  return (
    <>
      <h2 className="shop-header">
        {!isCartActive ? "Available Products" : "Items In Cart"}
      </h2>
      {isLoaded && (
        <div className="shop">
          {!isCartActive ? (
            productsCards
          ) : (
            cartItems
          )}
        </div>
      )}
    </>
  );
}

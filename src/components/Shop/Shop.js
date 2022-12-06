import {
  Card,
  StarRating,
} from "../Home/MainContent/DiscountCard/DiscountCard";
import "./Shop.css";

export default function Shop({ ...props }) {
  const { isLoaded, items } = props;

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
      <h2 className="shop-header">Items In Cart</h2>
      {isLoaded && <div className="shop">{productsCards}</div>}
    </>
  );
}

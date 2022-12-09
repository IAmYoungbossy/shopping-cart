import "./Shop.css";
import { Card } from "../Card/Card";
import { StarRating } from "../Card/StarRating/StarRating";

export default function Shop({ ...props }) {
  const { isLoaded, shoppingProductArray } = props;
  
  // Maps each item in array to Card component for display
  const productsCards = shoppingProductArray.map((item) => (
    <Card
      {...props}
      item={item.product}
      key={item.product.id}
      src={item.product.image}
      model={item.product.title}
      alt={item.product.category}
      brandName={item.product.category}
      currentPrice={item.product.price}
      numberInStock={item.product.rating.count}
    >
      <StarRating rating={item.product.rating.rate} />
    </Card>
  ));

  return (
    <>
      <h2 className="shop-header">Products Available</h2>
      {isLoaded && <div className="shop">{productsCards}</div>}
    </>
  );
}

import "./DiscountCard.css";
import { Card } from "../../../Card/Card";
import { StarRating } from "../../../Card/StarRating/StarRating";
import { discountProducts } from "./discountedProductArray";

export default function DiscountCard() {
  const displayDiscountedProduct = discountProducts.map((product) => (
    <Card
      key={product.id}
      src={product.src}
      alt={product.alt}
      model={product.model}
      brandName={product.brandName}
      currentPrice={product.currentPrice}
      proviousPrice={product.proviousPrice}
      numberInStock={product.numberInStock}
    >
      <StarRating rating={product.rating} />
    </Card>
  ));

  return (
    <div>
      <div className="discount-header">
        <p>Recent Discount</p>
        <small>
          <p>View All Products</p>
        </small>
      </div>
      <div className="card-container">{displayDiscountedProduct}</div>
    </div>
  );
}

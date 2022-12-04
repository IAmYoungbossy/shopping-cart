import {
  Card,
  StarRating,
} from "../Home/MainContent/DiscountCard/DiscountCard";
import { Fragment, useEffect, useState } from "react";
import getProductData from "../../fetchProductData";
import "./Shop.css";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const productArr = async () => {
      const products = await getProductData();
      setItems(products);
      setIsLoaded(true);
    };
    productArr();
  }, []);

  const productsCards = items.map((item) => (
    <Card
      key={item.id}
      model={item.title}
      src={item.image}
      alt={item.category}
      brandName={item.category}
      currentPrice={item.price}
      numberInStock={item.rating.count}
    >
      <StarRating rating={item.rating.rate} />
    </Card>
  ));

  return (
    <Fragment>
      <h2 className="shop-header">Available Products</h2>
      {isLoaded && <div className="shop">{productsCards}</div>}
    </Fragment>
  );
}

import "./DiscountCard.css";
import GreyStar from "../../../assets/greyStar.png";
import GoldStar from "../../../assets/goldStar.png";
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

export function Card({
  src,
  alt,
  item,
  model,
  children,
  brandName,
  currentPrice,
  proviousPrice,
  numberInStock,
  shoppingProducts,
  handleManipulateCartItem,
}) {
  return (
    <div className="discount">
      <Image
        src={src}
        alt={alt}
      />
      <div className="discount-desc">
        <p>{brandName}</p>
        <p>{model}</p>
        <div className="star-rating">{children}</div>
        <Price
          currentPrice={currentPrice}
          proviousPrice={proviousPrice}
        />
        {!proviousPrice && (
          <div className="add-cart-wrapper">
            {shoppingProducts[item.id].itemNum > 0 && (
              <ControlItemQuantityButtons
                item={item}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            )}
            {shoppingProducts[item.id].itemNum < 1 && (
              <AddToCartButton
                item={item}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            )}
          </div>
        )}
        <small>
          <p className="available">{numberInStock} Available in stock</p>
        </small>
      </div>
    </div>
  );
}

function Image({ src, alt }) {
  return (
    <div className="discount-image">
      <img
        src={src}
        alt={alt}
      />
    </div>
  );
}

// Function conditional displays previous price before discount if previous
// price is available
function Price({ currentPrice, proviousPrice }) {
  return (
    <div className="price">
      <p className="current-price">${currentPrice}</p>{" "}
      {proviousPrice && <p className="previousPrice">${proviousPrice}</p>}
    </div>
  );
}

function ControlItemQuantityButtons({
  item,
  shoppingProducts,
  handleManipulateCartItem,
}) {
  return (
    <div className="control-btns">
      <button
        className="add btn"
        onClick={() => {
          handleManipulateCartItem(item, "increase");
        }}
      >
        +
      </button>
      <span className="number-of-items">
        {shoppingProducts[item.id].itemNum}
      </span>
      <button
        className="minus btn"
        onClick={() => {
          handleManipulateCartItem(item);
        }}
      >
        -
      </button>
    </div>
  );
}

function AddToCartButton({ item, handleManipulateCartItem }) {
  return (
    <button
      className="add-to-cart"
      onClick={() => {
        handleManipulateCartItem(item, "increase");
      }}
    >
      Add to cart
    </button>
  );
}

// Display stars as rating on page
export function StarRating({ rating }) {
  const { returnedStar, returnedNoStar } = getGoldandGreyStarRatio(rating);
  return (
    <div className="star-div">
      {returnedStar}
      {returnedNoStar}
    </div>
  );
}

// Function assigns the ratio between gold and grey star based on rating number
function getGoldandGreyStarRatio(rating) {
  const checkedStar = Math.floor(parseFloat(rating));
  const uncheckedStar = 5 - checkedStar;
  const starArr = duplicateStar(checkedStar, GoldStar);
  const noStarArr = duplicateStar(uncheckedStar, GreyStar);
  const returnedStar = starArr.map((star) => star);
  const returnedNoStar = noStarArr.map((star) => star);
  return { returnedStar, returnedNoStar };
}

// Function duplicates an image based on number passed to it
function duplicateStar(maxNumOfStar, src) {
  const iconArr = [];
  for (let i = 1; i <= maxNumOfStar; i++) {
    iconArr.push(
      <img
        key={maxNumOfStar + i}
        src={src}
        alt="star"
      />
    );
  }
  return iconArr;
}

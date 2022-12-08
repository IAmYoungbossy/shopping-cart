import "./DiscountCard.css";
import GreyStar from "../../../assets/greyStar.png";
import GoldStar from "../../../assets/goldStar.png";
import { discountProducts } from "./discountedProductArray";
import uniqid from "uniqid";

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

export function AddToCartButton({ item, handleManipulateCartItem }) {
  return (
    <button
      className="add-to-cart"
      onClick={() => {
        // when the button is clicked, increase the item's quantity in the cart
        handleManipulateCartItem(item, "increase");
      }}
    >
      Add to cart
    </button>
  );
}

// Display stars as rating on page
export function StarRating({ rating }) {
  // Calculate the ratio of gold and grey stars
  const starRating = getGoldAndGreyStarRatio(rating);

  // Return a div containing the star rating
  return <div className="star-div">{starRating}</div>;
}

// Function that calculates the ratio of gold and grey stars based on the rating number
function getGoldAndGreyStarRatio(rating) {
  // Calculate the number of checked and unchecked stars
  const checkedStarCount = Math.floor(parseFloat(rating));
  const uncheckedStarCount = 5 - checkedStarCount;

  // Create arrays of gold and grey stars
  const goldStars = duplicateStar(checkedStarCount, GoldStar);
  const greyStars = duplicateStar(uncheckedStarCount, GreyStar);

  // Combine the arrays of gold and grey stars and return them
  return [...goldStars, ...greyStars];
}

// Function duplicates an image based on number passed to it
function duplicateStar(maxNumOfStar, src) {
  // Create empty array to store duplicated images
  const iconArray = [];

  // Loop through the specified number of stars
  for (let i = 1; i <= maxNumOfStar; i++) {
    // Push a new image to the array, using a unique key and the provided source
    iconArray.push(
      <img
        key={uniqid()}
        src={src}
        alt={src === GoldStar ? "gold-star" : "grey-star"}
      />
    );
  }

  // Return the array of duplicated images
  return iconArray;
}

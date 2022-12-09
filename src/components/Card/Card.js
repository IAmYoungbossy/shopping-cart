import { Image } from "./Image/Image";
import { Price } from "./Price/Price";
import { AddToCartButton } from "./CardButtons/AddToCartButton/AddToCartButton";
import { ControlItemQuantityButtons } from "./CardButtons/ControlItemQuantityButton/ControlItemQuantityButton";

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

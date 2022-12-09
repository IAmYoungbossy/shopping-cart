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
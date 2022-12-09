export function ControlItemQuantityButtons({
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
// Function conditional displays previous price before discount if previous
// price is available
export function Price({ currentPrice, proviousPrice }) {
  return (
    <div className="price">
      <p className="current-price">${currentPrice}</p>{" "}
      {proviousPrice && <p className="previousPrice">${proviousPrice}</p>}
    </div>
  );
}
import GreyStar from "../../../assets/greyStar.png";
import GoldStar from "../../../assets/goldStar.png";
import Watch from "../../../assets/watch.png";
import Laptop from "../../../assets/laptop.png";
import Speaker from "../../../assets/speaker.png";
import Phone from "../../../assets/phone.png";
import "./DiscountCard.css";

export default function DiscountCard() {
  return (
    <div>
      <div className="discount-header">
        <p>Recent Discount</p>
        <small>
          <p>View All Products</p>
        </small>
      </div>
      <div className="card-container">
        <Card
          model="Rolex Sky-Dweller 18kt White Gold/SS Champagne Dial 326933 2022 Complete"
          src={Watch}
          alt="A Watch"
          brandName="ROLEX"
          currentPrice="$1,234.54"
          proviousPrice="$2,343.43"
          numberInStock="5"
        >
          <StarRating rating={3} />
        </Card>
        <Card
          model="Hp Pavilion 15- AMD Rymzn 3 -12GB RAM/1TB HDD 2.6GHz - 3.5GHz"
          src={Laptop}
          alt="A Laptop"
          brandName="HP"
          currentPrice="$1,644.50"
          proviousPrice="$2,843.43"
          numberInStock="51"
        >
          <StarRating rating={4} />
        </Card>
        <Card
          model="Sound Bar Wireless Bluetooth Speaker Stereo Subwoofer Soundbar - Black/Grey"
          src={Speaker}
          alt="A Speak"
          brandName="LG"
          currentPrice="$874.50"
          proviousPrice="$1,843.43"
          numberInStock="51"
        >
          <StarRating rating={2} />
        </Card>
        <Card
          model="Samsung Galaxy Note 10 Plus (Note 10+) 6.8-Inch SINGLE SIM 4,300 MAh Smartphone"
          src={Phone}
          alt="A Phone"
          brandName="SAMSUNG"
          currentPrice="$2874.50"
          proviousPrice="$4,843.43"
          numberInStock="3"
        >
          <StarRating rating={5} />
        </Card>
      </div>
    </div>
  );
}

export function Card({
  children,
  src,
  alt,
  brandName,
  model,
  currentPrice,
  proviousPrice,
  numberInStock,
}) {
  return (
    <div className="discount">
      <div className="discount-image">
        <img
          src={src}
          alt={alt}
        />
      </div>
      <div className="discount-desc">
        <p>{brandName}</p>
        <p>{model}</p>
        <div className="star-rating">{children}</div>
        <div className="price">
          <p className="current-price">${currentPrice}</p>{" "}
          {proviousPrice && <p className="previousPrice">${proviousPrice}</p>}
        </div>
        <small>
          <p className="available">{numberInStock} Available in stock</p>
        </small>
      </div>
    </div>
  );
}

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

export function StarRating({ rating }) {
  const { returnedStar, returnedNoStar } = calcStarRating(rating);
  return (
    <div className="star-div">
      {returnedStar}
      {returnedNoStar}
    </div>
  );
}

function calcStarRating(rating) {
  const checkedStar = Math.floor(parseFloat(rating));
  const uncheckedStar = 5 - checkedStar;
  const starArr = duplicateStar(checkedStar, GoldStar);
  const noStarArr = duplicateStar(uncheckedStar, GreyStar);
  const returnedStar = starArr.map((star) => star);
  const returnedNoStar = noStarArr.map((star) => star);
  return { returnedStar, returnedNoStar };
}

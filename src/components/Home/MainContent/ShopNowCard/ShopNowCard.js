import Sneaker from "../../../assets/sneaker.png";
import Headset from "../../../assets/headset.png";
import Sofa from "../../../assets/sofa.png";

export default function ShopNowCard() {
  return (
    <div>
      <ShopCard
        desc="this is the one stop shop for your need. Look no further."
        className="card-text-div"
        title="Fashion"
        src={Sneaker}
        alt="Sneaker"
      />
      <ShopCard
        desc="this is the one stop shop for your need. Look no further."
        className="card-text-div"
        title="Electronics"
        src={Headset}
        alt="Headset"
      />
      <ShopCard
        desc="this is the one stop shop for your need. Look no further."
        className="card-text-div"
        title="Funiture"
        src={Sofa}
        alt="sofa"
      />
    </div>
  );
}

const CardTitle = ({ title }) => <h3>{title}</h3>;
const CardDescription = ({ desc }) => <p>{desc}</p>;
const CardImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
  />
);

export function ShopCard({ title, desc, alt, src }) {
  return (
    <div>
      <div className="card-text-div">
        <CardTitle title={title} />
        <CardDescription desc={desc} />
        <button>Shop Now</button>
      </div>
      <div className="card-image-div">
        <CardImage
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}

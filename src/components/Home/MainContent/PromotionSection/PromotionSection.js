import "./PromotionSection.css";
import ManFashion from "../../../assets/man.png";
import Perfume from "../../../assets/perfume.png";
import Woman from "../../../assets/woman.png";

export default function PromotionSection() {
  return (
    <div>
      <div className="promo-header">
        <h2>Active Promotions</h2>
        <small>
          <p>View All Promotions</p>
        </small>
      </div>
      <div className="promo-card-wrapper">
        <PromoCards
          src={ManFashion}
          alt="Male model"
        />
        <PromoCards
          src={Perfume}
          alt="Perfume"
        />
        <PromoCards
          src={Woman}
          alt="Female Fashion"
        />
      </div>
    </div>
  );
}

function PromoCards({ src, alt }) {
  return (
    <div className="promo-card">
      <div className="promo-image">
        <img
          src={src}
          alt={alt}
        />
      </div>
      <div className="promo-text">
        <p>Upto 25% off all casual wears</p>
        <button>Browse Products</button>
      </div>
    </div>
  );
}

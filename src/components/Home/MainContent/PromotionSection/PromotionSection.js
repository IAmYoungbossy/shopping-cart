import "./PromotionSection.css";
import ManFashion from "../../../assets/man.png";
import Perfume from "../../../assets/perfume.png";
import Woman from "../../../assets/woman.png";
import { Link } from "react-router-dom";

export default function PromotionSection() {
  return (
    <div>
      <div className="promo-header">
        <div className="center-page">
          <h2>Active Promotions</h2>
          <small>
            <p>
              <Link to="/shop">View All Promotions</Link>
            </p>
          </small>
        </div>
      </div>
      <div className="promo-card-wrapper">
        <div className="center-page">
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
    </div>
  );
}

export function PromoCards({ src, alt }) {
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
        <button>
          <Link to="/shop">Browse Products</Link>
        </button>
      </div>
    </div>
  );
}

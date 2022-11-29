import "./HeroSection.css";
import Africa from "../assets/black-culture.png";

export default function HeroSection() {
  return (
    <section>
      <div className="hero-text">
        <small>
          <p>25% OFF PROMOTIONAL SALE</p>
        </small>

        <h1>All you need in the kitchen.</h1>
        <p>
          For your glamourous lifestyle, all you will ever need is the
          FakeStore. In this place you can't can't actually purchase anything so
          your money stays with you.
        </p>
        <button>Browse Product</button>
        <p>Talk to an assistance</p>
      </div>
      <div className="hero-image">
        <img
          src={Africa}
          alt="African Models"
        />
      </div>
    </section>
  );
}

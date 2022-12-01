import DiscountCard from "./DiscountCard/DiscountCard";
import "./MainContent.css";
import PromotionSection from "./PromotionSection/PromotionSection";
import ShopNowCard from "./ShopNowCard/ShopNowCard";

export default function MainContent() {
  return (
    <main>
      <ShopNowCard />
      <DiscountCard />
      <PromotionSection />
    </main>
  );
}

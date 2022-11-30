import DiscountCard from "./DiscountCard/DiscountCard";
import "./MainContent.css";
import ShopNowCard from "./ShopNowCard/ShopNowCard";

export default function MainContent() {
  return (
    <main>
      <ShopNowCard />
      <DiscountCard />
    </main>
  );
}

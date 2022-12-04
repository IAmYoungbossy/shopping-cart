import Home from "../Home/Home";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState({});

  const handlePushToCart = (item) => {
    if (cart.hasOwnProperty(item.id)) {
      const cartCopy = {
        ...cart,
        [item.id]: { ...cart[item.id], itemNum: cart[item.id].itemNum + 1 },
      };
      setCart(cartCopy);
    } else {
      const addToCart = { ...cart, [item.id]: { item, itemNum: 1 } }
      setCart(addToCart);
    }
  };
  
  return (
    <div className="App">
      <Header cart={[]} />
      {/* <Home /> */}
      <Shop handlePushToCart={handlePushToCart} />
      <Footer />
    </div>
  );
}

export default App;

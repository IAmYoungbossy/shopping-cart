import Home from "../Home/Home";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState({});

  // Checks if item already exist in cart then increases/decreases item
  // else it create new object of push item with its ID as object key.
  const handleManipulateItem = (item, operator) => {
    let editItem;
    const addToCart = {
      ...cart,
      [item.id]: { item, itemNum: 1, totalPrice: item.price },
    };
    if (cart.hasOwnProperty(item.id)) {
      // Increases or decreases Item in cart depending on user interaction
      if (operator === "Remove") editItem = cart[item.id].itemNum - 1;
      else editItem = cart[item.id].itemNum + 1;

      const updateItemInCart = {
        ...cart[item.id],
        itemNum: editItem,
        totalPrice: editItem * item.price,
      };
      const cartCopy = { ...cart, [item.id]: updateItemInCart };

      // Deletes item from cart if its itemNum in cart is zero
      if (cartCopy[item.id].itemNum === 0) delete cartCopy[item.id];
      setCart(cartCopy);
    } else setCart(addToCart);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      {/* <Home /> */}
      <Shop handleManipulateItem={handleManipulateItem} />
      <Footer />
    </div>
  );
}

export default App;

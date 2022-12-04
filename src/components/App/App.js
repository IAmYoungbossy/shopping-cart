import Home from "../Home/Home";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header cart={cart} />
      {/* <Home /> */}
      <Shop />
      <Footer />
    </div>
  );
}

export default App;

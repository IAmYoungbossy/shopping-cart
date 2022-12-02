import { useEffect } from "react";
import getProductData from "../../fetchProductData";
import Home from "../Home/Home";
import "./App.css";

function App() {
  useEffect(() => {
    const productArr = async () => {
      const products = await getProductData();
      console.log(products);
    };
    productArr();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

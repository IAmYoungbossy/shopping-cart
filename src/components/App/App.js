import "./App.css";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import getProductData from "../../fetchProductData";
import { CartPage } from "../Header/NavBar/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [shoppingProducts, setShoppingProducts] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  let cartArray = [];

  useEffect(() => {
    const productArr = async () => {
      const products = await getProductData();
      let productsObject;

      // Function adds array items to productsObject
      const getItemToObject = (product) =>
        (productsObject = {
          ...productsObject,
          [product.id]: { product, itemNum: 0, totalPrice: 0 },
        });
      products.forEach(getItemToObject);

      // Sets state for use
      setShoppingProducts(productsObject);
      setIsLoaded(true);
    };
    productArr();
  }, []);

  function handleManipulateCartItem(product, addOrReduce) {
    let updatedItemQuantity;
    if (addOrReduce === "increase") {
      updatedItemQuantity = shoppingProducts[product.id].itemNum + 1;
    } else {
      updatedItemQuantity = shoppingProducts[product.id].itemNum - 1;
    }
    const testCopy = {
      ...shoppingProducts,
      [product.id]: {
        ...shoppingProducts[product.id],
        itemNum: updatedItemQuantity,
        totalPrice: updatedItemQuantity * product.price,
      },
    };
    setShoppingProducts(testCopy);
  }

  const handleCartDisplay = () => {
    cartArray = [];
    for (const item in shoppingProducts) {
      if (shoppingProducts[item].itemNum > 0)
        cartArray.push(shoppingProducts[item]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header
          shoppingProducts={shoppingProducts}
          handleCartDisplay={handleCartDisplay}
        />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/shop"
            element={
              <Shop
                isLoaded={isLoaded}
                items={Object.values(shoppingProducts).flat()}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                items={Object.values(shoppingProducts).flat()}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

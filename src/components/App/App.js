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
  const [test, setTest] = useState({});
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
      setTest(productsObject);
      setIsLoaded(true);
    };
    productArr();
  }, []);

  function handleTest(product, increaseQuantity) {
    let updatedItemQuantity;
    if (increaseQuantity === "increase") {
      updatedItemQuantity = test[product.id].itemNum + 1;
    } else {
      updatedItemQuantity = test[product.id].itemNum - 1;
    }
    const testCopy = {
      ...test,
      [product.id]: {
        ...test[product.id],
        itemNum: updatedItemQuantity,
        totalPrice: updatedItemQuantity * product.price,
      },
    };
    setTest(testCopy);
  }

  const handleCartDisplay = () => {
    cartArray = [];
    for (const item in test) {
      if (test[item].itemNum > 0) cartArray.push(test[item]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header
          test={test}
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
                items={Object.values(test).flat()}
                test={test}
                handleTest={handleTest}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                items={Object.values(test).flat()}
                test={test}
                handleTest={handleTest}
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

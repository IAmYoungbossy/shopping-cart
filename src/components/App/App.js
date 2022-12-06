import Home from "../Home/Home";
import { useEffect, useState } from "react";
import getProductData from "../../fetchProductData";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage } from "../Header/NavBar/Cart/Cart";

function App() {
  const [test, setTest] = useState({});
  const [cart, setCart] = useState({});
  const [isCartActive, setIsCartActive] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let cartArray = [];

  useEffect(() => {
    const productArr = async () => {
      if (items.length > 0) return;
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
      setItems(products);
      setIsLoaded(true);
    };
    productArr();
  }, [items]);

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
      },
    };
    setTest(testCopy);
  }

  const handleCartDisplay = () => {
    // isCartActive ? setIsCartActive(false) : setIsCartActive(true);
    cartArray = [];
    for (const item in test) {
      if (test[item].itemNum > 0) cartArray.push(test[item]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header
          cart={cart}
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
                isCartActive={isCartActive}
                cart={Object.values(cart)}
                isLoaded={isLoaded}
                items={items}
                test={test}
                handleTest={handleTest}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                items={items}
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

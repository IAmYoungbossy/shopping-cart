import "./App.css";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import getProductData from "../../fetchProductData";
import { CartPage } from "../Header/NavBar/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "../Shop/PageNotFound/PageNotFound";

function App() {
  const [shoppingProducts, setShoppingProducts] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getApiItemsToObjectProperties = async () => {
      // Get product data from API
      const products = await getProductData();

      // Initialize empty object to store product data
      let productsObject = {};

      // Function to add each product to the productsObject
      const addProductToObject = (product) => {
        productsObject = {
          ...productsObject,
          [product.id]: { product, itemNum: 0, totalPrice: 0 },
        };
      };

      // Loop through products and add each one to the object
      products.forEach(addProductToObject);

      // Set state for use in the component
      setShoppingProducts(productsObject);
      setIsLoaded(true);
    };
    getApiItemsToObjectProperties();
  }, []);

  function handleManipulateCartItem(product, quantityChange) {
    console.log(quantityChange);
    // Increases or decreases product quantity based on user choice
    const updatedItemQuantity = calculateUpdatedQuantity(
      product,
      quantityChange
    );

    // Updates shopping product with new item quantity and total price
    const updatedShoppingProducts = (prevShoppingProducts) =>
      updateShoppingProducts(
        product,
        updatedItemQuantity,
        prevShoppingProducts
      );

    // Sets updated shopping product in state.
    setShoppingProducts((prevShoppingProducts) =>
      updatedShoppingProducts(prevShoppingProducts)
    );
  }

  function calculateUpdatedQuantity(product, quantityChange) {
    if (quantityChange === "increase")
      return shoppingProducts[product.id].itemNum + 1;
    else if (quantityChange === "delete") return 0;
    else return shoppingProducts[product.id].itemNum - 1;
  }

  function updateShoppingProducts(
    product,
    updatedItemQuantity,
    prevShoppingProducts
  ) {
    return {
      ...prevShoppingProducts,
      [product.id]: {
        ...prevShoppingProducts[product.id],
        itemNum: updatedItemQuantity,
        totalPrice: updatedItemQuantity * product.price,
      },
    };
  }

  // Converts ShoppingProducts object to array for use with array methods
  const getShoppingProductsArray = () => Object.values(shoppingProducts).flat();

  return (
    <Router basename="/shopping-cart">
      <div className="App">
        <Header shoppingProducts={shoppingProducts} />
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
                shoppingProductArray={getShoppingProductsArray()}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                shoppingProductArray={getShoppingProductsArray()}
                shoppingProducts={shoppingProducts}
                handleManipulateCartItem={handleManipulateCartItem}
              />
            }
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

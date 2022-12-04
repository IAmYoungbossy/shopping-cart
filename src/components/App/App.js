import Home from "../Home/Home";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Shop />
      <Footer />
    </div>
  );
}

export default App;

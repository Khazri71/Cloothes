import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import NotFound from "./components/NotFound";
import CartProvider from "./context/CartContext";
import ProductsCart from "./components/ProductsCart";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        {/* Routes  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<ProductsCart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;

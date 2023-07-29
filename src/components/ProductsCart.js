import React, { useState, useEffect } from "react";

import { useCart } from "../context/CartContext";
import axios from "axios";
import formatCurrency from "./formatCurrency";
import ProductCart from "./ProductCart";
import Spinner from "./Spinner";

const ProductsCart = (props) => {
  const { showModal } = props;

  const { cartProducts, removeProductFromCart } = useCart();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCartProducts = () => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <>
      <div className="cart pt-5">
        {isLoading && <Spinner />}
        {cartProducts.length !== 0 ? (
          <div className="container w-50">
            <h5 className=" mb-4 text-primary ">Your Cart</h5>

            <div>
              {cartProducts.map((prod) => (
                <ProductCart key={prod.id} product={prod} products={products} />
              ))}

              <div className="total fw-bold fs-3 float-end me-2 text-black-50">
                <p>
                  Total{" "}
                  <span>
                    {" "}
                    {formatCurrency(
                      cartProducts.reduce((total, cartProduct) => {
                        const prod = products.find(
                          (p) => p.id === cartProduct.id
                        );
                        return (
                          total + (prod?.price || 0) * cartProduct.quantity
                        );
                      }, 0)
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-primary my-5">
                Buy Now
              </button>
            </div>
          </div>
        ) : (
          <div
            class="container alert alert-primary text-center w-50 "
            role="alert"
          >
            No Products To Show !
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCart;

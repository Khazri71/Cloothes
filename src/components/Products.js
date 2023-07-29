import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Spinner from "./Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = () => {
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
    getProducts();
  }, []);

  return (
    <>
      {" "}
      <div className="products ">
        <div className="container">
          <h2 className="mb-4 text-center">Products</h2>
          {isLoading && <Spinner />}
          <div className="row">
            {products &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

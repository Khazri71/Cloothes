import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "./formatCurrency";
import { useCart } from "../context/CartContext";

function ProductCart(props) {
  const { product, products } = props;
  const { removeProductFromCart } = useCart();

  const productToShow = products.find((prod) => prod.id === product.id);
  if (productToShow == null) return null;

  return (
    <>
      <div className="product d-flex justify-content-between align-items-center ">
        <div className="part1 d-flex justify-content-between align-items-center  ">
          <img
            src={productToShow.image}
            className="object-fit-fill border rounded me-2"
            alt="product"
            style={{ width: 100 + "px", height: 100 + "px" }}
            loading="lazy"
          />
          <div className="info flex-wrap">
            <p className="text-secondary">
              {productToShow.title}

              {product.quantity > 1 && (
                <span className="text-primary ms-2">x{product.quantity}</span>
              )}
            </p>
            <span className="badge bg-secondary">
              {" "}
              {formatCurrency(productToShow.price)}
            </span>
          </div>
        </div>

        <div className="part-2 d-flex justify-content-between align-items-center flex-wrap ">
          <p className="text-secondary fs-5 me-2 mt-2">
            {formatCurrency(productToShow.price * product.quantity)}
          </p>

          <button
            className="btn btn-outline-danger rounded-circle "
            onClick={() => removeProductFromCart(product.id)}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ProductCart;

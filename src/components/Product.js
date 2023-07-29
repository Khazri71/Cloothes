import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "./formatCurrency";
import { useCart } from "../context/CartContext";

const ProductBox = (props) => {
  const { product } = props;
  const {
    getProductQuantity,
    incrementCartProductQuantity,
    decrementCartProductQuantity,
    removeProductFromCart,
  } = useCart();

  const quantity = getProductQuantity(product.id);

  return (
    <>
      <div
        className="box col-sm-12 col-md-6 col-lg-3 mb-5 "
        style={{ height: 500 + "px" }}
      >
        <div className="card mb-4">
          <img
            src={product.image}
            className="card-img-top object-fit-fill p-2"
            alt="product"
            style={{ height: 19 + "rem" }}
            loading="lazy"
          />
          <div className="card-body">
            <div className="info d-flex justify-content-between align-items-center ">
              <h5
                className="card-title"
                style={{
                  width: "180px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={product.title}
              >
                {product.title}
              </h5>

              <p className="card-text float-end me-2 text-black-50">
                {formatCurrency(product.price)}
              </p>
            </div>
            <span className="fs-6 text-black-50 ">{product.category}</span>
            <br />
            {quantity == 0 ? (
              <button
                className="btn rounded-pill add-btn mt-2"
                onClick={() => incrementCartProductQuantity(product.id)}
              >
                {" "}
                Add To Cart
              </button>
            ) : (
              <div className="many-prods text-center mt-2">
                <div className="count d-flex justify-content-center align-items-center mb-3">
                  <button
                    className=" btn  many-btn rounded-circle"
                    onClick={() => incrementCartProductQuantity(product.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="mx-3 num">{quantity} in cart</span>
                  <button
                    className="btn many-btn rounded-circle"
                    onClick={() => decrementCartProductQuantity(product.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <button
                  className="btn many-btn remove-btn rounded-pill"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
const Header = () => {
  const { cartProducts, cartQuantity } = useCart();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light  h-25 pb-1   "
      
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand logo" to="/">
            <p className="mt-3 fw-bold">Cloothes</p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="shop float-end position-relative mt-2">
              <NavLink className="nav-link" to="/cart">
                <span className="position-absolute text-white">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>{" "}
              </NavLink>
              <p
                className="position-absolute pb-3 bg-danger rounded-circle  d-flex justify-content-center align-items-center"
                style={{
                  width: 20 + "px",
                  height: 20 + "px",
                  top: 36 + "px",
                }}
              >
                <span
                  className="position-absolute "
                  style={{ fontSize: 12 + "px" }}
                >
                  {cartQuantity}
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

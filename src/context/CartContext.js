import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const initialValue = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [];
  const [cartProducts, setCartProducts] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartProducts));
  }, cartProducts);

  const getProductQuantity = (id) => {
    return cartProducts.find((item) => item.id === id)?.quantity || 0;
  };

  const incrementCartProductQuantity = (id) => {
    setCartProducts((currentCartProduct) => {
      if (currentCartProduct.find((prod) => prod.id === id) == null) {
        return [...currentCartProduct, { id, quantity: 1 }];
      } else {
        return currentCartProduct.map((prod) => {
          if (prod.id === id) {
            return { ...prod, quantity: prod.quantity + 1 };
          } else {
            return prod;
          }
        });
      }
    });
  };
  const decrementCartProductQuantity = (id) => {
    setCartProducts((currentCartProduct) => {
      if (currentCartProduct.find((prod) => prod.id === id) == null) {
        return currentCartProduct.filter((prod) => prod.id !== id);
      } else {
        return currentCartProduct.map((prod) => {
          if (prod.id === id) {
            return { ...prod, quantity: prod.quantity - 1 };
          } else {
            return prod;
          }
        });
      }
    });
  };

  const removeProductFromCart = (id) => {
    setCartProducts((currItems) => currItems.filter((item) => item.id !== id));
  };

  const cartQuantity = cartProducts.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        getProductQuantity,
        incrementCartProductQuantity,
        decrementCartProductQuantity,
        removeProductFromCart,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};

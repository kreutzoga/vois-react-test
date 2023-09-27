import React, { useState } from "react";

import ShoppingCart from "../shoppingCart/ShoppingCart.jsx";

import CartIcon from "../../assets/cart.svg";

import "../../styles/Header.css";

const Header = ({ cartItems }) => {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const shoppingCartItemCount = cartItems?.length;

  const toggleShoppingCart = () => {
    setIsShoppingCartOpen((value) => !value);
  };

  return (
    <>
      <header className="page-header">
        <div className="placeholder-box" />
        <p>_VOIS React Test</p>
        <div className="shopping-cart-container" onClick={toggleShoppingCart}>
          <img
            src={CartIcon}
            alt="Shopping cart icon"
            className="shopping-cart-icon"
          />
          {shoppingCartItemCount > 0 && (
            <div className="count-circle">{shoppingCartItemCount}</div>
          )}
          <p>Shopping Cart</p>
        </div>
      </header>
      {isShoppingCartOpen && <ShoppingCart cartItems={cartItems} />}
    </>
  );
};

export default Header;

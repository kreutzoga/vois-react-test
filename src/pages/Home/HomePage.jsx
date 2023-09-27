import React, { useState } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import Header from "../../components/header/Header";
import products from "../../data/products.json";

import BackgroundImage from "../../assets/bg.png";

import "../../styles/HomePage.css";

export const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="background-container">
        <img
          src={BackgroundImage}
          alt="Store background"
          className="background-picture"
        />
      </div>
      <h1 className="header-title">Fingertips Store</h1>
      <div className="grid-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </>
  );
};

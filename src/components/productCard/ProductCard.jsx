import React, { useState } from "react";

import ProductTooltip from "../productTooltip/ProductTooltip.jsx";

import ToolTipStatic from "../../assets/tooltip-static.svg";
import ToolTipHover from "../../assets/tooltip-hover.svg";

import "../../styles/ProductCard.css";

const ProductCard = ({ product, setCartItems }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const productImage = require(`../../assets/${product.imagePath}`);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const onAddToCart = () => {
    setCartItems((items) => [...items, product]);
  };

  return (
    <div className="product-card">
      <img
        src={isTooltipVisible ? ToolTipHover : ToolTipStatic}
        alt="Tooltip icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="tooltip-icon"
      />
      {isTooltipVisible && <ProductTooltip item={product} />}

      <div className="product-image-container">
        <img src={productImage} alt={product.name} />
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">£{product.price.toLocaleString()}</p>

      <button className="add-to-cart-button" onClick={onAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;

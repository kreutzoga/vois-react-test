import React from "react";

import "../../styles/ProductTooltip.css";

const ProductTooltip = ({ item }) => {
  const productImage = require(`../../assets/${item.imagePath}`);

  return (
    <div className="tooltip">
      <img src={productImage} alt={item?.name} className="tooltip-image" />
      <div className="details-column">
        <h5>Description</h5>
        <p>{item?.description}</p>
        <h5>Key features</h5>
        {item?.keyFeatures?.map((feature) => (
          <div className="features-container" key={feature.featureName}>
            <p>{feature.featureName}:</p>
            <p>{feature.featureValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTooltip;

import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/ShoppingCart.css";

const ShoppingCart = ({ cartItems }) => {
  const navigate = useNavigate();
  const totalOrderValue = cartItems?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const handleClick = () => {
    navigate("/checkout");
  };

  const getItemsWithCount = (array) => {
    return array.reduce((accumulator, object) => {
      const existingObject = accumulator.find((item) => item.id === object.id);

      if (existingObject) {
        existingObject.count++;
      } else {
        accumulator.push({ ...object, count: 1 });
      }

      return accumulator;
    }, []);
  };

  const itemsWithCount = getItemsWithCount(cartItems);

  return (
    <div className="shopping-cart-card">
      <h4>You have {cartItems?.length || 0} items in your cart!</h4>
      <hr className="simple-width-hr" />
      <div className="shopping-cart-items-container">
        <div>
          <h5>Items</h5>
          {itemsWithCount?.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div>
          <h5 className="item-data">Units</h5>
          {itemsWithCount?.map((item) => (
            <p key={item.id} className="item-data">
              {item.count}
            </p>
          ))}
        </div>
        <div>
          <h5 className="item-data">Price</h5>
          {itemsWithCount?.map((item) => (
            <p key={item.id} className="item-data">
              £{(item.count * item.price)?.toLocaleString()}
            </p>
          ))}
        </div>
      </div>
      <hr className="double-width-hr" />
      <div className="total-order-value-container">
        <h5>Total Order Value</h5>
        <h5>£{totalOrderValue?.toLocaleString() || 0}</h5>
      </div>
      <hr className="simple-width-hr" />
      <button onClick={handleClick} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;

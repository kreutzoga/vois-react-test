import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";

import "../../styles/CheckoutPage.css";

export const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <h4 className="title-text">
        Checkout page (empty page just for routing)
      </h4>
      <button onClick={handleClick} className="go-back-button">
        Go back to store
      </button>
    </>
  );
};

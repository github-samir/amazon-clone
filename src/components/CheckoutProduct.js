import React, { useContext } from "react";
import "./checkoutproduct.css";
import { Store } from "../Provider";

function CheckoutProduct({ id, title, rating, price, img }) {
  const [state, dispatch] = useContext(Store);

  const deleteItem = () => {
    dispatch({
      type: "DELETE_ITEM",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={img} alt={title} />
      <div className="checkout-product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product-rating">*****</p>
        <button className="product-add" onClick={deleteItem}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

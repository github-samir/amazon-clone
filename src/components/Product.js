import React, { useContext } from "react";
import "./Product.css";
import { Store } from "../Provider";

function Product({ id, title, price, img, rating }) {
  const [state, dispatch] = useContext(Store);

  const addItems = () => {
    dispatch({
      type: "ADD_TO_ITEMS",
      data: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product-rating">*****</p>
      </div>
      <img className="product-image" src={img} alt={title} />
      {/* <div className="add-div"> */}
      <button className="product-add" onClick={addItems}>
        Add to basket
      </button>
      {/* </div> */}
    </div>
  );
}

export default Product;

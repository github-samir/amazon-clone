import React, { useContext } from "react";
import "./Product.css";
import { Store } from "../Provider";

function Product({ id, title, img, rating }) {
  const [state, dispatch] = useContext(Store);

  const add_to_basket = ({ id, title, rating, img }) => {
    dispatch({
      type: "ADD_TO_ITEM",
      data: {
        id: id,
        title: title,
        rating: rating,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>200</strong>
        </p>
        <p className="product-rating">*****</p>
      </div>
      <img className="product-image" src={img} alt={title} />
      {/* <div className="add-div"> */}
      <button
        className="product-add"
        onClick={() => add_to_basket({ id, title, rating, img })}
      >
        Add to basket
      </button>
      {/* </div> */}
    </div>
  );
}

export default Product;

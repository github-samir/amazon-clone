import React, { useContext } from "react";
import { Store, sumPrice } from "../Provider";
import CheckoutProduct from "./CheckoutProduct";
import "./checkout.css";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [state, dispatch] = useContext(Store);

  return (
    <div className="checkout-container">
      <div className="left">
        {state.items?.length === 0 ? (
          <div className="left-empty">
            <h1>Your Shopping Basket is empty</h1>
            <p>Go to shopping List and add to basket</p>
          </div>
        ) : (
          <div>
            {state.items.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        )}
      </div>

      {state.items.length > 0 && (
        <div className="right">
          <p>
            Subtotal of {state.items.length} items:
            <br />
            <CurrencyFormat
              className="currency"
              value={sumPrice(state.items)}
              prefix={"$"}
              thousandSeparator={true}
              displayType={"text"}
            />
          </p>
          <button className="product-add">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

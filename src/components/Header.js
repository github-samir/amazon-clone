import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Store } from "../Provider";

const Header = () => {
  const [state, dispatch] = useContext(Store);
  return (
    <div className="header">
      <Link to="/" className="link">
        <img
          className="header-amazon"
          alt="amazon"
          src="https://exposureskate.org/wp-content/uploads/2015/01/Amazon.png"
        />
      </Link>
      <div className="header-search">
        <input className="search-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-option">
        <Link to="/login" className="link">
          <div className="option">
            <span className="option1">Hello, Samir</span>
            <span className="option2">SignIn</span>
          </div>
        </Link>
        <div className="option">
          <span className="option1">Orders</span>
          <span className="option2">& Returns</span>
        </div>
        <div className="option">
          <span className="option1">Your</span>
          <span className="option2">Prime</span>
        </div>
      </div>
      <Link to="/checkout" className="link">
        <div className="option-basket">
          <AddShoppingCartIcon />
          <span className="option2 item-count">{state.items.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;

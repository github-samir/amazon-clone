import React, { createContext, useReducer } from "react";

export const Store = createContext();

const InitialState = {
  items: [],
  totalqty: 0,
  totalPrice: 0,
};

export const sumPrice = (items) =>
  items.reduce((amount, item) => parseFloat(item.price) + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ITEMS":
      // const val = state.items.filter((item) => item.id !== action.data.id);
      // console.log(val);
      return {
        items: [...state.items, action.data],
        totalqty: state.totalqty + 1,
        totalPrice: state.totalPrice + action.data.price,
      };
    case "DELETE_ITEM":
      // const val = state.items.filter((item) => item.id !== action.data);
      // console.log(val);
      // return {
      //   items: val,
      // };
      const newItems = [...state.items];
      const index = state.items.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newItems.splice(index, 1);
        console.log(newItems, index);
      }
      return {
        ...state,
        items: newItems,
      };
    default:
      return alert("Error occured!");
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
};

export default StoreProvider;

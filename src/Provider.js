import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initilaState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ITEM":
      return {
        items: [...state.items, action.data],
      };
    case "DEL":
      return;
    default:
      return;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initilaState);
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
};

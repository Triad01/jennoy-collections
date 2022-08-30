import React, { useReducer } from "react";
import BagContext from "./Bag-context";

const bagStateReducer = (state, action) => {
  if (action.type === "ADD") {
    // updating the total price in the state
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    // checking for an existing item in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // confirming existing item already exist in cart
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    // updating existing item if it already exists
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      //trying to update the state===========
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      // if item doesnt exist in cart already
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // returning a new state snapshot based on the working of useReducer()
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    // getting the item to be removed(ofcuz already exist in cart)
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // confirming item to be removed
    const existingItem = state.items[existingCartItemIndex];

    // updating totalAmount
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      // updating the state
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultBagtState;
  }

  return defaultBagtState;
};

const defaultBagtState = {
  items: [],
  totalAmount: 0,
};

const BagContextProvider = (props) => {
  const [initialState, dispatchAction] = useReducer(
    bagStateReducer,
    defaultBagtState
  );

  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchAction({ type: "CLEAR" });
  };

  const bagContextValue = {
    items: initialState.items,
    totalAmount: initialState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };
  return (
    <BagContext.Provider value={bagContextValue}>
      {props.children}
    </BagContext.Provider>
  );
};

export default BagContextProvider;

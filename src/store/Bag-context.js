import React from "react";

const BagContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

export default BagContext;

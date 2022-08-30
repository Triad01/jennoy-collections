import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import allBagSlice from "./allbags-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    allBags: allBagSlice.reducer,
  },
});

export default store;

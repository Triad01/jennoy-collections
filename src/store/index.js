import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import featuredProductSlice from "./featured-products-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    featuredProducts: featuredProductSlice.reducer,
  },
});

export default store;

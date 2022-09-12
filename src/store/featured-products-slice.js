import { createSlice } from "@reduxjs/toolkit";

const initialState = { availableFeaturedProducts: [] };
const featuredProductSlice = createSlice({
  name: "featured-products",
  initialState,
  reducers: {
    loadAllFeaturedProducts(state, action) {
      state.availableFeaturedProducts.push({
        name: action.payload.name,
        id: action.payload.id,
        price: action.payload.price,
      });
    },
  },
});

export const featuredProductsAction = featuredProductSlice.actions;

export default featuredProductSlice;

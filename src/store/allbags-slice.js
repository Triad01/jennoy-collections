import { createSlice } from "@reduxjs/toolkit";

const initialState = { loadedBags: [] };
const allBagSlice = createSlice({
  name: "all-bags",
  initialState,
  reducers: {
    loadAllBags(state, action) {
      state.loadedBags = {
        name: action.payload.name,
        id: action.payload.id,
        price: action.payload.price,
        description: action.payload.description,
        image: action.payload.image,
      };
    },
  },
});

export const allBagsAction = allBagSlice.actions;

export default allBagSlice;

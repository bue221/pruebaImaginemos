import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ShoppingCartState {
  items: any;
  countItems: any;
}

const initialState: ShoppingCartState = {
  items: [],
  countItems: {},
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.countItems = {
        ...state.countItems,
        [action.payload.id]: (state.countItems[action.payload.id] || 0) + 1,
      };
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export const selectShoppingCart = (state: RootState) => state.shoppingCart;

export default shoppingCartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../Menu-Item";
import { RootState } from "./store";

interface IwishlistState {
  item: productsType[];
}

const wishlistState: IwishlistState = { item: [] };

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: wishlistState,
  reducers: {
    addWishlist: (state, action: PayloadAction<productsType>) => {
      state.item.push(action.payload);
    },
    removeWishlist: (state, action: PayloadAction<productsType>) => {
      state.item = state.item.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const selectWishlistCount = () => {
  return (state: RootState) => {
    return state.wishlist.item.length;
  };
};

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

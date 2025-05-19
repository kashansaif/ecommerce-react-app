import { createSlice } from "@reduxjs/toolkit";
const wishlistState = { item: [] };
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: wishlistState,
    reducers: {
        addWishlist: (state, action) => {
            state.item.push(action.payload);
        },
        removeWishlist: (state, action) => {
            state.item = state.item.filter((item) => item.id !== action.payload.id);
        },
    },
});
export const selectWishlistCount = () => {
    return (state) => {
        return state.wishlist.item.length;
    };
};
export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

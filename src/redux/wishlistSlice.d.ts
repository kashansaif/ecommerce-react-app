import { PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../Menu-Item";
import { RootState } from "./store";
interface IwishlistState {
    item: productsType[];
}
export declare const wishlistSlice: import("@reduxjs/toolkit").Slice<IwishlistState, {
    addWishlist: (state: import("immer").WritableDraft<IwishlistState>, action: PayloadAction<productsType>) => void;
    removeWishlist: (state: import("immer").WritableDraft<IwishlistState>, action: PayloadAction<productsType>) => void;
}, "wishlist", "wishlist", import("@reduxjs/toolkit").SliceSelectors<IwishlistState>>;
export declare const selectWishlistCount: () => (state: RootState) => number;
export declare const addWishlist: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType, "wishlist/addWishlist">, removeWishlist: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType, "wishlist/removeWishlist">;
declare const _default: import("redux").Reducer<IwishlistState>;
export default _default;

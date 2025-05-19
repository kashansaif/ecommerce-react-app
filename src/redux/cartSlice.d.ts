import { PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../Menu-Item";
import { RootState } from "./store";
type cartItem = productsType & {
    quantity: number;
};
interface cartState {
    items: cartItem[];
}
declare const cartState: cartState;
export declare const cartSlice: import("@reduxjs/toolkit").Slice<cartState, {
    addItem: (state: import("immer").WritableDraft<cartState>, action: PayloadAction<productsType>) => void;
    decrementQuantity: (state: import("immer").WritableDraft<cartState>, action: PayloadAction<productsType>) => void;
    remove: (state: import("immer").WritableDraft<cartState>, action: PayloadAction<productsType>) => void;
}, "cart", "cart", import("@reduxjs/toolkit").SliceSelectors<cartState>>;
export declare const selectItemQuantity: (product: productsType) => (state: RootState) => number;
export declare const selectCartCount: () => (state: RootState) => number;
export declare const selectSubtotal: () => (state: RootState) => number;
export declare const addItem: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType, "cart/addItem">, decrementQuantity: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType, "cart/decrementQuantity">, remove: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType, "cart/remove">;
declare const _default: import("redux").Reducer<cartState>;
export default _default;

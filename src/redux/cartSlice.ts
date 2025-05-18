import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../Menu-Item";
import { RootState } from "./store";

type cartItem = productsType & { quantity: number };

interface cartState {
  items: cartItem[];
}

const cartState: cartState = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addItem: (state, action: PayloadAction<productsType>) => {
      const matchingItem = state.items.find((item) => item.id == action.payload.id);
      if (!matchingItem) state.items.push({ ...action.payload, quantity: 1 });
      else matchingItem.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<productsType>) => {
      const matchingItem = state.items.find((item) => item.id == action.payload.id);
      matchingItem!.quantity--;
      if (matchingItem!.quantity == 0) state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    remove: (state, action: PayloadAction<productsType>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const selectItemQuantity = (product: productsType) => {
  return (state: RootState) => {
    const itemFound = state.cart.items.find((item) => item.id == product.id);
    // return itemFound?.quantity || 0
    return itemFound ? itemFound.quantity : 0;
  };
};

export const selectCartCount = () => {
  return (state: RootState) => {
    return state.cart.items.length;
  };
};

export const selectSubtotal = () => {
  return (state: RootState) => {
    let sumStore = 0;
    state.cart.items.forEach((item) => {
      sumStore += item.quantity * item.price;
    });
    return sumStore;
  };
};

export const { addItem, decrementQuantity, remove } = cartSlice.actions;
export default cartSlice.reducer;

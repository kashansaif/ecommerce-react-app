import { createSlice } from "@reduxjs/toolkit";
const cartState = { items: [] };
export const cartSlice = createSlice({
    name: "cart",
    initialState: cartState,
    reducers: {
        addItem: (state, action) => {
            const matchingItem = state.items.find((item) => item.id == action.payload.id);
            if (!matchingItem)
                state.items.push({ ...action.payload, quantity: 1 });
            else
                matchingItem.quantity++;
        },
        decrementQuantity: (state, action) => {
            const matchingItem = state.items.find((item) => item.id == action.payload.id);
            matchingItem.quantity--;
            if (matchingItem.quantity == 0)
                state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});
export const selectItemQuantity = (product) => {
    return (state) => {
        const itemFound = state.cart.items.find((item) => item.id == product.id);
        // return itemFound?.quantity || 0
        return itemFound ? itemFound.quantity : 0;
    };
};
export const selectCartCount = () => {
    return (state) => {
        return state.cart.items.length;
    };
};
export const selectSubtotal = () => {
    return (state) => {
        let sumStore = 0;
        state.cart.items.forEach((item) => {
            sumStore += item.quantity * item.price;
        });
        return sumStore;
    };
};
export const { addItem, decrementQuantity, remove } = cartSlice.actions;
export default cartSlice.reducer;

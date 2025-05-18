import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import wishlistReducer from "./wishlistSlice";
import productsReducer from "./productsSlice";
import drawerReducer from "./drawerSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// HOOKS..............
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

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
// HOOKS..............
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
export default store;

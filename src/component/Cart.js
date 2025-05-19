import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { addItem, decrementQuantity, selectCartCount, selectSubtotal } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Banner from "./Banner";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import Product from "./Product";
// import Product2 from "./Product2";
function Cart() {
    const cartItems = useAppSelector((state) => state.cart.items);
    const cartCount = useAppSelector(selectCartCount());
    const dispatch = useAppDispatch();
    const subTotal = useAppSelector(selectSubtotal());
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { bannerText: "Cart Items" }), cartCount == 0 ? (_jsx("h1", { className: "w-full text-center my-36", children: "No Item In The Cart" })) : (_jsxs("div", { children: [_jsx("div", { className: "flex justify-center", children: _jsxs("table", { children: [_jsx("thead", { className: "w-4/6 text-center", children: _jsxs("tr", { className: "border-b pb-5", children: [_jsx("th", { className: "py-3", children: "Product" }), _jsx("th", { className: "py-3", children: "Quantity" }), _jsx("th", { className: "py-3", children: "Price" }), _jsx("th", { className: "py-3", children: "Amount" })] }) }), _jsx("tbody", { className: "w-4/6 text-center text-gray-500", children: cartItems.map((item) => (_jsxs("tr", { className: "border-b", children: [_jsxs("div", { className: "flex", children: [_jsx("td", { className: " flex w-36 h-36 ms-10 me-3 py-2", children: _jsx("img", { src: item.image, alt: "", className: "h-full w-full shadow-md object-contain" }) }), _jsx("td", { className: "w-full text-start flex items-center", children: item.title })] }), _jsx("td", { className: "w-1/6", children: _jsxs("div", { className: "flex justify-between align-top border mt-1 w-7/12 mx-auto mb-[2px] h-12", children: [_jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border-e", onClick: () => {
                                                                dispatch(decrementQuantity(item));
                                                            }, children: _jsx(RemoveIcon, {}) }), _jsx("p", { className: "my-auto", children: item.quantity }), _jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border-s", onClick: () => {
                                                                dispatch(addItem(item));
                                                            }, children: _jsx(AddIcon, {}) })] }) }), _jsxs("td", { className: "w-1/12", children: ["$", item.price] }), _jsx("td", { className: "w-1/6", children: item.quantity * item.price })] }))) })] }) }), _jsx("div", { className: "flex justify-center mt-20 -mb-20", children: _jsxs("div", { className: "w-3/4 flex justify-between", children: [_jsx("h2", { children: "Subtotal" }), _jsx("h2", { className: "text-red-800", children: subTotal })] }) })] }))] }));
}
export default Cart;

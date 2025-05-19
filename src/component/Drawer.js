import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeDrawer } from "../redux/drawerSlice";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useNavigate } from "react-router";
import { remove, selectSubtotal } from "../redux/cartSlice";
export default function TemporaryDrawer() {
    // const [subtotal, setSubtotal] = useState(0);
    const subtotal = useAppSelector(selectSubtotal());
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const drawerStatus = useAppSelector((state) => state.drawer);
    const cartItems = useAppSelector((state) => state.cart.items);
    const handleClose = () => {
        dispatch(closeDrawer());
    };
    return (_jsx("div", { children: _jsx(Drawer, { open: drawerStatus, onClose: handleClose, anchor: "right", children: _jsxs(Box, { role: "presentation", className: "w-96", children: [_jsxs("div", { className: "flex justify-between px-3 pt-3 border-b sticky-lg-top bg-white", children: [_jsx("h5", { children: "Shopping Cart" }), _jsxs("button", { onClick: handleClose, className: "flex hover:text-gray-500", children: [_jsx(ClearIcon, {}), _jsx("p", { className: "font-bold", children: "Close" })] })] }), cartItems.length == 0 ? (_jsxs("div", { className: "flex flex-col items-center mt-20", children: [_jsx(RemoveShoppingCartOutlinedIcon, { sx: { fontSize: 100, color: "gray" } }), _jsx("p", { children: "No products In the cart" }), _jsx("button", { onClick: () => {
                                    navigate("/");
                                    handleClose();
                                }, className: "text-xs px-3 py-2 bg-red-50 text-red-700 hover:bg-red-100 transition-colors", children: "RETURN TO SHOP" })] })) : (_jsxs("div", { children: [cartItems.map((item) => (_jsxs("div", { onClick: () => {
                                    navigate(`/products/${item.title}`);
                                    handleClose();
                                }, className: "flex py-3 border-b items-center px-7 hover:bg-gray-100 cursor-pointer", children: [_jsx("div", { className: "w-20 h-20 me-4", children: _jsx("img", { className: "w-full h-full flex", src: item.image, alt: "" }) }), _jsxs("div", { className: "flex flex-col justify-between position-relative", children: [_jsx("p", { className: "w-60 text-gray-600 font-bold text-sm", children: item.title }), _jsx("button", { onClick: () => {
                                                    dispatch(remove(item));
                                                }, className: "position-absolute -right-4 -top-6 text-gray-400", children: _jsx(ClearIcon, { sx: { fontSize: 16 } }) }), _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "flex text-sm font-bold text-red-800", children: [_jsx("p", { className: "me-1 mb-0", children: "Price:" }), _jsx("p", { className: "mb-0", children: item.price })] }), _jsxs("div", { className: "flex text-sm font-bold text-red-800", children: [_jsx("p", { className: "me-1 mb-0", children: "Qty:" }), _jsx("p", { className: "mb-0", children: item.quantity })] })] })] })] }, item.id))), _jsxs("div", { className: "px-4 sticky-lg-bottom bottom-1 w-full bg-white py-4 border-t", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("h5", { className: "font-bold", children: "Subtotal:" }), _jsx("h5", { className: "text-red-900 font-bold", children: subtotal })] }), _jsx("button", { onClick: () => {
                                            navigate("/cart");
                                            handleClose();
                                        }, className: "text-sm font-bold bg-gray-50 hover:bg-gray-100 transition-colors w-full my-1 py-2", children: "VIEW CART" }), _jsx("button", { onClick: () => {
                                            navigate("/checkout");
                                            handleClose();
                                        }, className: "text-sm font-bold bg-[#BFA165] hover:bg-[#BFA155] text-white transition-colors w-full my-1 py-2", children: "CHECKOUT" })] })] }))] }) }) }));
}

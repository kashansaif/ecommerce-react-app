import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addItem, decrementQuantity, remove, selectItemQuantity } from "../redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Item = ({ item }) => {
    const quantity = useAppSelector(selectItemQuantity(item));
    const dispatch = useAppDispatch();
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-full", children: [_jsx("div", { className: "w-full h-1/3", children: _jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover rounded-lg mb-4" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm mb-2", children: item.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xl font-bold text-gray-900", children: ["$", item.price] }), _jsx("span", { className: "text-yellow-500", children: "★".repeat(Math.round(item.rating.rate)) })] }), _jsxs("p", { className: "text-sm text-gray-500 mt-2", children: [item.rating.count, " ratings"] }), quantity == 0 ? (_jsx("button", { onClick: () => {
                        dispatch(addItem(item));
                    }, className: "mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", children: "Add to Cart" })) : (_jsxs("div", { children: [_jsx("button", { onClick: () => {
                                dispatch(remove(item));
                            }, className: "mt-4 w-full py-2  bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors", children: "Remove from Cart" }), _jsxs("div", { className: "flex justify-between align-middle border bg-slate-200 mt-1", children: [_jsx("button", { className: "bg-orange-600 text-white", onClick: () => {
                                        dispatch(decrementQuantity(item));
                                    }, children: _jsx(RemoveIcon, {}) }), _jsx("p", { className: "my-auto", children: quantity }), _jsx("button", { className: "bg-orange-600 text-white", onClick: () => {
                                        dispatch(addItem(item));
                                    }, children: _jsx(AddIcon, {}) })] })] }))] }, item.id) }));
};
export default Item;

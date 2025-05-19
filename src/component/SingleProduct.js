import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from "react-router";
import { MenuItem } from "../Menu-Item";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addItem, decrementQuantity, remove, selectItemQuantity } from "../redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect } from "react";
function SingleProduct() {
    const { productname } = useParams();
    const matchingProduct = MenuItem.find((item) => item.title == productname);
    const quantity = useAppSelector(selectItemQuantity(matchingProduct));
    const dispatch = useAppDispatch();
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(500000, 0);
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex gap-10 my-24 mx-11 justify-between", children: [_jsx("div", { className: "w-1/2 hover:scale-110 transition-transform duration-1000 flex justify-center items-center", children: _jsx("img", { src: matchingProduct?.image, alt: "" }) }), _jsxs("div", { className: "flex flex-col items-center border w-1/2 text-center py-20 px-10 shadow-md", children: [_jsx("h1", { className: "font-semibold text-gray-800 cursor-pointer border-red-950", children: matchingProduct?.title }), _jsxs("h2", { className: "text-3xl font-bold text-red-700 my-4", children: ["$", matchingProduct?.price] }), _jsx("p", { className: "px-10 text-gray-400", children: matchingProduct?.description }), _jsxs("div", { className: "w-full my-10 flex items-center justify-between text-xl px-16", children: [_jsxs("div", { className: "text-lg text-gray-500", children: ["(", matchingProduct?.rating.count, " ratings)"] }), _jsxs("div", { className: "flex items-center", children: [Array(Math.floor(matchingProduct.rating.rate))
                                            .fill("★")
                                            .map((_, index) => (_jsx("span", { className: "text-yellow-400", children: "\u2605" }, `full-${index}`))), matchingProduct.rating.rate % 1 >= 0.5 && _jsx("span", { className: "text-yellow-400", children: "\u2605" }), Array(5 - Math.floor(matchingProduct.rating.rate) - (matchingProduct.rating.rate % 1 >= 0.5 ? 1 : 0))
                                            .fill("☆")
                                            .map((_, index) => (_jsx("span", { className: "text-gray-400", children: "\u2606" }, `empty-${index}`)))] })] }), quantity == 0 ? (_jsx("div", { className: "border flex justify-center align-top", children: _jsx("button", { onClick: () => {
                                    dispatch(addItem(matchingProduct));
                                }, className: "w-full py-2 px-3 bg-red-50 text-red-700 hover:bg-red-100 transition-colors", children: "Add to Cart" }) })) : (_jsx("div", { className: "flex justify-center w-1/2 h-12", children: _jsxs("div", { className: "w-5/6 gap-3 flex align-top", children: [_jsx("button", { onClick: () => {
                                            dispatch(remove(matchingProduct));
                                        }, className: "py-2 text-sm w-full border text-red-700 rounded-lg hover:bg-red-700 hover:text-white\r\n                  00 transition-colors", children: "Remove Cart" }), _jsxs("div", { className: "flex justify-between align-top border mt-1 w-3/4 mb-[2px]", children: [_jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border", onClick: () => {
                                                    dispatch(decrementQuantity(matchingProduct));
                                                }, children: _jsx(RemoveIcon, {}) }), _jsx("p", { className: "my-auto", children: quantity }), _jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border", onClick: () => {
                                                    dispatch(addItem(matchingProduct));
                                                }, children: _jsx(AddIcon, {}) })] })] }) }))] })] }) }));
}
export default SingleProduct;

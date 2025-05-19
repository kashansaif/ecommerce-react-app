import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addItem, decrementQuantity, remove, selectItemQuantity } from "../redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { addWishlist, removeWishlist } from "../redux/wishlistSlice";
import { useNavigate } from "react-router";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Product2 = ({ item, readonly = false }) => {
    const quantity = useAppSelector(selectItemQuantity(item));
    const wishlist = useAppSelector((state) => state.wishlist.item);
    const findWishlist = wishlist.find((findingItem) => findingItem.id == item.id);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "border box-s overflow-hidden position-relative pb-8", children: [_jsx("div", { className: "py-3 flex justify-center hover:scale-110 transition-transform duration-1000 px-4 cursor-pointer", onClick: () => {
                        navigate(`/products/${item.title}`);
                    }, children: _jsx("img", { src: item.image, alt: item.title, className: "max-w-xs h-48 object-contain w-full px-1" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { onClick: () => {
                                navigate(`/products/${item.title}`);
                            }, className: !readonly
                                ? "text-lg font-semibold text-gray-800 cursor-pointer hover:underline border-red-950"
                                : "text-sm font-semibold text-gray-800 cursor-pointer hover:underline border-red-950", children: item.title }), _jsxs("p", { className: "text-xl font-bold text-gray-900 mt-2", children: ["$", item.price] }), _jsxs("div", { className: "mt-2 flex items-center justify-between", children: [_jsxs("div", { className: "text-sm text-gray-500", children: ["(", item.rating.count, " ratings)"] }), _jsxs("div", { className: "flex items-center", children: [Array(Math.floor(item.rating.rate))
                                            .fill("★")
                                            .map((_, index) => (_jsx("span", { className: "text-yellow-400", children: "\u2605" }, `full-${index}`))), item.rating.rate % 1 >= 0.5 && _jsx("span", { className: "text-yellow-400", children: "\u2605" }), Array(5 - Math.floor(item.rating.rate) - (item.rating.rate % 1 >= 0.5 ? 1 : 0))
                                            .fill("☆")
                                            .map((_, index) => (_jsx("span", { className: "text-gray-400", children: "\u2606" }, `empty-${index}`)))] })] })] }), _jsx("div", { className: "h-11 position-absolute bottom-0 w-full -my-1", children: quantity == 0 ? (_jsx("div", { className: "flex justify-center align-top", children: _jsx("button", { onClick: () => {
                                dispatch(addItem(item));
                            }, className: "w-full py-2  border bg-red-50 text-red-700 hover:bg-red-100 transition-colors", children: "Add to Cart" }) })) : (_jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "w-5/6 flex gap-1 align-top", children: [!readonly && (_jsx("button", { onClick: () => {
                                        dispatch(remove(item));
                                    }, className: "py-2 text-sm w-full bg-red-700 text-white rounded-lg hover:bg-red-600\r\n                  00 transition-colors", children: "Remove Cart" })), _jsxs("div", { className: "flex justify-between align-top border mt-1 w-full mb-[2px]", children: [_jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border", onClick: () => {
                                                dispatch(decrementQuantity(item));
                                            }, children: _jsx(RemoveIcon, {}) }), _jsx("p", { className: "my-auto", children: quantity }), _jsx("button", { className: "hover:bg-red-700 hover:text-white text-red-700 border", onClick: () => {
                                                dispatch(addItem(item));
                                            }, children: _jsx(AddIcon, {}) })] })] }) })) }), !readonly ? (findWishlist ? (_jsx("button", { onClick: () => {
                        dispatch(removeWishlist(item));
                    }, className: "absolute top-1 right-1", children: _jsx(FavoriteOutlinedIcon, {}) })) : (_jsx("button", { onClick: () => {
                        dispatch(addWishlist(item));
                    }, className: "absolute top-1 right-1", children: _jsx(FavoriteBorderIcon, {}) }))) : (_jsx("button", { onClick: () => {
                        dispatch(remove(item));
                    }, className: "absolute top-1 right-1", children: _jsx(DeleteOutlineIcon, {}) }))] }) }));
};
export default Product2;

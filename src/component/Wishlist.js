import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from "../redux/store";
import { selectWishlistCount } from "../redux/wishlistSlice";
import Banner from "./Banner";
// import Product from "./Product";
import Product2 from "./Product2";
function Wishlist() {
    const wishlistItems = useAppSelector((state) => state.wishlist.item);
    const wishlistCount = useAppSelector(selectWishlistCount());
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { bannerText: "Wishlist Items" }), wishlistCount == 0 ? (_jsx("h1", { className: "w-full text-center my-36", children: "No Item In The Wishlist" })) : (_jsx("div", { className: "grid grid-cols-4 p-2 gap-3", children: wishlistItems.map((item) => (_jsx(Product2, { item: item }, item.id))) }))] }));
}
export default Wishlist;

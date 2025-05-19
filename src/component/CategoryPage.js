import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MenuItem } from "../Menu-Item";
import Product2 from "./Product2";
const CategoryPage = ({ category }) => {
    const items = MenuItem.filter((item) => item.category == category);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "grid grid-cols-4 p-2 gap-3", children: items.map((item) => (_jsx(Product2, { item: item }, item.id))) }) }));
};
export default CategoryPage;

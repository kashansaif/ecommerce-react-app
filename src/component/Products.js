import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Product from "./Product";
// import { useState } from "react";
// import { MenuItem, productsType } from "../Menu-Item";
// import SelectVariants from "./SelectVariants";
// import { addProducts } from "../redux/productsSlice";
// import { useLocation } from "react-router";
// import Banner from "./Banner";
import { useAppSelector } from "../redux/store";
import Product2 from "./Product2";
import TemporaryDrawer from "./Drawer";
// export interface Iproducts {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
const Products = () => {
    // const [products, setProducts] = useState<[]>([]);
    // const dispatch = useAppDispatch();
    // const getData = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const jsonData = await response.json();
    //   return jsonData;
    // };
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const data = await getData();
    //     setProducts(data);
    //   };
    //   fetchData();
    // }, []);
    // const priceMinState = useAppSelector((state) => state.filter.price.min);
    // const priceMaxState = useAppSelector((state) => state.filter.price.max);
    // const categoryState = useAppSelector((state) => state.filter.category);
    const finalProducts = useAppSelector((state) => state.products.items);
    return (_jsxs(_Fragment, { children: [_jsx(TemporaryDrawer, {}), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-3", children: finalProducts.map((item) => {
                    return _jsx(Product2, { item: item, readonly: false }, item.id);
                }) })] }));
};
export default Products;

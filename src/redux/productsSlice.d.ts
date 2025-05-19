import { productsType } from "../Menu-Item";
type FilterBothType = {
    minimumPrice: number;
    category: string;
};
interface Iproducts {
    items: productsType[];
}
export declare const addProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<productsType[], "products/addProducts">, filterCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "products/filterCategory">, filterPrice: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "products/filterPrice">, filterBoth: import("@reduxjs/toolkit").ActionCreatorWithPayload<FilterBothType, "products/filterBoth">;
declare const _default: import("redux").Reducer<Iproducts>;
export default _default;

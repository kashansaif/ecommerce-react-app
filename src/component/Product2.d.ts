import { FC } from "react";
import { productsType } from "../Menu-Item";
type ProductsProps = {
    item: productsType;
    readonly?: boolean;
};
declare const Product2: FC<ProductsProps>;
export default Product2;

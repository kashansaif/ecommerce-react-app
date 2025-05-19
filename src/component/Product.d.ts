import { FC } from "react";
import { productsType } from "../Menu-Item";
type ProductsProps = {
    item: productsType;
};
declare const Item: FC<ProductsProps>;
export default Item;

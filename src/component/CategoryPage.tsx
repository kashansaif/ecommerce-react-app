import { MenuItem } from "../Menu-Item";
import { FC } from "react";
import Product2 from "./Product2";
import SelectVariants from "./SelectVariants";

type CategoryProps = {
  category: string;
};

const CategoryPage: FC<CategoryProps> = ({ category }) => {
  const items = MenuItem.filter((item) => item.category == category);
  return (
    <>
      {/* <SelectVariants /> */}
      <div className="grid grid-cols-4 p-2 gap-3">
        {items.map((item) => (
          <Product2 item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;

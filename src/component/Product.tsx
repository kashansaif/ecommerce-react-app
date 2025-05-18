import { FC } from "react";
import { productsType } from "../Menu-Item";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addItem, decrementQuantity, remove, selectItemQuantity } from "../redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type ProductsProps = {
  item: productsType;
};

const Item: FC<ProductsProps> = ({ item }) => {
  const quantity = useAppSelector(selectItemQuantity(item));
  const dispatch = useAppDispatch();
  return (
    <>
      {/* <div className="w-1/6 h-64 border m-5">
        <img className="w-full h-full" src={item.image} alt="" />
      </div> */}
      <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-full">
        <div className="w-full h-1/3">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg mb-4" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${item.price}</span>
          <span className="text-yellow-500">{"★".repeat(Math.round(item.rating.rate))}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{item.rating.count} ratings</p>
        {quantity == 0 ? (
          <button
            onClick={() => {
              dispatch(addItem(item));
            }}
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                dispatch(remove(item));
              }}
              className="mt-4 w-full py-2  bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Remove from Cart
            </button>
            <div className="flex justify-between align-middle border bg-slate-200 mt-1">
              <button
                className="bg-orange-600 text-white"
                onClick={() => {
                  dispatch(decrementQuantity(item));
                }}
              >
                <RemoveIcon />
              </button>
              <p className="my-auto">{quantity}</p>
              <button
                className="bg-orange-600 text-white"
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                <AddIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;

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
  const quantity = useAppSelector(selectItemQuantity(matchingProduct!));
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(500000, 0);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <div className="flex gap-10 my-24 mx-11 justify-between">
        <div className="w-1/2 hover:scale-110 transition-transform duration-1000 flex justify-center items-center">
          <img src={matchingProduct?.image} alt="" />
        </div>

        <div className="flex flex-col items-center border w-1/2 text-center py-20 px-10 shadow-md">
          <h1 className="font-semibold text-gray-800 cursor-pointer border-red-950">{matchingProduct?.title}</h1>
          <h2 className="text-3xl font-bold text-red-700 my-4">${matchingProduct?.price}</h2>
          <p className="px-10 text-gray-400">{matchingProduct?.description}</p>

          {/* Ratings..... */}
          <div className="w-full my-10 flex items-center justify-between text-xl px-16">
            <div className="text-lg text-gray-500">({matchingProduct?.rating.count} ratings)</div>
            <div className="flex items-center">
              {Array(Math.floor(matchingProduct!.rating.rate))
                .fill("★")
                .map((_, index) => (
                  <span key={`full-${index}`} className="text-yellow-400">
                    ★
                  </span>
                ))}
              {matchingProduct!.rating.rate % 1 >= 0.5 && <span className="text-yellow-400">★</span>}
              {Array(5 - Math.floor(matchingProduct!.rating.rate) - (matchingProduct!.rating.rate % 1 >= 0.5 ? 1 : 0))
                .fill("☆")
                .map((_, index) => (
                  <span key={`empty-${index}`} className="text-gray-400">
                    ☆
                  </span>
                ))}
            </div>
          </div>
          {/* /////////////////////////////// */}
          {quantity == 0 ? (
            <div className="border flex justify-center align-top">
              <button
                onClick={() => {
                  dispatch(addItem(matchingProduct!));
                }}
                className="w-full py-2 px-3 bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="flex justify-center w-1/2 h-12">
              <div className="w-5/6 gap-3 flex align-top">
                <button
                  onClick={() => {
                    dispatch(remove(matchingProduct!));
                  }}
                  className="py-2 text-sm w-full border text-red-700 rounded-lg hover:bg-red-700 hover:text-white
                  00 transition-colors"
                >
                  Remove Cart
                </button>
                <div className="flex justify-between align-top border mt-1 w-3/4 mb-[2px]">
                  <button
                    className="hover:bg-red-700 hover:text-white text-red-700 border"
                    onClick={() => {
                      dispatch(decrementQuantity(matchingProduct!));
                    }}
                  >
                    <RemoveIcon />
                  </button>
                  <p className="my-auto">{quantity}</p>
                  <button
                    className="hover:bg-red-700 hover:text-white text-red-700 border"
                    onClick={() => {
                      dispatch(addItem(matchingProduct!));
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

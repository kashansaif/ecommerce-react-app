import { FC } from "react";
import { productsType } from "../Menu-Item";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addItem, decrementQuantity, remove, selectItemQuantity } from "../redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { addWishlist, removeWishlist } from "../redux/wishlistSlice";
import { useNavigate } from "react-router";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type ProductsProps = {
  item: productsType;
  readonly?: boolean;
};

const Product2: FC<ProductsProps> = ({ item, readonly = false }) => {
  const quantity = useAppSelector(selectItemQuantity(item));
  const wishlist = useAppSelector((state) => state.wishlist.item);
  const findWishlist = wishlist.find((findingItem) => findingItem.id == item.id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="border box-s overflow-hidden position-relative pb-8">
        <div
          className="py-3 flex justify-center hover:scale-110 transition-transform duration-1000 px-4 cursor-pointer"
          onClick={() => {
            navigate(`/products/${item.title}`);
          }}
        >
          <img src={item.image} alt={item.title} className="max-w-xs h-48 object-contain w-full px-1" />
        </div>
        <div className="p-4">
          <h3
            onClick={() => {
              navigate(`/products/${item.title}`);
            }}
            className={
              !readonly
                ? "text-lg font-semibold text-gray-800 cursor-pointer hover:underline border-red-950"
                : "text-sm font-semibold text-gray-800 cursor-pointer hover:underline border-red-950"
            }
          >
            {item.title}
          </h3>
          <p className="text-xl font-bold text-gray-900 mt-2">${item.price}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm text-gray-500">({item.rating.count} ratings)</div>
            <div className="flex items-center">
              {Array(Math.floor(item.rating.rate))
                .fill("★")
                .map((_, index) => (
                  <span key={`full-${index}`} className="text-yellow-400">
                    ★
                  </span>
                ))}
              {item.rating.rate % 1 >= 0.5 && <span className="text-yellow-400">★</span>}
              {Array(5 - Math.floor(item.rating.rate) - (item.rating.rate % 1 >= 0.5 ? 1 : 0))
                .fill("☆")
                .map((_, index) => (
                  <span key={`empty-${index}`} className="text-gray-400">
                    ☆
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="h-11 position-absolute bottom-0 w-full -my-1">
          {quantity == 0 ? (
            <div className="flex justify-center align-top">
              <button
                onClick={() => {
                  dispatch(addItem(item));
                }}
                className="w-full py-2  border bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-5/6 flex gap-1 align-top">
                {!readonly && (
                  <button
                    onClick={() => {
                      dispatch(remove(item));
                    }}
                    className="py-2 text-sm w-full bg-red-700 text-white rounded-lg hover:bg-red-600
                  00 transition-colors"
                  >
                    Remove Cart
                  </button>
                )}
                <div className="flex justify-between align-top border mt-1 w-full mb-[2px]">
                  <button
                    className="hover:bg-red-700 hover:text-white text-red-700 border"
                    onClick={() => {
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <RemoveIcon />
                  </button>
                  <p className="my-auto">{quantity}</p>
                  <button
                    className="hover:bg-red-700 hover:text-white text-red-700 border"
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {!readonly ? (
          findWishlist ? (
            <button
              onClick={() => {
                dispatch(removeWishlist(item));
              }}
              className="absolute top-1 right-1"
            >
              <FavoriteOutlinedIcon />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(addWishlist(item));
              }}
              className="absolute top-1 right-1"
            >
              <FavoriteBorderIcon />
            </button>
          )
        ) : (
          <button
            onClick={() => {
              dispatch(remove(item));
            }}
            className="absolute top-1 right-1"
          >
            <DeleteOutlineIcon />
          </button>
        )}
      </div>
    </>
  );
};

export default Product2;

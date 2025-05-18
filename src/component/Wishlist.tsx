import { useAppSelector } from "../redux/store";
import { selectWishlistCount } from "../redux/wishlistSlice";
import Banner from "./Banner";
// import Product from "./Product";
import Product2 from "./Product2";

function Wishlist() {
  const wishlistItems = useAppSelector((state) => state.wishlist.item);
  const wishlistCount = useAppSelector(selectWishlistCount());

  return (
    <>
      <Banner bannerText="Wishlist Items"/>
      {wishlistCount == 0 ? (
        <h1 className="w-full text-center my-36">No Item In The Wishlist</h1>
      ) : (
        <div className="grid grid-cols-4 p-2 gap-3">
          {wishlistItems.map((item) => (
            <Product2 item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Wishlist;

import { addItem, decrementQuantity, selectCartCount, selectSubtotal } from "../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Banner from "./Banner";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import Product from "./Product";
// import Product2 from "./Product2";

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = useAppSelector(selectCartCount());
  const dispatch = useAppDispatch();
  const subTotal = useAppSelector(selectSubtotal());

  return (
    <>
      <Banner bannerText="Cart Items" />

      {cartCount == 0 ? (
        <h1 className="w-full text-center my-36">No Item In The Cart</h1>
      ) : (
        <div>
          <div className="flex justify-center">
            <table>
              <thead className="w-4/6 text-center">
                <tr className="border-b pb-5">
                  <th className="py-3">Product</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="w-4/6 text-center text-gray-500">
                {cartItems.map((item) => (
                  <tr className="border-b">
                    <div className="flex">
                      <td className=" flex w-36 h-36 ms-10 me-3 py-2">
                        <img src={item.image} alt="" className="h-full w-full shadow-md object-contain" />
                      </td>
                      <td className="w-full text-start flex items-center">{item.title}</td>
                    </div>

                    <td className="w-1/6">
                      <div className="flex justify-between align-top border mt-1 w-7/12 mx-auto mb-[2px] h-12">
                        {/* <td className=" w-2/12">{item.quantity}</td> */}
                        <button
                          className="hover:bg-red-700 hover:text-white text-red-700 border-e"
                          onClick={() => {
                            dispatch(decrementQuantity(item));
                          }}
                        >
                          <RemoveIcon />
                        </button>
                        <p className="my-auto">{item.quantity}</p>
                        <button
                          className="hover:bg-red-700 hover:text-white text-red-700 border-s"
                          onClick={() => {
                            dispatch(addItem(item));
                          }}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </td>
                    <td className="w-1/12">${item.price}</td>

                    <td className="w-1/6">{item.quantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-20 -mb-20">
            <div className="w-3/4 flex justify-between">
              <h2>Subtotal</h2>
              <h2 className="text-red-800">{subTotal}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

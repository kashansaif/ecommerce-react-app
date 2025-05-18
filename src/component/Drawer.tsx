import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeDrawer } from "../redux/drawerSlice";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useNavigate } from "react-router";
import { remove, selectSubtotal } from "../redux/cartSlice";

export default function TemporaryDrawer() {
  // const [subtotal, setSubtotal] = useState(0);

  const subtotal = useAppSelector(selectSubtotal());

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const drawerStatus = useAppSelector((state) => state.drawer);
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={drawerStatus} onClose={handleClose} anchor="right">
        <Box role="presentation" className="w-96">
          <div className="flex justify-between px-3 pt-3 border-b sticky-lg-top bg-white">
            <h5>Shopping Cart</h5>
            <button onClick={handleClose} className="flex hover:text-gray-500">
              <ClearIcon />
              <p className="font-bold">Close</p>
            </button>
          </div>
          {cartItems.length == 0 ? (
            <div className="flex flex-col items-center mt-20">
              <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100, color: "gray" }} />
              <p>No products In the cart</p>
              <button
                onClick={() => {
                  navigate("/");
                  handleClose();
                }}
                className="text-xs px-3 py-2 bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
              >
                RETURN TO SHOP
              </button>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`/products/${item.title}`);
                    handleClose();
                  }}
                  className="flex py-3 border-b items-center px-7 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="w-20 h-20 me-4">
                    <img className="w-full h-full flex" src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between position-relative">
                    <p className="w-60 text-gray-600 font-bold text-sm">{item.title}</p>
                    <button
                      onClick={() => {
                        dispatch(remove(item));
                      }}
                      className="position-absolute -right-4 -top-6 text-gray-400"
                    >
                      <ClearIcon sx={{ fontSize: 16 }} />
                    </button>
                    <div className="flex justify-between">
                      <div className="flex text-sm font-bold text-red-800">
                        <p className="me-1 mb-0">Price:</p>
                        <p className="mb-0">{item.price}</p>
                      </div>
                      <div className="flex text-sm font-bold text-red-800">
                        <p className="me-1 mb-0">Qty:</p>
                        <p className="mb-0">{item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="px-4 sticky-lg-bottom bottom-1 w-full bg-white py-4 border-t">
                <div className="flex justify-between">
                  <h5 className="font-bold">Subtotal:</h5>
                  <h5 className="text-red-900 font-bold">{subtotal}</h5>
                </div>
                <button
                  onClick={() => {
                    navigate("/cart");
                    handleClose();
                  }}
                  className="text-sm font-bold bg-gray-50 hover:bg-gray-100 transition-colors w-full my-1 py-2"
                >
                  VIEW CART
                </button>
                <button
                  onClick={() => {
                    navigate("/checkout");
                    handleClose();
                  }}
                  className="text-sm font-bold bg-[#BFA165] hover:bg-[#BFA155] text-white transition-colors w-full my-1 py-2"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
}

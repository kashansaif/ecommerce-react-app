// import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Layout from "./Layout";
import Products from "../component/Products";
import Cart from "../component/Cart";
// import CategoryPage from "../component/CategoryPage";
import Wishlist from "../component/Wishlist";
import SingleProduct from "../component/SingleProduct";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import TemporaryDrawer from "../component/Drawer";
import LazySlider from "../component/LazySlider";
import Checkout from "../component/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/slider" element={<LazySlider />} />
      <Route path="/products/:productname" element={<SingleProduct />} />
      {/* <Route path="/men's clothing" element={<CategoryPage category="men's clothing" />} /> */}
      {/* <Route path="/women's clothing" element={<CategoryPage category="women's clothing" />} /> */}
      {/* <Route path="/electronics" element={<CategoryPage category="electronics" />} /> */}
      {/* <Route path="/jewelery" element={<CategoryPage category="jewelery" />} /> */}
      
      <Route path="/drawer" element={<TemporaryDrawer />} />
      <Route path="/checkout" element={<Checkout />} />

    </Route>
  )
);

export default router;

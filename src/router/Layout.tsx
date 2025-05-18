import { Outlet } from "react-router";
import MyNavbar from "../component/myNavbar";
import ContactNavbar from "../component/ContactNavbar";
import Footer from "../component/Footer";
import BasicBreadcrumbs from "../component/Breadcrumbs";
import SelectVariants from "../component/SelectVariants";
import { useLocation } from "react-router";
import TemporaryDrawer from "../component/Drawer";
import ArrowUpward from "../component/ArrowUpward";

function Layout() {
  const location = useLocation();
  const formatedPath = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <ContactNavbar />
      <MyNavbar />
      <BasicBreadcrumbs />
      <TemporaryDrawer />
      {formatedPath.length == 0 && <SelectVariants />}
      <ArrowUpward/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

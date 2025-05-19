import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(ContactNavbar, {}), _jsx(MyNavbar, {}), _jsx(BasicBreadcrumbs, {}), _jsx(TemporaryDrawer, {}), formatedPath.length == 0 && _jsx(SelectVariants, {}), _jsx(ArrowUpward, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
}
export default Layout;

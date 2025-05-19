import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, Link as RouterLink } from "react-router-dom";
function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    console.log(event.target);
}
function BasicBreadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    // console.log(pathnames);
    return (_jsx("div", { role: "presentation", onClick: handleClick, className: "my-2", children: _jsxs(Breadcrumbs, { "aria-label": "breadcrumb", sx: { padding: 2 }, children: [_jsx(Link, { component: RouterLink, to: "/", underline: "hover", className: "text-black", children: "Home" }), pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    return index === pathnames.length - 1 ? (_jsx(Typography, { color: "textSecondary", children: value }, to)) : (_jsx(Link, { component: RouterLink, to: to, underline: "hover", className: "text-black", children: value }, to));
                })] }) }));
}
export default BasicBreadcrumbs;

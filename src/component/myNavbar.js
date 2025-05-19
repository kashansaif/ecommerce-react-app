import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCartCount } from "../redux/cartSlice";
import { useNavigate } from "react-router";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { selectWishlistCount } from "../redux/wishlistSlice";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { openDrawer } from "../redux/drawerSlice";
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
export default function MyNavbar() {
    const cartCount = useAppSelector(selectCartCount());
    const wishlistCount = useAppSelector(selectWishlistCount());
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const renderMenu = (_jsxs(Menu, { anchorEl: anchorEl, anchorOrigin: {
            vertical: "top",
            horizontal: "right",
        }, id: menuId, keepMounted: true, transformOrigin: {
            vertical: "top",
            horizontal: "right",
        }, open: isMenuOpen, onClose: handleMenuClose, children: [_jsx(MenuItem, { onClick: handleMenuClose, children: "Profile" }), _jsx(MenuItem, { onClick: handleMenuClose, children: "My account" })] }));
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (_jsxs(Menu, { anchorEl: mobileMoreAnchorEl, anchorOrigin: {
            vertical: "top",
            horizontal: "right",
        }, id: mobileMenuId, keepMounted: true, transformOrigin: {
            vertical: "top",
            horizontal: "right",
        }, open: isMobileMenuOpen, onClose: handleMobileMenuClose, children: [_jsxs(MenuItem, { onClick: () => {
                    navigate("/");
                    handleMobileMenuClose();
                }, children: [_jsx(IconButton, { size: "large", "aria-label": "show 4 new mails", color: "inherit", children: _jsx(Badge, { color: "error", children: _jsx(HomeIcon, {}) }) }), _jsx("span", { children: "Home" })] }), _jsxs(MenuItem, { onClick: () => {
                    navigate("/wishlist");
                    handleMobileMenuClose();
                }, children: [_jsx(IconButton, { size: "large", "aria-label": "show 4 new mails", color: "inherit", children: _jsx(Badge, { badgeContent: wishlistCount, color: "error", children: _jsx(FavoriteBorderOutlinedIcon, {}) }) }), _jsx("span", { children: "Wishlist" })] }), _jsxs(MenuItem, { onClick: () => {
                    // navigate("/cart");
                    dispatch(openDrawer());
                    handleMobileMenuClose();
                }, children: [_jsx(IconButton, { size: "large", "aria-label": "show 17 new notifications", color: "inherit", children: _jsx(Badge, { badgeContent: cartCount, color: "error", children: _jsx(ShoppingBagOutlinedIcon, {}) }) }), _jsx("span", { children: "Cart Item" })] })] }));
    return (_jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsx(AppBar, { position: "static", sx: { color: "black", backgroundColor: "transparent" }, children: _jsxs(Toolbar, { children: [_jsxs(Search, { children: [_jsx(SearchIconWrapper, { children: _jsx(SearchIcon, {}) }), _jsx(StyledInputBase, { placeholder: "Search\u2026", inputProps: { "aria-label": "search" } })] }), _jsxs(Link, { to: "/", className: "absolute flex left-1/2 -translate-x-1/2 cursor-pointer hover:shadow-sm hover:border rounded-md no-underline text-black", children: [_jsx(AttachMoneyIcon, { fontSize: "large" }), _jsx("h1", { className: "-ms-2 me-1 my-auto text-2xl font-bold text-black uppercase tracking-widest hover:text-blue-400 transition duration-300", children: "plendidCart" })] }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsxs(Box, { sx: { display: { xs: "none", md: "flex" } }, children: [_jsx(IconButton, { onClick: () => {
                                        navigate("/wishlist");
                                    }, size: "large", "aria-label": "show 4 new mails", color: "inherit", children: _jsx(Badge, { badgeContent: wishlistCount, color: "error", children: _jsx(FavoriteBorderOutlinedIcon, {}) }) }), _jsx(IconButton, { onClick: () => {
                                        // navigate("/cart");
                                        dispatch(openDrawer());
                                    }, size: "large", "aria-label": "show 17 new notifications", color: "inherit", children: _jsx(Badge, { badgeContent: cartCount, color: "error", children: _jsx(ShoppingBagOutlinedIcon, {}) }) })] }), _jsx(Box, { sx: { display: { xs: "flex", md: "none" } }, children: _jsx(IconButton, { size: "large", "aria-label": "show more", "aria-controls": mobileMenuId, "aria-haspopup": "true", onClick: handleMobileMenuOpen, color: "inherit", children: _jsx(MoreIcon, {}) }) })] }) }), renderMobileMenu, renderMenu] }));
}

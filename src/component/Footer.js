import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Stack } from "@mui/material";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const Footer = () => {
    return (_jsxs(Box, { sx: {
            backgroundColor: "black",
            color: "white",
            padding: "50px 10px 20px 10px",
            fontFamily: "'Poppins', sans-serif",
        }, className: "w-full mt-36", children: [_jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 4, className: "max-w-6xl mx-auto", children: [_jsxs(Box, { flex: 1, children: [_jsx(Typography, { variant: "h6", sx: {
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }, children: "About Us" }), _jsx(Typography, { variant: "body2", className: "text-gray-200", sx: { lineHeight: 1.25, fontSize: "0.95rem" }, children: "At [Splendid Cart], we are dedicated to offering high-quality products that enhance the lives of our customers. With a customer-first approach, our mission is to provide a seamless shopping experience that brings value, trust, and satisfaction to everyone who shops with us. We carefully select each product to ensure it meets the highest standards of quality, durability, and functionality." })] }), _jsxs(Box, { flex: 1, className: "flex flex-col justify-center text-center items-center", children: [_jsxs(Typography, { variant: "h6", sx: {
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    marginBottom: "-8px",
                                }, children: [_jsx(AttachMoneyIcon, { fontSize: "large", className: "mb-2 -me-2" }), "PLENDED CART"] }), _jsx(StoreMallDirectoryIcon, { sx: { fontSize: 64 } })] }), _jsxs(Box, { flex: 1, children: [_jsx(Typography, { variant: "h6", sx: {
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }, children: "Company" }), _jsxs("ul", { className: "space-y-1 p-0 m-0", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "About Us" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "Careers" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "Press" }) })] })] }), _jsxs(Box, { flex: 1, children: [_jsx(Typography, { variant: "h6", sx: {
                                    fontWeight: 600,
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }, children: "Help" }), _jsxs("ul", { className: "space-y-1 p-0 m-0", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "Contact Us" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "Support" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-gray-400 hover:text-white", style: {
                                                fontSize: "0.95rem",
                                                fontWeight: 400,
                                                textDecoration: "none",
                                            }, children: "FAQ" }) })] })] })] }), _jsx(Box, { className: "text-center mt-6 text-gray-500", sx: { borderTop: "1px solid #333", paddingTop: "10px" }, children: _jsxs(Typography, { variant: "body2", sx: {
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        fontFamily: "'Poppins', sans-serif",
                    }, children: ["\u00A9 ", new Date().getFullYear(), " Your Company Name. All rights reserved."] }) })] }));
};
export default Footer;

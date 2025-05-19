import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ArrowUpward = () => {
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        }
        else {
            setShowButton(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (showButton && (_jsx(IconButton, { onClick: scrollToTop, style: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            opacity: showButton ? 1 : 0,
            transform: showButton ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
            backgroundColor: "white",
            zIndex: 1,
            width: 50,
            height: 50,
        }, children: _jsx(KeyboardArrowUpIcon, {}) })));
};
export default ArrowUpward;

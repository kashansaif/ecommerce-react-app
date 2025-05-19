import { jsx as _jsx } from "react/jsx-runtime";
const Banner = ({ bannerText }) => {
    return _jsx("h1", { className: "bg-gray-100 border h-32 flex items-center justify-center text-center shadow-sm mb-5", children: bannerText });
};
export default Banner;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function LazySlider() {
    const settings = {
        // dots: true,
        fade: true,
        lazyLoad: "ondemand",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true, // ✅ Enables automatic sliding
        autoplaySpeed: 3000, // ✅ Slide every 3 seconds
        pauseOnHover: false,
        arrows: false,
    };
    return (_jsx("div", { className: "w-1/4 text-center text-white text-sm mt-1", children: _jsxs(Slider, { ...settings, children: [_jsx("p", { className: "m-0", children: "PURE FABRICS 100%" }), _jsx("p", { className: "m-0" }), _jsx("p", { className: "m-0", children: "70% DISSCOUNT" }), _jsx("p", { className: "m-0" }), _jsx("p", { className: "m-0", children: "LATEST FASHION FOR WOMEN" }), _jsx("p", { className: "m-0" })] }) }));
}
export default LazySlider;

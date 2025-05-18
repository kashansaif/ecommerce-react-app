import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LazySlider() {
  const settings = {
    // dots: true,
    fade: true,
    lazyLoad: "ondemand" as "ondemand" | "progressive",
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
  return (
    <div className="w-1/4 text-center text-white text-sm mt-1">
      <Slider {...settings}>
        <p className="m-0">PURE FABRICS 100%</p>
        <p className="m-0"></p>
        <p className="m-0">70% DISSCOUNT</p>
        <p className="m-0"></p>
        <p className="m-0">LATEST FASHION FOR WOMEN</p>
        <p className="m-0"></p>
      </Slider>
    </div>
  );
}

export default LazySlider;

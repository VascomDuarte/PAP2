import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import logo from "../public/assets/logo1.png";
import test from "../public/assets/grunge-paint-background.jpg";

const SimpleSlider = ({ children }) => {
  const settings = {
    className: "center",
    dots: false,
    infinite: false,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let slider;

  const previousSlide = () => {
    slider.slickPrev();
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="mt-12 flex justify-center items-center">
          <div className="items-center justify-center flex">
            <Image
              src={logo}
              alt="Logo"
              width="90"
              height="90"
              className="cursor-pointer pt-2 pb-2"
            />
          </div>
        </div>
        <div className="items-center justify-center flex">
          <Image
            src={test}
            alt="Logo"
            width="90"
            height="90"
            className="cursor-pointer pt-2 pb-2"
          />
        </div>
      </Slider>
      <button onClick={previousSlide}>Anterior</button>
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
}

export default SimpleSlider;
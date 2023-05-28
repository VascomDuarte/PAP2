import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import logo from "../public/assets/logo1.png";
import test from "../public/assets/grunge-paint-background.jpg";

const SimpleSlider = ({ children }) => {
  
const sliderRef=useRef();

  const settings = {
    className: "center ",
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let slider;

  const previousSlide = () => {
    // slider.slickPrev();
    sliderRef.current.slickPrev();
  }

  const nextSlide = () => {
    // slider.slickNext();
    sliderRef.current.slickNext();
  };

  return (
    <div className=" h-[1920px] w-[1080px]">
      <Slider {...settings} ref={sliderRef}>
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
        <div className="mt-12 items-center justify-center flex">
          <Image
            src={test}
            alt="Logo"
            width="90"
            height="90"
            className="cursor-pointer pt-2 pb-2"
          />
        </div>
      </Slider>
      <div className=" space-x-8 mt-6 flex justify-center">
        <a className="cursor-pointer pl-4 font-bold text-black" onClick={previousSlide}>
          Anterior
        </a>
        <a className="cursor-pointer pl-4 font-bold text-black" onClick={nextSlide}>
          Próximo
        </a>
      </div>
    </div>
  );
}

export default SimpleSlider;
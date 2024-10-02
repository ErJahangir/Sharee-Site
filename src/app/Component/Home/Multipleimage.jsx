"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-black text-3xl" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-black text-3xl" />
    </div>
  );
};

const MultiImageSlider = ({ images, scroll, laptop, mobile, tab }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: laptop,
    slidesToScroll: scroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: laptop,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: tab,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: mobile,
        },
      },
    ],
  };

  return (
    <div className="relative w-full  ">
      <div>
        <Slider {...settings}>
          {images?.map((image, index) => (
            <div key={index} className="w-1/3 p-2">
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes={100}
                  quality={100}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultiImageSlider;

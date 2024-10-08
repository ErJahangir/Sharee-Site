"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setAnimate(true);
  }, []);

  const sliderData = [
    {
      img: "/saree/slider1.png",
      h1: "Limited Collection",
      h2: "40%",
      h3: "& Lovely",
      button: "Shop now",
    },
    {
      img: "/saree/slider2.png",
      h1: "Best Selling",
      h2: "30%",
      h3: "& Cute",
      button: "Shop now",
    },
    {
      img: "/saree/slider3.png",
      h1: "This Week Only",
      h2: "Big Sale",
      h3: "50% Off",
      button: "Shop now",
    },
  ];

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{
          ...style,
          display: "block",
          right: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{
          ...style,
          display: "block",
          left: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: () => setAnimate(false),
    afterChange: () => setAnimate(true),
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="relative mt-16 md:mt-0">
            <Image
              src={item.img}
              width={1000}
              height={1000}
              quality={100}
              loading={"lazy"}
              className="w-full h-[35vh]  md:h-[90vh] object-cover"
              alt={item.h1}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-3xl z-50 font-serif font-bold mb-2">
                {item.h1}
              </h1>

              <h2
                className={`text-[25px] md:text-[40px] font-bold font-sans text-white transition-transform duration-[1.2s] ease-out ${
                  animate ? "scale-125 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {item.h2}
              </h2>

              <h3
                className={`text-xl md:text-2xl mt-2 transition-transform duration-[1s] ease-out ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {item.h3}
              </h3>

              <Link
                href="/productscreen"
                className={`mt-6 hover:bg-[#c36f38] bg-black text-white px-5 py-2 rounded-full transition-all font-bold duration-500 ${
                  animate ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.button}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Footercarousel = () => {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const data = [
    { image: "/images/insta1.jpg" },
    { image: "/images/insta2.jpg" },
    { image: "/images/insta3.jpg" },
    { image: "/images/insta4.jpg" },
    { image: "/images/insta5.jpg" },
    { image: "/images/insta6.jpg" },
    { image: "/images/insta7.jpg" },
    { image: "/images/insta8.jpg" },
    { image: "/images/insta9.jpg" },
    { image: "/images/insta10.jpg" },
    { image: "/images/insta11.jpg" },
    { image: "/images/insta12.jpg" },
    { image: "/images/insta13.jpg" },
    { image: "/images/insta14.jpg" },
    { image: "/images/insta15.jpg" },
  ];
  return (
    <div className="mx-3">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              width={100}
              height={100}
              className="w-full h-[200px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Footercarousel;

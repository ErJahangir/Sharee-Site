"use client";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";

const BestSeller = () => {
  const data = [
    {
      title: "Maternity Shoulder",
      low: "79.00",
      high: "139.00",
      img: "/images/apro61-1-270x350.jpg",
    },
    {
      title: "Long Oversized",
      price: "60.00",
      img: "/images/apro101-1-270x350.jpg",
    },
    {
      title: "Women Bag",
      oldPrice: "109.00",
      newPrice: "89.00",
      img: "/images/apro71-1-270x350.jpg",
    },
    {
      title: "Swing Dress",
      low: "79.00",
      high: "139.00",
      img: "/images/apro91-1-270x350.jpg",
    },
    {
      title: "Abstract Sweatshirt",
      price: "129.00",
      img: "/images/apro1113-270x350.jpg",
    },
    {
      title: "Classical Shirt",
      oldPrice: "130.00",
      newPrice: "119.00",
      img: "/images/apro1113-270x350.jpg",
    },
    {
      title: "Mini Dress",
      price: "207.00",
      img: "/images/apro1113-270x350.jpg",
    },
    {
      title: "Utility Pockets",
      oldPrice: "89.00",
      newPrice: "79.00",
      img: "/images/apro1113-270x350.jpg",
    },
  ];

  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[92%] md:w-[85%] flex mx-auto flex-col my-10 ">
      <h2 className="mx-auto border border-black px-3 py-2 my-5 uppercase font-extralight relative overflow-hidden group rounded-md">
        <span className="relative z-10">Best Seller</span>
        <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
      </h2>

      <p className="w-[70%] mx-auto text-[#7a7878] md:w-[50%] md:text-[17px] text-[14px] text-center">
        Made with care for your little ones, our products are perfect for every
        occasion. Check it out.
      </p>
      <div className="">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="mx-auto group relative mb-5 shadow-sm rounded-lg"
            >
              <Image
                src={item.img}
                width={300}
                height={270}
                quality={100}
                className="w-full  h-[350px]  rounded-lg scale-100   md:h-[400px] p-1 lg:h-[450px]  mx-auto"
                alt={item.title}
              />

              <span className="bg-black text-white w-12 h-12 rounded-bl-full flex items-center justify-center  absolute top-[5px] right-[5px] opacity-0  group-hover:opacity-100 duration-1000 ">
                <Link href="/" className="text-xl">
                  <FaSearch />
                </Link>
              </span>

              <div className="absolute top-1/3 opacity-0 group-hover:opacity-100  duration-700 transition-all group-hover:top-1/2 left-1/3  bg-white p-2 rounded-full flex flex-row gap-2 items-center ">
                <span>
                  <Link href="/">
                    <FaRegHeart />
                  </Link>
                </span>
                <span>
                  <Link href="/">
                    <MdOutlineShoppingBag />
                  </Link>
                </span>
                <span>
                  <Link href="/">
                    <GoArrowSwitch />
                  </Link>
                </span>
              </div>
              <div>
                <div className="flex flex-row items-center justify-center my-2">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <h2 className="text-center text-[15px] md:[20px] font-semibold">
                  {item.title}
                </h2>
                <div className="flex flex-row gap-2 items-center justify-center text-[15px] font-normal">
                  {/* Display price conditions */}
                  {item.price && <p>${item.price}</p>}
                  {item.low && (
                    <p>
                      ${item.low} - ${item.high}
                    </p>
                  )}
                  {item.oldPrice && (
                    <div className="flex gap-2 items-center">
                      <p className="line-through text-gray-500">
                        ${item.oldPrice}
                      </p>
                      <p className="text-[#fa8f47]">${item.newPrice}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;

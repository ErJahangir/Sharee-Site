"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { NewArrivalData } from "../AllData";
const NewArrival = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[92%] md:w-[85%] flex mx-auto flex-col my-10 ">
      <div className="flex flex-row justify-between w-full items-end mb-5">
        <div>
          <h2 className=" border border-black px-3 py-2 my-5 uppercase  w-[150px] font-extralight relative overflow-hidden group rounded-md">
            <span className="relative z-10 font-bold">Top Trend</span>
            <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0 "></span>
          </h2>

          <p className=" text-[#7a7878] md:text-[17px] text-[14px] text-center">
            Browse our website for the hottest items in the marketplace now.
          </p>
        </div>
        <Link
          href="/productscreen"
          className=" w-[150px] h-[40px] flex items-center justify-center  border border-black px-3 py-2 uppercase  font-extralight relative overflow-hidden group rounded-md"
        >
          <span className="relative z-10 font-bold">View all</span>
          <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0 "></span>
        </Link>
      </div>
      <div className="">
        <Slider {...settings}>
          {NewArrivalData.slice(0, 10).map((item, index) => (
            <div key={index} className="relative group shadow-md rounded-md ">
              <Image
                src={item.img}
                width={1000}
                height={1000}
                className="w-[95%] h-[400px]  object-cover rounded-md mx-auto  "
              />

              <div className="absolute flex flex-row left-[25%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%]  duration-300 text-[20px] items-center gap-2">
                <span>
                  <Link
                    href="/"
                    className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
                  >
                    <FaRegHeart />
                  </Link>
                </span>
                <span>
                  <Link
                    href="/"
                    className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
                  >
                    <GoArrowSwitch />
                  </Link>
                </span>
                <span>
                  <Link
                    href="/"
                    className="bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
                  >
                    <IoMdSearch />
                  </Link>
                </span>
                <span>
                  <Link
                    href="/"
                    className="bg-[#fa8f47] w-10 h-10 text-white text-[25px]  rounded-full flex items-center justify-center"
                  >
                    <MdOutlineShoppingBag />
                  </Link>
                </span>
              </div>
              <div className="p-2 flex flex-col gap-1">
                <h2>{item.title}</h2>
                <div className="flex flex-row">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div>
                  {item.price && (
                    <h2 className="font-sans text-[#fa8f47]">{item.price}</h2>
                  )}
                  {item.oldPrice && item.newPrice && (
                    <h2 className="font-sans">
                      <span className="line-through text-[#868686]">
                        {item.oldPrice}
                      </span>{" "}
                      - <span className="text-[#fa8f47]">{item.newPrice}</span>
                    </h2>
                  )}
                  {item.low && item.high && (
                    <h2 className="font-sans text-[#fa8f47]">
                      <span>{item.low}</span> - <span>{item.high}</span>
                    </h2>
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

export default NewArrival;

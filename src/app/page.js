"use client";
import React from "react";
import Carousel from "./Component/Home/Carousel";

import Image from "next/image";
import NewArrival from "./Component/Home/NewArrival";

import Link from "next/link";
import Footercarousel from "./Component/Home/Footercarousel";
import BestSeller from "./Component/Home/BestSeller";

const page = () => {
  const data = [
    {
      img: "/images/banner31.jpg",
      title: "Deal Of Day",
      second: "50% sale off",
    },
    {
      img: "/images/banner32.jpg",
      title: "Best Product",
      second: "Hot Dresses",
    },
    {
      img: "/images/banner33.jpg",
      title: "New Arrivals",
      second: "SALE CLOTHES",
    },
  ];

  return (
    <div>
      <Carousel />
      <div className="w-[95%] md:w-[85%] my-10 mx-auto flex flex-col gap-3 md:flex-row">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.img}
              width={1000}
              height={1000}
              quality={100}
              loading={"lazy"}
              className="h-[35vh] sm:h-[40vh] md:h-[50vh]"
            />
            <div className="absolute top-1/4 right-4">
              <h2 className=" text-[17px] md:text-[20px] tracking-wider font-serif">
                {item.title}
              </h2>
              <h2 className="text-[13px] md:text-[15px] uppercase text-[#fa8f47] tracking-wider">
                {item.second}
              </h2>
              <Link
                href="/"
                className="bg-black w-[100px] h-[40px] font-bold text-[15px] flex items-center justify-center rounded-full my-2 text-white"
              >
                shop now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <NewArrival />
      <div className="relative">
        <Image
          src="/images/banner101.jpg"
          width={1000}
          height={1000}
          className="w-full h-[35vh] sm:h-[40vh] md:h-[70vh] object-cover"
          alt="Modern Glasses Banner"
        />
        <div className="absolute top-10 md:top-1/3 left-5 md:left-32 z-10">
          <div className="flex flex-row gap-4 items-center">
            <div className="h-16 border-l-2 border-[#fa8f47]"></div>
            <div className="flex flex-col text-[#fa8f47] gap-2">
              <h2 className="uppercase tracking-[5px] font-bold">
                Modern Glasses
              </h2>
              <p className="text-4xl md:text-5xl font-bold">Best Seller</p>
            </div>
          </div>
          <p className="mt-2 text-[15px] text-[#868886]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit justo
          </p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded-full hover:bg-[#e88d4d] transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <BestSeller />
      <Footercarousel />
    </div>
  );
};

export default page;

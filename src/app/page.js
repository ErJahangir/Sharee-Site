"use client";
import React from "react";
import Carousel from "./Component/Home/Carousel";

import Image from "next/image";
import NewArrival from "./Component/Home/NewArrival";

import Link from "next/link";
import Footercarousel from "./Component/Home/Footercarousel";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./Redux/Slice";

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

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

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
              className=""
            />
            <div className="absolute top-1/2 md:top-1/3 right-4">
              <h2 className="text-[20px] tracking-wider font-serif">
                {item.title}
              </h2>
              <h2 className="text-[15px] uppercase text-[#fa8f47] tracking-wider">
                {item.second}
              </h2>

              <Link
                href="/"
                className="bg-black w-[100px] h-[40px] flex items-center justify-center rounded-full my-2 text-white"
              >
                shop now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center gap-4 my-4">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <span className="text-lg">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div> */}

      <NewArrival />
      <Footercarousel />
    </div>
  );
};

export default page;

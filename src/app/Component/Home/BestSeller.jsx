"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaRupeeSign, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag, MdRemoveRedEye } from "react-icons/md";
import { NewArrivalData } from "../AllData";
import { IoLogoWhatsapp } from "react-icons/io";
import { QuickView } from "../Modal";

const BestSeller = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
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

  const handleQuick = async (item) => {
    console.log(item);
    try {
      await setData(item);
      console.log("====>", data);
    } catch (error) {
      alert("some error");
    }
    setShow(true);
  };

  return (
    <div className="w-[92%] md:w-[85%] flex mx-auto flex-col my-10 ">
      <h2 className="uppercase font-extralight my-5 underline underline-offset-4 text-[20px]">
        Best seller
      </h2>
      <div className="">
        <Slider {...settings}>
          {NewArrivalData.map((item, index) => (
            <div key={index} className="group relative p-2  ">
              <Image
                src={item.img}
                width={300}
                height={270}
                quality={100}
                className="w-full  h-[350px]  mx-auto"
                alt={item.title}
              />

              <div className="absolute flex flex-row left-[25%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-300 text-[20px] items-center gap-2">
                <button className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center">
                  <IoLogoWhatsapp />
                </button>

                <button
                  className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
                  onClick={() => handleQuick(item)}
                >
                  <MdRemoveRedEye />
                </button>

                <button className="bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center">
                  <MdOutlineShoppingBag />
                </button>
              </div>

              <div className="p-2 pl-5 flex flex-col gap-1 items-center">
                <h2 className="hover:text-[#fa8f47]">{item.title}</h2>
                <p className="text-[15px] text-[#868686]">{item.category}</p>

                {item.price && (
                  <h2 className="font-sans text-[#fa8f47] flex flex-row items-center">
                    <span>
                      <FaRupeeSign />
                    </span>
                    <span className="text-[22px] font-bold">{item.price}</span>
                  </h2>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <QuickView isOpen={show} onClose={() => setShow(false)} data={data} />
    </div>
  );
};

export default BestSeller;

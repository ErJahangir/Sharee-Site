"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart, FaRupeeSign } from "react-icons/fa";
import { MdOutlineShoppingBag, MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import { NewArrivalData } from "../AllData";
import { QuickView } from "../Modal";
import { IoLogoWhatsapp } from "react-icons/io";
import { addProduct } from "@/app/Redux/Slice";
import { useDispatch } from "react-redux";

const NewArrival = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleAddProduct = (item) => {
    dispatch(addProduct(item));
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
    <div className="w-[92%] md:w-[85%] flex mx-auto flex-col my-10">
      <div className="flex flex-row justify-between w-full items-end">
        <h2 className="uppercase font-extralight my-5 underline underline-offset-4 text-[20px]">
          New Arrival
        </h2>
        <Link
          href="/productscreen"
          className="uppercase font-extralight my-5 underline underline-offset-4 text-[20px] hover:text-[#117554] duration-700"
        >
          View all
        </Link>
      </div>
      <div>
        <Slider {...settings}>
          {NewArrivalData.slice(0, 10).map((item, index) => (
            <div key={index} className="relative group p-2  mx-auto">
              <Image
                src={item.img}
                width={1000}
                height={1000}
                className="w-full h-[200px] sm:h-[350px]  object-cover mx-auto"
                alt={item.title}
              />
              <div className="md:absolute flex flex-row  md:left-[25%]  md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-300 text-[20px] w-full items-center mt-5 gap-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=7557708578&text=Hi, I am interested in the following item: %0AName: ${item.title} %0ACategory: ${item.category} %0APrice: ₹${item.price}`}
                  className="bg-[#117554] w-8 h-8 md:w-10 md:h-10 md:text-[25px] text-white rounded-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a>

                <button
                  className="bg-[#117554] w-8 h-8 md:w-10 md:h-10 md:text-[25px] text-white rounded-full flex items-center justify-center"
                  onClick={() => handleQuick(item)}
                >
                  <MdRemoveRedEye />
                </button>

                <button
                  onClick={() => handleAddProduct(item)}
                  className="bg-[#117554] w-8 h-8 md:w-10 md:h-10 md:text-[25px] text-white  rounded-full flex items-center justify-center"
                >
                  <MdOutlineShoppingBag />
                </button>
              </div>
              <div className="p-2 md:pl-5 flex flex-col gap-1  md:items-center">
                <h2 className="hover:text-[#117554] text-[14px] md:text-[18px]">
                  {item.title}
                </h2>
                <p className="text-[15px] hidden md:flex text-[#868686]">
                  {item.category}
                </p>

                <h2 className="font-sans text-[#117554] md:text-[22px] flex flex-row items-center">
                  <span>
                    <FaRupeeSign />
                  </span>
                  <span className=" font-bold">{item.price}</span>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <QuickView isOpen={show} onClose={() => setShow(false)} data={data} />
    </div>
  );
};

export default NewArrival;

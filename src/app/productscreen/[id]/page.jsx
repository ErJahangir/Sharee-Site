"use client";
import { NewArrivalData } from "@/app/Component/AllData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaCaretDown,
  FaCaretUp,
  FaRupeeSign,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "@/app/Redux/Slice";

const ProductPage = ({ params }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAdd = () => {
    if (data) {
      const updatedProduct = {
        ...data,
        Quantity: quantity,
      };
      dispatch(addProduct(updatedProduct));
    }
  };

  useEffect(() => {
    const fetchProduct = () => {
      const product = NewArrivalData.find(
        (item) => item.id === parseInt(params.id)
      );
      setData(product || null);
      setLoading(false);
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="mt-20 mb-10 flex flex-col w-[95%] md:w-[85%] mx-auto">
      <nav className="flex flex-row items-center gap-2 mb-4">
        <Link href="/">Home</Link>
        <span className="text-[#868686]">
          <FaAngleRight />
        </span>
        <Link href="/productscreen">Shop</Link>
        <span className="text-[#868686]">
          <FaAngleRight />
        </span>
        <Link href="#" className="text-[#868686] cursor-not-allowed">
          {data.title}
        </Link>
      </nav>

      <section className="flex flex-col md:flex-row gap-5">
        <Image
          src={data.img}
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className="w-[350px] mx-auto h-[400px] md:w-[400px] md:h-[450px]"
          alt={data.title}
        />

        <div className="flex flex-col gap-4 mx-auto">
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold font-serif">{data.title}</h2>
            <h2 className="font-sans text-[#117554] md:text-[22px] flex flex-row items-center">
              <FaRupeeSign />
              <span className="font-bold">{data.price}</span>
            </h2>
            <p>
              <span>Availability:</span>
              <span className="text-[#117554] font-bold"> In stock</span>
            </p>
            <p className="text-[15px]">
              <span className="text-[#868686]">Category: </span>
              <span>{data.category}</span>
            </p>
            <p className="text-[#868686] text-[15px] max-w-[500px]">
              <span className="text-black">Description: </span>
              {data.description}
            </p>
            <ul className="list-disc marker:text-yellow-500 text-[14px] text-[#868686] ml-5">
              <li>Water-resistant fabric with soft lycra detailing inside</li>
              <li>Clean zip-front, and three piece hood</li>
              <li>Subtle branding and diagonal panel detail</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-20 items-center">
              <div className="flex flex-row items-center gap-3 border-2 w-[100px] justify-center h-[35px] rounded-full">
                <button onClick={handleDecrease} aria-label="Decrease quantity">
                  <FaCaretDown />
                </button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} aria-label="Increase quantity">
                  <FaCaretUp />
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-2 md:gap-20 items-center">
              <div
                onClick={handleAdd}
                className="flex flex-row items-center gap-3 border-2 w-[160px] md:w-[200px] justify-center h-[40px] bg-[#117554] md:bg-black hover:bg-[#117554] duration-700 text-white rounded-full cursor-pointer"
              >
                <MdShoppingBag />
                <span className="uppercase">Add to cart</span>
              </div>

              <button className="flex flex-row items-center gap-3 border-2 w-[160px] md:w-[200px] justify-center h-[40px] bg-[#117554] md:bg-black hover:bg-[#117554] duration-700 text-white rounded-full cursor-pointer">
                <IoLogoWhatsapp className="text-2xl" />
                <span>Purchase</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

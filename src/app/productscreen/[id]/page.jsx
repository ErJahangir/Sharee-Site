"use client";
import { NewArrivalData } from "@/app/Component/AllData";
import PageHeadingimg from "@/app/Component/PageHeadingimg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";

const ProductPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      const project = NewArrivalData.find(
        (item) => item.id === parseInt(params.id)
      );
      setData(project || null);
      setLoading(false);
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Product not found</div>; // Handle product not found
  }

  return (
    <div className="mt-20 mb-10 flex flex-col w-[95%] md:w-[85%] mx-auto">
      {/* <PageHeadingimg title={data.title} /> */}
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
            <h3 className="flex flex-row gap-2 font-bold text-[15px] text-[#fa8f47]">
              {data.low && <span>$ {data.low}</span>}
              {data.high && <span>- ${data.high}</span>}
              {data.oldPrice && (
                <span className="line-through text-[#868686]">
                  $ {data.oldPrice}
                </span>
              )}
              {data.newPrice && <span> $ {data.newPrice}</span>}
              {data.price && <span>$ {data.price}</span>}
            </h3>
            <p>
              <span>Availability:</span>
              <span className="text-[#fa8f47] font-bold"> In stock</span>
            </p>
            <p className="text-[15px]">
              <span className="text-[#868686]">Category: </span>
              <span>Bags, New arrivals, Summer sale</span>
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
                <span>
                  <FaCaretDown />
                </span>
                <span>1</span>
                <span>
                  <FaCaretUp />
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-20 items-center">
              <div className="flex flex-row items-center gap-3 border-2 w-[200px] justify-center h-[40px] bg-black text-white rounded-full cursor-pointer">
                <span>
                  <MdShoppingBag />
                </span>
                <span className="uppercase">Add to cart</span>
              </div>

              <button className="flex flex-row items-center gap-3 border-2 w-[130px] hover:text-[#fa8f47] duration-500 justify-center h-[40px] rounded-full">
                <span>
                  <IoLogoWhatsapp className="text-2xl text-green-800" />
                </span>
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

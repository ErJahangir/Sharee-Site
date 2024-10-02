import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Slice";

const ITEMS_PER_PAGE = 12;

const ProductGrid = ({ data, currentPage }) => {
  const dispatch = useDispatch();
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, endIndex);

  const handleAddProduct = (item) => {
    console.log(item);
    dispatch(addProduct(item)); // Dispatch action to add product
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[95%] md:w-[85%] mx-auto my-8">
      {paginatedData.map((item, index) => (
        <div key={index} className="relative group shadow-md rounded-md">
          <Link href={`/productscreen/${item.id}`}>
            <Image
              src={item.img}
              width={1000}
              height={1000}
              quality={80}
              loading={"lazy"}
              alt={item.title}
              className="w-[95%] h-[350px] object-cover rounded-md mx-auto"
            />
          </Link>
          <div className="flex flex-row  text-[20px] items-center gap-2">
            <Link
              href="/"
              className="absolute left-[20%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-700 bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
            >
              <FaRegHeart />
            </Link>

            <Link
              href="/"
              className="absolute left-[40%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-500 bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
            >
              <IoMdSearch />
            </Link>
            <button
              onClick={() => handleAddProduct(item)}
              className="absolute left-[60%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-300 bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
            >
              <MdOutlineShoppingBag />
            </button>
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
                <h2 className="font-sans text-[#fa8f47]">${item.price}</h2>
              )}
              {item.oldPrice && item.newPrice && (
                <h2 className="font-sans">
                  <span className="line-through text-[#868686]">
                    ${item.oldPrice}
                  </span>{" "}
                  - <span className="text-[#fa8f47]">${item.newPrice}</span>
                </h2>
              )}
              {item.low && item.high && (
                <h2 className="font-sans text-[#fa8f47]">
                  ${item.low} - ${item.high}
                </h2>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

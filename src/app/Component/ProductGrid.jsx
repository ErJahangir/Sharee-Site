"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFilter, FaRegHeart, FaSearch } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Slice";
import { RxCross2 } from "react-icons/rx";

const ITEMS_PER_PAGE = 12;

const ProductGrid = ({ data, currentPage }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, endIndex);

  const handleAddProduct = (item) => {
    dispatch(addProduct(item));
  };

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-[95%] md:w-[85%] mx-auto">
      <div className="flex flex-row gap-4 items-center justify-end">
        <div className="w-[50%] border h-[40px] rounded-full flex flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Enter product name"
            className="rounded-l-full h-full w-full pl-5"
          />
          <button className="w-[60px] h-full flex justify-center items-center bg-[#fa8f47] rounded-r-full text-2xl text-slate-200">
            <FaSearch />
          </button>
        </div>

        <div className="relative">
          <button
            className="text-[20px] flex flex-row gap-2 items-center border shadow-sm h-[40px] w-[100px] justify-center rounded-full"
            onClick={() => setShow(true)}
          >
            <FaFilter />
            <span className="text-[20px]">Filter</span>
          </button>

          <div
            className={`${
              show ? "absolute" : "hidden"
            } right-0 bg-white top-8 w-[350px] shadow-lg h-[500px] z-50 p-5`}
          >
            <button onClick={() => setShow(false)}>
              <RxCross2 />
            </button>
            <div>
              <h2>Filter by Price</h2>
            </div>
            <div>
              <h2>Filter By Category</h2>
              {options.map((option, index) => (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name="category"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className=""
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-8">
        {paginatedData.map((item, index) => (
          <div key={index} className="relative group ">
            <Link href={`/productscreen/${item.id}`}>
              <Image
                src={item.img}
                width={1000}
                height={1000}
                quality={80}
                loading={"lazy"}
                alt={item.title}
                className="w-full h-[350px] object-cover mx-auto"
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
            <div className="p-2 flex flex-col items-center gap-1">
              <Link
                href={`/productscreen/${item.id}`}
                className="hover:text-[#fa8f47]"
              >
                {item.title}
              </Link>
              <p className="text-[15px] text-[#868686]">{item.category}</p>
              <p>Rs.{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

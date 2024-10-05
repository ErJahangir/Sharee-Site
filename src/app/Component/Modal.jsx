"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../Redux/Slice";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign Up">
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-[#fa8f47] text-white p-2 rounded">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export const LogInModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Log In">
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" className="border p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-[#fa8f47] text-white p-2 rounded">
          Submit
        </button>
      </form>
    </Modal>
  );
};

// export const QuickView = ({ isOpen, onClose, data }) => {
//   console.log("=====>>>>>", data);
//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Quick View">
//       <div className="mt-20 mb-10 flex flex-col w-[95%] h-screen overflow-hidden md:w-[85%] mx-auto">
//         <section className="flex flex-col md:flex-row gap-5">
//           <Image
//             src={data?.img}
//             width={1000}
//             height={1000}
//             quality={100}
//             loading="lazy"
//             className="w-[350px] mx-auto h-[400px] md:w-[400px] md:h-[450px]"
//             alt={data?.title}
//           />

//           <div className="flex flex-col gap-4 mx-auto">
//             <div className="flex flex-col gap-3">
//               <h2 className="text-[20px] font-bold font-serif">
//                 {data?.title}
//               </h2>
//               <h3 className="flex flex-row gap-2 font-bold text-[15px] text-[#fa8f47]">
//                 {data?.price && <span>$ {data?.price}</span>}
//               </h3>
//               <p>
//                 <span>Availability:</span>
//                 <span className="text-[#fa8f47] font-bold"> In stock</span>
//               </p>
//               <p className="text-[15px]">
//                 <span className="text-[#868686]">Category: </span>
//                 <span>Bags, New arrivals, Summer sale</span>
//               </p>
//               <p className="text-[#868686] text-[15px] max-w-[500px]">
//                 <span className="text-black">Description: </span>
//                 {data?.description}
//               </p>
//             </div>
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-row gap-20 items-center">
//                 <div className="flex flex-row items-center gap-3 border-2 w-[100px] justify-center h-[35px] rounded-full">
//                   <span>
//                     <FaCaretDown />
//                   </span>
//                   <span>1</span>
//                   <span>
//                     <FaCaretUp />
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-20 items-center">
//                 <div className="flex flex-row items-center gap-3 border-2 w-[200px] justify-center h-[40px] bg-black text-white rounded-full cursor-pointer">
//                   <span>
//                     <MdShoppingBag />
//                   </span>
//                   <span className="uppercase">Add to cart</span>
//                 </div>

//                 <button className="flex flex-row items-center gap-3 border-2 w-[130px] hover:text-[#fa8f47] duration-500 justify-center h-[40px] rounded-full">
//                   <span>
//                     <IoLogoWhatsapp className="text-2xl text-green-800" />
//                   </span>
//                   <span>Purchase</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Modal>
//   );
// };

export const QuickView = ({ isOpen, onClose, data }) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Quick View"
      className="relative"
    >
      <div className=" flex flex-col w-[95%] h-[90vh] md:w-[85%] mx-auto">
        <button
          className="absolute top-5 right-16 text-3xl text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        <div className="flex flex-col h-full overflow-hidden">
          <section className="flex flex-col md:flex-row gap-5 overflow-y-auto flex-1 pb-10 pt-5">
            <Image
              src={data?.img}
              width={1000}
              height={1000}
              quality={100}
              loading="lazy"
              className="w-[280px] mx-auto h-[350px] md:w-[400px] md:h-[450px]"
              alt={data?.title}
            />

            <div className="flex flex-col gap-4 mx-auto">
              <div className="flex flex-col gap-3">
                <h2 className="text-[20px] font-bold font-serif">
                  {data?.title}
                </h2>
                <h3 className="flex flex-row gap-2 font-bold text-[15px] text-[#fa8f47]">
                  {data?.price && <span>Rs.{data?.price}</span>}
                </h3>
                <p>
                  <span>Availability:</span>
                  <span className="text-[#fa8f47] font-bold"> In stock</span>
                </p>
                <p className="text-[15px]">
                  <span className="text-[#868686]">Category: </span>
                  <span>{data?.category}</span>
                </p>
                <p className="text-[#868686] text-[15px] max-w-[500px]">
                  <span className="text-black">Description: </span>
                  {data?.description}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(data?.id)}
                    disabled={data?.Quantity === 1}
                    className={`bg-red-300 p-1 rounded-full hover:bg-red-400 ${
                      data?.Quantity === 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <FaCaretDown className="text-[15px]" />
                  </button>
                  <span className="w-6 h-6 flex items-center justify-center text-[15px] mx-2">
                    {data?.Quantity}
                  </span>
                  <button
                    onClick={() => handleIncreaseQuantity(data.id)}
                    className="bg-green-300 p-1 rounded-full hover:bg-green-400"
                  >
                    <FaCaretUp className="text-[15px]" />
                  </button>
                </div>

                <div className="flex flex-row md:gap-10 items-center">
                  <div className="flex flex-row items-center gap-1 md:gap-3 border-2 w-[150px] md:w-[200px] justify-center h-[40px] bg-[#fa8f47] text-white rounded-full cursor-pointer">
                    <span>
                      <MdShoppingBag />
                    </span>
                    <span className="uppercase">Add to cart</span>
                  </div>

                  <button className="flex flex-row items-center gap-1 md:gap-3 border-2 w-[150px] md:w-[200px] bg-[#fa8f47] text-white uppercase justify-center h-[40px] rounded-full">
                    <span>
                      <IoLogoWhatsapp className="text-2xl " />
                    </span>
                    <span>Purchase</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

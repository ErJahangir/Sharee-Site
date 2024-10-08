// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-[#e8e4e4] flex flex-col mx-auto text-center py-[35px] mt-5">
//       <h2 className="text-[14px] font-normal text-[#117554] uppercase">
//         Newsletter
//       </h2>
//       <h4 className="text-[24px] md:text-[32px] text-black font-extralight font-serif">
//         Get Discount 30% Off
//       </h4>
//       <p className="text-[#7a7878] w-[70%] text-center place-self-center">
//         Suspendisse netus proin eleifend fusce sollicitudin potenti vel magnis
//         nascetur
//       </p>
//       <div className="w-[70%] md:w-[50%] my-4 place-self-center  flex flex-row bg-white h-10  rounded-full">
//         <input
//           type="text"
//           placeholder="Enter your email"
//           className="outline-none h-full w-full pl-5 placeholder:text-[13px] rounded-l-full"
//         />

//         <button className="px-3 bg-black  text-white rounded-r-full relative overflow-hidden group">
//           <span className="relative z-10 pr-8">SUBSCRIBE</span>
//           <span className="absolute inset-0 bg-[#117554] transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className=" flex flex-col gap-3 w-[95%] md:w-[70%] mx-auto footer md:flex-row justify-between">
        <div className="menu md:w-[20%]">
          <h2>Customer</h2>
          <ul>
            <li>
              <Link href="/productscreen">Shipping</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>

            <li>
              <Link href="/">Shipping</Link>
            </li>

            <li>
              <Link href="/">Affiliates</Link>
            </li>
          </ul>
        </div>
        <div className="menu md:w-[20%]">
          <h2>Information</h2>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Customer Service</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" md:w-[30%]">
          <h2 className="text-[25px]">Contact us</h2>
          <p className="w-[70%] md:w-full text-[#868686] font-sans">
            124, Normal school road, Ganjipura,Jabalpur
          </p>
          <Link href="/" className="text-[#868686] text-[15px] font-serif">
            contact@yourcompany.com
          </Link>
          <div className="text-[#868686] text-[15px] font-serif flex flex-col">
            <Link
              href="tel:9584624589"
              className="flex flex-row items-center gap-2"
            >
              <FaPhone />
              <span>+91 9584624589</span>
            </Link>
            <Link
              href="tel:9039670833"
              className="flex flex-row items-center gap-2"
            >
              <FaPhone />
              <span>+91 9039670833</span>
            </Link>
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <Link
              href="https://www.facebook.com/profile.php?id=61564177245622&mibextid=ZbWKwL"
              className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-blue-900"
            >
              <span className="relative z-10 text-2xl">
                <FaFacebookF />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 -translate-y-full group-hover:translate-y-0"></span>
            </Link>
            <Link
              href="https://www.instagram.com/archnasaree?utm_source=qr&igsh=MWQ3NnRxN251MWNqOA=="
              className="  border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-pink-900"
            >
              <span className="relative z-10 text-2xl">
                <FaInstagram />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VakAAeP84OmKWFd2MR1u
"
              className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-green-700 hover:text-white transition-all duration-500"
            >
              <span className="relative z-10 text-2xl">
                <FaWhatsapp />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 translate-x-full group-hover:translate-x-0"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2 w-[95%] mx-auto my-5 "></div>
      <div className="flex flex-row gap-1 text-[#868686] mx-auto justify-center items-center pb-4">
        <span>© Copyright 2024.</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-[#e8e4e4] flex flex-col mx-auto text-center py-[35px] mt-5">
//       <h2 className="text-[14px] font-normal text-[#fa8f47] uppercase">
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
//           <span className="absolute inset-0 bg-[#fa8f47] transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className=" flex flex-col gap-3 w-[95%] md:w-[85%] mx-auto footer md:flex-row justify-between">
        <div className=" md:w-[30%]">
          <Image
            src="/images/footerlogo.png"
            width={1000}
            height={1000}
            quality={100}
            className="w-[150px]"
          />
          <p className="w-[70%] md:w-full text-[#868686] font-serif">
            45 Grand Central Terminal New York, NY 1017 United State USA
          </p>
          <Link href="/" className="text-[#868686] text-[15px] font-serif">
            contact@yourcompany.com
          </Link>
          <div className="text-[#868686] text-[15px] font-serif flex flex-row gap-2">
            <Link href="/">(+123) 456 789</Link>
            <Link href="/">(+204) 666 888</Link>
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <h2 className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-blue-900">
              <span className="relative z-10 text-2xl">
                <FaFacebookF />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-y-full group-hover:translate-y-0"></span>
            </h2>
            <h2 className="  border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-pink-900">
              <span className="relative z-10 text-2xl">
                <FaInstagram />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
            </h2>
            <h2 className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-blue-600">
              <span className="relative z-10 text-2xl">
                <FaLinkedinIn />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 translate-x-full group-hover:translate-x-0"></span>
            </h2>
          </div>
        </div>
        <div className="menu md:w-[20%]">
          <h2>Customer</h2>
          <ul>
            <li>
              <Link href="/">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="/">Secure Shopping</Link>
            </li>
            <li>
              <Link href="/">Order Status</Link>
            </li>
            <li>
              <Link href="/">Shipping</Link>
            </li>
            <li>
              <Link href="/">International Shipping</Link>
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
              <Link href="/">Orders and Returns</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Sitemap</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[30%] flex flex-col gap-2">
          <h2 className="text-[20px]">Newsletter</h2>
          <h2 className="text-[#868686] text-[15px] font-serif">
            Get Discount 30% Off
          </h2>
          <p className="w-[70%] md:w-full text-[#868686] font-serif">
            Nam sed felis at eros blandit ultrices et quis quam. In sit amet
            molestie lectus.
          </p>
          <div className="rounded-full flex flex-row justify-between items-center h-[40px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-3 w-full h-full rounded-l-full text-black outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-[#fa8f47] h-full w-[150px] font-bold flex cursor-pointer justify-between items-center rounded-r-full"
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 w-[95%] mx-auto my-5 "></div>
      <div className="flex flex-col md:flex-row items-center  py-6 font-serif justify-between text-[15px] w-[95%] md:w-[85%] mx-auto">
        <div className="flex flex-row gap-1 text-[#868686] ">
          <span>© Copyright 2020</span>
          <span>
            <Link href="/" className="text-white hover:text-[#fa8f47]">
              Akasha.
            </Link>
          </span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex flex-row gap-2 text-[#868686]">
          <h2>American</h2>
          <h2>paypal</h2>
          <h2>discover</h2>
          <h2>visa</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

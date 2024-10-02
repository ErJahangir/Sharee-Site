import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const PageHeadingimg = ({ title }) => {
  return (
    <div className="relative mb-16 mt-10 md:mt-0 ">
      <Image
        src="/images/banner-for-all2.jpg"
        width={1000}
        height={1000}
        quality={100}
        className="h-[50vh] object-cover w-full"
      />

      {/* <div className=" flex flex-row items-center w-[95%] mx-auto md:w-[85%] mt-6 gap-2 text-[20px]">
        <span>
          <Link href="/">Home</Link>
        </span>
        <span className="text-[#868686]">
          <FaAngleRight />
        </span>
        <span className="text-[#868686]">
          <Link href="/">{title}</Link>
        </span>
      </div> */}

      <div className="absolute top-1/2 left-1/4 md:left-1/4 flex flex-col items-center">
        <h2 className="text-[25px]">{title}</h2>
        <h2 className="border border-[#fa8f47] w-[50px]"></h2>
        <div className=" flex flex-row items-center gap-2 text-[20px]">
          <span>
            <Link href="/">Home</Link>
          </span>
          <span className="text-[#868686]">
            <FaAngleRight />
          </span>
          <span className="text-[#868686] cursor-not-allowed">
            <span>{title}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageHeadingimg;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const PageHeadingimg = ({ title }) => {
  return (
    <div className="relative mb-16 mt-10 md:mt-0 ">
      <Image
        src="/saree/pagestopimage1.jpg"
        width={1000}
        height={1000}
        quality={100}
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] object-cover w-full"
      />

      <div className="absolute top-1/2 left-1/4 md:left-1/4 flex flex-col items-center">
        <h2 className="text-[25px] ">{title}</h2>
        <h2 className="border border-[#117554] w-[50px]"></h2>
        <div className=" flex flex-row items-center gap-2 text-[20px] ">
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

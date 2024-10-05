import Link from "next/link";
import React from "react";
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[330px] md:w-[400px] h-[350px]  flex flex-col items-center justify-center shadow-[#fa8f47]">
        <span className="bg-[#ff8f47] p-2 text-[#00aa00] rounded-full text-6xl">
          <TiTick />
        </span>
        <h2>successfull</h2>
        <h2>Thank you for showing interest</h2>
        <p className="text-[#868686]">Your order will be placed soon . . .</p>
        <div className="flex w-[95%] mx-auto  justify-between my-5">
          <button className="w-[38%] flex mx-auto text-[13px] rounded-full hover:shadow-sm hover:border-2 border-[#fa8f47] hover:bg-transparent transition-all duration-700 hover:text-black h-[40px] md:h-[35px] justify-center items-center font-bold text-white uppercase bg-[#ff8f47]">
            view order
          </button>
          <Link
            href="/"
            className="w-[52%] flex mx-auto text-[13px] rounded-full hover:shadow-sm hover:border-2 border-[#fa8f47] hover:bg-transparent transition-all duration-700 hover:text-black h-[40px] md:h-[35px] justify-center items-center font-bold text-white uppercase bg-[#ff8f47]"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

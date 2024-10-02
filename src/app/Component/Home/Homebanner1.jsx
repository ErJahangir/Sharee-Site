import Image from "next/image";
import React from "react";

const Homebanner1 = () => {
  const banner1 = [
    {
      src: "/images/banner244.jpg",
      title: "Best",
      resion: "Seller",
      description: "Big Sale Week",
    },
    {
      src: "/images/banner252.jpg",
      title: "New",
      resion: "Season",
      description: "Available Now",
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:flex-row uppercase mx-auto w-[95%] md:w-[85%] my-16">
      <div className="relative w-full md:w-[49%]">
        <Image
          src={banner1[0].src}
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="absolute top-5 left-6 flex flex-col">
          <h2 className="text-[25px] italic tracking-[3px] ">
            {banner1[0].title}
          </h2>
          {/* Italic title */}
          <h2 className="font-extrabold font-serif text-[30px] text-[#fa8f47]">
            {banner1[0].resion}
          </h2>
          <h2 className="text-[#868686] tracking-[1.5px] text-[15px]">
            {banner1[0].description}
          </h2>
          <button className="bg-black my-6 text-white font-bold py-2 px-5 rounded-full duration-700 hover:bg-[#fa8f47]">
            Shop now
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-[49%]">
        <Image
          src={banner1[1].src}
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="absolute top-5 left-6">
          <h2 className="text-[25px] italic tracking-[3px] ">
            {banner1[1].title}
          </h2>
          <h2 className="font-extrabold font-serif text-[30px] text-[#fa8f47]">
            {banner1[1].resion}
          </h2>
          <h2 className="text-[#868686] tracking-[1.5px] text-[15px]">
            {banner1[1].description}
          </h2>
          <button className="bg-black my-6 font-bold text-white  py-2 px-5 rounded-full duration-700 hover:bg-[#fa8f47]">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homebanner1;

"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCommentAlt } from "react-icons/fa";

// Blog post data
const blogdata = [
  {
    title: "The Future of Web Development",
    src: "/images/blogpost1-370x330.jpg",
    createdBy: "admin",
    comments: "0",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia.",
    postedDate: { day: "19", year: "DEC" },
  },
  {
    title: "How to Improve UI/UX Design",
    src: "/images/blogpost5-370x330.jpg",
    createdBy: "admin",
    comments: "0",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia.",
    postedDate: { day: "19", year: "DEC" },
  },
  {
    title: "Exploring JavaScript Frameworks",
    src: "/images/blogpost9-370x330.jpg",
    createdBy: "admin",
    comments: "0",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia.",
    postedDate: { day: "19", year: "DEC" },
  },
  {
    title: "Understanding the Backend",
    src: "/images/blogpost4-370x330.jpg",
    createdBy: "admin",
    comments: "0",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia.",
    postedDate: { day: "19", year: "DEC" },
  },
];

const Blogs = () => {
  // Slider settings for responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[92%] md:w-[85%] mx-auto">
      <div className="flex flex-col my-10">
        {/* Section title */}
        <h2 className="mx-auto border border-black px-3 py-2 my-5 uppercase font-extralight relative overflow-hidden group rounded-md">
          <span className="relative z-10">From Our Blog</span>
          <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
        </h2>

        {/* Section description */}
        <p className="w-[70%] mx-auto text-[#7a7878] md:w-[50%] md:text-[17px] text-[14px] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit erat vehicula
          ad, mollis viverra vulputate.
        </p>
      </div>

      {/* Blog posts slider */}
      <Slider {...settings}>
        {blogdata.map((item, index) => (
          <div key={index} className="relative group shadow-md rounded-md">
            {/* Blog post image with lazy loading */}
            <Image
              src={item.src} // Fallback for missing images
              alt={`Image related to ${item.title}`}
              width={370}
              height={330}
              className="w-[95%] h-[300px] object-cover rounded-md mx-auto scale-100 hover:scale-105 duration-100 will-change-transform"
              // loading="lazy"
              // priority={index === 0} // Preload the first image
            />

            {/* Date badge */}
            <div className="absolute top-5 left-5 p-2 flex flex-col items-center gap-1 w-[70px] bg-[#117554] rounded-full">
              <span>{item.postedDate.day}</span>
              <span className="w-8 border border-black"></span>
              <span>{item.postedDate.year}</span>
            </div>

            {/* Blog content */}
            <div className="p-2">
              {/* Author and comments */}
              <h2 className="text-[#868686] flex flex-row items-center justify-between mr-2">
                <span>
                  By:{" "}
                  <span className="text-black hover:text-[#117554] capitalize duration-200">
                    {item.createdBy}
                  </span>
                </span>
                <span className="flex flex-row items-center gap-2">
                  <FaRegCommentAlt aria-hidden="true" />
                  {item.comments}
                </span>
              </h2>

              {/* Blog title linked to full post */}
              <a
                href={`/blog/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                aria-label={`Read more about ${item.title}`}
              >
                <h2 className="text-[15px] md:text-[20px] hover:text-[#117554] duration-200">
                  {item.title}
                </h2>
              </a>

              {/* Divider line */}
              <h2 className="w-[50px] md:w-[70px] border border-[#117554] mt-2 mb-3"></h2>

              {/* Blog summary */}
              <p className="text-gray-500 text-[12px] md:text-[15px] mb-3">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;

"use client";
import React from "react";
import PageHeadingimg from "../Component/PageHeadingimg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  const data = [
    {
      img: "/images/team-img1.jpg",
      name: "Annie Taylor",
      position: "Operations",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
    {
      img: "/images/team-img2.jpg",
      name: "Ayomide Regan",
      position: "Marketing Personal",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
    {
      img: "/images/team-img3.jpg",
      name: "Violet Frase",
      position: "Director",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
    {
      img: "/images/team-img4.jpg",
      name: "Frank Greer",
      position: "Operations",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
    {
      img: "/images/team5-1.jpg",
      name: "Mark Tucker",
      position: "Partner",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
    {
      img: "/images/team6.jpg",
      name: "Perry Conner",
      position: "Partner",
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  ];

  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          zIndex: 1,
          marginRight: "20px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          zIndex: 1,
          marginLeft: "20px",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <PageHeadingimg title={"About us"} />
      <div className=" w-[95%] md:w-[85%] flex mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-6">
            <h2 className="h-10 border-l-[3px] border-[#fa8f47]"></h2>
            <h2 className="text-[20px] font-serif">Who we are</h2>
          </div>
          <p className="text-[15px] text-[#868686] font-serif indent-8 text-justify">
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss.
          </p>
          <p className="text-[15px] text-[#868686] font-serif indent-8 text-justify">
            Our audience (AKA you) is wonderfully unique. And we do everything
            we can to help you find your fit, offering our Ciloe Brands in more
            than 30 sizes – and we’re committed to providing all sizes at the
            same price.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full my-10">
        <h2 className="mx-auto border border-black uppercase font-extralight relative overflow-hidden group rounded-md w-[200px] flex justify-center items-center h-[50px] my-5">
          <span className="relative z-10 font-bold">Meet Our Team</span>
          <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
        </h2>
        <p className="w-[390px] text-[#868686] mx-auto text-center text-[15px] font-serif">
          A perfect blend of creativity and technical wizardry. The best people
          formula for great websites!
        </p>
      </div>
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col text-center font-serif">
              <Image
                src={item.img}
                width={1000}
                height={1000}
                className="w-full p-1 relative"
              />
              {/* social media */}
              <div className=" flex flex-row  justify-between w-[50%] mx-auto my-5">
                <Link href={item.facebook}>
                  <FaFacebookF />
                </Link>
                <Link href={item.insta}>
                  <FaXTwitter />
                </Link>
                <Link href={item.twitter}>
                  <FaInstagram />
                </Link>
              </div>
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="w-10 border-2 border-[#fa8f47] mx-auto"></p>
              </div>
              <h2 className="text-[#868686] text-[15px]">{item.position}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default page;

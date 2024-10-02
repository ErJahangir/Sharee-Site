"use client";
import React, { useState } from "react";
import MultiImageSlider from "./Multipleimage";

const Room = () => {
  const data = [
    { src: "/images/cat1.jpg", caption: "caption" },
    { src: "/images/cat1.jpg", caption: "caption" },
    { src: "/images/cat1.jpg", caption: "caption" },
    { src: "/images/cat1.jpg", caption: "caption" },
    { src: "/images/cat1.jpg", caption: "caption" },
  ];
  return (
    <div>
      <h2 className="my-4 font-bold">Hello, this is the room section</h2>

      <MultiImageSlider
        laptop={3}
        mobile={1}
        tab={2}
        scroll={1}
        images={data}
      />
    </div>
  );
};

const FoodBeverage = () => {
  const data = [
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
  ];
  return (
    <div>
      <h2 className="font-bold my-4">
        Hi, this is the food and beverage section
      </h2>
      <MultiImageSlider
        laptop={3}
        mobile={1}
        tab={2}
        scroll={1}
        images={data}
      />
    </div>
  );
};

const Facility = () => {
  const data = [
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
  ];
  return (
    <div>
      <h2 className="font-bold my-4">Welcome to the facilities section</h2>
      <MultiImageSlider
        laptop={3}
        mobile={1}
        tab={2}
        scroll={1}
        images={data}
      />
    </div>
  );
};

const SpaFacility = () => {
  const data = [
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
  ];
  return (
    <div>
      <h2>Relax at our spa facilities</h2>
      <MultiImageSlider
        laptop={3}
        mobile={1}
        tab={2}
        scroll={1}
        images={data}
      />
    </div>
  );
};

const FitnessCenter = () => {
  const data = [
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
    { src: "/images/cat2.jpg", caption: "caption" },
  ];
  return (
    <div>
      <h2>Stay fit at our fitness center</h2>
      <MultiImageSlider
        laptop={3}
        mobile={1}
        tab={2}
        scroll={1}
        images={data}
      />
    </div>
  );
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Rooms");

  const renderCategory = () => {
    switch (selectedCategory) {
      case "Banarasi Silk Saree":
        return <Room />;
      case "Silk Saree":
        return <FoodBeverage />;
      case "Georgette Saree":
        return <Facility />;
      case "Chiffon Saree":
        return <SpaFacility />;
      case "Leheriya Saree":
        return <FitnessCenter />;
      default:
        return <Room />;
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="mx-auto  border w-[100px] border-black px-3 py-2 my-5 uppercase  font-extralight relative overflow-hidden group rounded-md">
        <span className="relative z-10  ">Category</span>
        <span className="absolute inset-0 ease-out transform bg-[#fa8f47] transition-all duration-700 -translate-x-full group-hover:translate-x-0 "></span>
      </h2>

      <ul className="flex flex-row gap-5 text-center w-full cursor-pointer overflow-hidden border-b-2 border-slate-400">
        <li
          className={`${
            selectedCategory === "Banarasi Silk Saree"
              ? "bg-blue-700 rounded-t-md text-white"
              : ""
          } p-1  mx-auto font-bold hover:bg-[#126e] hover:text-white rounded-t-md`}
          onClick={() => setSelectedCategory("Banarasi Silk Saree")}
        >
          Banarasi Silk Saree
        </li>
        <li
          className={`${
            selectedCategory === "Silk Saree"
              ? "bg-blue-700 rounded-t-md text-white"
              : ""
          } p-1 mx-auto font-bold hover:bg-[#126e] hover:text-white rounded-t-md`}
          onClick={() => setSelectedCategory("Silk Saree")}
        >
          Silk Saree
        </li>
        <li
          className={`${
            selectedCategory === "Georgette Saree"
              ? "bg-blue-700 rounded-t-md text-white"
              : ""
          } p-1 mx-auto font-bold hover:bg-[#126e] hover:text-white rounded-t-md`}
          onClick={() => setSelectedCategory("Georgette Saree")}
        >
          Georgette Saree
        </li>
        <li
          className={`${
            selectedCategory === "Chiffon Saree"
              ? "bg-blue-700 rounded-t-md text-white"
              : ""
          } p-1 mx-auto font-bold hover:bg-[#126e] hover:text-white rounded-t-md`}
          onClick={() => setSelectedCategory("Chiffon Saree")}
        >
          Chiffon Saree
        </li>
        <li
          className={`${
            selectedCategory === "Leheriya Saree"
              ? "bg-blue-700 text-white"
              : ""
          } p-1  font-bold hover:bg-[#126e] hover:text-white rounded-t-md`}
          onClick={() => setSelectedCategory("Fitness Leheriya Saree")}
        >
          Leheriya Saree
        </li>
      </ul>

      <div className="mt-10">{renderCategory()}</div>
    </div>
  );
};

export default Category;

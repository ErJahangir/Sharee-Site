import React from "react";
import PageHeadingimg from "../Component/PageHeadingimg";

const page = () => {
  return (
    <div>
      <PageHeadingimg title={"Contact"} />
      <div className="w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row">
        <div>
          <h2 className="text-[20px] uppercase font-bold "> Our Address</h2>
          <p className="text-[#868686] text-[15px]">
            3100 West Cary Street Richmond, Virginia 23221 P: 804.355.4383 F:
            804.367.7901
          </p>
          <h2 className="text-[20px] uppercase font-bold "> service hours</h2>
          <p className="text-[#868686] text-[15px]">
            Monday-Saturday 11am-7pm ET Sunday 11am-6pm ET
          </p>
          <h2 className="text-[20px] uppercase font-bold "> spacial Hours</h2>
          <p className="text-[#868686] text-[15px]">
            monday - friday 9 AM - 5 PM ET
          </p>
        </div>
        <div>
          <form className="contactForm">
            <div>
              <label htmlFor="name">
                Name:- <span className="text-red-700">*</span>
              </label>
              <input type="text" placeholder="enter your name" />
            </div>
            <div>
              <label htmlFor="name">
                Email:- <span className="text-red-700">*</span>
              </label>
              <input type="text" placeholder="enter your name" />
            </div>
            <div>
              <label htmlFor="name">
                Phone No.:- <span className="text-red-700">*</span>
              </label>
              <input type="text" placeholder="enter your name" />
            </div>
            <div>
              <label htmlFor="name">
                Your Message:- <span className="text-red-700">*</span>
              </label>
              <input type="text" placeholder="enter your name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

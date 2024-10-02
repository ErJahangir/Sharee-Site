import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageHeadingimg from "../Component/PageHeadingimg";

const data = [
  {
    image: "/images/blogpost1.jpg",
    title: "Not your ordinary baby service.",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost5.jpg",
    title: "The child is sleeping on the bed",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost5.jpg",
    title: "The light is hugging the dog on the room",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost4.jpg",
    title: "The child is swimming with a buoy",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost2.jpg",
    title: "Baby hiding beside beige wall",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost6.jpg",
    title: "Bags sitting on cliff near body of water",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
  {
    image: "/images/blogpost7.jpg",
    title: "Bags sitting on cliff near body of water",
    createBy: "admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales quisque litora dapibus primis lacinia condimentum non mauris, rutrum duis vitae fringilla vulputate nulla neque. Per convallis pulvinar sem faucibus blandit commodo nec vulputate, class fames accumsan duis eleifend quisque phasellus. Arcu dictum odio elementum torquent tincidunt aptent nec convallis...",
    createdDate: "December 19, 2018",
  },
];

const page = () => {
  return (
    <div>
      <PageHeadingimg title={"Blogs"} />
      <div className="flex flex-col gap-10 w-[95%] md:w-[80%] mx-auto ">
        {data.map((item, index) => (
          <Link
            href="/"
            key={index}
            className="shadow-sm rounded-md hover:shadow-xl duration-500"
          >
            <Image
              src={item.image}
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-auto rounded-md"
            />
            <div className="flex flex-col p-2 py-5 gap-3">
              <span className="hover:text-[#fa8f47] duration-500 text-[25px]">
                {item.title}
              </span>
              <div className="flex flex-row items-center gap-3 mb-4">
                <h2 className="hover:text-[#fa8f47] duration-500 text-[#868686]">
                  {item.createdDate}
                </h2>
                <span className="text-[#868686]">/</span>
                <h2 className="flex flex-row items-center gap-1">
                  <span className="text-[#868686]">By:</span>
                  <span className="hover:text-[#fa8f47] duration-500 capitalize">
                    {item.createBy}
                  </span>
                </h2>
              </div>
              <p className="text-[#868686] text-[15px] ">{item.description}</p>
              <Link href="/" className="my-4">
                <span className="bg-black rounded-full hover:bg-[#fa8f47] duration-300 mb-2 text-white p-2 px-5">
                  Read More
                </span>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

import React from "react";
import PageHeadingimg from "../Component/PageHeadingimg";

const Page = () => {
  return (
    <div>
      <PageHeadingimg title={"About"} />
      <section className="w-[95%] mx-auto md:w-[85%] mb-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[25px] font-bold text-[#117554] mb-2">
            About Us
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Welcome to <span className="font-semibold">Archana Saree</span>,
            where tradition meets style. We are proud to offer a carefully
            curated selection of sarees, each crafted with passion and attention
            to detail. Our journey began with a simple goal: to celebrate the
            beauty, elegance, and diversity of India’s most iconic garment—the
            saree.
          </p>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            At <span className="font-semibold">Archana Saree</span>, we believe
            that a saree is more than just an outfit; it’s a reflection of our
            rich heritage and timeless craftsmanship. Whether it’s the opulence
            of Banarasi, the subtlety of Tussar, or the vibrance of Kanjivaram,
            our collection is designed to cater to every occasion, mood, and
            personality.
          </p>

          <h3 className="text-[20px] font-semibold text-[#117554] mt-8 mb-4">
            Why Choose Us?
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-[15px] text-gray-500">
            <li>
              <strong className="text-slate-700">Handpicked Quality:</strong>{" "}
              Each saree in our collection is handpicked, ensuring top-notch
              quality and authenticity.
            </li>
            <li>
              <strong className="text-slate-700">
                Wide Range of Collections:
              </strong>
              From traditional silk sarees to modern designer sarees, we offer a
              diverse range of fabrics, patterns, and designs.
            </li>
            <li>
              <strong className="text-slate-700">Affordable Luxury:</strong> We
              aim to make luxurious sarees accessible to everyone, offering
              exquisite pieces at competitive prices.
            </li>
            <li>
              <strong className="text-slate-700">Sustainable & Ethical:</strong>{" "}
              We are committed to supporting local artisans and promoting
              sustainable practices in fashion.
            </li>
          </ul>

          <h3 className="text-[20px] font-semibold text-[#117554] mt-8 mb-4">
            Our Values
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-500">
            <li>
              <strong className="text-slate-700">Craftsmanship:</strong> We
              value the artistry behind each saree and strive to promote the
              traditional techniques that make them unique.
            </li>
            <li>
              <strong className="text-slate-700">Customer Satisfaction:</strong>{" "}
              Your satisfaction is our top priority. From selection to delivery,
              we are here to provide you with exceptional service.
            </li>
            <li>
              <strong className="text-slate-700">Authenticity:</strong> We offer
              100% authentic sarees sourced directly from artisans and weavers
              across India.
            </li>
          </ul>

          <p className="text-[15px] text-gray-500 leading-relaxed mt-8">
            Thank you for being a part of our journey. Whether you're shopping
            for a special occasion or looking to add a touch of tradition to
            your wardrobe, we are honored to be your go-to saree destination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;

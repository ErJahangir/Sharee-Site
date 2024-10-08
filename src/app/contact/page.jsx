import Link from "next/link";
import PageHeadingimg from "../Component/PageHeadingimg";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const page = () => {
  return (
    <div>
      <PageHeadingimg title={"Contact"} />
      <div className="w-[95%] md:w-[85%] mx-auto mb-5 flex flex-col justify-between gap-5 md:flex-row">
        <div className="w-full md:w-[48%] h-auto flex flex-col justify-center mx-auto border shadow-lg rounded-md p-5">
          <h2 className="text-[25px] font-bold capitalize mb-1">
            Get in Touch
          </h2>
          <p className="text-[#868686] text-[15px]">
            We'd love to hear from you! Whether you're looking for the perfect
            saree for a special occasion, want to explore our latest
            collections, or have any questions, our team is here to assist.
            Reach out to us today, and let us help you find the saree that
            brings out your elegance and tradition.
          </p>
          <h2 className="text-[16px] uppercase font-bold">Visit Now</h2>
          <p className="text-[#868686] text-[15px] flex flex-row items-center gap-3">
            {/* <span>
              <MdLocationPin />
            </span> */}
            <span className="bg-[#ede7e7] rounded-lg w-8 h-8 flex items-center text-black justify-center text-[25px]">
              <MdLocationPin />
            </span>
            <span>124, Normal School Road, Ganjipura, Jabalpur</span>
          </p>

          <h2 className="text-[16px] uppercase font-bold mt-4">Email</h2>
          <div className="flex flex-row items-center gap-3">
            <span className="bg-[#ede7e7] rounded-lg w-8 h-8 flex items-center justify-center text-[25px]">
              <MdEmail />
            </span>
            <div className="flex flex-col">
              <Link href="/" className="text-[#868686] text-[15px]">
                email1@example.com
              </Link>
              <Link href="/" className="text-[#868686] text-[15px]">
                email2@example.com
              </Link>
            </div>
          </div>

          <h2 className="text-[16px] uppercase font-bold mt-4">
            Have any Question ?
          </h2>
          <div className="text-[16px] flex flex-row items-center gap-3 space-y-2">
            <span className="bg-[#ede7e7] rounded-lg w-10 h-10 flex items-center justify-center text-[20px]">
              <FaPhone />
            </span>
            <span>
              <Link
                href="tel:9584624589"
                className="flex flex-row items-center gap-2"
              >
                <span>+91 9584624589</span>
              </Link>
              <Link
                href="tel:9039670833"
                className="flex flex-row items-center gap-2"
              >
                <span>+91 9039670833</span>
              </Link>
            </span>
          </div>

          <h2 className="text-[18px] uppercase font-bold mt-4">Follow Us</h2>
          <div className="flex space-x-3 text-[15px] text-white">
            <Link
              href="https://www.facebook.com/profile.php?id=61564177245622&mibextid=ZbWKwL"
              className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-blue-900"
            >
              <span className="relative z-10 text-2xl">
                <FaFacebookF />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 -translate-y-full group-hover:translate-y-0"></span>
            </Link>
            <Link
              href="https://www.instagram.com/archnasaree?utm_source=qr&igsh=MWQ3NnRxN251MWNqOA=="
              className="  border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-pink-900"
            >
              <span className="relative z-10 text-2xl">
                <FaInstagram />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 -translate-x-full group-hover:translate-x-0"></span>
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VakAAeP84OmKWFd2MR1u
"
              className=" border border-black w-10 h-10 flex items-center justify-center  uppercase font-extralight relative overflow-hidden group rounded-full bg-green-700 hover:text-white transition-all duration-500"
            >
              <span className="relative z-10 text-2xl">
                <FaWhatsapp />
              </span>
              <span className="absolute inset-0 ease-out transform bg-[#117554] transition-all duration-700 translate-x-full group-hover:translate-x-0"></span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[48%] h-auto mx-auto border shadow-lg rounded-md p-5">
          <form className="flex flex-col gap-2">
            <div className="w-full md:w-[90%]">
              <label htmlFor="name">
                Name:- <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-10 border border-black rounded-lg pl-2"
              />
            </div>
            <div className="w-full md:w-[90%]">
              <label htmlFor="email">
                Email:- <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 border border-black rounded-lg pl-2"
              />
            </div>
            <div className="w-full md:w-[90%]">
              <label htmlFor="phone">
                Phone No.:- <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full h-10 border border-black rounded-lg pl-2"
              />
            </div>
            <div className="w-full md:w-[90%]">
              <label htmlFor="message">
                Your Message:- <span className="text-red-700">*</span>
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full h-20 border border-black rounded-lg pl-2"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-[#117554] w-[100px] rounded-lg h-8 mb-5 text-white font-bold uppercase"
            />
          </form>
        </div>
      </div>

      <div className="w-full mb-5">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-[400px] border-none"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Archana%20Saree,%20Jabalpur+(Archana%20Saree)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        />
        <div className="flex justify-center mt-5">
          <a
            href="https://maps.google.com/?q=Archana%20Saree,%20Jabalpur"
            target="_blank"
            className="bg-[#117554] text-white rounded-lg px-4 py-2 uppercase font-bold"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { SignUpModal, LogInModal } from "./Modal"; // Adjust the path accordingly
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`fixed h-screen w-[50%] bg-white top-0 left-0 z-40 p-5 transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setShow(false)} className="text-right mb-4">
          Close
        </button>
        <ul className="flex flex-col gap-4">
          <li onClick={() => setShow(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/productscreen">Shop</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between px-4 md:px-[30px] h-16">
        <button className=" md:hidden" onClick={() => setShow(!show)}>
          <FiAlignJustify className="text-[30px] " />
        </button>
        <div className="relative flex flex-row items-center justify-between gap-11">
          <Link href="/" className="">
            <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
          </Link>
          {/* Navigation Menu */}
          <ul className="hidden md:flex flex-row items-center gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="group">
              <Link href="/productscreen" className="cursor-pointer">
                Shop
              </Link>
              {/* <div className="absolute z-50 w-[900px] hidden group-hover:grid grid-cols-3 left-1 top-7 shadow-lg p-5 bg-white transition-all duration-300 ease-in-out">
                <div className="submenu">
                  <h2>Shop Layouts</h2>
                  <ul>
                    <li>
                      <Link href="/">Shop Grid</Link>
                    </li>
                    <li>
                      <Link href="/">Shop List</Link>
                    </li>
                    <li>
                      <Link href="/">No Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/">Left Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/">Right Sidebar</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Product Layouts</h2>
                  <ul>
                    <li>
                      <Link href="/">Vertical Thumbnails</Link>
                    </li>
                    <li>
                      <Link href="/">Extra Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/">Right Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/">Left Sidebar</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Product Extends</h2>
                  <ul>
                    <li>
                      <Link href="/">Product Bundle</Link>
                    </li>
                    <li>
                      <Link href="/">Product 360 Deg</Link>
                    </li>
                    <li>
                      <Link href="/">Video</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Other Pages</h2>
                  <ul>
                    <li>
                      <Link href="/">Cart</Link>
                    </li>
                    <li>
                      <Link href="/">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/">Order Tracking</Link>
                    </li>
                    <li>
                      <Link href="/">My Account</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Product Types</h2>
                  <ul>
                    <li>
                      <Link href="/">Simple</Link>
                    </li>
                    <li>
                      <Link href="/">Variable</Link>
                    </li>
                    <li>
                      <Link href="/">External / Affiliate</Link>
                    </li>
                    <li>
                      <Link href="/">Grouped</Link>
                    </li>
                    <li>
                      <Link href="/">Out Of Stock</Link>
                    </li>
                    <li>
                      <Link href="/">On Sale</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </li>
            <li className="group">
              <h2 className="cursor-pointer">Elements</h2>
              {/* <div className="absolute z-50 w-[900px] hidden group-hover:grid grid-cols-3 left-1 top-7 shadow-lg p-5 bg-white transition-all duration-300 ease-in-out">
                <div className="submenu">
                  <h2>Element 1</h2>
                  <ul>
                    <li>
                      <Link href="/">Banner</Link>
                    </li>
                    <li>
                      <Link href="/">Blog Element</Link>
                    </li>
                    <li>
                      <Link href="/">Categories Element</Link>
                    </li>
                    <li>
                      <Link href="/">Product Element</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Element 2</h2>
                  <ul>
                    <li>
                      <Link href="/">Client</Link>
                    </li>
                    <li>
                      <Link href="/">Product Layout</Link>
                    </li>
                    <li>
                      <Link href="/">Google Map</Link>
                    </li>
                    <li>
                      <Link href="/">Icon Box</Link>
                    </li>
                    <li>
                      <Link href="/">Team</Link>
                    </li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Element 3</h2>
                  <ul>
                    <li>Instagram Feed</li>
                    <li>Newsletter</li>
                    <li>Testimonials</li>
                  </ul>
                </div>
              </div> */}
            </li>
            <li className="group">
              <Link href="/Blogs" className="cursor-pointer">
                Blogs
              </Link>
              {/* <div className="absolute z-50 w-[900px] hidden group-hover:grid grid-cols-3 left-1 top-7 shadow-lg p-5 bg-white transition-all duration-300 ease-in-out">
                <div className="submenu">
                  <h2>Blog Layout</h2>
                  <ul>
                    <li>No Sidebar</li>
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    <li>Blog Standard</li>
                    <li>Blog Grid</li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Post Layout</h2>
                  <ul>
                    <li>No Sidebar</li>
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    <li>Instagram In Post</li>
                    <li>Product In Post</li>
                  </ul>
                </div>
                <div className="submenu">
                  <h2>Post Format</h2>
                  <ul>
                    <li>Standard</li>
                    <li>Gallery</li>
                    <li>Video</li>
                  </ul>
                </div>
              </div> */}
            </li>
            {/* <li className="group">
              <h2 className="cursor-pointer">Pages</h2>
              <div className="absolute z-50 w-[900px] hidden group-hover:grid grid-cols-3 left-1 top-7 shadow-lg p-5 bg-white transition-all duration-300 ease-in-out">
                <ul>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </li> */}
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <ul className="flex flex-row  items-center gap-3">
          <li className="relative group">
            <FaUser className="text-2xl cursor-pointer" />
            <div className="absolute bg-[#fa8f47] capitalize right-0 z-50">
              {login ? (
                <div className="w-[200px] h-[100px] hidden rounded-lg font-bold group-hover:flex justify-center gap-2 flex-col duration-700">
                  <Link href="/" className="pl-9">
                    Dashboard
                  </Link>
                  <p className="border-b-2 ml-5"></p>
                  <button
                    className="text-start flex ml-9"
                    onClick={() => setLogin(!login)}
                  >
                    Signout
                  </button>
                </div>
              ) : (
                <div className="w-[200px] h-[100px] gap-2 hidden rounded-lg font-bold group-hover:flex justify-center flex-col duration-700">
                  <button
                    className="text-start flex ml-9"
                    onClick={() => setIsSignUpOpen(true)}
                  >
                    Signup
                  </button>
                  <p className="border-b-2 ml-5"></p>
                  <Link
                    href="#"
                    className="pl-9"
                    onClick={() => setIsLogInOpen(true)}
                  >
                    Signin
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li className="relative">
            <Link href="/cart">
              <MdShoppingBag className="text-3xl" />
              <h2 className="absolute -top-2 -right-1 bg-[#fa8f47] min-w-5 min-h-5 flex text-white items-center justify-center rounded-full">
                2
              </h2>
            </Link>
          </li>
        </ul>
      </div>
      <LogInModal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  );
};

export default Header;

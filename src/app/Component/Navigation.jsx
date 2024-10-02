// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
// import { MdShoppingBag } from "react-icons/md";
// import { SignUpModal, LogInModal } from "./Modal"; // Adjust the path accordingly
// import { FiAlignJustify } from "react-icons/fi";
// import { ImCross } from "react-icons/im";

// const Navigation = () => {
//   const [show, setShow] = useState(false);
//   const [login, setLogin] = useState(true);
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false);
//   const [isLogInOpen, setIsLogInOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
//         scrolling ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* mobile view */}

//       <div
//         className={`fixed h-screen w-[50%] bg-white top-0 left-0 z-40 p-5 transition-transform duration-300 ease-in-out ${
//           show ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="bg-black opacity-15"></div>
//         <button onClick={() => setShow(false)} className="text-right mb-4">
//           <ImCross />
//         </button>
//         <ul className="flex flex-col gap-4">
//           <li onClick={() => setShow(false)}>
//             <Link href="/">Home</Link>
//           </li>
//           <li onClick={() => setShow(false)}>
//             <Link href="/productscreen">Shop</Link>
//           </li>
//           <li onClick={() => setShow(false)}>
//             <Link href="/Blogs">Blogs</Link>
//           </li>
//           <li onClick={() => setShow(false)}>
//             <Link href="/about">About</Link>
//           </li>
//           <li onClick={() => setShow(false)}>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>

//       {/* laptop view */}

//       <div className="flex flex-row items-center justify-between px-4 md:px-[30px] h-16">
//         <button className=" md:hidden" onClick={() => setShow(!show)}>
//           <FiAlignJustify className="text-[30px] " />
//         </button>
//         <div className="relative flex flex-row items-center justify-between gap-11">
//           <Link href="/" className="">
//             <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
//           </Link>
//           <ul className="hidden md:flex flex-row items-center gap-3">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li className="group">
//               <Link href="/productscreen" className="cursor-pointer">
//                 Shop
//               </Link>
//             </li>
//             <li className="group">
//               <h2 className="cursor-pointer">Elements</h2>
//             </li>
//             <li className="group">
//               <Link href="/Blogs" className="cursor-pointer">
//                 Blogs
//               </Link>
//             </li>

//             <li>
//               <Link href="/about">About</Link>
//             </li>
//             <li>
//               <Link href="/">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         <ul className="flex flex-row  items-center gap-3">
//           <li className="relative group">
//             <FaUser className="text-2xl cursor-pointer" />
//             <div className="absolute bg-[#fa8f47] capitalize right-0 z-50">
//               {login ? (
//                 <div className="w-[200px] h-[100px] hidden rounded-lg font-bold group-hover:flex justify-center gap-2 flex-col duration-700">
//                   <Link href="/" className="pl-9">
//                     Dashboard
//                   </Link>
//                   <p className="border-b-2 ml-5"></p>
//                   <button
//                     className="text-start flex ml-9"
//                     onClick={() => setLogin(!login)}
//                   >
//                     Signout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="w-[200px] h-[100px] gap-2 hidden rounded-lg font-bold group-hover:flex justify-center flex-col duration-700">
//                   <button
//                     className="text-start flex ml-9"
//                     onClick={() => setIsSignUpOpen(true)}
//                   >
//                     Signup
//                   </button>
//                   <p className="border-b-2 ml-5"></p>
//                   <Link
//                     href="#"
//                     className="pl-9"
//                     onClick={() => setIsLogInOpen(true)}
//                   >
//                     Signin
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </li>
//           <li className="relative">
//             <Link href="/cart">
//               <MdShoppingBag className="text-3xl" />
//               <h2 className="absolute -top-2 -right-1 bg-[#fa8f47] min-w-5 min-h-5 flex text-white items-center justify-center rounded-full">
//                 2
//               </h2>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <LogInModal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
//       <SignUpModal
//         isOpen={isSignUpOpen}
//         onClose={() => setIsSignUpOpen(false)}
//       />
//     </div>
//   );
// };

// export default Navigation;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { SignUpModal, LogInModal } from "./Modal"; // Adjust the path accordingly
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

const Navigation = () => {
  const count = useSelector((state) => state.product.products.length);
  //   console.log("jghjgvhjbj=========>", count);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Mobile view */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed h-screen w-[50%] bg-white top-0 left-0 z-40 p-5 transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-black opacity-15"></div>
        <button
          onClick={() => setShow(false)}
          className="text-right mb-4"
          aria-label="Close menu"
        >
          <ImCross />
        </button>
        <ul className="flex flex-col gap-4">
          <li onClick={() => setShow(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/productscreen">Shop</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Laptop view */}
      <div className="flex flex-row items-center justify-between px-4 md:px-[30px] h-16">
        <button
          className="md:hidden"
          onClick={() => setShow(!show)}
          aria-label="Open menu"
        >
          <FiAlignJustify className="text-[30px]" />
        </button>
        <div className="relative flex flex-row items-center justify-between gap-11">
          <Link href="/">
            <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
          </Link>
          <ul className="hidden md:flex flex-row items-center gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="group">
              <Link href="/productscreen" className="cursor-pointer">
                Shop
              </Link>
            </li>
            <li className="group">
              <h2 className="cursor-pointer">Elements</h2>
            </li>
            <li className="group">
              <Link href="/Blogs" className="cursor-pointer">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <ul className="flex flex-row items-center gap-3">
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
              {count > 0 && (
                <h2 className="absolute -top-2 -right-1 bg-[#fa8f47] min-w-5 min-h-5 flex text-white items-center justify-center rounded-full">
                  {count}
                </h2>
              )}
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

export default Navigation;

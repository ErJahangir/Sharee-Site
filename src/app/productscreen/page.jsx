// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Add Link import for navigation
// import { BsFillGrid3X3GapFill } from "react-icons/bs";
// import { FaChevronDown, FaList, FaRegHeart, FaSearch } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { GoArrowSwitch } from "react-icons/go";
// import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
// import { CiStar } from "react-icons/ci";
// import PageHeadingimg from "../Component/PageHeadingimg";
// import { LuArrowRightLeft } from "react-icons/lu";
// import { NewArrivalData } from "../Component/AllData";
// const ITEMS_PER_PAGE = 12;

// // const Grid = ({ currentPage }) => {
// //   // Calculate items to show for the current page
// //   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// //   const endIndex = startIndex + ITEMS_PER_PAGE;
// //   const paginatedData = NewArrivalData.slice(startIndex, endIndex);

// //   return (
// //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[95%] md:w-[85%] mx-auto my-8">
// //       {paginatedData.map((item, index) => (
// //         <div key={index} className="relative group shadow-md rounded-md">
// //           <Image
// //             src={item.img}
// //             width={1000}
// //             height={1000}
// //             alt={item.title}
// //             className="w-[95%] h-[400px] object-cover rounded-md mx-auto"
// //           />
// //           <div className="absolute flex flex-row left-[25%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-300 text-[20px] items-center gap-2">
// //             <Link
// //               href="/"
// //               className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
// //             >
// //               <FaRegHeart />
// //             </Link>
// //             <Link
// //               href="/"
// //               className="bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
// //             >
// //               <GoArrowSwitch />
// //             </Link>
// //             <Link
// //               href="/"
// //               className="bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
// //             >
// //               <IoMdSearch />
// //             </Link>
// //             <Link
// //               href="/"
// //               className="bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
// //             >
// //               <MdOutlineShoppingBag />
// //             </Link>
// //           </div>
// //           <div className="p-2 flex flex-col gap-1">
// //             <h2>{item.title}</h2>
// //             <div className="flex flex-row">
// //               <CiStar />
// //               <CiStar />
// //               <CiStar />
// //               <CiStar />
// //               <CiStar />
// //             </div>
// //             <div>
// //               {item.price && (
// //                 <h2 className="font-sans text-[#fa8f47]">${item.price}</h2>
// //               )}
// //               {item.oldPrice && item.newPrice && (
// //                 <h2 className="font-sans">
// //                   <span className="line-through text-[#868686]">
// //                     ${item.oldPrice}
// //                   </span>{" "}
// //                   - <span className="text-[#fa8f47]">${item.newPrice}</span>
// //                 </h2>
// //               )}
// //               {item.low && item.high && (
// //                 <h2 className="font-sans text-[#fa8f47]">
// //                   ${item.low} - ${item.high}
// //                 </h2>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const Pagination = ({ currentPage, totalItems, onPageChange }) => {
// //   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

// //   return (
// //     <div className="flex justify-center gap-4 my-4">
// //       <button
// //         onClick={() => onPageChange(currentPage - 1)}
// //         disabled={currentPage === 1}
// //         className={`px-4 py-2 ${
// //           currentPage == 1 ? "bg-slate-500 cursor-not-allowed" : "bg-[#fa8f47]"
// //         } text-white rounded-md`}
// //       >
// //         Previous
// //       </button>
// //       {Array.from({ length: totalPages }, (_, index) => (
// //         <button
// //           key={index}
// //           onClick={() => onPageChange(index + 1)}
// //           className={`px-4 py-2 ${
// //             currentPage === index + 1
// //               ? "bg-black text-white"
// //               : "bg-[#fa8f47] text-white"
// //           } rounded-md`}
// //         >
// //           {index + 1}
// //         </button>
// //       ))}
// //       <button
// //         onClick={() => onPageChange(currentPage + 1)}
// //         disabled={currentPage === totalPages}
// //         className="px-4 py-2 bg-[#fa8f47] text-white rounded-md"
// //       >
// //         Next
// //       </button>
// //     </div>
// //   );
// // };

// const Page = () => {
//   const [showItem, setShowItem] = useState("show 12");
//   const [shortType, setShortType] = useState("Default sorting");
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const paginatedData = NewArrivalData.slice(startIndex, endIndex);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <PageHeadingimg title={"Shop"} />
//       {/* <div className="flex flex-row justify-between w-[95%] md:w-[85%] mx-auto items-center mb-5">
//         <div className="flex flex-row gap-3 items-center">
//           <h2 className="flex flex-row gap-4 items-center border-2 rounded-full py-2 px-3">
//             <span className="text-[15px] text-[#848486]">{shortType}</span>
//             <span>
//               <FaChevronDown />
//             </span>
//           </h2>
//           <h2 className="flex flex-row gap-3 items-center border-2 rounded-full py-2 px-3">
//             <span className="text-[15px] text-[#848486]">{showItem}</span>
//             <span>
//               <FaChevronDown />
//             </span>
//           </h2>
//           <h2 className="flex flex-row gap-3 items-center border-2 rounded-full md:w-[200px] h-[40px]">
//             <input
//               type="text"
//               placeholder="Enter item name"
//               className="outline-none h-full  rounded-l-full pl-5"
//             />
//             <span className="w-10 flex h-full items-center rounded-r-full justify-center border border-l-0">
//               <FaSearch />
//             </span>
//           </h2>
//         </div>
//       </div> */}
//       {/* <div className=" border-b-2 inline-block mx-auto place-self-center">
//         All Product
//       </div> */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[95%] md:w-[85%] mx-auto my-8">
//         {paginatedData.map((item, index) => (
//           <Link
//             href={`/productscreen/${item.id}`}
//             key={index}
//             className="relative group shadow-md rounded-md"
//           >
//             <Image
//               src={item.img}
//               width={1000}
//               height={1000}
//               quality={80}
//               loading={"lazy"}
//               alt={item.title}
//               className="w-[95%] h-[350px] object-cover rounded-md mx-auto"
//             />
//             <div className=" flex flex-row  text-[20px] items-center gap-2">
//               <Link
//                 href="/"
//                 className="absolute left-[15%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-1000 bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
//               >
//                 <FaRegHeart />
//               </Link>
//               <Link
//                 href="/"
//                 className="absolute left-[30%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-700 bg-[#fa8f47] w-10 h-10 text-white rounded-full flex items-center justify-center"
//               >
//                 <GoArrowSwitch />
//               </Link>
//               <Link
//                 href="/"
//                 className="absolute left-[45%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-500 bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
//               >
//                 <IoMdSearch />
//               </Link>
//               <Link
//                 href="/"
//                 className="absolute left-[60%] top-[80%] opacity-0 group-hover:opacity-100 group-hover:top-[60%] duration-300 bg-[#fa8f47] w-10 h-10 text-white text-[25px] rounded-full flex items-center justify-center"
//               >
//                 <MdOutlineShoppingBag />
//               </Link>
//             </div>
//             <div className="p-2 flex flex-col gap-1">
//               <h2>{item.title}</h2>
//               <div className="flex flex-row">
//                 <CiStar />
//                 <CiStar />
//                 <CiStar />
//                 <CiStar />
//                 <CiStar />
//               </div>
//               <div>
//                 {item.price && (
//                   <h2 className="font-sans text-[#fa8f47]">${item.price}</h2>
//                 )}
//                 {item.oldPrice && item.newPrice && (
//                   <h2 className="font-sans">
//                     <span className="line-through text-[#868686]">
//                       ${item.oldPrice}
//                     </span>{" "}
//                     - <span className="text-[#fa8f47]">${item.newPrice}</span>
//                   </h2>
//                 )}
//                 {item.low && item.high && (
//                   <h2 className="font-sans text-[#fa8f47]">
//                     ${item.low} - ${item.high}
//                   </h2>
//                 )}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalItems={NewArrivalData.length}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import PageHeadingimg from "../Component/PageHeadingimg";
import { NewArrivalData } from "../Component/AllData";
import Pagination from "../Component/Pagination";
import ProductGrid from "../Component/ProductGrid";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeadingimg title={"Shop"} />
      <ProductGrid data={NewArrivalData} currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalItems={NewArrivalData.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFilter, FaRegHeart, FaRupeeSign, FaSearch } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../Redux/Slice";
// import { RxCross2 } from "react-icons/rx";

// const ITEMS_PER_PAGE = 12;

// const ProductGrid = ({ data }) => {
//   const dispatch = useDispatch();
//   const [show, setShow] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const paginatedData = filteredData.slice(startIndex, endIndex);

//   const handleAddProduct = (item) => {
//     dispatch(addProduct(item));
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const options = [
//     "Option 1",
//     "Option 2",
//     "Option 3",
//     "Option 4",
//     "Option 5",
//     "Option 6",
//     "Option 7",
//     "Option 8",
//     "Option 9",
//     "Option 10",
//   ];

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="w-[95%] md:w-[85%] mx-auto">
//       <div className="flex flex-row gap-4 items-center justify-end">
//         <div className="w-[50%] border h-[40px] rounded-full flex flex-row items-center justify-between">
//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="rounded-l-full h-full w-full pl-5"
//           />
//           <button className="w-[60px] h-full flex justify-center items-center bg-[#117554] rounded-r-full text-2xl text-slate-200">
//             <FaSearch />
//           </button>
//         </div>

//         <div className="relative">
//           <button
//             className="text-[20px] flex flex-row gap-2 items-center border shadow-sm h-[40px] w-[100px] justify-center rounded-full"
//             onClick={() => setShow(true)}
//           >
//             <FaFilter />
//             <span className="text-[20px]">Filter</span>
//           </button>

//           <div
//             className={`${
//               show ? "absolute" : "hidden"
//             } right-0 bg-white top-8 w-[350px] shadow-lg h-[500px] z-50 p-5`}
//           >
//             <button onClick={() => setShow(false)}>
//               <RxCross2 />
//             </button>
//             <div>
//               <h2>Filter by Price</h2>
//             </div>
//             <div>
//               <h2>Filter By Category</h2>
//               {options.map((option, index) => (
//                 <div key={index} className="flex flex-row gap-2 items-center">
//                   <input
//                     type="radio"
//                     name="category"
//                     value={option}
//                     checked={selectedOption === option}
//                     onChange={handleOptionChange}
//                   />
//                   <label>{option}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-8">
//         {paginatedData.length > 0 ? (
//           paginatedData.map((item, index) => (
//             <div key={index} className="relative group">
//               <Link href={`/productscreen/${item.id}`}>
//                 <Image
//                   src={item.img}
//                   width={1000}
//                   height={1000}
//                   quality={80}
//                   loading={"lazy"}
//                   alt={item.title}
//                   className="w-full h-[200px] sm:h-[350px]  object-cover mx-auto"
//                 />
//               </Link>
// <div className="flex flex-row  text-[20px] items-center gap-2 mt-5">
//   <Link
//     href="/"
//     className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//   >
//     <FaRegHeart />
//   </Link>

//   <Link
//     href="/"
//     className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//   >
//     <IoMdSearch />
//   </Link>
//   <button
//     onClick={() => handleAddProduct(item)}
//     className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//   >
//     <MdOutlineShoppingBag />
//   </button>
// </div>
//               <div className="p-2 md:pl-5 flex flex-col gap-1  md:items-center">
//                 <h2 className="hover:text-[#117554] text-[14px] md:text-[18px]">
//                   {item.title}
//                 </h2>
//                 <p className="text-[15px] hidden md:flex text-[#868686]">
//                   {item.category}
//                 </p>

//                 <h2 className="font-sans text-[#117554] md:text-[22px] flex flex-row items-center">
//                   <span>
//                     <FaRupeeSign />
//                   </span>
//                   <span className=" font-bold">{item.price}</span>
//                 </h2>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-3 py-1 rounded ${
//               currentPage === 1 ? "bg-gray-300" : "bg-[#117554]"
//             }`}
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === page ? "bg-[#117554]" : "bg-gray-200"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`px-3 py-1 rounded ${
//               currentPage === totalPages ? "bg-gray-300" : "bg-[#117554]"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductGrid;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaFilter, FaRegHeart, FaRupeeSign, FaSearch } from "react-icons/fa";
// import { IoLogoWhatsapp, IoMdSearch } from "react-icons/io";
// import { MdOutlineShoppingBag, MdRemoveRedEye } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../Redux/Slice";
// import { RxCross2 } from "react-icons/rx";
// import { QuickView } from "./Modal";

// const ITEMS_PER_PAGE = 12;

// const ProductGrid = ({ data }) => {
//   const dispatch = useDispatch();

//   const [show, setShow] = useState(false);
//   const [isVisible, setVisible] = useState(false);
//   const [modaldata, setModalData] = useState(null);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredData = data.filter(
//     (item) =>
//       item.title.toLowerCase().includes(search.toLowerCase()) &&
//       (selectedOption === "" || item.category === selectedOption)
//   );

//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const paginatedData = filteredData.slice(startIndex, endIndex);

//   const handleAddProduct = (item) => {
//     dispatch(addProduct(item));
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const sareeCategories = [
//     "Silk Saree",
//     "Cotton Saree",
//     "Banarasi Saree",
//     "Chiffon Saree",
//     "Georgette Saree",
//     "Kanjivaram Saree",
//     "Tussar Saree",
//     "Linen Saree",
//     "Patola Saree",
//     "Designer Saree",
//   ];

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleQuick = async (item) => {
//     console.log(item);
//     try {
//       await setModalData(item);
//       console.log("====>", data);
//     } catch (error) {
//       alert("some error");
//     }
//     setVisible(true);
//   };

//   return (
//     <div className="w-[95%] md:w-[85%] mx-auto">
//       <div className="flex flex-row gap-4 items-center justify-end">
//         <div className="w-full md:w-[50%] shadow-sm border h-[45px] md:h-[40px] rounded-full flex flex-row items-center justify-between">
//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="rounded-l-full h-full w-full pl-5 outline-none"
//           />
//           <button className="w-[60px] h-full  flex justify-center items-center bg-[#117554] rounded-r-full text-2xl text-slate-200">
//             <FaSearch />
//           </button>
//         </div>

//         <div className="relative">
//           <button
//             className="text-[20px] flex flex-row gap-2 items-center border shadow-sm h-[45px] md:h-[40px] w-[50px] md:w-[100px] justify-center rounded-full"
//             onClick={() => setShow(!show)}
//           >
//             <FaFilter />
//             <span className="text-[20px] hidden md:flex">Filter</span>
//           </button>

//           <div
//             className={`${
//               show ? "absolute" : "hidden"
//             } right-0 bg-white top-8 w-[350px] shadow-lg h-[500px] z-50 p-5`}
//           >
//             <button onClick={() => setShow(false)}>
//               <RxCross2 />
//             </button>
//             <div>
//               <h2>Filter by Price</h2>
//             </div>
//             <div>
//               <h2 className="flex flex-row justify-between">
//                 <span>Filter By Category</span>
//                 <button
//                   className="underline underline-offset-2"
//                   onClick={() => setSelectedOption("")}
//                 >
//                   Clear
//                 </button>
//               </h2>
//               {sareeCategories.map((category, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row gap-2 items-center cursor-pointer"
//                   onClick={() => setSelectedOption(category)}
//                 >
//                   <input
//                     type="radio"
//                     name="category"
//                     value={category}
//                     checked={selectedOption === category}
//                     onChange={handleOptionChange}
//                     className="cursor-pointer"
//                   />
//                   <label className="cursor-pointer">{category}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-8">
//         {paginatedData.length > 0 ? (
//           paginatedData.map((item, index) => (
//             <div key={index} className="relative group">
//               <Link href={`/productscreen/${item.id}`}>
//                 <Image
//                   src={item.img}
//                   width={1000}
//                   height={1000}
//                   quality={80}
//                   loading={"lazy"}
//                   alt={item.title}
//                   className="w-full h-[200px] sm:h-[350px]  object-cover mx-auto"
//                 />
//               </Link>
//               {/* <div className="flex flex-row  text-[20px] items-center gap-2 mt-5">
//                 <Link
//                   href="/"
//                   className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <FaRegHeart />
//                 </Link>

//                 <Link
//                   href="/"
//                   className="md:absolute md:left-[40%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <IoMdSearch />
//                 </Link>
//                 <button
//                   onClick={() => handleAddProduct(item)}
//                   className="md:absolute md:left-[60%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <MdOutlineShoppingBag />
//                 </button>
//               </div> */}

//               <div className="flex flex-row  text-[20px] items-center gap-2 mt-5">
//                 {/* <Link
//                   href="/"
//                   className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <FaRegHeart />
//                 </Link> */}
//                 {/* className="bg-[#117554] w-8 h-8 md:w-10 md:h-10
//                 md:text-[25px] text-white rounded-full flex items-center
//                 justify-center" */}
//                 {/* <a
//                   href={`https://api.whatsapp.com/send?phone=7557708578&text=Hi, I am interested in the following item: %0AName: ${item.title} %0ACategory: ${item.category} %0APrice: ₹${item.price} link:/productscreen/${item.id}`}
//                   className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoWhatsapp />
//                 </a> */}
//                 <a
//                   href={`https://api.whatsapp.com/send?phone=7557708578&text=Hi, I am interested in the following item: %0AName: ${item.title} %0ACategory: ${item.category} %0APrice: ₹${item.price} %0AView Product: ${window.location.origin}/productscreen/${item.id}`}
//                   className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoWhatsapp />
//                 </a>
//                 {/* <Link
//                   href="/"
//                   className="md:absolute md:left-[40%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-500 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <IoMdSearch />
//                 </Link> */}
//                 <button
//                   className="md:absolute md:left-[40%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-500 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                   // className="bg-[#117554] w-8 h-8 md:w-10 md:h-10 md:text-[25px] text-white rounded-full flex items-center justify-center"
//                   onClick={() => handleQuick(item)}
//                 >
//                   <MdRemoveRedEye />
//                 </button>
//                 <button
//                   onClick={() => handleAddProduct(item)}
//                   className="md:absolute md:left-[60%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-300 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
//                 >
//                   <MdOutlineShoppingBag />
//                 </button>
//               </div>
//               <div className="p-2 md:pl-5 flex flex-col gap-1  md:items-center">
//                 <h2 className="hover:text-[#117554] text-[14px] md:text-[18px]">
//                   {item.title}
//                 </h2>
//                 <p className="text-[15px] hidden md:flex text-[#868686]">
//                   {item.category}
//                 </p>

//                 <h2 className="font-sans text-[#117554] md:text-[22px] flex flex-row items-center">
//                   <span>
//                     <FaRupeeSign />
//                   </span>
//                   <span className=" font-bold">{item.price}</span>
//                 </h2>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-4 mb-5">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-3 py-1 rounded ${
//               currentPage === 1
//                 ? "bg-gray-300 cursor-not-allowed text-slate-400"
//                 : "bg-[#117554] text-white"
//             }`}
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === page
//                   ? "bg-[#117554] text-white"
//                   : "bg-gray-200 text-[#117554]"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`px-3 py-1 rounded ${
//               currentPage === totalPages
//                 ? "bg-gray-300 cursor-not-allowed text-slate-400"
//                 : "bg-[#117554] text-white"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       <QuickView
//         isOpen={isVisible}
//         onClose={() => setVisible(false)}
//         data={modaldata}
//       />
//     </div>
//   );
// };

// export default ProductGrid;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFilter, FaRegHeart, FaRupeeSign, FaSearch } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag, MdRemoveRedEye } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Slice";
import { RxCross2 } from "react-icons/rx";
import { QuickView } from "./Modal";

const ITEMS_PER_PAGE = 12;

const ProductGrid = ({ data }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [modaldata, setModalData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [origin, setOrigin] = useState(""); // State for storing origin

  // Use effect to set origin on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedOption === "" || item.category === selectedOption)
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleAddProduct = (item) => {
    dispatch(addProduct(item));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const sareeCategories = [
    "Silk Saree",
    "Cotton Saree",
    "Banarasi Saree",
    "Chiffon Saree",
    "Georgette Saree",
    "Kanjivaram Saree",
    "Tussar Saree",
    "Linen Saree",
    "Patola Saree",
    "Designer Saree",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleQuick = async (item) => {
    console.log(item);
    try {
      await setModalData(item);
      console.log("====>", data);
    } catch (error) {
      alert("some error");
    }
    setVisible(true);
  };

  return (
    <div className="w-[95%] md:w-[85%] mx-auto">
      <div className="flex flex-row gap-4 items-center justify-end">
        <div className="w-full md:w-[50%] shadow-sm border h-[45px] md:h-[40px] rounded-full flex flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Enter product name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-l-full h-full w-full pl-5 outline-none"
          />
          <button className="w-[60px] h-full flex justify-center items-center bg-[#117554] rounded-r-full text-2xl text-slate-200">
            <FaSearch />
          </button>
        </div>

        <div className="relative">
          <button
            className="text-[20px] flex flex-row gap-2 items-center border shadow-sm h-[45px] md:h-[40px] w-[50px] md:w-[100px] justify-center rounded-full"
            onClick={() => setShow(!show)}
          >
            <FaFilter />
            <span className="text-[20px] hidden md:flex">Filter</span>
          </button>

          <div
            className={`${
              show ? "absolute" : "hidden"
            } right-0 bg-white top-8 w-[350px] shadow-lg h-[500px] z-50 p-5`}
          >
            <button onClick={() => setShow(false)}>
              <RxCross2 />
            </button>
            <div>
              <h2>Filter by Price</h2>
            </div>
            <div>
              <h2 className="flex flex-row justify-between">
                <span>Filter By Category</span>
                <button
                  className="underline underline-offset-2"
                  onClick={() => setSelectedOption("")}
                >
                  Clear
                </button>
              </h2>
              {sareeCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setSelectedOption(category)}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedOption === category}
                    onChange={handleOptionChange}
                    className="cursor-pointer"
                  />
                  <label className="cursor-pointer">{category}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={`/productscreen/${item.id}`}>
                <Image
                  src={item.img}
                  width={1000}
                  height={1000}
                  quality={80}
                  loading={"lazy"}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[350px] object-cover mx-auto"
                />
              </Link>

              <div className="flex flex-row text-[20px] items-center gap-2 mt-5">
                <a
                  href={`https://api.whatsapp.com/send?phone=7557708578&text=Hi, I am interested in the following item: %0AName: ${item.title} %0ACategory: ${item.category} %0APrice: ₹${item.price} %0AView Product: ${origin}/productscreen/${item.id}`}
                  className="md:absolute md:left-[20%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-700 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a>
                <button
                  className="md:absolute md:left-[40%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-500 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
                  onClick={() => handleQuick(item)}
                >
                  <MdRemoveRedEye />
                </button>
                <button
                  onClick={() => handleAddProduct(item)}
                  className="md:absolute md:left-[60%] md:top-[80%] md:opacity-0 md:group-hover:opacity-100 md:group-hover:top-[60%] duration-300 bg-[#117554] w-8 h-8 md:w-10 md:h-10 text-white rounded-full flex items-center justify-center"
                >
                  <MdOutlineShoppingBag />
                </button>
              </div>

              <div className="text-[18px] font-semibold mt-2 flex flex-col items-start justify-between">
                <h2 className="truncate w-full">{item.title}</h2>
                <span className="flex flex-row justify-between items-center gap-1">
                  <FaRupeeSign /> {item.price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-[#117554] text-white"
                : "bg-white text-[#117554]"
            } px-4 py-2 mx-1 border rounded-full`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Quick View Modal */}
      {isVisible && <QuickView item={modaldata} visible={isVisible} />}
    </div>
  );
};

export default ProductGrid;

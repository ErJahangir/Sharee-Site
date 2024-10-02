// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { IoMdRemove, IoMdRemoveCircle } from "react-icons/io";
// import NewArrival from "../Component/Home/NewArrival";
// import PageHeadingimg from "../Component/PageHeadingimg";

// const initialData = [
//   {
//     image: "/images/apro134-1-600x778.jpg",
//     Product: "T-shirt with skirt – Pink",
//     Price: 150.0,
//     Quantity: 1,
//     Total: 150.0,
//   },
//   {
//     image: "/images/apro201-1-600x778.jpg",
//     Product: "Mini Dress",
//     Price: 139.0,
//     Quantity: 2,
//     Total: 278.0,
//   },
// ];

// const Page = () => {
//   const [cartData, setCartData] = useState(initialData);

//   const handleIncreaseQuantity = (index) => {
//     const updatedData = cartData.map((item, i) => {
//       if (i === index) {
//         const newQuantity = item.Quantity + 1;
//         return {
//           ...item,
//           Quantity: newQuantity,
//           Total: newQuantity * item.Price,
//         };
//       }
//       return item;
//     });
//     setCartData(updatedData);
//   };

//   const handleDecreaseQuantity = (index) => {
//     const updatedData = cartData.map((item, i) => {
//       if (i === index && item.Quantity > 1) {
//         const newQuantity = item.Quantity - 1;
//         return {
//           ...item,
//           Quantity: newQuantity,
//           Total: newQuantity * item.Price,
//         };
//       }
//       return item;
//     });
//     setCartData(updatedData);
//   };

//   const handleRemoveItem = (index) => {
//     const updatedData = cartData.filter((_, i) => i !== index);
//     setCartData(updatedData);
//   };

//   return (
//     <div>
//       <PageHeadingimg title={"Cart"} />

//       <div className="relative overflow-x-auto">
//         <table className="w-[95%] mx-auto md:w-[85%] text-sm text-left text-gray-500">
//           <thead className="text-xs text-white uppercase bg-gray-700">
//             <tr>
//               <th scope="col" className="px-6 py-3"></th>
//               <th scope="col" className="px-6 py-3"></th>
//               <th scope="col" className="px-6 py-3">
//                 Product
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Quantity
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Total
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartData.map((item, index) => (
//               <tr key={index} className="bg-white border-b">
//                 <td className="px-6 py-4 border-l">
//                   <IoMdRemoveCircle
//                     className="text-2xl cursor-pointer hover:text-red-500"
//                     onClick={() => handleRemoveItem(index)}
//                   />
//                 </td>
//                 <td className="px-6 py-4 flex flex-row items-center gap-6 border-l border-r justify-center">
//                   <Image
//                     src={item.image}
//                     width={100}
//                     height={100}
//                     alt={item.Product}
//                     className="md:w-[100px] md:h-[100px]"
//                   />
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-900 border-r">
//                   {item.Product}
//                 </td>
//                 <td className="px-6 py-4 border-r">${item.Price.toFixed(2)}</td>
//                 <td className="px-3 flex flex-row border-r items-center justify-center gap-2">
//                   <button
//                     onClick={() => handleDecreaseQuantity(index)}
//                     className="bg-red-300 p-1 rounded-full hover:bg-red-400"
//                   >
//                     <IoMdRemove className="text-2xl" />
//                   </button>
//                   <span className="text-[22px] md:w-10 md:h-10 w-6 h-6 flex items-center justify-center border rounded-full border-black">
//                     {item.Quantity}
//                   </span>
//                   <button
//                     onClick={() => handleIncreaseQuantity(index)}
//                     className="bg-green-300 p-1 rounded-full hover:bg-green-400"
//                   >
//                     <FaPlus className="text-[15px]" />
//                   </button>
//                 </td>
//                 <td className="px-6 py-4 border-r">${item.Total.toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <NewArrival />
//     </div>
//   );
// };

// export default Page;

"use client";
import Image from "next/image";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import NewArrival from "../Component/Home/NewArrival";
import PageHeadingimg from "../Component/PageHeadingimg";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../Redux/Slice";

const Page = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.product.products);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <PageHeadingimg title={"Cart"} />

      <div className="relative overflow-x-auto">
        {cartData.length > 0 ? (
          <table className="w-[95%] mx-auto md:w-[85%] text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price & Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 border-l">
                    <IoMdRemoveCircle
                      className="text-2xl cursor-pointer hover:text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </td>
                  <td className="px-6 py-4 flex flex-row items-center gap-6 border-l border-r justify-center">
                    <Image
                      src={item.img || "/default-image.jpg"} // Fallback image if none is provided
                      width={100}
                      height={100}
                      alt={item.title}
                      className="md:w-[100px] md:h-[100px]"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 border-r">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 border-r flex flex-col items-center justify-center gap-2">
                    <div className="text-lg font-semibold">${item.price}</div>
                    <div className="flex flex-row items-center justify-center gap-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        disabled={item.Quantity === 1}
                        className={`bg-red-300 p-1 rounded-full hover:bg-red-400 ${
                          item.Quantity === 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <FaCaretDown className="text-[15px]" />
                      </button>
                      <span className="w-6 h-6 flex items-center justify-center text-[15px]">
                        {item.Quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="bg-green-300 p-1 rounded-full hover:bg-green-400"
                      >
                        <FaCaretUp className="text-[15px]" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r">${item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center">
            No items in the cart
          </div>
        )}
      </div>

      <NewArrival />
    </div>
  );
};

export default Page;

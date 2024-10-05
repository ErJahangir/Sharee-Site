// "use client";
// import Image from "next/image";
// import React from "react";
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";
// import { IoMdRemoveCircle } from "react-icons/io";
// import NewArrival from "../Component/Home/NewArrival";
// import PageHeadingimg from "../Component/PageHeadingimg";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeProduct,
// } from "../Redux/Slice";

// const Page = () => {
//   const dispatch = useDispatch();
//   const cartData = useSelector((state) => state.product.products);

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleRemoveItem = (id) => {
//     dispatch(removeProduct(id));
//   };

//   return (
//     <div>
//       <PageHeadingimg title={"Cart"} />

//       <div className="relative overflow-x-auto w-[95%] md:w-[65%] mx-auto">
//         {cartData.length > 0 ? (
//           cartData.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col md:flex-row justify-between p-4 border-b gap-5"
//             >
//               <Image
//                 src={item.img || "/default-image.jpg"}
//                 width={1000}
//                 height={1000}
//                 quality={100}
//                 loading={"lazy"}
//                 alt={item.title}
//                 className=" w-[300px] h-auto md:w-[150px] md:h-[200px]  mx-4"
//               />
//               <div className="flex flex-row justify-between ">
//                 <div className="flex w-[50%] md:w-[40%] flex-col gap-2">
//                   <span className="font-medium text-gray-900">
//                     {item.title}
//                   </span>
//                   <span className="text-[15px] text-[#868686]">
//                     Category:-
//                     <span className="text-black"> {item.category}</span>
//                   </span>
//                   <span className="hidden md:flex">
//                     <span className="text-[#868686]">Description:-</span>
//                     <span className="text-[14px]">{item.description}</span>
//                   </span>
//                 </div>
//                 <div className="flex w-[50%] md:w-[40%] items-center flex-col   gap-2">
//                   <div className="text-lg">Rs.{item.price}</div>
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => handleDecreaseQuantity(item.id)}
//                       disabled={item.Quantity === 1}
//                       className={`bg-red-300 p-1 rounded-full hover:bg-red-400 ${
//                         item.Quantity === 1
//                           ? "opacity-50 cursor-not-allowed"
//                           : ""
//                       }`}
//                     >
//                       <FaCaretDown className="text-[15px]" />
//                     </button>
//                     <span className="w-6 h-6 flex items-center justify-center text-[15px] mx-2">
//                       {item.Quantity}
//                     </span>
//                     <button
//                       onClick={() => handleIncreaseQuantity(item.id)}
//                       className="bg-green-300 p-1 rounded-full hover:bg-green-400"
//                     >
//                       <FaCaretUp className="text-[15px]" />
//                     </button>
//                   </div>
//                   <button className="border bg-[#fa8f74] my-5 py-1 px-3 rounded-md">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="flex items-center justify-center">
//             No items in the cart
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import Image from "next/image";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import PageHeadingimg from "../Component/PageHeadingimg";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../Redux/Slice";
import Link from "next/link";

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

  // Calculate total price
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.Quantity,
    0
  );

  return (
    <div>
      <PageHeadingimg title={"Cart"} />

      <div className="relative overflow-y-auto w-[95%] md:w-[65%] mx-auto h-[70vh]">
        {/* Make the cart scrollable */}
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between p-4 border-b gap-5 mx-auto"
            >
              <Link href={`/productscreen/${item.id}`} className="mx-auto">
                <Image
                  src={item.img || "/default-image.jpg"}
                  width={1000}
                  height={1000}
                  quality={100}
                  loading={"lazy"}
                  alt={item.title}
                  className="w-[300px] h-auto md:w-[150px] md:h-[200px] mx-4"
                />
              </Link>
              <div className="flex justify-between w-full flex-row mx-auto ">
                <div className="flex flex-col gap-2 w-full md:w-[50%] px-4 mx-auto">
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>

                  <span className="text-[#868686]">{item.category}</span>

                  <span className="text-[15px] line-clamp-3 overflow-hidden text-[#868686]">
                    {item.description}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start w-full md:w-[40%] gap-2 mx-auto ">
                  <div className="text-[25px] font-bold">Rs. {item.price}</div>
                  <div className="flex items-center">
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
                    <span className="w-6 h-6 flex items-center justify-center text-[15px] mx-2">
                      {item.Quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-green-300 p-1 rounded-full hover:bg-green-400"
                    >
                      <FaCaretUp className="text-[15px]" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="border bg-[#fa8f74] my-2 py-1 px-3 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
            No items in the cart
          </div>
        )}
      </div>

      {/* Fixed Total Price outside of the .map() loop */}
      {cartData.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t py-4 shadow-md flex  flex-col">
          <div className="flex flex-row justify-between">
            <span className="text-2xl font-bold">Total Price: Rs.</span>
            <span className="text-2xl font-bold">{totalPrice}</span>
          </div>
          <Link
            href="/ordered"
            className="bg-[#fa8f47] w-[150px] rounded-full h-[40px] flex justify-center items-center font-bold text-white uppercase"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;

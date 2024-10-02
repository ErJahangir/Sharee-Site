import React from "react";

const ITEMS_PER_PAGE = 12;

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 ${
          currentPage == 1 ? "bg-slate-500 cursor-not-allowed" : "bg-[#fa8f47]"
        } text-white rounded-md`}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 ${
            currentPage === index + 1
              ? "bg-black text-white"
              : "bg-[#fa8f47] text-white"
          } rounded-md`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-[#fa8f47] text-white rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

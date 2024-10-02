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
      <PageHeadingimg title={"Products"} />
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

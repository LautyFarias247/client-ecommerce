"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, productCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const handlePageChange = (currentPage) => {
		if(typeof window !== 'undefined') {
			const queryParams = new URLSearchParams(window.location.search)
			if(queryParams.has('page')){
				queryParams.set('page', currentPage)
			} else {
				queryParams.append('page', currentPage)
			}
			const newPath = `${window.location.pathname}?${queryParams.toString()}`
			router.push(newPath)
		}
	};
  
	return (
    <div className="flex mt-20 justify-center">
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        activeLinkClassName="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
        activeClass="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
      />
    </div>
  );
};

export default CustomPagination;

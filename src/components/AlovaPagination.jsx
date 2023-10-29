import React, { useState } from "react";
import { usePagination } from "@alova/scene-react";
import { alovaInstance } from "../hooks";
import { useGetPagination } from "../hooks-2";

const AlovaPagination = () => {
  const {
    loading,
    data,
    isLastPage,
    page: [page, setPage],
    pageSize: [page, setPageSize],
    pageCount,
    total,
  } = usePagination(
    // Method instance acquisition function, it will receive page, pageSize, and alovaInstance, and return a Method instance
    (page, pageSize) => usePagination(page, pageSize),
    {
      // Initial data before the request (data format returned by the interface)
      initialData: {
        total: 0,
        data: [],
      },
      initialPage: 1, // initial page number, default is 1
      initialPageSize: 10, // The initial number of data items per page, the default is 10
    }
  );
  // Turn to the previous page, the request will be sent automatically after the page value changes
  const handlePrevPage = () => {
    setPage((value) => value - 1);
  };

  // Turn to the next page, the request will be sent automatically after the page value changes
  const handleNextPage = () => {
    setPage((value) => value + 1);
  };

  // Change the number of pages, the request will be sent automatically after the pageSize value is changed
  const handleSetPageSize = () => {
    setPageSize(10);
  };

  const { responseData } = useGetPagination();
  console.log(responseData, "data");

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
      <button onClick={handlePrevPage}>Previous page</button>
      <button onClick={handleNextPage}>Next Page</button>
      <button onClick={handleSetPageSize}>Set the number per page</button>
      <span>There are {pageCount} pages</span>
      <span>A total of {total} pieces of data</span>
    </div>
  );
};

export default AlovaPagination;

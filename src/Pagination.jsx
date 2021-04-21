import React from "react";
import {
  Pagination as ReactStrapPagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const Pagination = ({
  isFirstPage,
  isLastPage,
  handleChangeToFirstPage,
  handleChangeToPrevPage,
  handleChangeToNextPage,
  handleChangeToLastPage
}) => (
  <div style={{ zIndex: 2 }}>
    <ReactStrapPagination aria-label="Page navigation" size="lg">
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink
          first
          href="#"
          onClick={() => handleChangeToFirstPage()}
        />
      </PaginationItem>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink
          previous
          href="#"
          onClick={() => handleChangeToPrevPage()}
        />
      </PaginationItem>
      <PaginationItem disabled={isLastPage}>
        <PaginationLink
          next
          href="#"
          onClick={() => handleChangeToNextPage()}
        />
      </PaginationItem>
      <PaginationItem disabled={isLastPage}>
        <PaginationLink
          last
          href="#"
          onClick={() => handleChangeToLastPage()}
        />
      </PaginationItem>
    </ReactStrapPagination>
  </div>
);

export default Pagination;

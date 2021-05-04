import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import BookSearch from "./BookSearch";
import Books from "./Books";
import { PAGE_SIZE } from "./constants";
import Pagination from "./Pagination";

const App = () => {
  const [book, setBook] = useState("");
  console.log("book", book);

  const [result, setResult] = useState({});
  console.log("result", result);

  const [currentPage, setCurrentPage] = useState(1);
  console.log("currentPage", currentPage);

  const hasResult = Object.values(result).length !== 0;
  console.log("hasResult", hasResult);

  const startIndex = useMemo(() => (currentPage - 1) * PAGE_SIZE, [
    currentPage,
  ]);
  console.log("startIndex", startIndex);

  // TODO: set as state and don't change
  const totalBooks = result.totalItems;
  console.log("totalBooks", totalBooks);

  const numberOfPages = useMemo(() => Math.ceil(totalBooks / PAGE_SIZE), [
    totalBooks,
  ]);
  console.log("numberOfPages", numberOfPages);

  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  console.log("isFirstPage", isFirstPage);

  const isLastPage = useMemo(() => currentPage * 10 > totalBooks, [
    currentPage,
    totalBooks,
  ]);
  console.log("isLastPage", isLastPage);

  const getBooks = useCallback(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${PAGE_SIZE}&startIndex=${startIndex}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [book, startIndex]);

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    getBooks();
  };

  // get the books for the current page when the current page changes
  useEffect(() => {
    // do not get books unless a search has already been made
    if (hasResult) {
      getBooks();
    }
  }, [currentPage]);

  const handleChangeToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleChangeToLastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const handleChangeToPrevPage = () => {
    setCurrentPage((page) => {
      if (isFirstPage) {
        return page;
      }
      return page - 1;
    });
  };

  const handleChangeToNextPage = () => {
    setCurrentPage((page) => {
      if (isLastPage) {
        return page;
      }
      return page + 1;
    });
  };

  return (
    <div className="main">
      <div className="search">
        <BookSearch
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          result={result}
        />
        {hasResult && (
          <Pagination
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            handleChangeToFirstPage={handleChangeToFirstPage}
            handleChangeToPrevPage={handleChangeToPrevPage}
            handleChangeToNextPage={handleChangeToNextPage}
            handleChangeToLastPage={handleChangeToLastPage}
          />
        )}
      </div>
      <Books books={result.items} />
    </div>
  );
};

export default App;
